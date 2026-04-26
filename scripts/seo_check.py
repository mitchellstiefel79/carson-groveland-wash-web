#!/usr/bin/env python3
"""Quick SEO validator for JSON-LD schemas in index.html."""
import json
import re
import sys
from pathlib import Path

HTML = Path("index.html").read_text()

# Required fields per schema type (Google's structured data guidelines)
REQUIRED = {
    "LocalBusiness": ["name", "address", "telephone"],
    "FAQPage": ["mainEntity"],
    "Service": ["name", "provider"],
    "Question": ["name", "acceptedAnswer"],
    "Answer": ["text"],
    "PostalAddress": ["addressLocality", "addressRegion", "addressCountry"],
    "AggregateRating": ["ratingValue", "reviewCount"],
}

RECOMMENDED = {
    "LocalBusiness": ["url", "image", "priceRange", "geo", "openingHours", "areaServed"],
    "Service": ["description", "areaServed"],
}

errors = []
warnings = []
infos = []

# Extract all JSON-LD blocks
blocks = re.findall(
    r'<script type="application/ld\+json">\s*(.*?)\s*</script>',
    HTML, re.DOTALL
)

if not blocks:
    errors.append("No JSON-LD <script> blocks found in index.html")

print(f"Found {len(blocks)} JSON-LD block(s)\n" + "=" * 60)

def check_required(obj, path=""):
    """Recursively check required fields."""
    if isinstance(obj, list):
        for i, item in enumerate(obj):
            check_required(item, f"{path}[{i}]")
        return
    if not isinstance(obj, dict):
        return

    t = obj.get("@type")
    label = f"{path or 'root'} ({t})"

    # Services nested inside itemOffered inherit provider from parent OfferCatalog
    inside_offer = "itemOffered" in path
    if t in REQUIRED:
        for field in REQUIRED[t]:
            if inside_offer and t == "Service" and field == "provider":
                continue
            if field not in obj or obj[field] in (None, "", []):
                errors.append(f"{label}: missing required field '{field}'")
    if t in RECOMMENDED:
        for field in RECOMMENDED[t]:
            if field not in obj:
                warnings.append(f"{label}: missing recommended field '{field}'")

    # Type-specific checks
    if t == "LocalBusiness":
        tel = obj.get("telephone", "")
        if tel and not re.match(r"^[\+\(\d]", str(tel).strip()):
            warnings.append(f"{label}: telephone '{tel}' format looks off")
        url = obj.get("url", "")
        if url and not url.startswith(("http://", "https://")):
            errors.append(f"{label}: url must be absolute")
        geo = obj.get("geo")
        if isinstance(geo, dict):
            lat, lng = geo.get("latitude"), geo.get("longitude")
            if lat is None or lng is None:
                errors.append(f"{label}.geo: missing latitude/longitude")
            elif not (-90 <= float(lat) <= 90) or not (-180 <= float(lng) <= 180):
                errors.append(f"{label}.geo: lat/lng out of range")
        ar = obj.get("aggregateRating")
        if isinstance(ar, dict):
            try:
                rv = float(ar.get("ratingValue", 0))
                rc = int(ar.get("reviewCount", 0))
                if not (1 <= rv <= 5):
                    errors.append(f"{label}.aggregateRating: ratingValue {rv} out of 1-5")
                if rc < 1:
                    errors.append(f"{label}.aggregateRating: reviewCount must be >= 1")
            except (ValueError, TypeError):
                errors.append(f"{label}.aggregateRating: invalid numeric values")

    if t == "FAQPage":
        me = obj.get("mainEntity", [])
        if not isinstance(me, list) or len(me) == 0:
            errors.append(f"{label}: mainEntity must be a non-empty array")
        else:
            infos.append(f"{label}: {len(me)} questions")
            for i, q in enumerate(me):
                if q.get("@type") != "Question":
                    errors.append(f"{label}.mainEntity[{i}]: @type should be 'Question'")

    # Recurse into nested objects
    for k, v in obj.items():
        if k.startswith("@"):
            continue
        if isinstance(v, (dict, list)):
            check_required(v, f"{path}.{k}" if path else k)


for i, raw in enumerate(blocks, 1):
    print(f"\n--- Block {i} ---")
    try:
        data = json.loads(raw)
    except json.JSONDecodeError as e:
        errors.append(f"Block {i}: invalid JSON — {e}")
        print(f"  ❌ JSON parse error: {e}")
        continue

    if "@context" not in data:
        errors.append(f"Block {i}: missing @context")
    elif "schema.org" not in str(data["@context"]):
        warnings.append(f"Block {i}: @context should reference schema.org")

    if "@type" not in data:
        errors.append(f"Block {i}: missing @type")
    else:
        print(f"  Type: {data['@type']}")

    check_required(data, f"block{i}")

print("\n" + "=" * 60)
print(f"\n📊 RESULTS")
print(f"  Errors:      {len(errors)}")
print(f"  Warnings:    {len(warnings)}")
print(f"  Info:        {len(infos)}")

if errors:
    print("\n❌ ERRORS:")
    for e in errors: print(f"  • {e}")
if warnings:
    print("\n⚠️  WARNINGS:")
    for w in warnings: print(f"  • {w}")
if infos:
    print("\nℹ️  INFO:")
    for i in infos: print(f"  • {i}")

if not errors:
    print("\n✅ All schemas pass required-field validation!")
    sys.exit(0)
sys.exit(1)
