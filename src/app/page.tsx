import Image from "next/image";
import { Check, MessageCircle, Users, BarChart3, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container pt-16 md:pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm text-brand-700 border border-brand-100 mb-8">
            <MessageCircle className="h-4 w-4" />
            WhatsApp AI Assistant • Early Access
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Automate WhatsApp
            <span className="block text-brand-600">Never Miss a Lead</span>
          </h1>
          
          {/* Mission Statement */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your WhatsApp business communication with AI-powered automation. 
            Answer customer questions instantly, capture leads automatically, and grow your business 24/7.
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
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why ChatReply?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built specifically for small businesses who want to provide instant customer support 
            without the complexity of enterprise solutions.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Set up in minutes, not days. Our intuitive platform gets you up and running with AI-powered responses instantly."
            },
            {
              icon: Globe,
              title: "Global Ready",
              desc: "Support customers in multiple languages and time zones. Your business never sleeps with 24/7 automated responses."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Built on official WhatsApp Cloud API with enterprise-grade security. GDPR compliant and privacy-first by design."
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
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to automate WhatsApp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three powerful features that work together to transform your customer communication
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              icon: MessageCircle,
              title: "Smart Responses",
              desc: "AI-powered responses to common questions about hours, pricing, location, and more. Customers get instant answers."
            },
            {
              icon: Users,
              title: "Lead Capture",
              desc: "Automatically collect customer information and seamlessly export to your CRM or email marketing platform."
            },
            {
              icon: BarChart3,
              title: "Insights Dashboard",
              desc: "Understand customer behavior with detailed analytics. See what questions are asked most and optimize your responses."
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
      <section className="container py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple setup, powerful results. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                step: "1",
                title: "Connect WhatsApp",
                desc: "Link your WhatsApp Business account with our secure platform in just a few clicks."
              },
              {
                step: "2",
                title: "Configure Responses",
                desc: "Set up your FAQ database and customize responses to match your brand voice."
              },
              {
                step: "3",
                title: "AI Takes Over",
                desc: "Our intelligent system automatically responds to customer messages with relevant information."
              },
              {
                step: "4",
                title: "Grow Your Business",
                desc: "Focus on what matters while we handle customer inquiries and capture leads automatically."
              }
            ].map((item) => (
              <div key={item.step} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your WhatsApp business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the early access program and be among the first to experience the future of WhatsApp automation.
          </p>
          <Link 
            href="/waitlist" 
            className="inline-flex items-center rounded-xl bg-brand-600 px-8 py-4 text-white font-semibold hover:bg-brand-700 transition-colors focus-ring text-lg"
          >
            Get Early Access
          </Link>
        </div>
      </section>
    </>
  );
}
