# Deploy checklist

Domain: `jeremyphilipson.dev`. DNS is on Cloudflare, hosting is on Vercel.
Cloudflare records must be **DNS only (grey cloud)**, not proxied, because Vercel manages its own SSL and routing per domain.

## Landing page (one-time)

- [ ] Import `dev-projects-lander` into Vercel (Add New → Project) and deploy with defaults.
- [ ] Vercel → Settings → Domains: add `jeremyphilipson.dev` (apex).
- [ ] Optional: add `www.jeremyphilipson.dev`, set to redirect to the apex.
- [ ] Cloudflare → DNS → Records: add an `A` record for `@` with the IP Vercel shows (typically `76.76.21.21`), or a `CNAME` to `cname.vercel-dns.com`. DNS only.
- [ ] Optional: `CNAME` for `www` → `cname.vercel-dns.com`. DNS only.
- [ ] Wait for "Valid Configuration" and SSL in Vercel's Domains settings.

## Each side project (repeat)

- [ ] Deploy the project to Vercel as its own project.
- [ ] Vercel → Settings → Domains: add `project-name.jeremyphilipson.dev`.
- [ ] Cloudflare: add a `CNAME`, name `project-name`, value `cname.vercel-dns.com`. DNS only.
- [ ] Wait for "Valid Configuration" and SSL in Vercel.
- [ ] Add the entry to `src/data/projects.ts` and merge to `main` (Vercel redeploys automatically).
