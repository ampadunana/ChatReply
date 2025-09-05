import WaitlistForm from "@/components/WaitlistForm";
import { Check, Star, Zap, Users, Clock, Shield, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-50/20">
      {/* Hero Section */}
      <section className="container pt-16 pb-20">
        <div className="text-center max-w-5xl mx-auto" id="waitlist">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-6 py-3 text-sm text-brand-700 border border-brand-100 mb-8">
            <Star className="h-4 w-4" />
            Early Access Program
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
            Early Access: WhatsApp AI Customer Service
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Be first to onboard between Sept 12–15. First 2 weeks free trial. We'll email a setup form. Use your correct email and WhatsApp number when filling out the form below. 87 slots for early access.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-600" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Early Access Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to our WhatsApp AI assistant with special founding member perks
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Priority Access",
              desc: "Get first access to new features and be the first to try our WhatsApp AI assistant."
            },
            {
              icon: Users,
              title: "Exclusive Support",
              desc: "Direct access to our team for setup, customization, and priority support."
            },
            {
              icon: Star,
              title: "Launch Benefits",
              desc: "First-week free trial and priority onboarding during the early access window."
            }
          ].map((benefit) => (
            <div key={benefit.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              What You'll Get
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to transform your WhatsApp customer service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Early Access Perks</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Priority onboarding & setup</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Exclusive launch pricing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Feature voting & feedback</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Exclusive community access</span>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Product Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">AI-powered instant responses</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Automated lead capture</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-gray-700 text-lg">Multi-language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 bg-gradient-to-r from-brand-50 to-brand-100/50 border-brand-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-brand-600" />
              <h3 className="text-xl font-semibold text-gray-900">Enterprise Security</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              <strong>Trusted by businesses</strong> in hospitality, retail, and local services. 
              Built on official WhatsApp Cloud API with enterprise-grade security and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="container pb-20">
        <div className="max-w-2xl mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
