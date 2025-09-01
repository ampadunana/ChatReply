export default function Privacy() {
  return (
    <section className="container my-12 prose prose-sm max-w-none">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p>ChatReply is designed to be privacy-first. We collect the minimum data required to operate the service, provide support, and improve performance.</p>
      <h2>Data we collect</h2>
      <ul>
        <li>Waitlist data you submit (name, email, business, WhatsApp number if provided).</li>
        <li>Basic usage diagnostics (errors, performance) to improve reliability.</li>
      </ul>
      <h2>How we use data</h2>
      <ul>
        <li>To contact you about early access and product updates.</li>
        <li>To operate and improve ChatReply.</li>
      </ul>
      <h2>Third parties</h2>
      <p>At launch, ChatReply will integrate with the official WhatsApp Cloud API. We do not sell personal data.</p>
      <h2>Your rights</h2>
      <p>To request data access or deletion, email: <a href="mailto:hello@chatreply.online">hello@chatreply.online</a>.</p>
    </section>
  );
}
