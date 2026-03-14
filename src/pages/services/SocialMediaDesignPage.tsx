import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, TrendingUp, Zap, Star,
  ChevronRight, MessageCircle, Image, Users, BarChart3, Heart
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in Social Media Design services.";

const packages = [
  {
    name: 'Starter Pack',
    price: '$199',
    desc: 'Get your social media looking professional and consistent.',
    features: ['10 custom post designs', '2 platforms (e.g. Instagram + Facebook)', 'Profile & cover photo design', 'Brand colour-consistent templates', 'Editable Canva files'],
    highlight: false,
  },
  {
    name: 'Growth Pack',
    price: '$399',
    desc: 'A complete monthly social media visual kit to grow your brand online.',
    features: [
      '30 custom post designs',
      '4 platforms',
      'Story / Reel cover templates (10)',
      'Profile, cover & highlight icons',
      'Content calendar framework',
      'Editable Canva & Figma files',
      'Brand-consistent visual system',
    ],
    highlight: true,
  },
  {
    name: 'Agency Pack',
    price: '$799',
    desc: 'High-volume design output for brands who show up every day.',
    features: [
      '60 custom post designs',
      'All platforms',
      'Story, Reel & YouTube thumbnails',
      'Animated post templates (5)',
      'Monthly refresh option',
      'Ad creatives (static)',
      'Everything in Growth Pack',
    ],
    highlight: false,
  },
];

const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'Twitter / X', 'YouTube', 'Pinterest', 'TikTok', 'Google Business'];

const faqs = [
  { q: 'What file formats do I get?', a: 'You receive PNG exports for immediate use plus editable source files in Canva and/or Figma so you can update text and images yourself.' },
  { q: 'Can you match our existing brand?', a: 'Absolutely — we work from your existing brand guidelines, or we can establish a new social media visual identity for you.' },
  { q: 'Do you offer ongoing monthly design?', a: 'Yes — we offer monthly retainer packages for brands who need consistent content design at scale. Contact us for custom pricing.' },
  { q: 'Can you create animated or video posts?', a: 'Yes — the Agency Pack includes animated templates. For fully custom video/motion graphics, contact us for a separate quote.' },
];

export default function SocialMediaDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-400/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Image size={12} />
              Social Media Design
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Social Media Visuals That <span className="bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">Stop the Scroll</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Eye-catching, on-brand social media designs that grow your following, boost engagement, and turn followers into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-300 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-rose-500/20">
                Get My Social Kit — From $199
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Platforms We Design For</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <span key={p} className="bg-rose-50 text-rose-700 border border-rose-200 text-sm font-semibold px-4 py-2 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: Heart, title: 'Scroll-Stopping Designs', desc: 'Visuals that capture attention in a crowded feed.', color: 'text-rose-500', bg: 'bg-rose-50' },
                { icon: Users, title: 'Brand Consistent', desc: 'Every post reinforces your brand identity.', color: 'text-sky-600', bg: 'bg-sky-50' },
                { icon: Zap, title: 'Fast Turnaround', desc: 'Packs delivered within 3–5 business days.', color: 'text-amber-500', bg: 'bg-amber-50' },
                { icon: BarChart3, title: 'Engagement Focused', desc: 'Designed to drive likes, shares, and clicks.', color: 'text-green-600', bg: 'bg-green-50' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon size={20} className={item.color} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Social Media Design Packages</h2>
              <p className="text-gray-500">From starter kits to full monthly pipelines.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-rose-400 shadow-2xl shadow-rose-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-4xl font-black mb-3 ${pkg.highlight ? 'text-rose-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-rose-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-rose-400 hover:bg-rose-300 text-white' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Common Questions</h2>
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
        <section className="py-16 px-4 bg-rose-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <TrendingUp size={40} className="mx-auto mb-4 text-rose-300" />
            <h2 className="text-3xl font-black mb-3">Ready to Level Up Your Social Media?</h2>
            <p className="text-rose-100 mb-8">Let your visuals do the talking and watch your engagement soar.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-800 font-bold px-8 py-4 rounded-xl transition-all">
                Get My Social Media Kit <ArrowRight size={18} />
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all">
                All Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
