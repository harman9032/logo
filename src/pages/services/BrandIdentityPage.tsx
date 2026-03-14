import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Layers, Star, Palette, Award,
  ChevronRight, MessageCircle, FileText, BookOpen, User,
  Store, Coffee, Briefcase, Stethoscope, GraduationCap
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in Brand Identity Design.";

const deliverables = [
  { icon: Palette, title: 'Logo Suite', desc: 'Primary, secondary, icon-only, and monochrome versions of your logo in all formats.' },
  { icon: BookOpen, title: 'Brand Guidelines', desc: 'A comprehensive PDF brand book covering logo usage, colours, typography, and tone of voice.' },
  { icon: FileText, title: 'Stationery Pack', desc: 'Business cards, letterhead, and email signature designed in your brand style.' },
  { icon: Layers, title: 'Social Media Kit', desc: 'Profile images, cover photos, and post templates for all major platforms.' },
  { icon: Star, title: 'Color & Typography', desc: 'A carefully curated colour palette and font pairing that expresses your brand personality.' },
  { icon: Award, title: 'Brand Pattern', desc: 'A custom brand pattern or texture for packaging, backgrounds, and merchandise.' },
];

const packages = [
  {
    name: 'Core Identity',
    price: '$599',
    desc: 'A solid brand foundation — logo, colours, typography, and basic guidelines.',
    features: ['Logo design (Professional package)', 'Brand colour palette', 'Typography system', 'Brand guidelines (PDF)', 'Social media profile kit'],
    highlight: false,
  },
  {
    name: 'Full Brand System',
    price: '$999',
    desc: 'Everything you need to show up consistently across every touchpoint.',
    features: [
      'Full logo suite (5 variations)',
      'Comprehensive brand guidelines',
      'Business card & letterhead',
      'Email signature design',
      'Social media kit (4 platforms)',
      'Brand pattern & textures',
      'Iconography set',
      'Presentation template',
    ],
    highlight: true,
  },
  {
    name: 'Brand + Website',
    price: '$1,499',
    desc: 'Complete brand identity plus a matching AI-designed website — the full transformation.',
    features: [
      'Everything in Full Brand System',
      'AI Website Design (up to 5 pages)',
      'On-brand UI components',
      'Brand-matched email templates',
      'Priority support',
      'Brand strategy session',
    ],
    highlight: false,
  },
];

const brandTransformation = [
  {
    stage: 'Before',
    items: [
      'Inconsistent logo use across platforms',
      'No defined colour palette',
      'Mixed fonts and visual styles',
      'Looks unprofessional to potential clients',
      'Hard to create new marketing materials',
    ],
    style: 'bg-red-50 border-red-200',
    badgeStyle: 'bg-red-100 text-red-700',
    checkStyle: 'text-red-400',
  },
  {
    stage: 'After',
    items: [
      'Consistent, professional brand presence',
      'Defined colours that evoke the right emotions',
      'Typography system that communicates authority',
      'Instant credibility and trust with visitors',
      'Any designer can extend your brand easily',
    ],
    style: 'bg-green-50 border-green-200',
    badgeStyle: 'bg-green-100 text-green-700',
    checkStyle: 'text-green-600',
  },
];

const whoIsItFor = [
  { icon: User, title: 'Solopreneurs & Freelancers', desc: 'Build credibility and charge premium rates with a professional brand that stands out.' },
  { icon: Store, title: 'New Businesses', desc: 'Launch with a strong visual foundation so you\'re taken seriously from day one.' },
  { icon: Coffee, title: 'Restaurants & Cafés', desc: 'Create a dining experience that starts the moment customers see your branding.' },
  { icon: Briefcase, title: 'Agencies & Consultancies', desc: 'Position yourself as the authority in your space with a brand that commands respect.' },
  { icon: Stethoscope, title: 'Healthcare & Wellness', desc: 'Build patient trust and communicate care and professionalism through design.' },
  { icon: GraduationCap, title: 'Coaches & Educators', desc: 'Establish thought leadership with a brand that reflects your expertise and values.' },
];

const faqs = [
  { q: 'What\'s the difference between a logo and a brand identity?', a: 'A logo is one element. A brand identity is the full system — logo, colors, typography, imagery style, and voice guidelines — that ensures consistency everywhere your business appears.' },
  { q: 'How long does a brand identity take?', a: 'A Core Identity typically takes 5–7 days. A Full Brand System takes 10–14 days depending on the revision process.' },
  { q: 'Do I get editable source files?', a: 'Yes — you receive all source files (AI, EPS, PSD, Figma) so your brand can be used and extended by any designer in future.' },
  { q: 'Can I use this for physical products too?', a: 'Absolutely. All files are print-ready at high resolution and suitable for packaging, merchandise, and signage.' },
  { q: 'Do you provide a brand strategy session?', a: 'Yes — the Brand + Website package includes a brand strategy session where we deep-dive into your positioning, target audience, and competitive landscape.' },
];

export default function BrandIdentityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-900 via-orange-900 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Layers size={12} />
              Complete Brand Identity
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              A Brand That <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">Commands Attention</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              More than a logo — a full brand system that creates recognition, builds trust, and positions your business as the premium choice in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20">
                Build My Brand — From $599
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                The Transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Before vs. After a Brand Identity</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">The difference a professional brand system makes is felt immediately — by your team, your clients, and your bottom line.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brandTransformation.map((col) => (
                <div key={col.stage} className={`${col.style} border-2 rounded-2xl p-7`}>
                  <div className={`inline-block text-sm font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${col.badgeStyle}`}>{col.stage}</div>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className={`${col.checkStyle} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Deliverables
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What You'll Receive</h2>
              <p className="text-gray-500">Every asset you need to show up professionally, consistently, and memorably.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {deliverables.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-amber-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-amber-600" />
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{d.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Brand Identity Packages</h2>
              <p className="text-gray-500">Choose the level that matches your ambition.</p>
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

        {/* Who is it for */}
        <section className="py-16 px-4 bg-amber-50 border-y border-amber-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Who It's For
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Brand Identity Works for Every Type of Business</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {whoIsItFor.map((who) => {
                const Icon = who.icon;
                return (
                  <div key={who.title} className="bg-white border border-amber-100 rounded-xl p-5 flex gap-4 items-start">
                    <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm mb-1">{who.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{who.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Brand Identity FAQs</h2>
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
            <h2 className="text-3xl font-black mb-3">Ready to Stand Out From the Crowd?</h2>
            <p className="text-slate-400 mb-8">Get a brand identity that positions you as the premium choice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all">
                Start My Brand Project <ArrowRight size={18} />
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
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
