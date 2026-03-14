import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Palette, Zap, Clock, Shield, Award,
  ChevronRight, Users, MessageCircle
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in Logo Design services.";

const packages = [
  {
    name: 'Starter',
    price: '$149',
    desc: 'Perfect for solopreneurs and new ventures needing a clean, professional logo fast.',
    features: ['2 logo concepts', '3 rounds of revisions', 'PNG & PDF files', 'Black & white version'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$299',
    desc: 'Our most popular option — a full brand identity foundation for growing businesses.',
    features: [
      '3 unique logo concepts',
      'Unlimited revisions',
      'PNG, SVG, PDF, AI files',
      'Light & dark versions',
      'Brand color palette',
      'Typography recommendation',
      'Commercial usage rights',
    ],
    highlight: true,
  },
  {
    name: 'Brand Identity',
    price: '$599',
    desc: 'A complete brand system: logo, guidelines, stationery, and social media kit.',
    features: [
      'Everything in Professional',
      'Brand style guide (PDF)',
      'Business card design',
      'Letterhead design',
      'Social media profile kits',
      'Brand pattern/texture',
      'Priority support',
    ],
    highlight: false,
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your brand, competitors, and vision during a quick 15-min call.' },
  { step: '02', title: 'Research & Concepts', desc: 'Our designers research your industry and create multiple unique logo directions.' },
  { step: '03', title: 'Present & Refine', desc: 'We present your concepts and refine based on your feedback until it\'s perfect.' },
  { step: '04', title: 'Final Delivery', desc: 'You receive all source files in every format you\'ll ever need, fully organised.' },
];

const faqs = [
  { q: 'How long does a logo take?', a: 'Initial concepts are typically delivered within 48–72 hours of the discovery call.' },
  { q: 'Do I own the logo?', a: 'Yes — 100% ownership and commercial rights transfer to you upon final payment.' },
  { q: 'What if I don\'t like any concepts?', a: 'We offer unlimited revisions. We keep refining until you\'re completely satisfied.' },
  { q: 'What file formats will I get?', a: 'PNG, JPG, SVG, PDF, and AI — every format for print, web, and social media.' },
];

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Palette size={12} />
              Brand Identity Design
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Logo Design That <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Makes You Unforgettable</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              A logo is the face of your brand. We design distinctive, memorable logos that tell your story, build trust, and make you stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20">
                Get My Logo — From $149
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 5,000+ logos delivered</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 12+ years experience</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 100% satisfaction guarantee</span>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Choose Your Logo Package</h2>
              <p className="text-gray-500 max-w-xl mx-auto">All packages include our satisfaction guarantee. No work is considered complete until you love it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-amber-400 shadow-2xl shadow-amber-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-4xl font-black mb-3 ${pkg.highlight ? 'text-amber-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-amber-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-amber-400 hover:bg-amber-300 text-slate-900' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How It Works</h2>
              <p className="text-gray-500">A smooth, collaborative process from brief to beautiful logo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-black mx-auto mb-4 shadow-lg shadow-amber-500/20">{step.step}</div>
                  {i < process.length - 1 && <div className="hidden md:block absolute mt-[-36px] ml-[88px] w-full h-px bg-amber-200" />}
                  <h3 className="font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 px-4 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Why Clients Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Award, title: 'Expert Designers', desc: '12+ years crafting brand identities for businesses across 40+ countries.', color: 'text-amber-500', bg: 'bg-amber-100' },
                { icon: Zap, title: '48-Hour First Draft', desc: 'Initial logo concepts in your inbox within 2 business days.', color: 'text-green-600', bg: 'bg-green-100' },
                { icon: Shield, title: 'Unlimited Revisions', desc: 'We iterate until the logo is exactly what you envisioned.', color: 'text-sky-600', bg: 'bg-sky-100' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-amber-100">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon size={20} className={item.color} />
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black mb-3">Ready to Build Your Brand?</h2>
            <p className="text-slate-400 mb-8">Get a logo that works as hard as you do. Starting from just $149.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all">
                Start My Logo Project <ArrowRight size={18} />
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                View All Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
