import { Check, Star, Mail } from "lucide-react";
import Link from "next/link";

export default function WaitlistSuccessPage() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="h-10 w-10 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to ChatReply!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          You've successfully joined our early access program. We'll be in touch soon with updates and exclusive access to our WhatsApp AI assistant.
        </p>

        {/* What's Next */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-brand-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Confirmation Email</h3>
                <p className="text-gray-600">Check your inbox for a welcome email with next steps.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-4 w-4 text-brand-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Early Access Updates</h3>
                <p className="text-gray-600">We'll notify you as soon as we're ready to onboard early users.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-brand-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Priority Support</h3>
                <p className="text-gray-600">You'll get priority access to our team for setup and support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700 transition-colors focus-ring"
          >
            Back to Home
          </Link>
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
          >
            View Pricing →
          </Link>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Know other businesses that could benefit?</p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Just joined the waitlist for ChatReply - an AI-powered WhatsApp assistant for businesses! 🚀')}&url=${encodeURIComponent('https://chatreply.online')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-colors"
            >
              Share on Twitter
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://chatreply.online')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
