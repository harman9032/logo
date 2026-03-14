import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const faqs = [
  {
    category: "Services",
    items: [
      {
        question: "What services do you offer?",
        answer: "We offer three core services: Logo Design ($299), AI Website Design ($499), and a Complete Digital Package ($999) that bundles both with a full digital marketing strategy, brand guidelines, and a 90-day growth roadmap.",
      },
      {
        question: "What's included in the Logo Design package?",
        answer: "You get 3 unique logo concepts, unlimited revisions until you are 100% satisfied, final files in PNG, SVG, PDF, and AI formats, light and dark versions, a brand color palette suggestion, typography recommendation, and full commercial usage rights.",
      },
      {
        question: "What does the AI Website Design package include?",
        answer: "You receive a fully responsive, mobile-first website or landing page with basic on-page SEO setup, contact form integration, social media links, Google Analytics readiness, and fast loading performance. Domain registration and hosting fees are not included.",
      },
      {
        question: "What's extra in the Complete Digital Package?",
        answer: "Everything from both Logo Design and AI Website Design, plus a digital marketing strategy plan, social media brand guidelines, content calendar framework, competitor analysis report, a 90-day growth roadmap, and priority support.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    items: [
      {
        question: "How long does the process take?",
        answer: "Logo Design is typically delivered within 48 hours. AI Website Design takes 3–5 business days. The Complete Digital Package is delivered over 7–10 business days to ensure everything is polished and aligned.",
      },
      {
        question: "How does the process work?",
        answer: "We start with a free 30-minute discovery call to understand your business and goals. We then research your market, create concepts, and iterate based on your feedback — unlimited revisions until you are 100% happy. Finally, you receive all files and a growth roadmap.",
      },
      {
        question: "How many revision rounds do I get?",
        answer: "Unlimited. We do not cap revisions. We iterate until you are fully satisfied with the outcome.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    items: [
      {
        question: "Is this a one-time payment or a subscription?",
        answer: "All packages are one-time payments. There are no recurring fees or hidden charges. You pay once and own everything.",
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 100% satisfaction guarantee. If you are not happy after the revision process, we will work with you to resolve any concerns. Refund eligibility is evaluated on a case-by-case basis after a reasonable number of revision attempts.",
      },
      {
        question: "Can I upgrade from a smaller package later?",
        answer: "Yes. If you start with Logo Design or AI Website Design and decide you want the full package, we offer upgrade pricing so you only pay the difference.",
      },
    ],
  },
  {
    category: "Deliverables & Ownership",
    items: [
      {
        question: "Who owns the final designs?",
        answer: "You do. Once the project is complete and payment is received, full ownership and commercial usage rights transfer to you. We retain no claim over your brand assets.",
      },
      {
        question: "What file formats will I receive?",
        answer: "For logos: PNG (transparent background), SVG (scalable vector), PDF (print-ready), and AI (editable source file). For websites: we deliver the live site plus all source code, so you are never locked in.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <HelpCircle className="h-3.5 w-3.5" />
            Got Questions?
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Frequently Asked{' '}
            <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, process, and pricing — answered clearly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs font-black uppercase tracking-widest text-green-600 mb-4 px-1">
                  {group.category}
                </h2>
                <div className="space-y-3">
                  {group.items.map((item, idx) => {
                    const key = `${group.category}-${idx}`;
                    const isOpen = openItem === key;
                    return (
                      <div
                        key={key}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full px-7 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-base font-bold text-gray-900 leading-snug">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-7 pb-6 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is available 9 AM – 9 PM. We usually respond within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-black">
            Daily Creative <span className="text-yellow-400">Designs</span>
          </Link>
          <p className="text-gray-400 text-sm">© 2025 Daily Creative Designs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
