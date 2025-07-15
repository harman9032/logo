import React from 'react';
import { CheckCircle, ArrowLeft, Calendar, Phone, Mail, MessageCircle, Star, Gift } from 'lucide-react';

export default function ThankYouPage() {
  const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-free-consulation";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <a 
              href="/"
              className="flex items-center text-orange-600 hover:text-orange-700 transition-colors mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your inquiry has been successfully submitted. We're excited to help transform your business!
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Our team will contact you within <strong>2 hours</strong> during business hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Discussion</h3>
              <p className="text-gray-600">
                We'll discuss your goals and create a <strong>custom strategy</strong> for your business
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Proposal</h3>
              <p className="text-gray-600">
                Receive a detailed proposal within <strong>24 hours</strong> with pricing and timeline
              </p>
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <div className="text-center">
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              🎁 Special Bonus for You!
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Since you've taken action today, you'll receive our exclusive Lead Generation Checklist (Worth ₹999) absolutely FREE!
            </p>
            <div className="bg-white/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">This Checklist Includes:</h3>
              <ul className="text-left space-y-2 text-orange-100">
                <li>✅ 15-Point Lead Generation Audit</li>
                <li>✅ High-Converting Ad Templates</li>
                <li>✅ Landing Page Optimization Guide</li>
                <li>✅ Lead Nurturing Email Sequences</li>
                <li>✅ ROI Tracking Spreadsheet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Need Immediate Assistance?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="tel:+919876543210"
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition-colors group"
            >
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
              <p className="text-xs text-green-600 mt-1">Available 9 AM - 9 PM</p>
            </a>
            
            <a 
              href="https://wa.me/919876543210?text=Hi, I just submitted an inquiry and would like to speak with someone immediately"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition-colors group"
            >
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">Instant Chat</p>
              <p className="text-xs text-green-600 mt-1">Quick responses</p>
            </a>
            
            <a 
              href="mailto:hello@dailycreativedesigns.com"
              className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors group"
            >
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">hello@dailycreativedesigns.com</p>
              <p className="text-xs text-blue-600 mt-1">Response within 2 hours</p>
            </a>
            
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center hover:bg-orange-100 transition-colors group"
            >
              <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Book Call</h3>
              <p className="text-sm text-gray-600">Schedule Meeting</p>
              <p className="text-xs text-orange-600 mt-1">FREE consultation</p>
            </a>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "Daily Creative Designs transformed our business completely! We went from 10 leads per month to over 150 leads. The ROI has been incredible - we've 5x our revenue in just 6 months!"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                R
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Raj Patel</p>
                <p className="text-gray-600">CEO, TechStart Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            While you wait for our response, feel free to explore our services or book a call directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="bg-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              Explore Our Services
            </a>
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
            >
              Book Immediate Call
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}