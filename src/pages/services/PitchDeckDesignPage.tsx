import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Shield,
  MessageCircle, Clock, ChevronDown, ChevronUp,
  TrendingUp, Layers, Users, BarChart3, Calendar,
  Phone, Award, Briefcase, PieChart, Presentation,
  FileText, DollarSign, Target,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20Pitch%20Deck%20Design.";

const packages = [
  {
    name: "Startup Pitch Deck",
    price: "$399",
    oldPrice: "$2,000+",
    timeline: "3–5 business days",
    popular: false,
    slides: "Up to 15 slides",
    features: [
      "Up to 15 custom-designed slides",
      "Problem/solution narrative flow",
      "Market size & opportunity visuals",
      "Business model slide",
      "Traction & metrics design",
      "Team slide layout",
      "Funding ask slide",
      "PowerPoint & Google Slides delivered",
      "2 revision rounds",
    ],
    notIncluded: ["Copywriting", "Financial modelling"],
    cta: "Get Startup Deck",
    color: { border: "border-amber-200", accent: "text-amber-600", btn: "bg-amber-500 hover:bg-amber-400 text-white", pill: "bg-amber-50 text-amber-700 border-amber-200" },
    result: "Ready for seed & Series A rounds",
  },
  {
    name: "Investor Pitch Deck",
    price: "$699",
    oldPrice: "$3,500+",
    timeline: "5–7 business days",
    popular: true,
    slides: "Up to 25 slides",
    features: [
      "Everything in Startup Pitch Deck",
      "Up to 25 custom-designed slides",
      "Data visualisation & infographic slides",
      "Competitive landscape matrix",
      "Go-to-market strategy visuals",
      "Financial projection slides (3–5 year)",
      "Use-of-funds breakdown",
      "Appendix slide set",
      "Unlimited revisions",
      "Keynote format included",
      "30-day post-delivery support",
    ],
    notIncluded: ["Financial modelling", "Copywriting"],
    cta: "Build My Investor Deck",
    color: { border: "border-green-400", accent: "text-green-600", btn: "bg-green-500 hover:bg-green-400 text-white", pill: "bg-green-50 text-green-700 border-green-200" },
    result: "Avg. result: VC meetings booked within 30 days",
  },
  {
    name: "Sales Presentation",
    price: "$499",
    oldPrice: "$2,500+",
    timeline: "3–5 business days",
    popular: false,
    slides: "Up to 20 slides",
    features: [
      "Up to 20 slides for sales or proposals",
      "Company overview & value proposition",
      "Product/service showcase slides",
      "Case study & testimonial layout",
      "ROI & benefit visualisation",
      "Pricing & packages slide",
      "Call-to-action & next steps",
      "Branded template for future use",
      "PowerPoint & PDF delivered",
      "Unlimited revisions",
    ],
    notIncluded: ["Copywriting", "Photography"],
    cta: "Create Sales Deck",
    color: { border: "border-sky-200", accent: "text-sky-600", btn: "bg-sky-500 hover:bg-sky-400 text-white", pill: "bg-sky-50 text-sky-700 border-sky-200" },
    result: "Close deals with professional presentations",
  },
];

const deckTypes = [
  { icon: DollarSign, title: "Investor / VC Pitch Deck", desc: "Designed to secure funding rounds from angels, VCs, and institutional investors.", color: "bg-amber-100 text-amber-600" },
  { icon: Briefcase, title: "Sales Proposal Deck", desc: "Win enterprise clients and close B2B deals with polished, persuasive proposals.", color: "bg-sky-100 text-sky-600" },
  { icon: Users, title: "Partnership Deck", desc: "Communicate your vision and terms clearly for strategic partnerships and JVs.", color: "bg-green-100 text-green-600" },
  { icon: Target, title: "Demo Day Deck", desc: "Accelerator and competition-ready decks built for tight time constraints.", color: "bg-rose-100 text-rose-600" },
  { icon: BarChart3, title: "Board Meeting Deck", desc: "Quarterly and annual board presentation templates with data-first layouts.", color: "bg-teal-100 text-teal-600" },
  { icon: FileText, title: "One-Pager / Teaser", desc: "A concise single-page executive summary that opens doors before a full pitch.", color: "bg-orange-100 text-orange-600" },
];

const whatMakesGreat = [
  { icon: Layers, title: "Narrative-First Structure", desc: "A great deck tells a story. We build the narrative arc first — problem, solution, market, traction, ask — before a single slide is designed." },
  { icon: PieChart, title: "Data Visualisation", desc: "Numbers need to land instantly. We convert raw data into clear charts, infographics, and visual summaries that investors and clients understand at a glance." },
  { icon: Award, title: "Brand-Consistent Design", desc: "Your deck matches your brand identity — fonts, colours, logo, and visual language — creating a cohesive professional impression from slide one." },
  { icon: Clock, title: "Investor-Proven Templates", desc: "Our slide structures are based on frameworks used in decks that have raised millions. We know what VC partners want to see and in what order." },
];

const faqs = [
  { q: "Do you write the content too?", a: "We can provide a content brief and slide-by-slide guidance on what to write for each section. Full copywriting is available as an add-on. Most clients provide the raw content and we shape and refine it during the design process." },
  { q: "What format will the deck be delivered in?", a: "We deliver in PowerPoint (.pptx) and Google Slides by default. Keynote and PDF are included in the Investor and Sales packages at no extra cost." },
  { q: "Can you match my existing brand style?", a: "Yes. Share your brand guidelines, logo files, and font choices and we'll design every slide to feel like a natural extension of your brand identity." },
  { q: "What if I need changes after delivery?", a: "Investor and Sales packages include unlimited revisions. Startup packages include 2 rounds. Additional revision rounds can be purchased if needed." },
  { q: "Can you help with the financial slides?", a: "We design the financial slides to make your numbers look clear and compelling. We don't do the financial modelling itself, but we can work from your spreadsheets or financial projections to build the visual slides." },
  { q: "How is this different from using a template?", a: "Templates are generic and recognisable — investors see hundreds of them. We create a custom deck that reflects your specific brand, story, and data. Custom decks consistently outperform templates in first impression scores in investor research." },
];

export default function PitchDeckDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO
        title="Pitch Deck Design — Investor & Sales Presentations Starting at $399"
        description="Professional pitch deck design for startups, investors, and sales teams. Custom slide decks in PowerPoint, Google Slides & Keynote. Starting from $399."
        canonical="/services/pitch-deck-design"
      />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-slate-950 to-slate-950" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Presentation size={12} />
              Pitch Deck & Presentation Design
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Pitch Decks That{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Open Doors
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Investors make a decision in the first 3 minutes of seeing your deck. A poorly designed presentation can kill a great business idea before you even get to speak. We design decks that command attention, tell your story clearly, and make a memorable impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25">
                <Calendar size={18} /> Book Free Consultation
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "200+", label: "Decks Delivered", icon: Layers },
                { value: "48hr", label: "First Draft", icon: Clock },
                { value: "$50M+", label: "Client Funding Raised", icon: DollarSign },
                { value: "100%", label: "Satisfaction", icon: Star },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                    <Icon size={16} className="text-amber-400 mb-2 mx-auto" />
                    <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deck types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">What Type of Deck Do You Need?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deckTypes.map((dt) => {
                const Icon = dt.icon;
                return (
                  <div key={dt.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <div className={`w-10 h-10 rounded-xl ${dt.color} flex items-center justify-center mb-4`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{dt.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{dt.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Pitch Deck Packages</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Choose based on your audience and complexity. All packages include fully editable source files.</p>
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
                    <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${pkg.popular ? 'bg-green-700/50 text-green-100 border-green-600' : pkg.color.pill}`}>{pkg.slides}</div>
                    <h3 className={`text-xl font-black mb-1 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                    <p className={`text-xs mb-3 ${pkg.popular ? 'text-green-200' : 'text-gray-500'}`}>{pkg.timeline} delivery</p>
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
                        {pkg.notIncluded.map((item) => (
                          <p key={item} className="text-gray-400 text-xs">• {item}</p>
                        ))}
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

        {/* What makes great */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">What Makes a Pitch Deck Actually Work</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whatMakesGreat.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex-shrink-0 flex items-center justify-center">
                      <Icon size={18} className="text-amber-400" />
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
                    {openFaq === i ? <ChevronUp size={18} className="text-amber-400 flex-shrink-0" /> : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />}
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
            <div className="bg-gradient-to-b from-amber-900/30 to-slate-900/40 border border-amber-800/30 rounded-3xl p-10 sm:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase size={28} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Make a Powerful First Impression?</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto">Book a free consultation. We'll discuss your audience, goals, and the story you need to tell — and show you what's possible.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
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
