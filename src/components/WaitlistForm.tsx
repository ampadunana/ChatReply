"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WaitlistForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    whatsapp: "",
    useCase: "FAQs & lead capture"
  });
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.name) {
      setError("Please provide your name and a valid email.");
      return;
    }
    if (!agree) {
      setError("You must agree to the Privacy Policy.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Failed to join waitlist");
      }
      router.push("/waitlist/success");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="card p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g., Ama Mensah"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
          required
        />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
            required
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Business name</label>
          <input
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Your Salon / Store"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Website (optional)</label>
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp number (optional)</label>
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+233 24 123 4567"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary use case</label>
          <select
            name="useCase"
            value={form.useCase}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus-ring focus:border-brand-500 transition-colors"
          >
            <option>FAQs & lead capture</option>
            <option>Bookings & appointments</option>
            <option>Order support & delivery</option>
            <option>Sales inquiries</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
        />
        <label htmlFor="agree" className="text-sm text-gray-600">
          I agree to the <a className="text-brand-600 hover:text-brand-700 underline" href="/privacy">Privacy Policy</a>.
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-4 text-white font-semibold hover:bg-brand-700 disabled:opacity-60 focus-ring transition-colors text-lg"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>
      <p className="mt-4 text-sm text-gray-500 text-center">No spam. We’ll only email when we have news.</p>
    </form>
  );
}
