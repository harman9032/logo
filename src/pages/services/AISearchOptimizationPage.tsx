import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Shield,
  MessageCircle, Clock, ChevronDown, ChevronUp,
  TrendingUp, Cpu, Search, Globe, BarChart3, Calendar,
  Phone, Zap, Eye, Target, FileText, Sparkles,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20AI%20Search%20Optimisation.";

const plans = [
  {
    name: "AIO Audit",
    price: "$399",
    billing: "one-time",
    oldPrice: "$1,200+",
    timeline: "5–7 business days",
    popular: false,
    features: [
      "Full AI visibility audit (ChatGPT, Perplexity, Gemini)",
      "Google AI Overview appearance analysis",
      "Entity & brand mention gap report",
      "Competitor AIO benchmark",
      "Keyword to AI query mapping",
      "Structured data / schema assessment",
      "90-day AIO action plan",
      "PDF report + 60-min strategy call",
    ],
    notIncluded: ["Implementation", "Ongoing management"],
    cta: "Get My AIO Audit",
    color: { border: "border-amber-200", accent: "text-amber-600", btn: "bg-amber-500 hover:bg-amber-400 text-white", pill: "bg-amber-50 text-amber-700 border-amber-200" },
    result: "Understand your AI search gaps",
  },
  {
    name: "AIO Growth",
    price: "$699",
    billing: "/month",
    oldPrice: "$2,500+/mo",
    timeline: "Monthly retainer",
    popular: true,
    features: [
      "Everything in AIO Audit (month 1)",
      "Monthly AI-optimised content (4 pieces)",
      "FAQ schema & structured data implementation",
      "Google AI Overview targeting",
      "Perplexity & ChatGPT visibility tracking",
      "Brand entity building (citations, mentions)",
      "Monthly AIO performance report",
      "Traditional SEO maintenance included",
      "E-E-A-T signals improvement",
    ],
    notIncluded: ["Paid advertising"],
    cta: "Start AIO Growth",
    color: { border: "border-green-400", accent: "text-green-600", btn: "bg-green-500 hover:bg-green-400 text-white", pill: "bg-green-50 text-green-700 border-green-200" },
    result: "Avg. result: Featured in AI answers in 90 days",
  },
  {
    name: "AIO Authority",
    price: "$1,299",
    billing: "/month",
    oldPrice: "$5,000+/mo",
    timeline: "Monthly retainer",
    popular: false,
    features: [
      "Everything in AIO Growth",
      "8 AI-optimised long-form content pieces",
      "Pillar content & topic cluster strategy",
      "Full schema markup implementation",
      "Knowledge Panel optimisation",
      "YouTube & podcast transcript optimisation",
      "Competitor answer displacement strategy",
      "PR & external citation campaign",
      "Bi-weekly strategy calls",
      "Real-time AI ranking dashboard",
    ],
    notIncluded: ["Ad spend budget"],
    cta: "Build AI Authority",
    color: { border: "border-sky-200", accent: "text-sky-600", btn: "bg-sky-500 hover:bg-sky-400 text-white", pill: "bg-sky-50 text-sky-700 border-sky-200" },
    result: "Dominate AI search in your niche",
  },
];

const aiEngines = [
  { name: "Google AI Overviews", color: "bg-blue-100 text-blue-700" },
  { name: "ChatGPT Search", color: "bg-green-100 text-green-700" },
  { name: "Perplexity AI", color: "bg-sky-100 text-sky-700" },
  { name: "Google Gemini", color: "bg-amber-100 text-amber-700" },
  { name: "Microsoft Copilot", color: "bg-slate-100 text-slate-700" },
  { name: "Claude AI", color: "bg-rose-100 text-rose-700" },
  { name: "You.com", color: "bg-teal-100 text-teal-700" },
  { name: "Meta AI", color: "bg-blue-100 text-blue-800" },
];

const whyNow = [
  { icon: Search, title: "AI Overviews Are Stealing Clicks", desc: "Google's AI Overview appears above all organic results — answering queries without users needing to click. If you're not in the AI answer, you're invisible to those searchers.", color: "text-amber-400 bg-amber-400/10" },
  { icon: Eye, title: "ChatGPT & Perplexity Are Search Engines Now", desc: "Millions of users now search directly inside ChatGPT, Perplexity, and Gemini. These AI engines pull from a different set of sources than traditional Google — and most brands are missing from them.", color: "text-sky-400 bg-sky-400/10" },
  { icon: Target, title: "Early Movers Win the Biggest Gains", desc: "AI search optimisation is in its infancy. Brands that establish authority and structure their content correctly now will be the default sources AI engines cite for years to come.", color: "text-green-400 bg-green-400/10" },
  { icon: TrendingUp, title: "Traditional SEO Alone Is No Longer Enough", desc: "Click-through rates for traditional blue links dropped 15% in 2024 due to AI answers. Businesses relying solely on traditional SEO are already losing traffic. AIO is the next layer of search strategy.", color: "text-rose-400 bg-rose-400/10" },
];

const tactics = [
  { icon: FileText, title: "AI-Optimised Content", desc: "We create content formatted specifically to be cited by AI engines — clear answers, structured headings, FAQ schemas, and authoritative sourcing." },
  { icon: Cpu, title: "Schema & Structured Data", desc: "Proper schema markup tells AI engines exactly what your content is about, increasing the probability of being surfaced in AI-generated answers." },
  { icon: Globe, title: "Entity Building", desc: "AI engines rely on entity associations. We build your brand's presence across the web — citations, mentions, and knowledge graph signals." },
  { icon: BarChart3, title: "AI Visibility Tracking", desc: "We track when and how your brand appears inside AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews." },
  { icon: Sparkles, title: "E-E-A-T Signals", desc: "Experience, Expertise, Authoritativeness, and Trustworthiness are the signals AI engines use to decide who to cite. We build all four systematically." },
  { icon: Zap, title: "Competitor Displacement", desc: "We analyse what your competitors are being cited for in AI answers and create superior content to displace them as the authoritative source." },
];

const faqs = [
  { q: "What is AI Search Optimisation (AIO)?", a: "AI Search Optimisation (also called AEO — Answer Engine Optimisation, or GEO — Generative Engine Optimisation) is the practice of optimising your website and content to appear inside AI-generated answers from tools like Google AI Overviews, ChatGPT, Perplexity, and Gemini. Traditional SEO gets you ranked in blue links. AIO gets you cited in AI answers." },
  { q: "Is this different from traditional SEO?", a: "Yes and no. Traditional SEO still matters and we include it as a foundation. But AIO adds a layer on top: structuring content as direct answers, building entity authority, implementing schema markup, and tracking AI-specific visibility metrics. You need both." },
  { q: "How do you measure success in AIO?", a: "We track AI Overview appearances, citation frequency in Perplexity and ChatGPT responses, brand mention volume, knowledge panel presence, and organic traffic from AI-generated answer clicks." },
  { q: "How long before I see results?", a: "Most clients see their first AI Overview citations within 60–90 days of consistent implementation. Knowledge Panel and broader AI engine citation usually takes 3–6 months to establish." },
  { q: "Do I need to stop my existing SEO?", a: "Never. Traditional SEO is a prerequisite for AIO — a fast, technically sound, well-linked site is still essential. Our AIO Growth and Authority plans include traditional SEO maintenance." },
  { q: "Can any business benefit from AIO?", a: "Yes, but the highest returns come for businesses in competitive informational niches: professional services, healthcare, finance, e-commerce, SaaS, and local services. If people ask questions about your industry, AIO is relevant." },
];

export default function AISearchOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO
        title="AI Search Optimisation (AIO/GEO) — Get Featured in ChatGPT, Google AI & Perplexity"
        description="Optimise your brand to appear inside AI-generated answers from ChatGPT, Google AI Overviews, Perplexity, and Gemini. AI Search Optimisation starting from $399."
        canonical="/services/ai-search-optimization"
      />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-slate-950 to-slate-950" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Cpu size={12} />
              AI Search Optimisation — The Next Frontier
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Get Your Brand Into{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                AI-Generated Answers
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
              When someone asks ChatGPT, Perplexity, or Google AI about your industry, does your brand appear in the answer? If not, you're losing visibility to competitors who have already optimised for AI search.
            </p>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-10">
              AI Search Optimisation (AIO) is the fastest-growing area of digital marketing. Early movers are already locking in AI citation advantages that will compound for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/25">
                <Calendar size={18} /> Book Free AIO Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "8+", label: "AI Engines Tracked", icon: Cpu },
                { value: "90", label: "Days to First Citations", icon: Clock },
                { value: "3×", label: "Brand Visibility Lift", icon: Eye },
                { value: "100%", label: "Satisfaction", icon: Star },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                    <Icon size={16} className="text-green-400 mb-2 mx-auto" />
                    <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Engines */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">AI Engines We Optimise For</p>
            <div className="flex flex-wrap justify-center gap-3">
              {aiEngines.map((e) => (
                <span key={e.name} className={`${e.color} font-semibold text-sm px-4 py-2 rounded-full`}>{e.name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">Why AI Search Optimisation Matters Right Now</h2>
              <p className="text-slate-400 max-w-xl mx-auto">The way people search is changing permanently. Here's what's at stake.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyNow.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex gap-4">
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tactics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">How We Get You Into AI Answers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tactics.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={18} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">AI Search Optimisation Packages</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Start with an audit to understand your current AI visibility, or jump straight into ongoing optimisation.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 ${plan.color.border} overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'shadow-lg shadow-green-500/20' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-black text-center py-1.5 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className={`px-6 pt-6 pb-5 ${plan.popular ? 'bg-gradient-to-br from-green-600 to-emerald-700' : 'bg-gray-50'}`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.popular ? 'text-green-200' : plan.color.accent}`}>{plan.timeline}</p>
                    <h3 className={`text-xl font-black mb-3 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black leading-none ${plan.popular ? 'text-yellow-300' : plan.color.accent}`}>{plan.price}</span>
                      <span className={`text-sm font-semibold mb-1 ml-1 ${plan.popular ? 'text-green-200' : 'text-gray-500'}`}>{plan.billing}</span>
                      <span className={`text-sm line-through ml-2 mb-1 ${plan.popular ? 'text-green-300' : 'text-gray-400'}`}>{plan.oldPrice}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border mt-3 ${plan.popular ? 'bg-green-700/50 text-green-100 border-green-600' : plan.color.pill}`}>
                      <TrendingUp size={11} /> {plan.result}
                    </div>
                  </div>
                  <div className="px-6 py-5 flex flex-col flex-1">
                    <ul className="space-y-2.5 mb-4 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.notIncluded.length > 0 && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Not included</p>
                        {plan.notIncluded.map((item) => (
                          <p key={item} className="text-gray-400 text-xs">• {item}</p>
                        ))}
                      </div>
                    )}
                    <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${plan.color.btn} shadow-md hover:shadow-lg hover:scale-[1.02]`}>
                      {plan.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
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
                    {openFaq === i ? <ChevronUp size={18} className="text-green-400 flex-shrink-0" /> : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />}
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
            <div className="bg-gradient-to-b from-green-900/40 to-slate-900/40 border border-green-800/40 rounded-3xl p-10 sm:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Cpu size={28} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Find Out If Your Brand Appears in AI Answers</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto">Book a free consultation. We'll run a live AI visibility check on your brand and show you exactly where you stand — and where your competitors have the edge.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
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
