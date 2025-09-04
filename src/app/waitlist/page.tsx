import WaitlistForm from "@/components/WaitlistForm";
import { Check, Star, Zap, Users } from "lucide-react";

export default function WaitlistPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm text-brand-700 border border-brand-100 mb-6">
            <Star className="h-4 w-4" />
            Early Access Program
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Early Access: WhatsApp AI Customer Service
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be first to onboard between Sept 12–15. First week free trial. We’ll email a setup form—use your correct email and WhatsApp number.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
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
            <div key={benefit.title} className="card p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* What You'll Get */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You'll Get</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Early Access Perks</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Priority onboarding & setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Exclusive launch pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Feature voting & feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Exclusive community access</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">AI-powered instant responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Automated lead capture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">Multi-language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="card p-6 bg-brand-50/50 border-brand-100 mb-12">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              <strong>Trusted by businesses</strong> in hospitality, retail, and local services. 
              Built on official WhatsApp Cloud API with enterprise-grade security and privacy.
            </p>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-2xl mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
