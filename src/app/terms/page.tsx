export default function Terms() {
  return (
    <section className="container my-12 prose prose-sm max-w-none">
      <h1>Terms of Service</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p>By using ChatReply, you agree to these terms.</p>
      <h2>Use of service</h2>
      <ul>
        <li>You’ll comply with WhatsApp’s policies and all applicable laws.</li>
        <li>No abuse, spam, or unlawful content is permitted.</li>
      </ul>
      <h2>Availability</h2>
      <p>Service is provided “as is” without warranty. We’ll do our best to maintain high uptime.</p>
      <h2>Liability</h2>
      <p>We are not liable for indirect or consequential damages.</p>
      <h2>Contact</h2>
      <p>Questions? <a href="mailto:hello@chatreply.online">hello@chatreply.online</a></p>
    </section>
  );
}
