"use client";

import { Mail, MessageCircle, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const subject = encodeURIComponent("ChatReply Inquiry");
  const body = encodeURIComponent("Hi ChatReply team,\n\nAdd your issue here.");
  const mailto = `mailto:hello@chatreply.online?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-50/20">
      {/* Hero Section */}
      <section className="container pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have questions about ChatReply? We're here to help. Reach out to our team for support, partnerships, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Get help with technical issues, billing, or general questions",
                email: "hello@chatreply.online",
                subject: "ChatReply Support Inquiry"
              },
              {
                icon: MessageCircle,
                title: "Early Access",
                description: "Join our waitlist to get priority support and early access",
                action: "Join Waitlist",
                href: "/waitlist"
              },
              {
                icon: Users,
                title: "Partnerships",
                description: "Interested in partnering with us? Let's discuss opportunities",
                email: "hello@chatreply.online",
                subject: "Partnership Inquiry"
              }
            ].map((method) => (
              <div key={method.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
                
                {method.email ? (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Contact us at:</p>
                    <p className="text-lg font-semibold text-brand-600 mb-1">{method.email}</p>
                    <p className="text-xs text-gray-500">Subject: {method.subject}</p>
                  </div>
                ) : (
                  <Link
                    href={method.href}
                    className="inline-flex items-center rounded-xl bg-brand-600 text-white px-6 py-3 font-semibold hover:bg-brand-700 transition-colors focus-ring"
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quick answers to common questions about ChatReply
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "When does early access start?",
                answer: "Early access begins September 12-15, 2025. You'll receive setup instructions via email before the start date."
              },
              {
                question: "How do I get support?",
                answer: "Email us at hello@chatreply.online for technical support, billing questions, or general inquiries. We typically respond within 24 hours."
              },
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Yes, we work with enterprise customers to create custom integrations with their existing systems. Contact us to discuss your specific needs."
              },
              {
                question: "What's included in the free trial?",
                answer: "The free trial includes full access to all features for 14 days. No credit card required to start, and you can cancel anytime."
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

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="card p-12 text-center bg-gradient-to-r from-brand-600 to-brand-700 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join our early access program and be among the first to experience AI-powered WhatsApp customer service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/waitlist" 
              className="inline-flex items-center rounded-xl bg-white text-brand-600 px-8 py-4 font-semibold hover:bg-gray-50 transition-colors focus-ring text-lg"
            >
              Join Early Access
            </Link>
            <Link 
              href={mailto}
              className="inline-flex items-center text-white hover:text-gray-200 font-medium transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 bg-gradient-to-r from-brand-50 to-brand-100/50 border-brand-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-brand-600" />
                <h3 className="text-xl font-semibold text-gray-900">Direct Contact</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                For immediate assistance, email us directly at{' '}
                <a href={mailto} className="text-brand-600 hover:text-brand-700 font-medium">
                  hello@chatreply.online
                </a>
              </p>
              <p className="text-sm text-gray-500">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}
