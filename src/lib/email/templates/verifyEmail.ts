import { wrapHtml } from './base'

export function verifyEmailTemplate(link: string) {
  const title = 'Verify your email'
  const body = `
    <h1>Verify your email</h1>
    <p>Please confirm your email address by clicking the button below.</p>
    <p><a href="${link}" class="btn">Verify Email</a></p>
  `
  const { html } = wrapHtml(title, body)
  return { subject: title, html, text: `Verify your email: ${link}` }
}


