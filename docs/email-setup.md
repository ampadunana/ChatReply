Email Setup (Zoho SMTP + Supabase + Vercel)

Environment Variables
- ZOHO_SMTP_HOST=smtp.zoho.com
- ZOHO_SMTP_PORT=465
- ZOHO_NOREPLY_USER=noreply@chatreply.online
- ZOHO_NOREPLY_PASS=•••• app password
- ZOHO_HELLO_USER=hello@chatreply.online
- ZOHO_HELLO_PASS=•••• app password
- NEXT_PUBLIC_SITE_URL=https://<your-vercel-domain>
- SUPABASE_URL=...
- SUPABASE_ANON_KEY=...

Supabase Auth SMTP
- SMTP host: smtp.zoho.com
- Port: 465 (secure)
- Username: noreply@chatreply.online
- Password: ZOHO_NOREPLY_PASS
- Sender name: ChatReply
- Sender email: noreply@chatreply.online
- SITE_URL = NEXT_PUBLIC_SITE_URL

Testing
- GET /api/test-email → welcome email from noreply to hello
- POST /api/support { name, email, message } → sends to hello with Reply-To=email

Production notes
- Configure SPF, DKIM, DMARC for chatreply.online
- Use Upstash Redis for rate limiting in production
- All email routes run on Node.js runtime
