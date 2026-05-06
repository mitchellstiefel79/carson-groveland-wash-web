# Fix Canonical & OG URL Domain Mismatch

## Problem
Two tags in `index.html` reference the wrong domain `carsonssoftwash.com` instead of the actual site domain `carsonssoftwashservices.com`:

1. `<link rel="canonical" href="https://carsonssoftwash.com/" />` (line 12)
2. `<meta property="og:url" content="https://carsonssoftwash.com/" />` (line 18)

This splits ranking signals between the wrong and right domains.

## Fix
Update both URLs to `https://www.carsonssoftwashservices.com/`.

## Files Changed
- `index.html` — lines 12 and 18

## Verification After Fix
- Canonical: `https://www.carsonssoftwashservices.com/`
- OG URL: `https://www.carsonssoftwashservices.com/`
- Both now consistent with the `WebSite` and `LocalBusiness` schema `@id`s already present in the same file.