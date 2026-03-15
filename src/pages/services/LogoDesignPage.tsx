import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Palette, Zap, Shield, Award,
  ChevronRight, MessageCircle, Type, Circle, Triangle, Hexagon,
  Smile, LayoutGrid, Eye, Lightbulb, FileCheck, Download,
  MapPin, Clock, DollarSign, Users, ChevronDown, ChevronUp,
  TrendingUp, Globe, Cpu,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20Logo%20Design%20services.";

const logoStyles = [
  {
    icon: Type,
    name: 'Wordmark Logo',
    desc: 'Your brand name styled as the logo itself — clean, typographic, and instantly legible. Best for businesses whose name is already distinctive.',
    examples: 'Google, FedEx, Coca-Cola',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-600',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    bestFor: 'Startups, SaaS, Law Firms',
  },
  {
    icon: Circle,
    name: 'Lettermark Logo',
    desc: 'Initials crafted into a distinctive monogram — perfect when your full business name is long but your initials are memorable.',
    examples: 'IBM, HP, Louis Vuitton',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconColor: 'text-slate-600',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-700',
    bestFor: 'Agencies, Finance, Legal',
  },
  {
    icon: Hexagon,
    name: 'Pictorial Mark',
    desc: 'A recognisable icon or symbol that represents your brand without text. Requires an established brand name to stand alone.',
    examples: 'Apple, Twitter, Target',
    bg: 'bg-green-50',
    border: 'border-green-200',
    iconColor: 'text-green-600',
    tagBg: 'bg-green-100',
    tagText: 'text-green-700',
    bestFor: 'Tech, Retail, Consumer Brands',
  },
  {
    icon: Triangle,
    name: 'Abstract Mark',
    desc: 'Geometric shapes and forms that create a unique visual identity with layered meaning — free from literal interpretation.',
    examples: 'Nike, Adidas, Pepsi',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    iconColor: 'text-sky-600',
    tagBg: 'bg-sky-100',
    tagText: 'text-sky-700',
    bestFor: 'Global Brands, Sports, Fashion',
  },
  {
    icon: LayoutGrid,
    name: 'Combination Mark',
    desc: 'A symbol paired with your brand name — the most versatile logo type that works across every application and medium.',
    examples: 'Amazon, Lacoste, Burger King',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    iconColor: 'text-rose-600',
    tagBg: 'bg-rose-100',
    tagText: 'text-rose-700',
    bestFor: 'SMBs, E-commerce, Franchises',
  },
  {
    icon: Smile,
    name: 'Mascot Logo',
    desc: 'A character or mascot that gives your brand personality and emotional connection — ideal for community-driven brands.',
    examples: 'KFC, Michelin, Reddit',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    iconColor: 'text-orange-600',
    tagBg: 'bg-orange-100',
    tagText: 'text-orange-700',
    bestFor: 'Food, Education, Kids Brands',
  },
];

const greatLogoTraits = [
  { icon: Eye, title: 'Memorable', desc: 'A great logo sticks in the mind after a single glance. It is distinct enough that customers instantly recognise your brand in a crowded feed, on a shelf, or at a tradeshow.' },
  { icon: Shield, title: 'Versatile', desc: 'Works perfectly at any size — from a 16px browser favicon to a 20-foot billboard. No detail is lost and no clarity is compromised at any scale.' },
  { icon: Lightbulb, title: 'Relevant', desc: 'Speaks directly to your industry and target audience without being generic. Every colour choice, shape, and typographic form communicates your brand personality intentionally.' },
  { icon: FileCheck, title: 'Timeless', desc: 'Designed to last decades, not months. We avoid trendy styles that date quickly in favour of design foundations built to endure changing market conditions.' },
];

const packages = [
  {
    name: 'Starter',
    price: '$149',
    priceNote: 'One-time payment',
    desc: 'Perfect for solopreneurs and new ventures needing a clean, professional logo fast.',
    features: ['2 logo concepts', '3 rounds of revisions', 'PNG & PDF files', 'Black & white version', 'Commercial usage rights'],
    highlight: false,
    turnaround: '48 hours',
  },
  {
    name: 'Professional',
    price: '$299',
    priceNote: 'Most popular',
    desc: 'A full brand identity foundation for growing businesses — our most chosen package.',
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
    turnaround: '48–72 hours',
  },
  {
    name: 'Brand Identity',
    price: '$599',
    priceNote: 'Complete system',
    desc: 'A complete brand system: logo, guidelines, stationery, and social media kit.',
    features: [
      'Everything in Professional',
      'Brand style guide (PDF)',
      'Business card design',
      'Letterhead design',
      'Social media profile kits',
      'Brand pattern / texture',
      'Priority support',
    ],
    highlight: false,
    turnaround: '5–7 business days',
  },
];

const steps = [
  { step: '01', title: 'Discovery Call', desc: 'We spend 15 minutes learning about your brand, industry, competitors, and visual preferences. No forms required.' },
  { step: '02', title: 'Research & Concepts', desc: 'Our designers research your market and create multiple unique logo directions tailored to your goals.' },
  { step: '03', title: 'Present & Refine', desc: 'We present your concepts and iterate based on your feedback until every element is exactly right.' },
  { step: '04', title: 'Final Delivery', desc: 'You receive all source files in every format, fully organised and ready for print, web, and social media.' },
];

const deliveryFormats = [
  { format: 'PNG', use: 'Websites, social media, digital use' },
  { format: 'SVG', use: 'Scalable vector — infinite resize' },
  { format: 'PDF', use: 'Print-ready presentations' },
  { format: 'AI', use: 'Adobe Illustrator source file' },
  { format: 'JPG', use: 'Email signatures, documents' },
  { format: 'EPS', use: 'Large-format print, signage' },
];

const industries = [
  'Healthcare & Medical', 'Real Estate', 'Restaurants & Food', 'Law Firms',
  'Construction & Trades', 'E-commerce & Retail', 'SaaS & Technology', 'Fitness & Wellness',
  'Finance & Accounting', 'Education & Coaching', 'Beauty & Salon', 'Non-Profit',
];

const stats = [
  { value: '5,000+', label: 'Logos Delivered', icon: Palette },
  { value: '12+', label: 'Years Experience', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
];

const faqs = [
  {
    q: 'How much does a professional logo design cost?',
    a: 'Professional logo design starts at $149 for a Starter package (2 concepts, 3 revisions) and goes up to $599 for a complete Brand Identity System. The Professional package at $299 is the most popular choice for small-to-medium businesses and includes unlimited revisions plus all file formats.',
  },
  {
    q: 'How long does logo design take?',
    a: 'Initial logo concepts are delivered within 48–72 hours of the discovery call or brief submission. The full project — from brief to final approved files — typically takes 5–10 business days depending on the number of revision rounds.',
  },
  {
    q: 'Do I own the logo after it is designed?',
    a: 'Yes — 100% full ownership and commercial usage rights transfer to you upon final payment. You receive all source files (AI, SVG, PDF) and can use the logo anywhere, including on merchandise, signage, and advertising.',
  },
  {
    q: 'What file formats will I receive with my logo?',
    a: 'You receive PNG, JPG, SVG, PDF, AI, and EPS — every standard format needed for print, web, social media, and large-format signage. All files are delivered in both full-colour and black-and-white versions.',
  },
  {
    q: 'What if I don\'t like any of the logo concepts?',
    a: 'We offer unlimited revisions on Professional and Brand Identity packages. If the initial direction is not right, we go back to the drawing board. We keep refining until you are 100% satisfied — there is no extra charge.',
  },
  {
    q: 'Can you design a logo for a specific industry?',
    a: 'Yes. We have designed logos for businesses across 40+ industries including healthcare, real estate, legal, construction, SaaS, e-commerce, hospitality, fitness, and finance. Each logo is customised to fit your industry norms and target audience expectations.',
  },
  {
    q: 'What makes a good logo design?',
    a: 'A good logo is memorable, versatile, relevant, and timeless. It must work at any size (from favicon to billboard), communicate your brand personality at a glance, and remain effective without colour. Simplicity is the core principle — the world\'s most recognised logos are simple enough to be drawn from memory.',
  },
  {
    q: 'Do you design logos for US and Canadian businesses?',
    a: 'Yes — the majority of our clients are based in the United States and Canada. We work remotely with businesses across all time zones and have delivered logos for businesses in cities including New York, Los Angeles, Toronto, Chicago, Houston, Vancouver, and Miami.',
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 text-sm leading-snug">{faq.q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Professional Logo Design Services — From $149 | US & Canada"
        description="Get a custom, professional logo designed by experts with 12+ years experience. 3 concepts, unlimited revisions, PNG/SVG/PDF/AI files. 5,000+ logos delivered. Starting from $149."
        canonical="/services/logo-design"
      />

      {/* JSON-LD structured data for AEO/AIO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Logo Design Service",
            "description": "Custom logo design for businesses in the US and Canada. Services include wordmark, lettermark, pictorial mark, abstract mark, combination mark, and mascot logo design.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "DigitalBoost",
              "areaServed": ["United States", "Canada"],
              "knowsAbout": ["Logo Design", "Brand Identity", "Graphic Design", "Visual Branding"]
            },
            "offers": [
              { "@type": "Offer", "name": "Starter Logo Package", "price": "149", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Professional Logo Package", "price": "299", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Brand Identity Package", "price": "599", "priceCurrency": "USD" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Logo Design Packages",
              "itemListElement": [
                { "@type": "Offer", "name": "Starter", "price": "149" },
                { "@type": "Offer", "name": "Professional", "price": "299" },
                { "@type": "Offer", "name": "Brand Identity", "price": "599" }
              ]
            }
          }),
        }}
      />

      <main id="main-content" className="flex-1 pt-16">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Palette size={12} />
              Professional Logo Design — US &amp; Canada
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Logo Design That{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Makes You Unforgettable
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              A professional logo is the single most important visual asset your business owns. We design custom, distinctive logos that tell your brand's story, build immediate trust, and make you stand out in any market.
            </p>

            {/* GEO: entity-rich trust signals */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-amber-400" /> Serving US &amp; Canada</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-amber-400" /> 48-hr first draft</span>
              <span className="flex items-center gap-1.5"><DollarSign size={12} className="text-amber-400" /> Starting at $149</span>
              <span className="flex items-center gap-1.5"><Users size={12} className="text-amber-400" /> 5,000+ logos delivered</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
              >
                Get My Logo — From $149
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="py-10 bg-gray-900" aria-label="Key statistics">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Icon size={16} className="text-amber-400" />
                      <span className="text-2xl font-black text-white">{s.value}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT IS LOGO DESIGN (AIO/GEO definitional block) ── */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  What Is Logo Design?
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  A Logo Is More Than a Symbol — It Is Your Brand's First Impression
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Logo design</strong> is the process of creating a unique visual mark that identifies a business, product, or service. A professionally designed logo communicates your brand's values, personality, and industry at a glance — typically within the first 7 seconds a customer encounters it.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Unlike clip art or template-based logos, a <strong>custom logo design</strong> is created from scratch to fit your specific business, audience, and competitive landscape. It is designed to be scalable, versatile, and timeless — working equally well on a business card, a website header, a signage banner, and a social media avatar.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Businesses with a professional logo are perceived as <strong>3x more credible</strong> by potential customers compared to those without one, according to multiple brand perception studies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Brand Recognition', value: '80%', note: 'of consumers recognise a brand by its logo before its name' },
                  { label: 'First Impression', value: '7 sec', note: 'is all it takes for a logo to form a brand impression' },
                  { label: 'Revenue Impact', value: '23%', note: 'average revenue increase from consistent brand presentation' },
                  { label: 'Trust Signal', value: '3x', note: 'more credibility for businesses with professional logos' },
                ].map((item) => (
                  <div key={item.label} className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-amber-600 mb-1">{item.value}</div>
                    <p className="text-xs font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-snug">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGO STYLES ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Logo Types Explained
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                6 Types of Logo Design — Which One Is Right for You?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                There are six primary logo types used in professional brand design. Each serves a different strategic purpose. We recommend the right style based on your industry, audience, and brand stage — then execute it with precision.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {logoStyles.map((style) => {
                const Icon = style.icon;
                return (
                  <div key={style.name} className={`${style.bg} ${style.border} border-2 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow`}>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <Icon size={20} className={style.iconColor} />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${style.tagBg} ${style.tagText}`}>
                        {style.name}
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 text-base">{style.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{style.desc}</p>
                    <div className="pt-2 border-t border-white/60 space-y-1">
                      <p className="text-xs text-gray-400 font-medium">e.g. {style.examples}</p>
                      <p className="text-xs font-bold text-gray-600">Best for: {style.bestFor}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES A GREAT LOGO ── */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Design Principles
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                What Makes a Great Logo Design?
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
                The world's most recognised logos share four non-negotiable qualities. Every logo we create is engineered to meet all four standards from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {greatLogoTraits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div key={trait.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-amber-400" />
                    </div>
                    <h3 className="font-black text-white text-lg mb-2">{trait.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{trait.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SERVE (GEO) ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Globe size={12} /> Industries We Serve
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Logo Design for Every Industry
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              We have designed logos for businesses across 40+ industries in the US and Canada. Our designers understand the visual language, audience expectations, and competitive norms of each sector.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span key={industry} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-amber-300 hover:text-amber-700 transition-colors">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="py-20 px-4 bg-gray-50" id="pricing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Logo Design Pricing — No Hidden Fees
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                All packages include our 100% satisfaction guarantee. No work is considered complete until you love the result.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 flex flex-col border-2 ${
                    pkg.highlight
                      ? 'bg-slate-900 border-amber-400 shadow-2xl shadow-amber-500/10 scale-105'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-black mb-1 ${pkg.highlight ? 'text-amber-400' : 'text-gray-900'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-xs font-semibold mb-1 ${pkg.highlight ? 'text-amber-400/70' : 'text-gray-400'}`}>
                    {pkg.priceNote} · Turnaround: {pkg.turnaround}
                  </p>
                  <p className={`text-sm mb-6 leading-relaxed mt-2 ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>
                    {pkg.desc}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-amber-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3.5 rounded-xl transition-all ${
                      pkg.highlight
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-900'
                        : 'bg-gray-900 hover:bg-gray-700 text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                How Our Logo Design Process Works
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                A transparent, collaborative process — from initial brief to final branded files in as little as 5 business days.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.step} className="text-center relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-amber-200" />
                  )}
                  <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-black mx-auto mb-4 shadow-lg shadow-amber-500/20 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILE FORMATS ── */}
        <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Download size={12} /> File Delivery
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                All Logo File Formats Included — No Extra Charge
              </h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                We deliver a complete file package on the day of final approval. No extra requests, no follow-up emails.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {deliveryFormats.map((f) => (
                <div key={f.format} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-amber-300 transition-colors">
                  <div className="text-xl font-black text-slate-800 mb-1">.{f.format}</div>
                  <p className="text-gray-500 text-xs leading-snug">{f.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-16 px-4 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Why Choose Us for Your Logo Design?
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                With hundreds of logo designers available online, here is what sets our work apart.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Expert Brand Designers',
                  desc: '12+ years of logo and brand identity experience across 40+ countries and every major industry.',
                  color: 'text-amber-500',
                  bg: 'bg-amber-100',
                },
                {
                  icon: Zap,
                  title: '48-Hour First Draft',
                  desc: 'Initial logo concepts delivered in your inbox within 2 business days of your brief — not weeks.',
                  color: 'text-green-600',
                  bg: 'bg-green-100',
                },
                {
                  icon: Shield,
                  title: 'Unlimited Revisions',
                  desc: 'We keep refining until you are 100% satisfied. No round limits on Professional and Brand Identity packages.',
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
                {
                  icon: TrendingUp,
                  title: 'Strategy-Led Design',
                  desc: 'Every design decision — colour, form, typography — is backed by brand strategy, not just aesthetics.',
                  color: 'text-rose-600',
                  bg: 'bg-rose-100',
                },
                {
                  icon: Cpu,
                  title: 'All Source Files Included',
                  desc: 'You get AI, SVG, PDF, PNG, JPG, and EPS — every format you will ever need, forever.',
                  color: 'text-slate-600',
                  bg: 'bg-slate-100',
                },
                {
                  icon: CheckCircle,
                  title: '100% Ownership Transfer',
                  desc: 'Full commercial rights transfer to you on final payment. Use the logo anywhere, forever — no royalties.',
                  color: 'text-green-600',
                  bg: 'bg-green-100',
                },
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

        {/* ── FAQ (AEO) ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Logo Design FAQ
              </h2>
              <p className="text-gray-500 text-sm">
                Clear answers to the most common questions about professional logo design services.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS (SEO) ── */}
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-lg font-black text-gray-900 mb-6">
              Explore Related Brand Design Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Brand Identity Design', href: '/services/brand-identity' },
                { label: 'WordPress Website Design', href: '/services/wordpress-design' },
                { label: 'Shopify Store Design', href: '/services/shopify-design' },
                { label: 'Social Media Design', href: '/services/social-media-design' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="bg-white border border-gray-200 hover:border-amber-300 hover:text-amber-700 text-gray-700 text-sm font-semibold text-center px-4 py-3 rounded-xl transition-all"
                >
                  {link.label}
                  <ChevronRight size={14} className="inline ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Start Your Logo Project
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Ready to Build a Brand People Remember?
            </h2>
            <p className="text-slate-400 mb-2 leading-relaxed">
              Get a custom, professional logo designed by experts who understand branding strategy, not just aesthetics. Starting from $149 with a 48-hour first draft.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              100% satisfaction guarantee · Full commercial rights · All source files included
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Start My Logo Project
                <ArrowRight size={18} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                View All Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
