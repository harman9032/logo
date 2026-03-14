import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, ShoppingCart, Zap, Shield, Globe,
  ChevronRight, MessageCircle, Package, TrendingUp, Star, CreditCard,
  RefreshCw, Truck, BarChart3, Tag, Mail, Bell, Search, Smartphone
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi, I'm interested in Shopify Website Design.";

const packages = [
  {
    name: 'Starter Store',
    price: '$499',
    desc: 'Get your Shopify store live fast with a clean, branded theme setup.',
    features: ['Shopify theme setup & customisation', 'Up to 20 products added', 'Payment gateway setup', 'Basic SEO configuration', 'Mobile responsive'],
    highlight: false,
  },
  {
    name: 'Growth Store',
    price: '$999',
    desc: 'A fully custom, conversion-optimised Shopify store built to scale.',
    features: [
      'Custom Shopify theme design',
      'Up to 50 products with descriptions',
      'Advanced payment gateways',
      'Abandoned cart recovery setup',
      'Product reviews integration',
      'SEO & speed optimisation',
      'Google/Meta Pixel integration',
      'Upsell & cross-sell setup',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise Store',
    price: '$1,999',
    desc: 'A full-scale Shopify Plus store with custom development and marketing automation.',
    features: [
      'Everything in Growth',
      'Shopify Plus features',
      'Custom app integrations',
      'Multi-currency & multi-language',
      'Advanced analytics dashboard',
      'Email marketing automation',
      'Loyalty & rewards programme',
      'Dedicated project manager',
    ],
    highlight: false,
  },
];

const storeFeatures = [
  { icon: ShoppingCart, title: 'Custom Theme Design', desc: 'Unique, on-brand storefronts that stand out from generic Shopify templates.' },
  { icon: CreditCard, title: 'Payment Integration', desc: 'Razorpay, Stripe, PayPal, UPI, and all major gateways configured seamlessly.' },
  { icon: TrendingUp, title: 'Conversion Optimised', desc: 'Strategic layouts, trust signals, and CTAs designed to maximise sales.' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Shopify\'s enterprise-grade infrastructure with SSL and PCI compliance.' },
  { icon: Globe, title: 'SEO Ready', desc: 'Optimised site structure, meta tags, and sitemaps for organic discoverability.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimised images and code for sub-2 second load times globally.' },
];

const buildTimeline = [
  { phase: 'Phase 1', title: 'Strategy & Niche Research', desc: 'We analyse your products, competitors, and target customers to plan the store architecture and user journey.' },
  { phase: 'Phase 2', title: 'Design & Theme Build', desc: 'Custom homepage, collection, product, and cart pages designed in your brand colours and style.' },
  { phase: 'Phase 3', title: 'Products & Content Upload', desc: 'We add all your products, write SEO-optimised descriptions, and upload high-quality images.' },
  { phase: 'Phase 4', title: 'Apps & Integrations', desc: 'Reviews, upsells, email pop-ups, abandoned cart, analytics pixels — all configured and tested.' },
  { phase: 'Phase 5', title: 'Testing & Launch', desc: 'Full end-to-end checkout testing, speed optimisation, and a guided launch walk-through.' },
];

const integrations = [
  { icon: RefreshCw, label: 'Abandoned Cart Recovery' },
  { icon: Star, label: 'Product Reviews (Judge.me)' },
  { icon: Tag, label: 'Discount & Bundle Apps' },
  { icon: Mail, label: 'Email Marketing (Klaviyo)' },
  { icon: Bell, label: 'Push Notifications' },
  { icon: BarChart3, label: 'Google Analytics 4' },
  { icon: Search, label: 'Google Shopping Feed' },
  { icon: Truck, label: 'Shipping & Delivery Apps' },
  { icon: Smartphone, label: 'Mobile App Builder' },
  { icon: CreditCard, label: 'Buy Now Pay Later' },
];

const faqs = [
  { q: 'Do I need a Shopify subscription?', a: 'Yes — Shopify plans start from $32/month. We help you choose the right plan and handle the entire setup.' },
  { q: 'Can you migrate my existing store?', a: 'Yes. We handle full migrations from WooCommerce, Wix, Squarespace, and other platforms, including products and customer data.' },
  { q: 'How long does the store take to build?', a: 'A Starter Store takes 3–5 days; Growth Store 7–14 days; Enterprise Store varies by complexity.' },
  { q: 'Do you add products for me?', a: 'Yes — all packages include product uploading. You provide images, descriptions, and pricing.' },
  { q: 'Will I be able to manage the store myself?', a: 'Absolutely. Shopify is one of the easiest platforms to manage. We provide a full walkthrough on how to add products, manage orders, and process payments.' },
];

export default function ShopifyDesignPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="Shopify Store Design — Custom eCommerce Stores" description="Custom Shopify store design that converts visitors into customers. Mobile-optimized, fast-loading, and branded to your business. Get a free consultation." canonical="/services/shopify-design" />
      <Navbar />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <ShoppingCart size={12} />
              Shopify eCommerce Design
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Shopify Stores That <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Sell While You Sleep</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We build high-converting, beautifully designed Shopify stores from scratch — custom branded, fully configured, and ready to take orders from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20">
                Launch My Store — From $499
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> 300+ stores launched</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> All payment gateways</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Full setup included</span>
            </div>
          </div>
        </section>

        {/* Core features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                What's Included
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Everything You Need to Sell Online</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Every Shopify store we build is a complete, production-ready selling machine from day one.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {storeFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Shopify Store Packages</h2>
              <p className="text-gray-500">From first store to full-scale operation — we have a package for every stage of your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-emerald-400 shadow-2xl shadow-emerald-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Star size={12} fill="currentColor" /> Best Value
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-4xl font-black mb-3 ${pkg.highlight ? 'text-emerald-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-emerald-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-emerald-400 hover:bg-emerald-300 text-emerald-900' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Our Process
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">How We Build Your Store</h2>
              <p className="text-gray-500 text-sm">A methodical 5-phase process ensures nothing is missed and everything is launch-ready.</p>
            </div>
            <div className="space-y-4">
              {buildTimeline.map((phase, i) => (
                <div key={phase.phase} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-sm font-black shadow-sm shadow-emerald-500/20">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                    <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">{phase.phase}</span>
                    <h3 className="font-black text-gray-900 mt-0.5 mb-1">{phase.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Apps & Integrations
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Apps We Set Up for You</h2>
              <p className="text-slate-400 text-sm">We configure the best Shopify apps to automate and scale your store from day one.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {integrations.map((intg) => {
                const Icon = intg.icon;
                return (
                  <div key={intg.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center hover:border-emerald-500/40 transition-colors group">
                    <Icon size={20} className="mx-auto mb-2 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    <p className="text-xs font-semibold text-slate-300 leading-tight">{intg.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Shopify FAQs</h2>
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
        <section className="py-16 px-4 bg-emerald-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Package size={40} className="mx-auto mb-4 text-emerald-300" />
            <h2 className="text-3xl font-black mb-3">Ready to Open Your Online Store?</h2>
            <p className="text-emerald-100 mb-8">Start selling globally with a Shopify store built for conversions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 font-bold px-8 py-4 rounded-xl transition-all">
                Launch My Shopify Store <ArrowRight size={18} />
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
