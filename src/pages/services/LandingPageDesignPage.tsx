import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Zap, Shield, Award,
  MessageCircle, Clock, Users, ChevronDown, ChevronUp,
  TrendingUp, Target, BarChart3, MousePointer, Layout,
  Smartphone, Search, Mail, Calendar, Phone,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20Landing%20Page%20Design.";

const packages = [
  {
    name: "Lead Generation",
    price: "$299",
    oldPrice: "$1,200+",
    timeline: "2–3 business days",
    popular: false,
    features: [
      "Single high-converting landing page",
      "Mobile-first responsive design",
      "Lead capture form integration",
      "On-page SEO optimisation",
      "Google Analytics setup",
      "Thank-you page included",
      "2 rounds of revisions",
      "Full source code ownership",
    ],
    notIncluded: ["Copywriting", "Hosting"],
    cta: "Get Started",
    color: { border: "border-sky-200", accent: "text-sky-600", btn: "bg-sky-500 hover:bg-sky-400 text-white", pill: "bg-sky-50 text-sky-700 border-sky-200" },
    result: "Avg. result: 2× more opt-ins",
  },
  {
    name: "Campaign Landing Page",
    price: "$499",
    oldPrice: "$2,500+",
    timeline: "3–5 business days",
    popular: true,
    features: [
      "Everything in Lead Generation",
      "Conversion-optimised above-the-fold design",
      "Social proof & testimonial section",
      "Countdown timer / urgency element",
      "A/B testing ready structure",
      "Meta Pixel & Google Ads tracking",
      "Unlimited revisions",
      "30-day post-launch support",
    ],
    notIncluded: ["Copywriting", "Ad spend"],
    cta: "Start My Campaign Page",
    color: { border: "border-green-400", accent: "text-green-600", btn: "bg-green-500 hover:bg-green-400 text-white", pill: "bg-green-50 text-green-700 border-green-200" },
    result: "Avg. result: 3× higher conversion rate",
  },
  {
    name: "Sales Funnel Page",
    price: "$799",
    oldPrice: "$4,000+",
    timeline: "5–7 business days",
    popular: false,
    features: [
      "Everything in Campaign Landing Page",
      "Multi-step sales flow design",
      "Upsell & order bump pages",
      "Checkout-optimised layout",
      "CRM integration (HubSpot, Klaviyo)",
      "Full funnel analytics setup",
      "Video embed & media support",
      "60-day post-launch support",
    ],
    notIncluded: ["Copywriting", "Platform subscription"],
    cta: "Build My Sales Funnel",
    color: { border: "border-amber-200", accent: "text-amber-600", btn: "bg-amber-500 hover:bg-amber-400 text-white", pill: "bg-amber-50 text-amber-700 border-amber-200" },
    result: "Avg. result: 4× more qualified leads",
  },
];

const useCases = [
  { icon: Target, title: "Google & Meta Ads", desc: "Dedicated pages that match your ad copy exactly — reducing bounce rate and maximising ROAS.", color: "bg-blue-100 text-blue-600" },
  { icon: Mail, title: "Email Campaigns", desc: "Post-click landing pages designed to convert subscribers into paying customers.", color: "bg-rose-100 text-rose-600" },
  { icon: BarChart3, title: "Product Launches", desc: "Build excitement and capture pre-launch sign-ups with urgency-driven designs.", color: "bg-green-100 text-green-600" },
  { icon: Users, title: "Webinar Registration", desc: "High sign-up rate pages for online events, workshops, and training programmes.", color: "bg-amber-100 text-amber-600" },
  { icon: Zap, title: "Lead Magnets", desc: "Promote your free guide, checklist, or template with a frictionless opt-in page.", color: "bg-sky-100 text-sky-600" },
  { icon: MousePointer, title: "App Downloads", desc: "Drive app installs with compelling benefit-focused mobile landing pages.", color: "bg-teal-100 text-teal-600" },
];

const features = [
  { icon: Smartphone, title: "Mobile-First", desc: "Over 60% of traffic is mobile. Every page is designed mobile-first and tested across devices." },
  { icon: TrendingUp, title: "Conversion-Focused", desc: "Every layout element — headline, CTA, social proof — is positioned to convert visitors into leads." },
  { icon: Search, title: "SEO-Ready", desc: "Clean code, fast load times, and proper metadata so your page ranks and loads in under 2 seconds." },
  { icon: BarChart3, title: "Analytics Wired", desc: "GA4, Meta Pixel, and Google Ads conversion tracking set up so you know exactly what's working." },
  { icon: Layout, title: "A/B Test Ready", desc: "Structured to allow split testing of headlines, CTAs, and layouts without a developer." },
  { icon: Shield, title: "Proven Templates", desc: "Built on conversion-proven frameworks — not guesswork. Tested across 300+ campaigns." },
];

const faqs = [
  { q: "What's the difference between a landing page and a website?", a: "A landing page has one goal — to convert a specific visitor into a lead or customer. It removes distractions (no navigation menu) and focuses entirely on one offer. A website has multiple pages and goals. Landing pages consistently outperform full websites for paid traffic." },
  { q: "Do you write the copy too?", a: "Copywriting can be added as an optional service. If you prefer to write your own, we provide a clear content brief outlining exactly what's needed for each section — making it easy even for non-writers." },
  { q: "Can you match my existing brand style?", a: "Yes. Simply share your brand guidelines, logo, and colour palette. We design every landing page to feel like a natural extension of your brand." },
  { q: "What platform will the landing page be built on?", a: "We build on your preferred platform — WordPress, Webflow, Framer, HTML/CSS, or Unbounce. We recommend based on your tech stack and what your team can manage after delivery." },
  { q: "How do I track conversions?", a: "We set up GA4 goal tracking, Meta Pixel events, and Google Ads conversion actions so you know exactly how many people converted and which traffic source sent them." },
];

export default function LandingPageDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO
        title="Landing Page Design — High-Converting Pages Starting at $299"
        description="Professional landing page design that converts visitors into leads and customers. Conversion-optimised, mobile-first, with full analytics setup. Starting from $299."
        canonical="/services/landing-page-design"
      />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-950 to-slate-950" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <MousePointer size={12} />
              Conversion-Focused Landing Pages
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Landing Pages That{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              A dedicated landing page can double or triple your conversion rate compared to sending paid traffic to your homepage. We design pages built around one goal: turning your visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-sky-500/25">
                <Calendar size={18} /> Book Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "300+", label: "Pages Launched", icon: Layout },
                { value: "3×", label: "Avg. Conversion Lift", icon: TrendingUp },
                { value: "48hr", label: "First Draft", icon: Clock },
                { value: "100%", label: "Satisfaction", icon: Star },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                    <Icon size={16} className="text-sky-400 mb-2 mx-auto" />
                    <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">When Do You Need a Landing Page?</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Any time you're driving targeted traffic to a single offer, a dedicated landing page will outperform your homepage every time.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div key={uc.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <div className={`w-10 h-10 rounded-xl ${uc.color} flex items-center justify-center mb-4`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{uc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Landing Page Packages</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Choose the package that matches your campaign goal. All packages include mobile-first design and conversion-optimised layouts.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name}
                  className={`relative bg-white rounded-2xl border-2 ${pkg.color.border} overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? 'shadow-lg shadow-green-500/20' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-black text-center py-1.5 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className={`px-6 pt-6 pb-5 ${pkg.popular ? 'bg-gradient-to-br from-green-600 to-emerald-700' : 'bg-gray-50'}`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${pkg.popular ? 'text-green-200' : pkg.color.accent}`}>{pkg.timeline} delivery</p>
                    <h3 className={`text-xl font-black mb-3 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                    <div className="flex items-end gap-2">
                      <span className={`text-4xl font-black leading-none ${pkg.popular ? 'text-yellow-300' : pkg.color.accent}`}>{pkg.price}</span>
                      <span className={`text-sm line-through mb-1 ${pkg.popular ? 'text-green-300' : 'text-gray-400'}`}>{pkg.oldPrice}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border mt-3 ${pkg.popular ? 'bg-green-700/50 text-green-100 border-green-600' : pkg.color.pill}`}>
                      <TrendingUp size={11} /> {pkg.result}
                    </div>
                  </div>
                  <div className="px-6 py-5 flex flex-col flex-1">
                    <ul className="space-y-2.5 mb-4 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.notIncluded.length > 0 && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Not included</p>
                        <ul className="space-y-1">
                          {pkg.notIncluded.map((item) => (
                            <li key={item} className="text-gray-400 text-xs">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${pkg.color.btn} shadow-md hover:shadow-lg hover:scale-[1.02]`}>
                      {pkg.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">What Makes Our Landing Pages Convert</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Every decision — from headline placement to button colour — is backed by conversion best practices.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">Common Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-700/30 transition-colors">
                    <span className="text-base font-bold text-white">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} className="text-sky-400 flex-shrink-0" /> : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-slate-700/50">
                      <p className="text-slate-400 leading-relaxed pt-4 text-sm">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-b from-sky-900/40 to-slate-900/40 border border-sky-800/40 rounded-3xl p-10 sm:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MousePointer size={28} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Launch a High-Converting Page?</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto">Book a free 15-minute consultation. We'll review your campaign goals and recommend the right page structure to maximise conversions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
                  <Calendar size={18} /> Book Free Consultation
                </a>
                <a href={`tel:+917837319660`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all">
                  <Phone size={18} /> Call Us Now
                </a>
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all">
                  Send a Message <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
