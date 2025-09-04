import { wrapHtml } from './base'

export function passwordResetTemplate(link: string) {
  const title = 'Reset your password'
  const body = `
    <h1>Reset your password</h1>
    <p>Click the button below to reset your password.</p>
    <p><a href="${link}" class="btn">Reset Password</a></p>
    <p>If you did not request this, you can ignore this email.</p>
  `
  const { html } = wrapHtml(title, body)
  return { subject: title, html, text: `Reset your password: ${link}` }
}


