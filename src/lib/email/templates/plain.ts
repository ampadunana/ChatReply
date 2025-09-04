import { wrapHtml } from './base'

export function plainTemplate(title: string, content: string) {
  const { html } = wrapHtml(title, `<h1>${title}</h1><p>${content}</p>`)
  return { subject: title, html, text: content }
}


