import JsonLd from "@/components/JsonLd";
import { DEFAULT_SEO, SITE } from "@/lib/seo";

export default function Pricing() {
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChatReply",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${DEFAULT_SEO.canonical}/pricing`,
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "79.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "199.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: DEFAULT_SEO.canonical,
    },
  };

  return (
    <section className="container mt-10 mb-16">
      <JsonLd schema={appJsonLd} />

      <h1 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h1>
      <p className="mt-2 text-black/70">Start lean. Upgrade when you grow. Cancel anytime.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "$29/mo",
            features: ["1 WhatsApp number", "FAQs auto-reply", "Lead capture", "Email support"],
          },
          {
            name: "Growth",
            price: "$79/mo",
            features: ["2 numbers", "Multilingual replies", "Export leads (CSV)", "Priority support"],
          },
          {
            name: "Pro",
            price: "$199/mo",
            features: ["5 numbers", "Advanced analytics", "Team seats", "SLA support"],
          },
        ].map((p) => (
          <div key={p.name} className="card p-6">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a href="/#waitlist" className="mt-6 inline-flex rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus-ring">
              Join waitlist
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-black/60">
        Pricing subject to change at launch. WhatsApp platform fees may apply for certain message categories.
      </p>
    </section>
  );
}
