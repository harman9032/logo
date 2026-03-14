import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, FileText, Lightbulb, Layers, RefreshCw, CheckCircle, Download, Headphones as HeadphonesIcon, Shield, Clock, ChevronDown, ChevronUp, Zap, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20process";

const processSteps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Free Discovery Call',
    duration: '30 minutes',
    description: 'We start with a no-obligation call to understand your business, goals, audience, and vision. This is where we listen — no sales pressure.',
    details: [
      'Tell us about your business and what you do',
      'Share your brand goals and target audience',
      'Discuss your likes, dislikes, and competitors',
      'Ask any questions about our process or pricing',
      'Get a clear recommendation on the right package for you',
    ],
    callout: 'You can also share reference images, mood boards, or competitor websites you admire.',
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Design Brief',
    duration: 'Same day',
    description: 'After the call, we send you a structured design brief — a simple form that captures everything we need to get started. Takes 10–15 minutes to complete.',
    details: [
      'Business name, tagline, and description',
      'Brand personality keywords (e.g., bold, elegant, playful)',
      'Preferred colours and colours to avoid',
      'Target audience demographics',
      'Competitor brands for reference',
    ],
    callout: 'No design experience needed — we guide you through every question.',
    color: 'bg-sky-600',
    lightColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-700',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Research & Concept Development',
    duration: '24–48 hours',
    description: 'Our designers get to work. We research your industry, analyse your competitors, and develop multiple distinct concepts — each with its own strategic direction.',
    details: [
      'Industry and competitor landscape research',
      'Color psychology and typography selection',
      'Multiple unique concept directions developed',
      'Internal design review before presentation',
      'Rationale prepared for each concept',
    ],
    callout: 'For websites: we wireframe layout and user flow before any visual design begins.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    number: '04',
    icon: Layers,
    title: 'First Presentation',
    duration: 'Day 2–3',
    description: 'We present our concepts in a clear, professional PDF or live walkthrough. You see multiple directions — each explained with the thinking behind it.',
    details: [
      '3 logo concepts (or 1 full website mockup)',
      'Each concept shown in real-world context (mockups)',
      'Explanation of the strategy behind each design',
      'Colour palette and font recommendations included',
      'Feedback template provided for clear responses',
    ],
    callout: 'Most clients choose a clear favourite at this stage — with minor tweaks to polish.',
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Revisions',
    duration: 'Until perfect',
    description: 'Unlimited revisions until you are 100% satisfied. We refine your chosen concept based on your feedback — as many rounds as it takes.',
    details: [
      'Colour changes, font swaps, layout adjustments',
      'Icon or symbol refinements',
      'Alternative versions or variations',
      'Dark/light mode versions',
      'Feedback accepted via email, WhatsApp, or Loom video',
    ],
    callout: 'We take feedback seriously. If a concept is not working, we go back to the drawing board — at no extra cost.',
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-700',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Final Approval',
    duration: 'Your call',
    description: 'Once you are delighted with the design, we move to final file preparation. You approve, and we prepare a complete, professional file package.',
    details: [
      'Final sign-off via email',
      'Payment of remaining balance (if applicable)',
      'Full-resolution file preparation begins',
      'All file formats prepared and organised',
      'Final quality check by creative director',
    ],
    callout: 'We never rush this stage — everything is checked twice before delivery.',
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  {
    number: '07',
    icon: Download,
    title: 'File Delivery',
    duration: '24 hours after approval',
    description: 'Your complete file package is delivered via a private download link. Everything is organised in clearly labeled folders, ready to use immediately.',
    details: [
      'PNG (transparent + white background)',
      'SVG (scalable vector for web)',
      'PDF (print-ready)',
      'AI / EPS (editable source files)',
      'Brand guidelines PDF (colours, fonts, usage rules)',
    ],
    callout: 'You own everything. No licensing fees, no lock-in, no subscriptions.',
    color: 'bg-sky-600',
    lightColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-700',
  },
  {
    number: '08',
    icon: HeadphonesIcon,
    title: '30-Day Support',
    duration: '30 days post-delivery',
    description: 'We stay with you after delivery. Need a small tweak? Want a quick social media banner using your new brand? We cover it — at no extra cost.',
    details: [
      'Minor adjustments to final files',
      'Guidance on where and how to use files',
      'Quick-turnaround social media assets',
      'Help briefing printers or developers',
      'Available via WhatsApp and email',
    ],
    callout: 'Most agencies disappear after delivery. We consider handover the start of the relationship.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
  },
];

const turnaroundData = [
  { service: 'Logo Design', timeline: '48 hours', revisions: 'Unlimited', delivery: 'PNG, SVG, PDF, AI' },
  { service: 'AI Website Design', timeline: '3–5 days', revisions: 'Unlimited', delivery: 'Live URL + source code' },
  { service: 'Shopify Store', timeline: '5–7 days', revisions: 'Unlimited', delivery: 'Live Shopify store' },
  { service: 'WordPress Website', timeline: '5–7 days', revisions: 'Unlimited', delivery: 'Live WP site + files' },
  { service: 'Brand Identity', timeline: '5–7 days', revisions: 'Unlimited', delivery: 'Full brand kit' },
  { service: 'Complete Package', timeline: '7–10 days', revisions: 'Unlimited', delivery: 'All files + live site' },
];

const faqs = [
  {
    q: 'How do I share feedback during the process?',
    a: 'Any way that works for you — email, WhatsApp text, WhatsApp voice note, Loom video, or annotated PDF. We adapt to your communication style.',
  },
  {
    q: 'What if I don\'t like any of the initial concepts?',
    a: 'We go back to the drawing board, completely free of charge. We will have a follow-up call to re-align on direction and start fresh. This rarely happens because of how thoroughly we work through the brief.',
  },
  {
    q: 'Do I need to pay upfront?',
    a: 'We take a 50% deposit to begin work. The remaining 50% is due upon final approval, before file delivery.',
  },
  {
    q: 'Can I be involved in the process?',
    a: 'Absolutely. Some clients prefer to give us full creative freedom; others want to be involved at every step. We adapt. You can be as hands-on or hands-off as you like.',
  },
  {
    q: 'What happens if I need changes after the 30-day support window?',
    a: 'We offer affordable maintenance packages and hourly rates for ongoing work. Since you own your source files, you can also take them to any other designer — we never hold your work hostage.',
  },
  {
    q: 'Do you work across different time zones?',
    a: 'Yes. We serve clients across USA, UK, Australia, UAE, and Southeast Asia. IST (India Standard Time) naturally overlaps with US evenings and European mornings. We typically respond within 4–8 hours.',
  },
];

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Zap className="h-3.5 w-3.5" />
            How We Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            No Guesswork.{' '}
            <span className="text-yellow-400">No Surprises.</span>
            <br />Just Great Work.
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            A transparent, 8-step process that takes you from brief to brand — with clear timelines, unlimited revisions, and no hidden steps.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Layers className="h-3.5 w-3.5" />
              The Full Process
            </div>
            <h2 className="text-4xl font-black text-gray-900">Every Step, Explained</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              Here is exactly what happens from the moment you reach out to the moment your brand is ready to launch.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
                    <div className={`relative flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className={`flex-1 bg-white rounded-2xl border ${step.borderColor} shadow-sm overflow-hidden`}>
                      <div className={`${step.lightColor} px-8 py-5 flex items-center justify-between flex-wrap gap-3`}>
                        <div>
                          <span className={`text-xs font-bold ${step.textColor} uppercase tracking-widest`}>Step {step.number}</span>
                          <h3 className="text-xl font-black text-gray-900 mt-1">{step.title}</h3>
                        </div>
                        <div className={`flex items-center gap-2 ${step.textColor}`}>
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-semibold">{step.duration}</span>
                        </div>
                      </div>
                      <div className="px-8 py-6">
                        <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                        <ul className="space-y-2 mb-5">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2.5">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className={`${step.lightColor} border ${step.borderColor} rounded-xl px-5 py-4`}>
                          <p className={`text-sm ${step.textColor} font-medium leading-relaxed`}>
                            <span className="font-bold">Note: </span>{step.callout}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              Delivery Timelines
            </div>
            <h2 className="text-4xl font-black text-white">How Long Does Each Service Take?</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 font-semibold text-sm uppercase tracking-widest py-4 pr-8">Service</th>
                  <th className="text-left text-gray-400 font-semibold text-sm uppercase tracking-widest py-4 pr-8">Timeline</th>
                  <th className="text-left text-gray-400 font-semibold text-sm uppercase tracking-widest py-4 pr-8">Revisions</th>
                  <th className="text-left text-gray-400 font-semibold text-sm uppercase tracking-widest py-4">Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {turnaroundData.map((row) => (
                  <tr key={row.service} className="group hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 pr-8 font-bold text-white">{row.service}</td>
                    <td className="py-4 pr-8">
                      <span className="bg-green-900/50 text-green-400 text-sm font-bold px-3 py-1 rounded-full border border-green-800">{row.timeline}</span>
                    </td>
                    <td className="py-4 pr-8">
                      <span className="text-yellow-400 font-semibold text-sm">{row.revisions}</span>
                    </td>
                    <td className="py-4 text-gray-300 text-sm">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-green-200 p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Our 100% Satisfaction Promise</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We will not stop until you are genuinely delighted with your design. That is not marketing — it is how we have maintained a 100% satisfaction rate for 12 years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: RefreshCw, text: 'Unlimited revisions until you love it' },
                { icon: Clock, text: 'Full refund if we miss agreed timeline' },
                { icon: Download, text: 'Full file ownership — no lock-in, ever' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="bg-green-50 rounded-xl p-5 flex flex-col items-center gap-3">
                    <Icon className="h-6 w-6 text-green-600" />
                    <p className="text-green-800 font-semibold text-sm text-center leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Star className="h-3.5 w-3.5" />
              Common Questions
            </div>
            <h2 className="text-4xl font-black text-gray-900">Process FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  {openFaq === idx
                    ? <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                    : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" aria-hidden="true" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Start?</h2>
          <p className="text-green-100 text-lg mb-8">
            Book a free 30-minute call and we will walk you through the process live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Free Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
