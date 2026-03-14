import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Award,
  Clock,
  MessageCircle,
  TrendingUp,
  Sparkles,
  BadgeCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi, I'd like to know more about pricing";

const plans = [
  {
    name: "Logo Design",
    price: "$149",
    oldPrice: "$800+",
    timeline: "48 hours",
    tagline: "Make a lasting first impression",
    badge: null,
    popular: false,
    color: {
      border: "border-amber-200",
      header: "from-amber-50 to-yellow-50",
      accent: "text-amber-600",
      icon: "bg-amber-100 text-amber-600",
      pill: "bg-amber-50 text-amber-700 border-amber-200",
      btn: "bg-amber-500 hover:bg-amber-400 text-white",
    },
    features: [
      "3 unique logo concepts",
      "Unlimited revisions until perfect",
      "PNG, SVG, PDF & AI source files",
      "Light & dark versions",
      "Brand colour palette",
      "Typography recommendation",
      "Full commercial usage rights",
      "48-hour delivery guarantee",
    ],
    notIncluded: ["Website design", "Marketing strategy"],
    cta: "Get My Logo",
    href: "/services/logo-design",
    resultTag: "Avg. client result: 2× more credibility",
    paymentNote: "One-time payment. Split into 2 installments available.",
  },
  {
    name: "AI Website Design",
    price: "$299",
    oldPrice: "$2,500+",
    timeline: "3–5 business days",
    tagline: "Your digital storefront, built to convert",
    badge: "Most Popular",
    popular: true,
    color: {
      border: "border-green-400",
      header: "from-green-600 to-emerald-700",
      accent: "text-green-600",
      icon: "bg-green-100 text-green-600",
      pill: "bg-green-50 text-green-700 border-green-200",
      btn: "bg-green-500 hover:bg-green-400 text-white",
    },
    features: [
      "Fully responsive, mobile-first design",
      "AI-powered layout for conversions",
      "On-page SEO setup",
      "Contact form integration",
      "Google Analytics ready",
      "Social media links setup",
      "Fast-loading performance",
      "Full source code ownership",
      "1 month free support",
    ],
    notIncluded: ["Domain & hosting fees", "Logo design (add-on available)"],
    cta: "Start My Website",
    href: "/services/ai-website-design",
    resultTag: "Avg. client result: 3× more leads in 30 days",
    paymentNote: "One-time payment. Split into 2 installments available.",
  },
  {
    name: "WordPress Design",
    price: "$399",
    oldPrice: "$3,500+",
    timeline: "5–7 business days",
    tagline: "Powerful CMS you fully control",
    badge: null,
    popular: false,
    color: {
      border: "border-sky-200",
      header: "from-sky-50 to-cyan-50",
      accent: "text-sky-600",
      icon: "bg-sky-100 text-sky-600",
      pill: "bg-sky-50 text-sky-700 border-sky-200",
      btn: "bg-sky-500 hover:bg-sky-400 text-white",
    },
    features: [
      "Custom WordPress theme design",
      "Full CMS — edit content yourself",
      "WooCommerce ready (optional)",
      "SEO-optimised page structure",
      "Speed & performance optimisation",
      "Contact & lead capture forms",
      "Google Analytics integration",
      "3 months free support",
    ],
    notIncluded: ["Hosting & domain", "Content writing"],
    cta: "Build My WordPress Site",
    href: "/services/wordpress-design",
    resultTag: "Avg. client result: Top 3 Google ranking in 60 days",
    paymentNote: "One-time payment. Split into 2 installments available.",
  },
  {
    name: "Complete Digital Package",
    price: "$999",
    oldPrice: "$8,000+",
    timeline: "7–10 business days",
    tagline: "Everything you need to dominate online",
    badge: "Best Value",
    popular: false,
    color: {
      border: "border-slate-400",
      header: "from-slate-800 to-slate-900",
      accent: "text-slate-300",
      icon: "bg-slate-700 text-slate-200",
      pill: "bg-slate-700/50 text-slate-200 border-slate-600",
      btn: "bg-yellow-400 hover:bg-yellow-300 text-slate-900",
    },
    features: [
      "Everything in Logo Design",
      "Everything in AI Website Design",
      "Digital marketing strategy plan",
      "Social media brand guidelines",
      "Content calendar framework (30 days)",
      "Competitor analysis report",
      "90-day growth roadmap",
      "Priority support included",
      "Monthly check-in call (3 months)",
    ],
    notIncluded: [],
    cta: "Get the Full Package",
    href: "/contact",
    resultTag: "Avg. client result: 4× more qualified leads in 90 days",
    paymentNote: "One-time payment. Split into 3 installments available.",
  },
];

const addOns = [
  { name: "Extra Logo Concepts", price: "$49", desc: "3 additional unique concepts beyond the standard set" },
  { name: "Rush Delivery (24hr)", price: "$99", desc: "Get your project delivered in 24 hours guaranteed" },
  { name: "Brand Guidelines Doc", price: "$149", desc: "Full PDF brand guidelines for team and vendor use" },
  { name: "Social Media Kit", price: "$199", desc: "10 branded templates for Instagram, Facebook & LinkedIn" },
  { name: "E-commerce Setup", price: "$299", desc: "Add a full WooCommerce or Shopify store to any website" },
  { name: "Monthly SEO", price: "$299/mo", desc: "Ongoing SEO management, content, and ranking reports" },
];

const faqs = [
  {
    q: "Can I split the payment?",
    a: "Yes. For the Logo and Website packages, you can split into 2 equal payments. The Complete Package can be split into 3 installments. Just mention it when you book your call.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We offer unlimited revisions on every project until you're genuinely happy. If we miss the agreed delivery timeline, you get a full refund — no questions asked.",
  },
  {
    q: "Why so much cheaper than a local agency?",
    a: "We're based in India with 12+ years of experience serving US, UK, and Canadian clients. Our overhead is lower, so you get the same premium output at a fraction of the price. Our 5,000+ happy clients speak for themselves.",
  },
  {
    q: "How is this different from Fiverr?",
    a: "On Fiverr you're gambling on unknown freelancers with no accountability. With us, you get a dedicated 12-year professional team, guaranteed turnaround, unlimited revisions, and strategy built into every deliverable — not just pretty pictures.",
  },
  {
    q: "Do I own everything at the end?",
    a: "100%. Once payment is complete, every file, source file, and piece of work we create transfers to you with full commercial ownership. No licence fees, no lock-in.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Absolutely. Start with Logo Design or AI Website Design and upgrade to the Complete Package later — you only pay the difference, never the full price again.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="Transparent Pricing — Logo $299, Website $499" description="Simple, flat pricing with no hidden fees. Logo Design from $299, AI Website Design from $499, Complete Digital Package from $999. One-time payment." canonical="/pricing" />
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Transparent Pricing · No Hidden Fees
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Premium Design at{' '}
            <span className="text-yellow-400">Freelancer Prices</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Agency-quality results at 70–90% less than what US agencies charge. Every package includes unlimited revisions and full file ownership.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: <Shield className="h-4 w-4" />, text: "100% Satisfaction Guarantee" },
              { icon: <Clock className="h-4 w-4" />, text: "Fast Delivery" },
              { icon: <BadgeCheck className="h-4 w-4" />, text: "You Own Everything" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white">
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color.border} overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'shadow-lg shadow-green-500/20' : ''}`}
              >
                {plan.badge && (
                  <div className={`absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-black uppercase tracking-widest ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900'}`}>
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`${plan.popular ? `bg-gradient-to-br ${plan.color.header} text-white pt-${plan.badge ? '10' : '8'}` : `bg-gradient-to-br ${plan.color.header} pt-${plan.badge ? '10' : '8'}`} px-6 pb-6`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.popular ? 'text-green-200' : plan.color.accent}`}>
                    {plan.timeline} delivery
                  </p>
                  <h2 className={`text-xl font-black mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h2>
                  <p className={`text-xs mb-4 ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>{plan.tagline}</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className={`text-4xl font-black leading-none ${plan.popular ? 'text-yellow-300' : plan.color.accent}`}>{plan.price}</span>
                    <span className={`text-sm line-through mb-1 ${plan.popular ? 'text-green-300' : 'text-gray-400'}`}>{plan.oldPrice}</span>
                  </div>
                  <p className={`text-xs ${plan.popular ? 'text-green-200' : 'text-gray-400'}`}>{plan.paymentNote}</p>
                </div>

                {/* Features */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border mb-5 ${plan.color.pill}`}>
                    <TrendingUp className="h-3 w-3" />
                    {plan.resultTag}
                  </div>

                  <ul className="space-y-2.5 mb-4 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Not included</p>
                      <ul className="space-y-1">
                        {plan.notIncluded.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-400 text-xs">
                            <X className="h-3 w-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${plan.color.btn} shadow-md hover:shadow-lg hover:scale-[1.02]`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            All prices in USD. Not sure which to choose?{' '}
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
              Book a free 15-min call
            </a>{' '}
            and we'll recommend the right fit.
          </p>
        </div>
      </section>

      {/* vs Comparison */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">
              Why Not Just Use{' '}
              <span className="text-yellow-400">Fiverr or a Local Agency?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We get this question a lot. Here's an honest comparison.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 pr-6 text-gray-400 font-semibold w-1/3">What matters</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">Fiverr</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">Local Agency</th>
                  <th className="text-center py-4 pl-4 text-yellow-400 font-bold">Daily Creative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { attr: "Price", fiverr: "$5–$200", agency: "$3,000–$15,000", us: "$149–$999" },
                  { attr: "Delivery time", fiverr: "3–14 days (varies)", agency: "4–12 weeks", us: "48 hrs – 10 days" },
                  { attr: "Revisions", fiverr: "1–3 (then extra cost)", agency: "Usually 2 rounds", us: "Unlimited" },
                  { attr: "Quality guarantee", fiverr: "No guarantee", agency: "Yes (at high cost)", us: "100% or money back" },
                  { attr: "Strategy included", fiverr: "No", agency: "Sometimes (extra)", us: "Yes, always" },
                  { attr: "File ownership", fiverr: "Sometimes", agency: "Yes", us: "Yes, always" },
                  { attr: "Post-launch support", fiverr: "None", agency: "Expensive retainer", us: "Included free" },
                  { attr: "12+ years experience", fiverr: "Unverified", agency: "Yes", us: "Yes" },
                ].map((row) => (
                  <tr key={row.attr} className="hover:bg-gray-800/40 transition-colors">
                    <td className="py-4 pr-6 font-semibold text-white">{row.attr}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.fiverr}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.agency}</td>
                    <td className="py-4 pl-4 text-center">
                      <span className="bg-green-900/60 text-green-300 text-xs font-bold px-2.5 py-1 rounded-full border border-green-700">
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Zap className="h-3 w-3" />
              Optional Add-Ons
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Power Up Any Package
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Bolt on exactly what you need — no bloated bundles, just the pieces that matter to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map((addon) => (
              <div key={addon.name} className="border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:bg-green-50/30 transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-black text-gray-900 text-base">{addon.name}</h3>
                  <span className="text-green-600 font-black text-base ml-3 whitespace-nowrap">{addon.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof trust strip */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by 5,000+ businesses across 40+ countries</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "We were paying $8,000 a year to a local agency. Switched to Daily Creative and got the same quality for $999. I feel like we've been robbed all this time.",
                name: "Marcus T.",
                role: "E-commerce Founder, US",
                result: "Saved $7,000",
                color: "bg-green-600",
              },
              {
                text: "The website went live in 4 days. We had 3 new customer enquiries the same week. No agency has ever delivered that fast without something looking wrong.",
                name: "Sarah W.",
                role: "Healthcare Clinic Owner, Canada",
                result: "+312% leads",
                color: "bg-sky-600",
              },
              {
                text: "Unlimited revisions isn't just a marketing line — they revised our logo 11 times across 3 weeks until it was exactly what we envisioned. Outstanding commitment.",
                name: "Raj P.",
                role: "SaaS Startup CEO, US",
                result: "Series A funded",
                color: "bg-amber-600",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-5 font-medium">"{t.text}"</blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center text-white font-black text-sm`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <HelpCircle className="h-3 w-3" />
              Common Questions
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Pricing FAQs</h2>
            <p className="text-gray-500">Everything you need to know before you decide.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-7 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-base font-bold text-gray-900">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed pt-4 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="h-8 w-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Still Not Sure?<br />Let's Talk for Free.
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute call. No sales pitch — just honest advice on what your business actually needs right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-gradient text-green-900 px-8 py-4 rounded-xl text-base font-black hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              Book a Free Call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            No commitment required · Response within minutes
          </p>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
