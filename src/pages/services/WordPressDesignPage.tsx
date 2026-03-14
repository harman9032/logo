import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Globe, Zap, Shield, Code, ChevronRight, MessageCircle, LayoutGrid as Layout, Search, Settings, CheckSquare, XSquare, Newspaper, ShoppingCart, Briefcase, GraduationCap, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in WordPress Website Design.";

const packages = [
  {
    name: 'Business Site',
    price: '$399',
    desc: 'A clean, professional WordPress site for service-based businesses and consultants.',
    features: ['Custom WordPress theme', 'Up to 5 pages', 'Contact forms (WPForms)', 'Basic SEO (Yoast)', 'Mobile responsive'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$699',
    desc: 'A feature-rich WordPress website with blog, SEO, and plugin integrations.',
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
    desc: 'A complete WordPress eCommerce store powered by WooCommerce.',
    features: [
      'WooCommerce setup',
      'Custom store design',
      'Up to 30 products',
      'Payment gateway integration',
      'Shipping & tax setup',
      'Product filtering & search',
      'Everything in Professional',
    ],
    highlight: false,
  },
];

const siteTypes = [
  { icon: Briefcase, title: 'Business & Corporate', desc: 'Professional sites for agencies, consultancies, and service providers.' },
  { icon: ShoppingCart, title: 'WooCommerce Stores', desc: 'Full eCommerce sites with product catalogues, cart, and checkout.' },
  { icon: Newspaper, title: 'Blogs & News Sites', desc: 'Content-heavy sites with powerful category and tag management.' },
  { icon: GraduationCap, title: 'Education & LMS', desc: 'Course platforms with LearnDash or Tutor LMS integration.' },
  { icon: Users, title: 'Membership Sites', desc: 'Restricted content, paid memberships, and user account management.' },
  { icon: Layout, title: 'Portfolio Sites', desc: 'Showcase-heavy sites for designers, photographers, and creatives.' },
];

const comparison = [
  { feature: 'Full design customisation', wordpress: true, wix: false, squarespace: false },
  { feature: 'Own your data completely', wordpress: true, wix: false, squarespace: false },
  { feature: 'Plugin ecosystem (60,000+)', wordpress: true, wix: false, squarespace: false },
  { feature: 'Advanced SEO control', wordpress: true, wix: false, squarespace: false },
  { feature: 'WooCommerce eCommerce', wordpress: true, wix: false, squarespace: false },
  { feature: 'No monthly platform fee', wordpress: true, wix: false, squarespace: false },
  { feature: 'Scalable to any size', wordpress: true, wix: false, squarespace: false },
  { feature: 'Developer handoff possible', wordpress: true, wix: false, squarespace: false },
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

const faqs = [
  { q: 'Why WordPress?', a: 'WordPress powers over 40% of all websites globally. It\'s flexible, scalable, and has the largest plugin ecosystem — perfect for businesses of any size.' },
  { q: 'What about hosting?', a: 'We recommend providers like SiteGround, Kinsta, or WP Engine. We can guide you through setup or use your existing hosting.' },
  { q: 'Can I update the site myself?', a: 'Yes — WordPress is highly user-friendly. We provide a training session and documentation so you can update content confidently.' },
  { q: 'Do you handle security and backups?', a: 'Yes. All sites are hardened with security plugins and automated backup configurations.' },
  { q: 'Can you redesign my existing WordPress site?', a: 'Absolutely — full redesigns while preserving your existing content and SEO rankings are our specialty.' },
];

export default function WordPressDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="WordPress Design — Custom WordPress Websites" description="Custom WordPress website design with full CMS capabilities. Mobile-responsive, SEO-ready, and easy to manage. Unlimited revisions included." canonical="/services/wordpress-design" />
      <Navbar />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Globe size={12} />
              WordPress Website Design
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              WordPress Websites That <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Grow With You</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Powerful, flexible WordPress sites designed from scratch — fully custom, SEO-optimised, secure, and easy for you to manage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-sky-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/20">
                Build My WordPress Site — From $399
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

        {/* Types of Sites */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Site Types
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">6 Types of WordPress Sites We Build</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">WordPress handles almost any website type. Here are the most common projects we build.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {siteTypes.map((site) => {
                const Icon = site.icon;
                return (
                  <div key={site.title} className="bg-sky-50 border border-sky-100 rounded-2xl p-6 hover:border-sky-300 hover:shadow-sm transition-all">
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

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Platform Comparison
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">WordPress vs. Wix vs. Squarespace</h2>
              <p className="text-gray-500 text-sm">Why serious businesses choose WordPress every time.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 border-b border-gray-200 px-5 py-3">
                <div className="col-span-2">Feature</div>
                <div className="text-center text-sky-600">WordPress</div>
                <div className="text-center text-gray-400">Others</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-4 items-center px-5 py-3.5 ${i % 2 === 0 ? '' : 'bg-gray-50'} border-b border-gray-100 last:border-0`}>
                  <div className="col-span-2 text-sm text-gray-700 font-medium">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.wordpress ? (
                      <CheckSquare size={18} className="text-green-600" />
                    ) : (
                      <XSquare size={18} className="text-gray-300" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {!row.wordpress ? (
                      <CheckSquare size={18} className="text-gray-400" />
                    ) : (
                      <XSquare size={18} className="text-red-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">WordPress Packages</h2>
              <p className="text-gray-500">From blogs to full eCommerce — pick the right fit for your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-sky-400 shadow-2xl shadow-sky-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Zap size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-4xl font-black mb-3 ${pkg.highlight ? 'text-sky-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-sky-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-sky-400 hover:bg-sky-300 text-sky-900' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plugin stack */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              Plugin Stack
            </div>
            <h2 className="text-2xl font-black text-white mb-2">Plugins & Tools We Use</h2>
            <p className="text-slate-400 mb-8 text-sm">Industry-leading plugins for performance, security, and SEO — all included in your build.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {pluginStack.map((p) => (
                <span key={p} className="bg-sky-900/60 text-sky-300 border border-sky-700/50 text-sm font-semibold px-4 py-2 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why WordPress benefits */}
        <section className="py-16 px-4 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Why We Recommend WordPress</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: Layout, title: 'Fully Customisable', desc: 'Any design, any functionality — no template constraints.', color: 'text-sky-600', bg: 'bg-sky-50' },
                { icon: Search, title: 'SEO Powerhouse', desc: 'Built-in tools and plugins to dominate organic search results.', color: 'text-green-600', bg: 'bg-green-50' },
                { icon: Settings, title: 'Easy to Manage', desc: 'Update your own content, images, and pages without a developer.', color: 'text-amber-600', bg: 'bg-amber-50' },
                { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security setup with regular updates and backups.', color: 'text-rose-600', bg: 'bg-rose-50' },
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

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">WordPress FAQs</h2>
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
        <section className="py-16 px-4 bg-sky-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Code size={40} className="mx-auto mb-4 text-sky-300" />
            <h2 className="text-3xl font-black mb-3">Let's Build Something Powerful</h2>
            <p className="text-sky-100 mb-8">A WordPress site that works for your business, 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-bold px-8 py-4 rounded-xl transition-all">
                Start My WordPress Project <ArrowRight size={18} />
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
