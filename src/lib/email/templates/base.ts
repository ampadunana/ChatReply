export function wrapHtml(title: string, body: string): { html: string } {
  const html = `<!doctype html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${title}</title>
    <style>
      body { background:#f6f9fc; margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      .container { max-width: 560px; margin: 24px auto; background:#ffffff; border-radius:12px; padding:24px; }
      h1 { font-size:20px; margin:0 0 16px; color:#111827; }
      p { color:#374151; line-height:1.6; }
      .footer { text-align:center; color:#6b7280; font-size:12px; margin-top:16px; }
      a.btn { display:inline-block; background:#2563eb; color:#fff; padding:10px 16px; border-radius:8px; text-decoration:none; }
    </style>
  </head>
  <body>
    <div class="container">
      ${body}
      <div class="footer">© ${new Date().getFullYear()} ChatReply</div>
    </div>
  </body>
  </html>`
  return { html }
}


