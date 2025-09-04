import { wrapHtml } from './base'

export function welcomeTemplate(name: string) {
  const title = 'Welcome to ChatReply'
  const body = `
    <h1>Welcome${name ? `, ${name}` : ''}!</h1>
    <p>Thanks for joining ChatReply. We help you provide 24/7 AI customer service on WhatsApp.</p>
    <p>Get started by completing your setup form and connecting WhatsApp.</p>
    <p><a href="https://chatreply.online/waitlist" class="btn">Open Dashboard</a></p>
  `
  const { html } = wrapHtml(title, body)
  return { subject: title, html, text: `Welcome${name ? `, ${name}` : ''}! Thanks for joining ChatReply.` }
}


