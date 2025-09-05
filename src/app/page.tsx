import Image from "next/image";
import { Check, MessageCircle, Users, BarChart3, Zap, Globe, Shield, Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-50/20">
      {/* Hero Section */}
      <section className="container pt-6 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs text-brand-700 border border-brand-100 mb-6">
            <MessageCircle className="h-3 w-3" />
            24/7 AI Customer Service for WhatsApp • Early Access
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-800 mb-6">
            AI Customer Service
            <span className="block text-brand-600">Answers in seconds on WhatsApp</span>
          </h1>
          
          {/* Mission Statement */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            ChatReply provides enterprise grade support on WhatsApp. Instant answers, lead capture, and seamless handoff to your team.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/waitlist" 
              className="inline-flex items-center rounded-xl bg-brand-600 px-8 py-4 text-white font-semibold hover:bg-brand-700 transition-colors focus-ring text-lg"
            >
              Get Early Access
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
            >
              View Pricing →
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
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

      {/* Mission Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Why ChatReply?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Designed for teams of any size—startups to enterprise. 24/7 availability, measurable outcomes, and enterprise security.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "24/7 Response",
              desc: "Customers get answers in seconds at any hour. Reduce wait times and ticket volume."
            },
            {
              icon: Globe,
              title: "Multilingual",
              desc: "Serve customers in multiple languages across time zones—automatically."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Built on the official WhatsApp Cloud API. GDPR-ready, secure by design."
            }
          ].map((feature) => (
            <div key={feature.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Everything you need for AI customer service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Three powerful features that work together to transform your customer communication
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: MessageCircle,
              title: "Instant Answers",
              desc: "AI resolves FAQs like hours, pricing, delivery, and returns—fast and consistently."
            },
            {
              icon: Users,
              title: "Lead Qualification",
              desc: "Capture details, qualify prospects, and push to your CRM automatically."
            },
            {
              icon: BarChart3,
              title: "Analytics & QA",
              desc: "Measure response quality, containment, and customer intent trends—optimize continuously."
            }
          ].map((feature) => (
            <div key={feature.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple setup, powerful results. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                step: "1",
                title: "Connect WhatsApp",
                desc: "Securely link your WhatsApp Business account via the official Cloud API."
              },
              {
                step: "2",
                title: "Upload Knowledge",
                desc: "Import FAQs, policies, hours, delivery details, and your brand voice."
              },
              {
                step: "3",
                title: "AI handles chats",
                desc: "The assistant answers instantly, hands off complex cases to your team when needed."
              },
              {
                step: "4",
                title: "Measure & improve",
                desc: "Track performance and iterate with analytics."
              }
            ].map((item) => (
              <div key={item.step} className="card p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="card p-12 text-center bg-gradient-to-r from-brand-600 to-brand-700 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready for 24/7 customer service on WhatsApp?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join early access. First week free trial starts Sept 12–15. We'll send a setup form to the email you register.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/waitlist" 
              className="inline-flex items-center rounded-xl bg-white text-brand-600 px-8 py-4 font-semibold hover:bg-gray-50 transition-colors focus-ring text-lg"
            >
              Get Early Access
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center text-white hover:text-gray-200 font-medium transition-colors"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
