#!/usr/bin/env python3
"""Verify robots.txt is served correctly and contains expected AI allow rules.

Usage:
  python3 scripts/robots_check.py                       # checks public/robots.txt on disk
  python3 scripts/robots_check.py https://www.carsonssoftwashservices.com
                                                        # also fetches /robots.txt over HTTP
"""
import sys
import re
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

EXPECTED_BOTS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "CCBot",
]
EXPECTED_SITEMAP = "https://www.carsonssoftwashservices.com/sitemap.xml"
EXPECTED_DISALLOW = "/admin"


def parse_groups(text: str):
    """Return dict[user_agent] -> {'allow': [...], 'disallow': [...]}.

    Groups are blocks of consecutive User-agent lines followed by rules,
    per the robots.txt spec.
    """
    groups: dict[str, dict] = {}
    current_agents: list[str] = []
    pending_new_group = True

    for raw in text.splitlines():
        line = raw.split("#", 1)[0].strip()
        if not line:
            pending_new_group = True
            continue
        if ":" not in line:
            continue
        field, value = [p.strip() for p in line.split(":", 1)]
        f = field.lower()
        if f == "user-agent":
            if pending_new_group:
                current_agents = []
                pending_new_group = False
            current_agents.append(value)
            groups.setdefault(value, {"allow": [], "disallow": []})
        elif f in ("allow", "disallow"):
            pending_new_group = False
            for ua in current_agents:
                groups[ua][f].append(value)
    return groups


def check(text: str, source: str):
    errors: list[str] = []
    warnings: list[str] = []

    groups = parse_groups(text)
    print(f"\n--- {source} ---")
    print(f"Found {len(groups)} user-agent group(s): {sorted(groups)}")

    # Sitemap
    sitemaps = re.findall(r"(?im)^\s*sitemap\s*:\s*(\S+)\s*$", text)
    if EXPECTED_SITEMAP not in sitemaps:
        errors.append(f"Missing or wrong Sitemap line (expected {EXPECTED_SITEMAP}, got {sitemaps})")

    # Wildcard group
    if "*" not in groups:
        errors.append("Missing wildcard 'User-agent: *' group")
    else:
        if EXPECTED_DISALLOW not in groups["*"]["disallow"]:
            errors.append(f"Wildcard group missing 'Disallow: {EXPECTED_DISALLOW}'")

    # AI bot groups
    for bot in EXPECTED_BOTS:
        if bot not in groups:
            errors.append(f"Missing explicit group for AI bot: {bot}")
            continue
        g = groups[bot]
        if EXPECTED_DISALLOW not in g["disallow"]:
            errors.append(f"{bot}: missing 'Disallow: {EXPECTED_DISALLOW}'")
        if "/" not in g["allow"]:
            warnings.append(f"{bot}: missing explicit 'Allow: /'")

    return errors, warnings


def fetch(url: str) -> tuple[str, str, int]:
    req = Request(url, headers={"User-Agent": "robots-check/1.0"})
    with urlopen(req, timeout=15) as r:
        body = r.read().decode("utf-8", errors="replace")
        ctype = r.headers.get("Content-Type", "")
        return body, ctype, r.status


def main():
    all_errors: list[str] = []
    all_warnings: list[str] = []

    # 1. On-disk check
    disk_path = Path("public/robots.txt")
    if not disk_path.exists():
        print(f"❌ {disk_path} not found")
        sys.exit(1)
    disk_text = disk_path.read_text()
    e, w = check(disk_text, str(disk_path))
    all_errors += e
    all_warnings += w

    # 2. Optional live fetch
    if len(sys.argv) > 1:
        base = sys.argv[1].rstrip("/")
        url = f"{base}/robots.txt"
        try:
            body, ctype, status = fetch(url)
        except (HTTPError, URLError) as ex:
            all_errors.append(f"Failed to fetch {url}: {ex}")
        else:
            print(f"\nFetched {url} → HTTP {status}, Content-Type: {ctype}")
            if status != 200:
                all_errors.append(f"{url} returned HTTP {status}, expected 200")
            if "text/plain" not in ctype.lower():
                all_warnings.append(f"{url} Content-Type is '{ctype}', expected text/plain")
            if body.lstrip().startswith("<"):
                all_errors.append(f"{url} returned HTML (likely SPA fallback), not robots.txt")
            else:
                e, w = check(body, url)
                all_errors += e
                all_warnings += w
                # Drift check: live should match disk
                if body.strip() != disk_text.strip():
                    all_warnings.append(
                        "Live robots.txt differs from public/robots.txt on disk"
                    )

    print("\n" + "=" * 60)
    print(f"📊 RESULTS  errors={len(all_errors)}  warnings={len(all_warnings)}")
    if all_errors:
        print("\n❌ ERRORS")
        for x in all_errors:
            print(f"  • {x}")
    if all_warnings:
        print("\n⚠️  WARNINGS")
        for x in all_warnings:
            print(f"  • {x}")
    if not all_errors:
        print("\n✅ robots.txt looks correct.")
        sys.exit(0)
    sys.exit(1)


if __name__ == "__main__":
    main()
