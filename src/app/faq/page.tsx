import JsonLd from "@/components/JsonLd";

export default function FAQ() {
  const faqs = [
    { q: "What is ChatReply?", a: "ChatReply is a WhatsApp AI assistant that auto-answers FAQs, captures leads, and gives simple analytics for small businesses." },
    { q: "Do I need the official WhatsApp Cloud API?", a: "Yes, production use integrates with Meta’s official WhatsApp Cloud API. We’ll guide you during onboarding." },
    { q: "Which businesses can use ChatReply?", a: "Restaurants, salons, retail shops, real estate agents, e-commerce, freelancers—anyone receiving customer questions on WhatsApp." },
    { q: "Does ChatReply support multiple languages?", a: "Yes, multi-language replies are supported on the Growth plan and above." },
    { q: "How does lead capture work?", a: "When customers ask questions, ChatReply can collect email or phone in a compliant way and make it available for export." },
    { q: "Is my data private?", a: "We’re privacy-first: minimal data, no replay, cookieless analytics. See our Privacy Policy for details." },
    { q: "How much does it cost?", a: "Plans start at $29/month. See the Pricing page for full details." },
    { q: "Can I try it before paying?", a: "We offer an early-access waitlist and launch perks including extended trials." }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="container my-12">
      <JsonLd schema={faqJsonLd} />
      <h1 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h1>
      <p className="mt-2 text-black/70">Answers to the most common questions about ChatReply.</p>

      <div className="mt-6 space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="card p-5">
            <h2 className="text-lg font-semibold">{f.q}</h2>
            <p className="mt-2 text-sm text-black/70">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 mt-8">
        <h3 className="font-semibold">Still have questions?</h3>
        <p className="text-sm text-black/70 mt-1">
          Email us at <a className="underline" href="mailto:hello@chatreply.online">hello@chatreply.online</a> or <a className="underline" href="/#waitlist">join the waitlist</a> and we’ll reach out.
        </p>
      </div>
    </section>
  );
}


