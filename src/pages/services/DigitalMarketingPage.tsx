import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, TrendingUp, Search, BarChart3,
  ChevronRight, MessageCircle, Target, Globe, Zap, Mail,
  Users, MousePointer, ShoppingCart, Star, Clock, Eye
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20Digital%20Marketing%20services.";

const services = [
  { icon: Search, title: 'SEO Strategy', desc: 'Rank higher on Google with technical SEO, on-page optimisation, and content strategy.' },
  { icon: Target, title: 'Paid Ads (PPC)', desc: 'Google Ads, Meta Ads, and LinkedIn campaigns managed for maximum ROI.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automated email sequences, newsletters, and drip campaigns that convert.' },
  { icon: Globe, title: 'Content Strategy', desc: 'Blog posts, landing pages, and content that attracts and nurtures leads.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Monthly performance reports with insights and actionable recommendations.' },
  { icon: Zap, title: 'Marketing Automation', desc: 'CRM setup, lead nurturing flows, and workflow automation to save you time.' },
];

const packages = [
  {
    name: 'Strategy Starter',
    price: '$299',
    desc: 'A comprehensive digital marketing strategy document to guide your growth.',
    features: ['Competitor analysis (5 competitors)', 'Keyword research report', '90-day marketing roadmap', 'Channel recommendations', 'Content calendar framework'],
    highlight: false,
  },
  {
    name: 'Growth Engine',
    price: '$799 /mo',
    desc: 'Ongoing marketing management — we handle execution so you can focus on your business.',
    features: [
      'SEO management (monthly)',
      'Google Ads management',
      'Social media ad management',
      'Monthly performance report',
      'A/B testing & optimisation',
      'Email campaign (2/month)',
      'Dedicated account manager',
    ],
    highlight: true,
  },
  {
    name: 'Full Stack',
    price: '$1,499 /mo',
    desc: 'Complete digital marketing ownership across all channels.',
    features: [
      'Everything in Growth Engine',
      'Content creation (4 blogs/mo)',
      'Social media management',
      'CRM setup & automation',
      'Weekly reporting calls',
      'Competitor monitoring',
      'Landing page optimisation',
    ],
    highlight: false,
  },
];

const growthFunnel = [
  {
    stage: 'Attract',
    icon: Eye,
    color: 'bg-teal-600',
    tactics: ['SEO & Content Marketing', 'Google Ads', 'Social Media Ads', 'Organic Social'],
    desc: 'Bring the right people to your brand through search, social, and paid channels.',
  },
  {
    stage: 'Engage',
    icon: MousePointer,
    color: 'bg-sky-600',
    tactics: ['Landing Pages', 'Email Capture', 'Lead Magnets', 'Retargeting Ads'],
    desc: 'Turn visitors into interested leads with compelling offers and optimised pages.',
  },
  {
    stage: 'Convert',
    icon: ShoppingCart,
    color: 'bg-green-600',
    tactics: ['Email Nurture Sequences', 'Booking Funnels', 'Sales Page Optimisation', 'A/B Testing'],
    desc: 'Move leads through the sales process with automated nurturing and strategic follow-up.',
  },
  {
    stage: 'Retain',
    icon: Star,
    color: 'bg-amber-500',
    tactics: ['Customer Email Flows', 'Loyalty Programs', 'Review Generation', 'Upsell Campaigns'],
    desc: 'Keep customers coming back, generate reviews, and unlock referrals and repeat revenue.',
  },
];

const metrics = [
  { metric: '3.2×', label: 'Average ROAS', sub: 'Return on Ad Spend across client campaigns' },
  { metric: '47%', label: 'More organic traffic', sub: 'Average increase in 6 months of SEO' },
  { metric: '28%', label: 'Lower cost per lead', sub: 'After 90 days of campaign optimisation' },
  { metric: '4.1×', label: 'Email revenue lift', sub: 'From automated email sequences' },
];

const faqs = [
  { q: 'How quickly will I see results?', a: 'Paid ads can show results within the first week. SEO typically shows measurable improvement in 3–6 months. We set realistic expectations and track progress transparently.' },
  { q: 'Do you manage our ad budget?', a: 'Yes — we manage your campaigns within your defined budget. Our management fee is separate from the ad spend you pay directly to Google/Meta.' },
  { q: 'What makes your strategy different?', a: 'We combine design expertise with marketing strategy — your ads, content, and landing pages all work together as a cohesive system rather than in silos.' },
  { q: 'Can you work with our existing marketing team?', a: 'Absolutely. We can operate as an extension of your in-house team, providing specialist skills on demand.' },
  { q: 'Is there a minimum contract period?', a: 'No lock-in contracts. We work month-to-month with a 30-day notice period. We earn your continued business through results.' },
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="Digital Marketing — Strategy That Drives Growth" description="Data-driven digital marketing strategy including SEO, content marketing, social media, and paid ads. Get a custom growth roadmap for your business." canonical="/services/digital-marketing" />
      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <TrendingUp size={12} />
              Digital Marketing Strategy
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Marketing That <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Actually Drives Growth</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Strategy-first digital marketing — SEO, paid ads, content, and automation that work together to grow your revenue predictably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-500/20">
                Get My Strategy — From $299
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-teal-400" /> Data-driven decisions</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-teal-400" /> Transparent reporting</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-teal-400" /> No long-term lock-in</span>
            </div>
          </div>
        </section>

        {/* Results Metrics */}
        <section className="py-14 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Average Client Results
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 text-center hover:border-teal-500/40 transition-colors">
                  <div className="text-4xl font-black text-teal-400 mb-1">{m.metric}</div>
                  <div className="text-white text-sm font-bold mb-1">{m.label}</div>
                  <div className="text-slate-400 text-xs leading-tight">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Funnel */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Our System
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">The 4-Stage Growth System</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">We don't just run ads — we build a complete customer acquisition and retention system.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {growthFunnel.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.stage} className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                    <div className="absolute -top-3 -left-3 w-7 h-7 bg-teal-600 text-white text-xs font-black rounded-full flex items-center justify-center shadow">
                      {i + 1}
                    </div>
                    <div className={`w-10 h-10 ${stage.color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-1">{stage.stage}</div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{stage.desc}</p>
                    <ul className="space-y-1">
                      {stage.tactics.map((t) => (
                        <li key={t} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <div className="w-1 h-1 bg-teal-400 rounded-full flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Services
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">What We Do For You</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Marketing Packages</h2>
              <p className="text-gray-500">From one-time strategy to full ongoing management.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-8 flex flex-col border-2 ${pkg.highlight ? 'bg-slate-900 border-teal-400 shadow-2xl shadow-teal-500/10 scale-105' : 'bg-white border-gray-200'}`}>
                  {pkg.highlight && (
                    <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Zap size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <div className={`text-3xl font-black mb-3 ${pkg.highlight ? 'text-teal-400' : 'text-gray-900'}`}>{pkg.price}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-teal-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${pkg.highlight ? 'bg-teal-400 hover:bg-teal-300 text-teal-900' : 'bg-gray-900 hover:bg-gray-700 text-white'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Track */}
        <section className="py-14 px-4 bg-teal-50 border-y border-teal-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-2">
                <Clock size={11} /> Reporting
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-1">Transparent, Plain-English Reports</h2>
              <p className="text-gray-500 text-sm">No vanity metrics. We report on what moves your business forward.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Revenue generated', icon: '₹' },
                { label: 'Cost per acquisition', icon: '🎯' },
                { label: 'Return on ad spend', icon: '📈' },
                { label: 'Organic traffic growth', icon: '🔍' },
                { label: 'Email open & click rates', icon: '📧' },
                { label: 'Conversion rate', icon: '⚡' },
                { label: 'Leads generated', icon: '👥' },
                { label: 'Keyword rankings', icon: '🏆' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-teal-200 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <p className="text-xs font-semibold text-gray-700 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Marketing FAQs</h2>
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
        <section className="py-16 px-4 bg-teal-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <BarChart3 size={40} className="mx-auto mb-4 text-teal-300" />
            <h2 className="text-3xl font-black mb-3">Let's Grow Your Business Together</h2>
            <p className="text-teal-100 mb-8">Data-driven marketing with transparent results and no fluff.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-teal-800 font-bold px-8 py-4 rounded-xl transition-all">
                Book a Strategy Call <ArrowRight size={18} />
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all">
                All Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
