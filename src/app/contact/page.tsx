export default function Contact() {
  const subject = encodeURIComponent("ChatReply Inquiry");
  const body = encodeURIComponent("Hi ChatReply team,\n\nAdd  your issue here.");
  const mailto = `mailto:hello@chatreply.online?subject=${subject}&body=${body}`;

  return (
    <section className="container my-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-black/70">
        Email us at <a href={mailto} className="underline">hello@chatreply.online</a>
      </p>

      <div className="mt-6 card p-6">
        <p className="text-sm text-black/70">
          For partnerships, press, or support inquiries, send us an email. You can also join the waitlist and we’ll reach out.
        </p>
        <a href="/#waitlist" className="mt-4 inline-flex rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus-ring">
          Join waitlist
        </a>
      </div>
    </section>
  );
}
