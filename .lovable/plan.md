

## Plan: Fix Build Errors and Cloudflare DNS Setup

### Part 1: Fix Build Errors

The build errors are caused by the database types file (`types.ts`) showing empty tables, even though tables exist in the database. The code references `customers`, `security_audit_log`, and `video_gallery` tables that aren't reflected in the auto-generated types.

**Fix approach**: Cast Supabase `.from()` calls to `any` to bypass TypeScript's strict table name checking until types are regenerated. Also fix `process.env` usage in `googlePhotos.ts` (browser code can't use `process.env`; must use `import.meta.env`).

**Files to change:**
1. **`src/components/AdminDashboard.tsx`** — Cast `supabase.from(...)` calls for `customers` and `security_audit_log` to `any`
2. **`src/components/ContactForm.tsx`** — Cast `supabase.from('customers')` to `any`
3. **`src/components/SecurePhotoUpload.tsx`** — Cast `supabase.from('security_audit_log')` to `any`
4. **`src/components/VideoGallery.tsx`** — Cast `supabase.from('video_gallery')` to `any`
5. **`src/services/googlePhotos.ts`** — Replace `process.env.GOOGLE_CLIENT_ID` and `process.env.GOOGLE_API_KEY` with `import.meta.env.VITE_GOOGLE_CLIENT_ID` and `import.meta.env.VITE_GOOGLE_API_KEY`

### Part 2: Cloudflare DNS Setup

For using Cloudflare as your DNS provider with your Lovable project:

1. When connecting your custom domain in **Project Settings → Domains**, expand the **Advanced** section and check **"Domain uses Cloudflare or a similar proxy"**. This switches to CNAME-based verification which is compatible with Cloudflare's proxy.

2. In your Cloudflare dashboard, add the DNS records Lovable provides during the domain connection flow.

This is a configuration step done in the Lovable UI and Cloudflare dashboard — no code changes needed.

