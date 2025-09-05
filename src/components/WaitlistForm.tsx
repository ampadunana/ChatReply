"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const COUNTRIES = [
  { code: "GH", name: "Ghana", dial: "233" },
  { code: "NG", name: "Nigeria", dial: "234" },
  { code: "KE", name: "Kenya", dial: "254" },
  { code: "ZA", name: "South Africa", dial: "27" },
  { code: "EG", name: "Egypt", dial: "20" },
  { code: "MA", name: "Morocco", dial: "212" },
  { code: "TZ", name: "Tanzania", dial: "255" },
  { code: "UG", name: "Uganda", dial: "256" },
  { code: "RW", name: "Rwanda", dial: "250" },
  { code: "ET", name: "Ethiopia", dial: "251" },
  { code: "US", name: "United States", dial: "1" },
  { code: "CA", name: "Canada", dial: "1" },
  { code: "GB", name: "United Kingdom", dial: "44" },
  { code: "IE", name: "Ireland", dial: "353" },
  { code: "NL", name: "Netherlands", dial: "31" },
  { code: "BE", name: "Belgium", dial: "32" },
  { code: "CH", name: "Switzerland", dial: "41" },
  { code: "AT", name: "Austria", dial: "43" },
  { code: "SE", name: "Sweden", dial: "46" },
  { code: "NO", name: "Norway", dial: "47" },
  { code: "DK", name: "Denmark", dial: "45" },
  { code: "FI", name: "Finland", dial: "358" },
  { code: "PL", name: "Poland", dial: "48" },
  { code: "CZ", name: "Czech Republic", dial: "420" },
  { code: "HU", name: "Hungary", dial: "36" },
  { code: "RO", name: "Romania", dial: "40" },
  { code: "BG", name: "Bulgaria", dial: "359" },
  { code: "GR", name: "Greece", dial: "30" },
  { code: "PT", name: "Portugal", dial: "351" },
  { code: "IN", name: "India", dial: "91" },
  { code: "PK", name: "Pakistan", dial: "92" },
  { code: "BD", name: "Bangladesh", dial: "880" },
  { code: "LK", name: "Sri Lanka", dial: "94" },
  { code: "NP", name: "Nepal", dial: "977" },
  { code: "BT", name: "Bhutan", dial: "975" },
  { code: "MV", name: "Maldives", dial: "960" },
  { code: "CN", name: "China", dial: "86" },
  { code: "JP", name: "Japan", dial: "81" },
  { code: "KR", name: "South Korea", dial: "82" },
  { code: "TH", name: "Thailand", dial: "66" },
  { code: "VN", name: "Vietnam", dial: "84" },
  { code: "MY", name: "Malaysia", dial: "60" },
  { code: "SG", name: "Singapore", dial: "65" },
  { code: "HK", name: "Hong Kong", dial: "852" },
  { code: "TW", name: "Taiwan", dial: "886" },
  { code: "MM", name: "Myanmar", dial: "95" },
  { code: "LA", name: "Laos", dial: "856" },
  { code: "KH", name: "Cambodia", dial: "855" },
  { code: "DE", name: "Germany", dial: "49" },
  { code: "FR", name: "France", dial: "33" },
  { code: "ES", name: "Spain", dial: "34" },
  { code: "IT", name: "Italy", dial: "39" },
  { code: "RU", name: "Russia", dial: "7" },
  { code: "UA", name: "Ukraine", dial: "380" },
  { code: "BY", name: "Belarus", dial: "375" },
  { code: "LT", name: "Lithuania", dial: "370" },
  { code: "LV", name: "Latvia", dial: "371" },
  { code: "EE", name: "Estonia", dial: "372" },
  { code: "BR", name: "Brazil", dial: "55" },
  { code: "AR", name: "Argentina", dial: "54" },
  { code: "CL", name: "Chile", dial: "56" },
  { code: "CO", name: "Colombia", dial: "57" },
  { code: "PE", name: "Peru", dial: "51" },
  { code: "VE", name: "Venezuela", dial: "58" },
  { code: "UY", name: "Uruguay", dial: "598" },
  { code: "PY", name: "Paraguay", dial: "595" },
  { code: "BO", name: "Bolivia", dial: "591" },
  { code: "EC", name: "Ecuador", dial: "593" },
  { code: "GY", name: "Guyana", dial: "592" },
  { code: "SR", name: "Suriname", dial: "597" },
  { code: "MX", name: "Mexico", dial: "52" },
  { code: "GT", name: "Guatemala", dial: "502" },
  { code: "HN", name: "Honduras", dial: "504" },
  { code: "SV", name: "El Salvador", dial: "503" },
  { code: "NI", name: "Nicaragua", dial: "505" },
  { code: "CR", name: "Costa Rica", dial: "506" },
  { code: "PA", name: "Panama", dial: "507" },
  { code: "CU", name: "Cuba", dial: "53" },
  { code: "JM", name: "Jamaica", dial: "1" },
  { code: "HT", name: "Haiti", dial: "509" },
  { code: "DO", name: "Dominican Republic", dial: "1" },
  { code: "PR", name: "Puerto Rico", dial: "1" },
  { code: "AE", name: "United Arab Emirates", dial: "971" },
  { code: "SA", name: "Saudi Arabia", dial: "966" },
  { code: "KW", name: "Kuwait", dial: "965" },
  { code: "QA", name: "Qatar", dial: "974" },
  { code: "BH", name: "Bahrain", dial: "973" },
  { code: "OM", name: "Oman", dial: "968" },
  { code: "YE", name: "Yemen", dial: "967" },
  { code: "IQ", name: "Iraq", dial: "964" },
  { code: "IR", name: "Iran", dial: "98" },
  { code: "IL", name: "Israel", dial: "972" },
  { code: "JO", name: "Jordan", dial: "962" },
  { code: "LB", name: "Lebanon", dial: "961" },
  { code: "SY", name: "Syria", dial: "963" },
  { code: "TR", name: "Turkey", dial: "90" },
  { code: "CY", name: "Cyprus", dial: "357" },
  { code: "ID", name: "Indonesia", dial: "62" },
  { code: "PH", name: "Philippines", dial: "63" },
  { code: "AU", name: "Australia", dial: "61" },
  { code: "NZ", name: "New Zealand", dial: "64" },
  { code: "FJ", name: "Fiji", dial: "679" },
  { code: "PG", name: "Papua New Guinea", dial: "675" },
  { code: "SB", name: "Solomon Islands", dial: "677" },
  { code: "VU", name: "Vanuatu", dial: "678" },
  { code: "NC", name: "New Caledonia", dial: "687" },
  { code: "PF", name: "French Polynesia", dial: "689" },
  { code: "WS", name: "Samoa", dial: "685" },
  { code: "TO", name: "Tonga", dial: "676" },
  { code: "KI", name: "Kiribati", dial: "686" },
  { code: "TV", name: "Tuvalu", dial: "688" },
  { code: "NR", name: "Nauru", dial: "674" },
  { code: "PW", name: "Palau", dial: "680" },
  { code: "FM", name: "Micronesia", dial: "691" },
  { code: "MH", name: "Marshall Islands", dial: "692" }
];

export default function WaitlistForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    country: "GH",
    whatsapp: "",
    useCase: "FAQs & lead capture"
  });
  const [agree, setAgree] = useState(true);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      // Remove country code prefix and keep the rest as entered
      const dial = COUNTRIES.find((c) => c.code === form.country)?.dial || "";
      const prefix = `+${dial} `;
      let localNumber = value;
      if (value.startsWith(prefix)) {
        localNumber = value.substring(prefix.length);
      }
      setForm((f) => ({ ...f, whatsapp: localNumber }));
      return;
    }
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.country || !form.whatsapp) {
      setError("Please fill in all required fields: name, email, country, and WhatsApp number.");
      return;
    }
    if (!agree) {
      setError("Please agree to the Privacy Policy.");
      return;
    }
    setLoading(true);
    try {
      const dial = COUNTRIES.find((c) => c.code === form.country)?.dial || "";
      const payload = { ...form, whatsapp: `${dial}${form.whatsapp}` };
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(await res.text());
      router.push("/waitlist/success");
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="card p-5 sm:p-6">
      <h3 className="text-lg font-semibold">Join Early Access</h3>
      <p className="mt-1 text-sm text-black/60">
        Free for the first 14 days. Founding members get <strong>50% off forever</strong>.
      </p>

      <div className="mt-4 grid gap-3">
        <div>
          <label className="block text-sm mb-1">Full name *</label>
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="e.g., Ama Mensah"
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Business (optional)</label>
          <input
            name="business"
            value={form.business}
            onChange={change}
            placeholder="Your Salon / Store"
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Country *</label>
          <select
            name="country"
            value={form.country}
            onChange={change}
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
            required
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name} (+{c.dial})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">WhatsApp number *</label>
          <input
            name="whatsapp"
            value={`+${COUNTRIES.find((c) => c.code === form.country)?.dial || ""} ${form.whatsapp}`}
            onChange={change}
            placeholder={`+${COUNTRIES.find((c) => c.code === form.country)?.dial || ""} 241234567`}
            type="tel"
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
            required
          />
          <p className="mt-1 text-[11px] text-black/50">Enter your local number; country code is shown automatically.</p>
        </div>
        <div>
          <label className="block text-sm mb-1">Primary use case</label>
          <select
            name="useCase"
            value={form.useCase}
            onChange={change}
            className="w-full rounded-xl border border-black/10 px-3 py-2 focus-ring"
          >
            <option>FAQs & lead capture</option>
            <option>Bookings & appointments</option>
            <option>Order support & delivery</option>
            <option>Sales inquiries</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="agree" className="text-xs">
          I agree to the <a className="underline" href="/privacy">Privacy Policy</a>.
        </label>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-white hover:bg-brand-700 disabled:opacity-60 focus-ring w-full"
      >
        {loading ? "Joining..." : "Join Early Access"}
      </button>

      <p className="mt-2 text-[11px] text-black/50">
        No spam. We’ll email onboarding details and your invite.
      </p>
    </form>
  );
}
