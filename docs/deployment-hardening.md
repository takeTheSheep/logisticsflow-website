# Deployment Hardening Recommendations

This project is frontend-first, but the architecture is prepared for production security controls.

## 1. Content Security Policy (CSP)

Apply a strict CSP at the hosting layer. Start with:

- `default-src 'self'`
- `script-src 'self'`
- `style-src 'self' 'unsafe-inline'` (or hashed styles)
- `img-src 'self' data:`
- `connect-src 'self' https://your-api-domain`
- `frame-ancestors 'none'`

Tune policies based on real integrations.

## 2. Rate Limiting and Abuse Controls

For contact and tracking endpoints (once backend is connected):

- IP-based rate limits
- user-agent anomaly checks
- burst and sustained traffic thresholds
- temporary blocks for repeated validation abuse

## 3. Bot Protection

Add bot mitigation before production form enablement:

- Cloudflare Turnstile or equivalent
- honeypot field verification
- timed submission checks (detect instant bot posts)

## 4. Server-Side Validation

Never trust client validation alone. Revalidate all fields server-side with strict schemas.

Required checks:

- input length and format constraints
- payload normalization
- allow-list service type enforcement
- safe logging (no raw sensitive payload dumps)

## 5. Spam Filtering

Use layered spam controls:

- denylist and heuristic filtering
- disposable email checks
- duplicate content throttling
- optional third-party anti-spam scoring

## 6. Secure Form Handler

When wiring contact submissions:

- use HTTPS-only endpoints
- enforce CORS origin allow-list
- rotate API secrets and store server-side only
- return generic error messages to avoid leaking internals

## 7. Analytics Privacy Review

If analytics is added:

- define data minimization policy
- avoid unnecessary personal data collection
- implement consent controls where required
- document retention and deletion practices

## 8. Logging and Monitoring

Set up production visibility:

- structured logs for errors and abuse events
- uptime and health checks
- alerting for endpoint failures and latency spikes
- periodic security review of dependencies

## 9. Availability and Reliability

Recommended ops controls:

- uptime monitoring with escalation alerts
- synthetic checks for tracking and contact flows
- incident response notes for service interruption

## 10. HTTP Security Headers

Configure hosting/CDN headers:

- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (least privilege)
- `X-Frame-Options: DENY` (or CSP `frame-ancestors 'none'`)
