import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Monitor, Zap, Globe,
  ChevronRight, MessageCircle, Search, Smartphone, BarChart3, Code,
  Shield, Clock, Users, Store, Stethoscope, GraduationCap, Briefcase,
  Home, Utensils, Dumbbell, ShoppingCart, Camera, Wrench
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in AI Website Design.";

const packages = [
  {
    name: 'Landing Page',
    price: '$299',
    desc: 'A single high-converting page — perfect for product launches, lead generation, and campaigns.',
    features: ['1-page responsive design', 'Mobile-first build', 'Basic SEO setup', 'Contact form', 'Fast performance'],
    highlight: false,
  },
  {
    name: 'Business Website',
    price: '$499',
    desc: 'A professional multi-page website that showcases your brand and drives enquiries.',
    features: [
      'Up to 5 pages',
      'Fully responsive design',
      'On-page SEO optimisation',
      'Contact form & Google Maps',
      'Google Analytics integration',
      'Social media links',
      'Fast loading (Core Web Vitals)',
    ],
    highlight: true,
  },
  {
    name: 'Premium Website',
    price: '$899',
    desc: 'A feature-rich website with advanced functionality, blog, and conversion optimisation.',
    features: [
      'Up to 10 pages',
      'Everything in Business',
      'Blog / news section',
      'Live chat integration',
      'Advanced SEO setup',
      'Newsletter sign-up',
      'Priority support',
    ],
    highlight: false,
  },
];

const coreFeatures = [
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Every site is designed for mobile screens first, then scaled up — matching how 70%+ of your visitors browse.' },
  { icon: Search, title: 'SEO Foundations Built-In', desc: 'Proper heading structure, meta tags, schema markup, XML sitemaps, and page speed — all configured from the start.' },
  { icon: Zap, title: 'Sub-2s Load Speed', desc: 'Compressed images, minimal scripts, and optimised code ensure your site loads fast and reduces bounce rates.' },
  { icon: Shield, title: 'SSL & Security', desc: 'HTTPS encryption, secure forms, and best-practice security headers to protect your visitors and your reputation.' },
  { icon: BarChart3, title: 'Analytics & Tracking', desc: 'Google Analytics 4, Google Search Console, and Meta Pixel integration to track every visit and conversion.' },
  { icon: Users, title: 'Conversion-Optimised Layout', desc: 'Strategic placement of CTAs, trust signals, testimonials, and contact forms to maximise enquiries and sales.' },
  { icon: Code, title: 'Clean, Maintainable Code', desc: 'Built on modern frameworks with readable, well-structured code you can hand to any developer in the future.' },
  { icon: Globe, title: 'Cross-Browser Compatible', desc: 'Tested on Chrome, Safari, Firefox, and Edge — on both desktop and mobile — before delivery.' },
];

const industries = [
  { icon: Store, label: 'Retail & eCommerce' },
  { icon: Stethoscope, label: 'Healthcare & Clinics' },
  { icon: GraduationCap, label: 'Education & Coaching' },
  { icon: Briefcase, label: 'Professional Services' },
  { icon: Home, label: 'Real Estate & Property' },
  { icon: Utensils, label: 'Restaurants & Food' },
  { icon: Dumbbell, label: 'Fitness & Wellness' },
  { icon: ShoppingCart, label: 'Wholesale & B2B' },
  { icon: Camera, label: 'Photography & Creative' },
  { icon: Wrench, label: 'Trades & Construction' },
];

const techStack = [
  { label: 'React / Next.js', desc: 'Lightning-fast, modern frontend' },
  { label: 'AI-Assisted Design', desc: 'Smart layouts that convert' },
  { label: 'Tailwind CSS', desc: 'Pixel-perfect responsive UI' },
  { label: 'SEO Optimised', desc: 'Built to rank from day one' },
  { label: 'Core Web Vitals', desc: 'Google-friendly performance' },
  { label: 'HTTPS + Security', desc: 'SSL & best-practice security' },
];

const faqs = [
  { q: 'How long does a website take?', a: 'Most business websites are completed within 5–10 business days, depending on content availability and revision rounds.' },
  { q: 'Do you include hosting?', a: 'We deliver the complete website files. Hosting and domain registration are separate costs paid directly to providers. We can guide you through setup.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. We handle full redesigns and can migrate your existing content.' },
  { q: 'Is the website mobile-friendly?', a: 'Yes — all sites are mobile-first and tested across all major devices and browsers.' },
  { q: 'Will I be able to update the site myself?', a: 'Yes. We can build with a CMS so you can easily manage content, or provide a handoff tutorial.' },
];

export default function AIWebsiteDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Monitor size={12} />
              AI-Powered Web Design
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Websites Built to <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Convert & Impress</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We design and build AI-powered websites that look stunning, load fast, rank on Google, and turn visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20">
                Start My Website — From $299
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 2,000+ websites delivered</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Mobile-first, always</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> SEO-ready from day one</span>
            </div>
          </div>
        </section>

        {/* Every Site Includes */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Standard Inclusions
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Everything Every Site Includes</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                These aren't upsells — they're fundamentals. Every website we build includes these 8 non-negotiables at no extra charge.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-green-50 border border-green-100 rounded-2xl p-5 hover:border-green-300 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-green-500/20">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-black text-gray-900 text-sm mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Website Packages</h2>
              <p className="text-gray-500">From single landing pages to full-featured business sites.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-green-400 shadow-2xl shadow-green-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Zap size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-4xl font-black mb-3 ${pkg.highlight ? 'text-green-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-green-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-green-400 hover:bg-green-300 text-green-900' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Industry Experience
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Industries We've Designed For</h2>
              <p className="text-gray-500 text-sm">We understand the unique needs of different sectors — no generic templates here.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:bg-green-50 hover:border-green-200 transition-colors group">
                    <Icon size={20} className="mx-auto mb-2 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <p className="text-xs font-semibold text-gray-700 leading-tight">{ind.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Technology
              </div>
              <h2 className="text-2xl font-black text-white mb-2">What's Under the Hood</h2>
              <p className="text-slate-400 text-sm">Modern tools that produce fast, secure, future-proof websites.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((t) => (
                <div key={t.label} className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-green-500/40 transition-colors">
                  <Code size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">{t.label}</p>
                    <p className="text-slate-400 text-xs">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline visual */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Clock size={12} /> Timeline
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">From Brief to Live in Days</h2>
              <p className="text-gray-500 text-sm">A streamlined process that keeps things moving without cutting corners.</p>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-green-200" />
              {[
                { day: 'Day 1', title: 'Brief & Kickoff', desc: 'We discuss your goals, gather content, and align on the design direction and sitemap.' },
                { day: 'Day 2–3', title: 'Design Mockups', desc: 'We create high-fidelity page designs for your approval before any coding begins.' },
                { day: 'Day 4–6', title: 'Development', desc: 'Approved designs are built into a fully responsive, functional website.' },
                { day: 'Day 7–9', title: 'Review & Revisions', desc: 'You test the live preview, request changes, and we polish every detail.' },
                { day: 'Day 10', title: 'Launch', desc: 'Your site goes live. We assist with domain, hosting setup, and final checks.' },
              ].map((item, i) => (
                <div key={item.day} className="relative flex gap-6 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black shadow z-10">
                    {i + 1}
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-1">
                    <span className="text-green-600 text-xs font-bold uppercase tracking-widest">{item.day}</span>
                    <h3 className="font-black text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Common Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Globe size={40} className="mx-auto mb-4 text-green-300" />
            <h2 className="text-3xl font-black mb-3">Let's Build Your Dream Website</h2>
            <p className="text-green-100 mb-8">Professional, fast, and built for results. Get started today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold px-8 py-4 rounded-xl transition-all">
                Book Free Consultation <ArrowRight size={18} />
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
