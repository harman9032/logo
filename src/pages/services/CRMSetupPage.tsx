import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Shield,
  MessageCircle, Clock, ChevronDown, ChevronUp,
  TrendingUp, Database, Users, BarChart3, Calendar,
  Phone, Zap, Settings, GitBranch, Mail, RefreshCw, Globe,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20CRM%20Setup%20%26%20Integration.";

const packages = [
  {
    name: "CRM Starter Setup",
    price: "$499",
    oldPrice: "$2,000+",
    timeline: "3–5 business days",
    popular: false,
    features: [
      "CRM platform selection & setup (HubSpot Free / Zoho / GoHighLevel)",
      "Contact database migration (up to 2,000 contacts)",
      "Pipeline stages configured for your sales process",
      "Lead source tagging & segmentation",
      "Basic email templates (5) loaded",
      "Team user accounts & permissions",
      "1 workflow automation (e.g., new lead notification)",
      "2-hour training session for your team",
      "Documentation & SOPs provided",
    ],
    notIncluded: ["CRM platform subscription fees", "Custom integrations"],
    cta: "Start CRM Setup",
    color: { border: "border-sky-200", accent: "text-sky-600", btn: "bg-sky-500 hover:bg-sky-400 text-white", pill: "bg-sky-50 text-sky-700 border-sky-200" },
    result: "Up and running in days, not months",
  },
  {
    name: "CRM Growth Integration",
    price: "$999",
    oldPrice: "$4,000+",
    timeline: "5–10 business days",
    popular: true,
    features: [
      "Everything in CRM Starter Setup",
      "Full contact migration (unlimited contacts)",
      "Website form → CRM integration",
      "Email marketing platform integration (Klaviyo/Mailchimp/ActiveCampaign)",
      "5 automated workflows (lead nurturing, follow-ups, notifications)",
      "Sales pipeline with deal tracking",
      "Calendar booking integration (Calendly/TidyCal)",
      "Reporting dashboard setup",
      "Custom field configuration",
      "4-hour team training",
      "30-day post-launch support",
    ],
    notIncluded: ["Platform subscription fees"],
    cta: "Get Growth Integration",
    color: { border: "border-green-400", accent: "text-green-600", btn: "bg-green-500 hover:bg-green-400 text-white", pill: "bg-green-50 text-green-700 border-green-200" },
    result: "Avg. result: 40% fewer leads lost",
  },
  {
    name: "Full CRM & Automation Stack",
    price: "$1,799",
    oldPrice: "$7,000+",
    timeline: "10–14 business days",
    popular: false,
    features: [
      "Everything in CRM Growth Integration",
      "15+ custom automation workflows",
      "Shopify / WooCommerce integration",
      "Customer support ticket integration (Intercom/Zendesk)",
      "Social media lead capture integration",
      "Stripe / payment platform integration",
      "Full marketing funnel automation",
      "Advanced segmentation & scoring",
      "Custom analytics & KPI dashboard",
      "n8n or Zapier automation bridge",
      "Dedicated project manager",
      "60-day post-launch support",
    ],
    notIncluded: ["Platform subscription fees", "Copywriting"],
    cta: "Build My Full Stack",
    color: { border: "border-amber-200", accent: "text-amber-600", btn: "bg-amber-500 hover:bg-amber-400 text-white", pill: "bg-amber-50 text-amber-700 border-amber-200" },
    result: "End-to-end revenue operations system",
  },
];

const platforms = [
  { name: "HubSpot", color: "bg-orange-100 text-orange-700" },
  { name: "GoHighLevel", color: "bg-sky-100 text-sky-700" },
  { name: "Zoho CRM", color: "bg-red-100 text-red-600" },
  { name: "Pipedrive", color: "bg-green-100 text-green-700" },
  { name: "ActiveCampaign", color: "bg-blue-100 text-blue-700" },
  { name: "Salesforce", color: "bg-sky-100 text-sky-800" },
  { name: "Notion CRM", color: "bg-gray-100 text-gray-700" },
  { name: "Monday CRM", color: "bg-rose-100 text-rose-600" },
];

const benefits = [
  { icon: Users, title: "Never Lose a Lead Again", desc: "Every enquiry from your website, social media, and ads automatically flows into your CRM — tagged, assigned, and followed up on time.", color: "text-sky-400 bg-sky-400/10" },
  { icon: Zap, title: "Automate Repetitive Follow-Ups", desc: "Stop manually emailing every new lead. Automated sequences send the right message at the right time, keeping leads warm without any manual effort.", color: "text-green-400 bg-green-400/10" },
  { icon: BarChart3, title: "See Your Pipeline Clearly", desc: "Know exactly how many leads are at each stage, what revenue is forecasted, and where deals are stalling — all in one dashboard.", color: "text-amber-400 bg-amber-400/10" },
  { icon: RefreshCw, title: "Keep All Your Tools in Sync", desc: "Your CRM connects to your website, email platform, calendar, payment processor, and support tools — eliminating data silos and manual data entry.", color: "text-rose-400 bg-rose-400/10" },
];

const integrations = [
  { icon: Globe, label: "Website & Landing Pages" },
  { icon: Mail, label: "Email Marketing" },
  { icon: Calendar, label: "Booking & Calendars" },
  { icon: Settings, label: "Payment Processors" },
  { icon: GitBranch, label: "n8n / Zapier Automation" },
  { icon: Database, label: "Shopify & WooCommerce" },
];

const faqs = [
  { q: "Which CRM platform do you recommend?", a: "It depends on your business size and budget. For small businesses and service providers starting out, we recommend HubSpot Free or GoHighLevel. For scaling businesses with marketing automation needs, we recommend ActiveCampaign or HubSpot Starter. For enterprises, Salesforce or Zoho Enterprise. We'll recommend the right platform after a free consultation." },
  { q: "Do I need to buy the CRM software separately?", a: "Yes. Most CRM platforms charge a monthly subscription fee. Many have free tiers that are excellent for small businesses. We handle the setup, configuration, and integration — you pay the platform directly. We'll always recommend the most cost-effective option for your needs." },
  { q: "Can you migrate my existing contacts from a spreadsheet or another CRM?", a: "Yes. We handle contact migration as part of every package. We clean, format, and import your existing contacts — preserving all tags, notes, deal history, and custom fields where the platform supports it." },
  { q: "How long does setup take?", a: "Starter setups take 3–5 business days. Growth integrations take 5–10 days. Full stack builds take 10–14 days. Complex custom setups may take longer — we'll confirm a timeline after reviewing your requirements." },
  { q: "Will you train my team to use it?", a: "Yes. Every package includes a live training session for your team. We also create documentation and SOPs so new team members can get up to speed quickly without coming back to us." },
  { q: "What if I already have a CRM but it's a mess?", a: "CRM audit and cleanup is one of our most common engagements. We assess your current setup, clean up duplicate records, rebuild the pipeline structure, and re-configure automations. This is typically priced as a custom project — book a call to discuss." },
];

export default function CRMSetupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO
        title="CRM Setup & Integration — HubSpot, GoHighLevel, Zoho & More Starting at $499"
        description="Professional CRM setup, configuration, and integration services. Connect your website, email, payments, and automation tools into one system. Starting from $499."
        canonical="/services/crm-setup"
      />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-slate-950 to-slate-950" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Database size={12} />
              CRM Setup & Business Integration
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Never Lose a Lead{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Again
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Most small businesses lose 40–80% of their leads simply because there's no system to capture, track, and follow up on them. A properly configured CRM changes that — automatically. We set it up for you in days.
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
                { value: "150+", label: "CRMs Configured", icon: Database },
                { value: "40%", label: "Fewer Lost Leads", icon: TrendingUp },
                { value: "5 days", label: "Avg. Setup Time", icon: Clock },
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

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">What a Properly Set Up CRM Does For Your Business</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((item) => {
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

        {/* Platforms */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black text-white mb-6">CRM Platforms We Work With</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {platforms.map((p) => (
                <span key={p.name} className={`${p.color} font-semibold text-sm px-4 py-2 rounded-full`}>{p.name}</span>
              ))}
            </div>
            <p className="text-slate-400 text-sm">Don't see your platform? <Link to="/contact" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Contact us</Link> — we work with most major CRM systems.</p>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black text-white mb-6">What We Connect Your CRM To</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {integrations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <p className="text-white font-semibold text-xs">{item.label}</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">CRM Setup Packages</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Choose based on how many integrations and automations you need. All packages include team training and documentation.</p>
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

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-b from-sky-900/30 to-slate-900/40 border border-sky-800/30 rounded-3xl p-10 sm:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Database size={28} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Stop Letting Leads Fall Through the Cracks</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto">Book a free consultation. We'll map your current lead flow and show you exactly how a properly configured CRM will change your business.</p>
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
