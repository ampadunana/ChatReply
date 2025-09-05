import { Check, Clock, Users, Zap, Shield, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-50/20">
      {/* Hero Section */}
      <section className="container pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-800 mb-6">
            Early Access Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our exclusive early access program. Get started free, then enjoy founding member benefits forever.
          </p>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Free Trial",
                description: "14 days completely free to test all features and see the value"
              },
              {
                icon: Users,
                title: "Founding Member",
                description: "50% off forever on Growth & Pro plans when you stay after trial"
              },
              {
                icon: Zap,
                title: "Priority Access",
                description: "Get new features first and direct input on product development"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Built on official WhatsApp Cloud API with GDPR compliance"
              },
              {
                icon: MessageCircle,
                title: "24/7 Support",
                description: "Dedicated onboarding and priority support during early access"
              },
              {
                icon: Check,
                title: "No Lock-in",
                description: "Cancel anytime. No long-term contracts or hidden fees"
              }
            ].map((benefit) => (
              <div key={benefit.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Preview */}
      <section className="container pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Plans for Every Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with what you need, scale as you grow. All plans include our core AI features.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Starter",
              description: "Perfect for small businesses getting started",
              features: [
                "1 WhatsApp Business number",
                "Unlimited AI conversations",
                "Basic FAQ responses",
                "Lead capture & storage",
                "Email support",
                "Standard analytics"
              ],
              popular: false
            },
            {
              name: "Growth",
              description: "For growing businesses that need more power",
              features: [
                "Up to 3 WhatsApp numbers",
                "Advanced AI responses",
                "Multilingual support",
                "Lead export (CSV)",
                "Priority support",
                "Advanced analytics",
                "Custom integrations"
              ],
              popular: true
            },
            {
              name: "Pro",
              description: "For teams that need enterprise features",
              features: [
                "Unlimited WhatsApp numbers",
                "Custom AI training",
                "Team collaboration tools",
                "API access",
                "SLA support",
                "Custom reporting",
                "White-label options"
              ],
              popular: false
            }
          ].map((plan) => (
            <div key={plan.name} className={`card p-8 relative ${plan.popular ? 'ring-2 ring-brand-600 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/waitlist" 
                className={`w-full inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors focus-ring ${
                  plan.popular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Join Early Access
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="card p-12 text-center bg-gradient-to-r from-brand-600 to-brand-700 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your WhatsApp Support?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 80+ businesses already on the waitlist. Early access starts September 12th.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/waitlist" 
              className="inline-flex items-center rounded-xl bg-white text-brand-600 px-8 py-4 font-semibold hover:bg-gray-50 transition-colors focus-ring text-lg"
            >
              Get Early Access
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-white hover:text-gray-200 font-medium transition-colors"
            >
              Have Questions? Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "When does early access start?",
                answer: "Early access begins September 12-15, 2025. You'll receive setup instructions via email before the start date."
              },
              {
                question: "What's included in the free trial?",
                answer: "Full access to all features for 14 days. No credit card required to start, and you can cancel anytime."
              },
              {
                question: "What are founding member benefits?",
                answer: "50% off forever on Growth and Pro plans when you continue after your free trial. Plus priority feature access and direct input on product development."
              },
              {
                question: "Do I need a WhatsApp Business account?",
                answer: "Yes, you'll need a WhatsApp Business account. We'll guide you through the simple setup process during onboarding."
              },
              {
                question: "Can I change plans later?",
                answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What happens after early access?",
                answer: "Early access ends September 26th. After that, you'll continue on your chosen plan with founding member pricing locked in forever."
              }
            ].map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
