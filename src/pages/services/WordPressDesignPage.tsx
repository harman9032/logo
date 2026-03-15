import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Globe, Zap, Shield, Code, ChevronRight,
  MessageCircle, LayoutGrid as Layout, Search, Settings,
  CheckSquare, XSquare, Newspaper, ShoppingCart, Briefcase,
  GraduationCap, Users, MapPin, Clock, DollarSign, Star,
  ChevronDown, ChevronUp, Award, TrendingUp, Cpu, FileText,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20WordPress%20Website%20Design.";

const packages = [
  {
    name: 'Business Site',
    price: '$399',
    priceNote: 'One-time payment',
    turnaround: '5–7 business days',
    desc: 'A clean, professional WordPress website for service-based businesses and consultants.',
    features: [
      'Custom WordPress theme',
      'Up to 5 pages',
      'Contact forms (WPForms)',
      'Basic SEO setup (Yoast)',
      'Mobile responsive design',
      'Commercial usage rights',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$699',
    priceNote: 'Most popular',
    turnaround: '7–10 business days',
    desc: 'A feature-rich WordPress website with blog, advanced SEO, and full plugin integrations.',
    features: [
      'Custom theme design',
      'Up to 10 pages',
      'Blog / news section',
      'Advanced SEO setup',
      'Speed optimisation',
      'Security hardening',
      'Backup configuration',
      'Google Analytics & Search Console',
    ],
    highlight: true,
  },
  {
    name: 'WooCommerce Store',
    price: '$999',
    priceNote: 'Complete eCommerce',
    turnaround: '10–14 business days',
    desc: 'A complete WordPress eCommerce store powered by WooCommerce — ready to sell from day one.',
    features: [
      'WooCommerce setup & design',
      'Up to 30 products',
      'Payment gateway integration',
      'Shipping & tax configuration',
      'Product filtering & search',
      'Everything in Professional',
    ],
    highlight: false,
  },
];

const siteTypes = [
  { icon: Briefcase, title: 'Business & Corporate', desc: 'Professional sites for agencies, consultancies, and service providers that need to convert visitors into leads.' },
  { icon: ShoppingCart, title: 'WooCommerce Stores', desc: 'Full eCommerce stores with product catalogues, cart, checkout, and payment gateway integration.' },
  { icon: Newspaper, title: 'Blogs & News Sites', desc: 'Content-heavy publishing sites with SEO-optimised categories, tags, and editorial workflows.' },
  { icon: GraduationCap, title: 'Education & LMS', desc: 'Online course platforms with LearnDash or Tutor LMS — sell and deliver courses at any scale.' },
  { icon: Users, title: 'Membership Sites', desc: 'Restricted content, paid memberships, and user account management with MemberPress.' },
  { icon: Layout, title: 'Portfolio Sites', desc: 'Showcase-heavy sites for designers, photographers, agencies, and creative professionals.' },
];

const comparison = [
  { feature: 'Full design customisation', wordpress: true },
  { feature: 'Own your data completely', wordpress: true },
  { feature: 'Plugin ecosystem (60,000+)', wordpress: true },
  { feature: 'Advanced SEO control', wordpress: true },
  { feature: 'WooCommerce eCommerce', wordpress: true },
  { feature: 'No monthly platform fee', wordpress: true },
  { feature: 'Scalable to any traffic level', wordpress: true },
  { feature: 'Developer handoff possible', wordpress: true },
];

const pluginStack = [
  'Yoast SEO / RankMath',
  'WPForms / Contact Form 7',
  'WP Rocket / LiteSpeed Cache',
  'Elementor / Gutenberg',
  'Wordfence Security',
  'UpdraftPlus Backups',
  'WooCommerce',
  'MonsterInsights Analytics',
];

const stats = [
  { value: '43%', label: 'of all websites run on WordPress', icon: Globe },
  { value: '200+', label: 'WordPress sites delivered', icon: Code },
  { value: '12+', label: 'Years WordPress experience', icon: Award },
  { value: '48 hr', label: 'First design draft', icon: Clock },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Dedicated WordPress Freelancer',
    desc: '12+ years building custom WordPress sites for businesses in the US, Canada, and UK — not a template reseller.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Clock,
    title: '48-Hour First Draft',
    desc: 'Initial designs delivered within 2 business days. No waiting weeks for a first look at your website.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Security & Speed Built In',
    desc: 'Every WordPress site we build includes security hardening, caching, and performance optimisation — not as extras.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: TrendingUp,
    title: 'SEO-Ready from Launch',
    desc: 'Yoast or RankMath configured, schema markup, sitemap, and Google Search Console integration done at delivery.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: FileText,
    title: 'Training & Documentation',
    desc: 'You get a recorded walkthrough and written docs so you can update your own pages without needing a developer.',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
  },
  {
    icon: Cpu,
    title: 'Full Source Access',
    desc: 'You receive full admin access, all theme files, and database credentials. You own everything — zero lock-in.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

const industries = [
  'Law Firms & Legal', 'Medical & Healthcare', 'Real Estate', 'Restaurants & Food',
  'Construction & Trades', 'E-commerce & Retail', 'SaaS & Technology', 'Fitness & Gyms',
  'Finance & Accounting', 'Coaches & Consultants', 'Beauty & Salons', 'Non-Profits',
];

const processSteps = [
  { step: '01', title: 'Discovery Call', desc: 'A 15-minute call to understand your goals, audience, and content needs. No lengthy questionnaires.' },
  { step: '02', title: 'Design & Build', desc: 'We design your WordPress site in Elementor or Gutenberg, then build it on a private staging environment.' },
  { step: '03', title: 'Review & Revise', desc: 'You review the staging site and request changes. We revise until every element is exactly right.' },
  { step: '04', title: 'Launch & Handoff', desc: 'We push the site live, configure hosting and DNS, and hand over a training session and all credentials.' },
];

const faqs = [
  {
    q: 'How much does a WordPress freelancer charge to build a website?',
    a: 'A professional WordPress freelancer typically charges between $399 and $2,000+ depending on the complexity of the project. Simple business sites start at $399, feature-rich professional sites cost around $699, and full WooCommerce eCommerce stores start at $999. These are one-time flat fees — no monthly platform fees.',
  },
  {
    q: 'How long does it take a WordPress freelancer to build a website?',
    a: 'A standard WordPress business site takes 5–10 business days from brief to launch. A professional site with blog and advanced features takes 7–10 days. A WooCommerce store takes 10–14 business days. First design drafts are delivered within 48 hours of the discovery call.',
  },
  {
    q: 'Why hire a WordPress freelancer instead of an agency?',
    a: 'A dedicated WordPress freelancer offers direct communication, faster turnarounds, lower overheads, and personal accountability. You work with the same person from start to finish — no junior handoffs or account managers. For most small-to-medium business sites, a specialist freelancer delivers higher quality at a fraction of agency pricing.',
  },
  {
    q: 'What is included in a custom WordPress website?',
    a: 'A custom WordPress website includes a unique design built from scratch (not a purchased theme), mobile responsiveness, contact forms, on-page SEO configuration, speed optimisation, security hardening, automated backup setup, and a training session. All source files and admin access are transferred to you upon final payment.',
  },
  {
    q: 'Can a WordPress freelancer redesign my existing website?',
    a: 'Yes. Full WordPress redesigns — including preserving existing content, redirecting old URLs to maintain SEO rankings, and migrating to a new host — are a core service. Your Google rankings are protected throughout the migration process.',
  },
  {
    q: 'What hosting should I use for WordPress?',
    a: 'We recommend managed WordPress hosting providers like SiteGround, Kinsta, or WP Engine for best performance and security. We can guide you through setup, configure your hosting environment, or work within your existing hosting account.',
  },
  {
    q: 'Will I be able to update my WordPress site myself?',
    a: 'Yes. WordPress is designed for non-technical users to manage. Every project includes a recorded walkthrough video and written documentation covering how to add pages, update content, publish blog posts, and manage plugins. Most clients manage their own content from day one.',
  },
  {
    q: 'Do you provide WordPress support after the site launches?',
    a: 'Yes. Post-launch support for bug fixes, minor updates, and questions is included for 30 days. Ongoing monthly maintenance packages covering updates, backups, security scans, and uptime monitoring are also available.',
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
        {open
          ? <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
          : <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function WordPressDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="WordPress Freelancer — Custom WordPress Websites from $399 | US & Canada"
        description="Hire a professional WordPress freelancer with 12+ years experience. Custom websites, WooCommerce stores, and redesigns. SEO-ready, fast, secure. Starting from $399. 48-hr first draft."
        canonical="/services/wordpress-design"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WordPress Freelancer — Custom WordPress Website Design",
            "description": "Custom WordPress website design and development for businesses in the US and Canada. Services include business sites, WooCommerce stores, blog sites, LMS platforms, and full redesigns.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "DigitalBoost",
              "areaServed": ["United States", "Canada", "United Kingdom"],
              "knowsAbout": [
                "WordPress Design", "WordPress Development", "WooCommerce",
                "WordPress Freelancer", "Custom WordPress Themes", "WordPress SEO"
              ]
            },
            "offers": [
              { "@type": "Offer", "name": "Business Site", "price": "399", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Professional WordPress Site", "price": "699", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "WooCommerce Store", "price": "999", "priceCurrency": "USD" }
            ],
            "mainEntityOfPage": {
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            },
          }),
        }}
      />

      <main id="main-content" className="flex-1 pt-16">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 py-24 px-4 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Globe size={12} />
              WordPress Freelancer — US &amp; Canada
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Hire a WordPress Freelancer{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Who Delivers Results
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              Custom WordPress websites designed and built from scratch — fully responsive, SEO-optimised, fast, and secure. 12+ years experience. No templates. No outsourcing. Direct communication from brief to launch.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-sky-400" /> Serving US &amp; Canada</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-sky-400" /> 48-hr first draft</span>
              <span className="flex items-center gap-1.5"><DollarSign size={12} className="text-sky-400" /> Starting at $399</span>
              <span className="flex items-center gap-1.5"><Star size={12} className="text-sky-400" /> 200+ sites delivered</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-sky-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/20"
              >
                Hire Me — From $399
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Me
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
                      <Icon size={16} className="text-sky-400" />
                      <span className="text-2xl font-black text-white">{s.value}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT IS A WORDPRESS FREELANCER (AIO/GEO definitional block) ── */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  What Is a WordPress Freelancer?
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  A WordPress Expert Who Works Directly With You
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A <strong>WordPress freelancer</strong> is an independent professional who designs, builds, and maintains WordPress websites for businesses. Unlike a web design agency, a freelancer provides direct communication, faster turnarounds, and personal accountability — you work with the same expert from the first call to launch day.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  WordPress freelancers typically specialise in custom theme development, plugin configuration, WooCommerce stores, SEO setup, and site migrations. A skilled WordPress freelancer costs significantly less than an agency while delivering comparable — or superior — quality for most business websites.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WordPress powers <strong>43% of all websites on the internet</strong>, making it the most widely used content management system in the world. Hiring a specialist WordPress freelancer ensures your site is built on a proven, scalable foundation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Market Share', value: '43%', note: 'of all websites globally run on WordPress' },
                  { label: 'Plugin Ecosystem', value: '60K+', note: 'free and premium plugins available' },
                  { label: 'Cost vs Agency', value: '60%', note: 'average savings hiring a specialist freelancer' },
                  { label: 'Time to Launch', value: '7 days', note: 'average launch timeline for a business site' },
                ].map((item) => (
                  <div key={item.label} className="bg-sky-50 border border-sky-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-sky-600 mb-1">{item.value}</div>
                    <p className="text-xs font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-snug">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SITE TYPES ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Types of WordPress Sites
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                6 Types of WordPress Websites I Build
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                WordPress handles virtually any website type. Every project is built custom — no page builder templates purchased and resold.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {siteTypes.map((site) => {
                const Icon = site.icon;
                return (
                  <div key={site.title} className="bg-white border border-sky-100 rounded-2xl p-6 hover:border-sky-300 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{site.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{site.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Platform Comparison
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                WordPress vs. Wix vs. Squarespace
              </h2>
              <p className="text-gray-500 text-sm">Why serious businesses choose WordPress — and a WordPress freelancer — every time.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 border-b border-gray-200 px-5 py-3">
                <div className="col-span-2">Feature</div>
                <div className="text-center text-sky-600">WordPress</div>
                <div className="text-center text-gray-400">Wix / Squarespace</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 items-center px-5 py-3.5 ${i % 2 === 0 ? '' : 'bg-gray-50'} border-b border-gray-100 last:border-0`}
                >
                  <div className="col-span-2 text-sm text-gray-700 font-medium">{row.feature}</div>
                  <div className="flex justify-center">
                    <CheckSquare size={18} className="text-green-600" />
                  </div>
                  <div className="flex justify-center">
                    <XSquare size={18} className="text-red-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="py-20 px-4 bg-gray-50" id="pricing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                WordPress Freelancer Pricing — No Hidden Fees
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Flat-rate project pricing. No hourly billing surprises. All packages include 100% satisfaction guarantee and full code ownership.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 flex flex-col border-2 ${
                    pkg.highlight
                      ? 'bg-slate-900 border-sky-400 shadow-2xl shadow-sky-500/10 scale-105'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Zap size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-black mb-1 ${pkg.highlight ? 'text-sky-400' : 'text-gray-900'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-xs font-semibold mb-1 ${pkg.highlight ? 'text-sky-400/70' : 'text-gray-400'}`}>
                    {pkg.priceNote} · Turnaround: {pkg.turnaround}
                  </p>
                  <p className={`text-sm mb-6 leading-relaxed mt-2 ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>
                    {pkg.desc}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-sky-400' : 'text-green-600'}`} />
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
                        ? 'bg-sky-400 hover:bg-sky-300 text-sky-900'
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
                My Process
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                How the WordPress Freelance Process Works
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                A clear, predictable process — brief to live site in as few as 7 business days.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.step} className="text-center relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-sky-200" />
                  )}
                  <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-black mx-auto mb-4 shadow-lg shadow-sky-500/20 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLUGIN STACK ── */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              Plugin Stack
            </div>
            <h2 className="text-2xl font-black text-white mb-2">
              WordPress Plugins &amp; Tools I Use
            </h2>
            <p className="text-slate-400 mb-8 text-sm max-w-lg mx-auto leading-relaxed">
              Industry-leading plugins for performance, security, SEO, and functionality — all included and configured at no extra charge.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {pluginStack.map((p) => (
                <span key={p} className="bg-sky-900/60 text-sky-300 border border-sky-700/50 text-sm font-semibold px-4 py-2 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE THIS FREELANCER ── */}
        <section className="py-16 px-4 bg-sky-50 border-y border-sky-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Why Hire This WordPress Freelancer?
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                With thousands of WordPress developers on platforms like Upwork and Fiverr, here is what sets this service apart.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-sky-100">
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

        {/* ── INDUSTRIES ── */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Globe size={12} /> Industries Served
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              WordPress Websites for Every Industry
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              WordPress projects delivered for businesses across the US and Canada — from solo consultants to multi-location enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span key={industry} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-sky-300 hover:text-sky-700 transition-colors">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (AEO) ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                WordPress Freelancer FAQ
              </h2>
              <p className="text-gray-500 text-sm">
                Answers to the most common questions about hiring a WordPress freelancer.
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
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-lg font-black text-gray-900 mb-6">
              Explore Related Web Design Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Shopify Store Design', href: '/services/shopify-design' },
                { label: 'Brand Identity Design', href: '/services/brand-identity' },
                { label: 'Logo Design', href: '/services/logo-design' },
                { label: 'Digital Marketing', href: '/services/digital-marketing' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="bg-gray-50 border border-gray-200 hover:border-sky-300 hover:text-sky-700 text-gray-700 text-sm font-semibold text-center px-4 py-3 rounded-xl transition-all"
                >
                  {link.label}
                  <ChevronRight size={14} className="inline ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-sky-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Hire a WordPress Freelancer
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Ready to Build Your WordPress Website?
            </h2>
            <p className="text-sky-100 mb-2 leading-relaxed">
              Custom WordPress design by a specialist with 12+ years experience. Direct communication, fast delivery, and a site you fully own.
            </p>
            <p className="text-sky-300/70 text-sm mb-8">
              Starting from $399 · 48-hr first draft · 100% satisfaction guarantee · Full source code ownership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Start My WordPress Project
                <ArrowRight size={18} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all"
              >
                All Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
