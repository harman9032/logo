import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, TrendingUp, Search, BarChart3,
  ChevronRight, MessageCircle, Target, Globe, Zap, Mail,
  Users, MousePointer, ShoppingCart, Star, Clock, Eye,
  Award, MapPin, DollarSign, ChevronDown, ChevronUp,
  Layers, CheckSquare, XSquare, Megaphone,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20Digital%20Marketing%20services.";

const services = [
  { icon: Search, title: 'SEO Strategy', desc: 'Rank higher on Google with technical SEO, on-page optimisation, keyword research, and link building.' },
  { icon: Target, title: 'Paid Ads (PPC)', desc: 'Google Ads, Meta Ads, and LinkedIn campaigns managed for maximum ROI and lowest cost per lead.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automated email sequences, newsletters, and drip campaigns built in Klaviyo, Mailchimp, or ActiveCampaign.' },
  { icon: Globe, title: 'Content Strategy', desc: 'SEO blog posts, landing pages, and content that attracts organic traffic and nurtures leads over time.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Monthly GA4 reports with clear performance summaries, insights, and prioritised recommendations.' },
  { icon: Zap, title: 'Marketing Automation', desc: 'CRM setup, lead nurturing workflows, and automation that turns your marketing into a 24/7 system.' },
];

const packages = [
  {
    name: 'Strategy Starter',
    price: '$299',
    priceNote: 'One-time deliverable',
    turnaround: '5–7 business days',
    desc: 'A comprehensive digital marketing strategy and 90-day roadmap tailored to your business goals.',
    features: [
      'Competitor analysis (5 competitors)',
      'Keyword research report',
      '90-day marketing roadmap',
      'Channel recommendations',
      'Content calendar framework',
      'Quick-win action list',
    ],
    highlight: false,
  },
  {
    name: 'Growth Engine',
    price: '$799/mo',
    priceNote: 'Most popular · No lock-in',
    turnaround: 'Ongoing management',
    desc: 'Ongoing digital marketing management — execution, optimisation, and reporting each month.',
    features: [
      'SEO management (monthly)',
      'Google Ads management',
      'Social media ad management',
      'Monthly performance report',
      'A/B testing & optimisation',
      'Email campaigns (2/month)',
      'Direct Slack/WhatsApp access',
    ],
    highlight: true,
  },
  {
    name: 'Full Stack',
    price: '$1,499/mo',
    priceNote: 'Complete ownership · No lock-in',
    turnaround: 'Ongoing management',
    desc: 'End-to-end digital marketing across every channel — content, ads, email, and analytics.',
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
    tactics: ['SEO & Content Marketing', 'Google Ads', 'Meta & Social Ads', 'Organic Social Media'],
    desc: 'Bring qualified buyers to your brand through search, social, and paid channels.',
  },
  {
    stage: 'Engage',
    icon: MousePointer,
    color: 'bg-sky-600',
    tactics: ['Landing Page Optimisation', 'Lead Magnets', 'Email List Building', 'Retargeting Ads'],
    desc: 'Turn traffic into interested leads with compelling offers and conversion-optimised pages.',
  },
  {
    stage: 'Convert',
    icon: ShoppingCart,
    color: 'bg-green-600',
    tactics: ['Email Nurture Sequences', 'Booking Funnels', 'Sales Page Optimisation', 'A/B Testing'],
    desc: 'Move leads to paying customers with automated follow-up and strategic conversion flows.',
  },
  {
    stage: 'Retain',
    icon: Star,
    color: 'bg-amber-500',
    tactics: ['Customer Email Flows', 'Loyalty Campaigns', 'Review Generation', 'Upsell & Referral Programs'],
    desc: 'Keep customers buying, generate 5-star reviews, and build referral revenue automatically.',
  },
];

const metrics = [
  { metric: '3.2×', label: 'Average ROAS', sub: 'Return on Ad Spend across managed campaigns' },
  { metric: '47%', label: 'More organic traffic', sub: 'Average increase after 6 months of SEO' },
  { metric: '28%', label: 'Lower cost per lead', sub: 'After 90 days of campaign optimisation' },
  { metric: '4.1×', label: 'Email revenue lift', sub: 'From automated email sequences' },
];

const stats = [
  { value: '150+', label: 'Brands grown', icon: Users },
  { value: '3.2×', label: 'Average ROAS', icon: TrendingUp },
  { value: '12+', label: 'Years experience', icon: Award },
  { value: '48 hr', label: 'Strategy delivered', icon: Clock },
];

const channels = [
  'Google Search Ads', 'Google Shopping', 'Meta (Facebook/Instagram) Ads',
  'LinkedIn Ads', 'YouTube Pre-roll', 'SEO & Content Marketing',
  'Klaviyo Email Marketing', 'Mailchimp Campaigns', 'ActiveCampaign CRM',
  'Google Analytics 4', 'Google Tag Manager', 'HubSpot',
];

const vsComparison = [
  { feature: 'Direct access to senior strategist' },
  { feature: 'Flat monthly rate — no % of ad spend' },
  { feature: 'No minimum 6-month contracts' },
  { feature: 'Weekly & monthly transparent reporting' },
  { feature: 'Strategy + execution in one engagement' },
  { feature: 'Cross-channel attribution tracking' },
  { feature: 'Design + marketing expertise combined' },
  { feature: 'Slack/WhatsApp direct communication' },
];

const industries = [
  'eCommerce & Retail', 'SaaS & Tech', 'Healthcare & Wellness',
  'Real Estate', 'Finance & Insurance', 'Legal Services',
  'Home Services', 'Beauty & Salons', 'Hospitality & Travel',
  'Education & Coaching', 'B2B Professional Services', 'Non-Profit',
];

const reportingMetrics = [
  { label: 'Revenue generated', icon: DollarSign },
  { label: 'Cost per acquisition', icon: Target },
  { label: 'Return on ad spend (ROAS)', icon: TrendingUp },
  { label: 'Organic traffic growth', icon: Search },
  { label: 'Email open & click rates', icon: Mail },
  { label: 'Conversion rate', icon: Zap },
  { label: 'Leads generated', icon: Users },
  { label: 'Keyword ranking movement', icon: BarChart3 },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Senior Freelancer — Not a Junior',
    desc: '12+ years managing digital marketing for brands across the US, Canada, and Australia. Every campaign is handled personally.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: DollarSign,
    title: 'Flat Monthly Rate',
    desc: 'No percentage of ad spend. No surprise fees. One flat rate covers strategy, execution, and reporting.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Layers,
    title: 'Strategy + Execution',
    desc: 'Most freelancers do one or the other. I build the strategy and execute it — you get a unified marketing engine.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Eye,
    title: 'Design-Led Marketing',
    desc: 'Every ad, landing page, and email is designed to convert — not just written. Design and marketing work together.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Globe,
    title: 'No Lock-In Contracts',
    desc: 'Month-to-month with 30 days notice. I earn your continued business through results, not contractual obligation.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    desc: 'WhatsApp and Slack access to the person running your campaigns. No account managers, no support tickets.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

const faqs = [
  {
    q: 'How much does a digital marketing freelancer charge?',
    a: 'A digital marketing freelancer typically charges $299–$1,499+ per month depending on the scope and channels involved. A one-time strategy document starts at $299. Ongoing campaign management starts at $799/month covering SEO, Google Ads, and Meta Ads. Full-stack monthly management including content and automation is $1,499/month. All pricing is flat-rate — no percentage of ad spend.',
  },
  {
    q: 'Why hire a digital marketing freelancer instead of an agency?',
    a: 'A digital marketing freelancer gives you direct access to the senior strategist managing your campaigns, not a junior account manager. Freelancers are faster to communicate with, more flexible on contracts, and typically 40–60% less expensive than full-service agencies. For most small to mid-sized businesses, a specialist freelancer delivers comparable or better results at a fraction of the agency cost.',
  },
  {
    q: 'What does a digital marketing freelancer do?',
    a: 'A digital marketing freelancer plans, executes, and optimises your brand\'s online marketing across channels including SEO, Google Ads, Meta Ads, email marketing, content creation, and marketing automation. They combine strategy with hands-on execution — managing campaigns, writing copy, analysing data, and reporting performance in plain English each month.',
  },
  {
    q: 'How quickly will I see results from digital marketing?',
    a: 'Paid ads (Google and Meta) can show measurable results within the first 7–14 days. SEO typically delivers noticeable organic traffic increases within 3–6 months. Email marketing automation generates results from the first send. I set transparent, realistic expectations and track and report all key metrics from day one.',
  },
  {
    q: 'Do you manage the ad budget or do I pay separately?',
    a: 'The ad budget (what you pay Google or Meta) is separate from the management fee. You maintain direct control and ownership of all ad accounts. The flat monthly management fee covers strategy, campaign setup, ongoing optimisation, creative briefing, and reporting. There is no percentage-of-spend markup on your budget.',
  },
  {
    q: 'What channels does your digital marketing service cover?',
    a: 'Services cover Google Search Ads, Google Shopping, Meta Ads (Facebook and Instagram), LinkedIn Ads, YouTube Ads, SEO and content marketing, email marketing (Klaviyo, Mailchimp, ActiveCampaign), Google Analytics 4, and marketing automation. The channels used are chosen based on where your target audience is and what delivers the best ROI for your specific business.',
  },
  {
    q: 'Is there a minimum contract period?',
    a: 'No. All ongoing management packages are month-to-month with a 30-day notice period. There are no 6-month or 12-month lock-in contracts. I believe in earning continued engagement through results, not contractual obligation.',
  },
  {
    q: 'Can you work alongside our existing in-house marketing team?',
    a: 'Yes. Many clients use this service as a specialist extension of their in-house team — filling gaps in paid media, SEO, or email marketing expertise. I can collaborate directly with your team on Slack, share campaign access, and align on shared reporting dashboards.',
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

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Digital Marketing Freelancer — SEO, Ads & Growth Strategy | US & Canada"
        description="Hire a digital marketing freelancer with 12+ years experience. SEO, Google Ads, Meta Ads, email marketing, and full-funnel strategy. From $299. No lock-in contracts."
        canonical="/services/digital-marketing"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing Freelancer — SEO, Ads & Growth Strategy",
            "description": "Digital marketing services for businesses in the US, Canada, and Australia including SEO, Google Ads, Meta Ads, email marketing, content strategy, and marketing automation.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "DigitalBoost",
              "areaServed": ["United States", "Canada", "Australia", "United Kingdom"],
              "knowsAbout": [
                "Digital Marketing", "SEO", "Google Ads", "Meta Ads",
                "Email Marketing", "Content Marketing", "Marketing Automation",
                "PPC Management", "Digital Marketing Freelancer"
              ],
            },
            "offers": [
              { "@type": "Offer", "name": "Strategy Starter", "price": "299", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Growth Engine", "price": "799", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Full Stack Marketing", "price": "1499", "priceCurrency": "USD" },
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
        <section className="bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 py-24 px-4 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <TrendingUp size={12} />
              Digital Marketing Freelancer — US &amp; Canada
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Hire a Digital Marketing Freelancer{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Who Drives Real Growth
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              SEO, Google Ads, Meta Ads, email marketing, and full-funnel strategy — planned and executed by a senior digital marketing specialist with 12+ years experience. No agencies. No juniors. Direct results.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-teal-400" /> Serving US &amp; Canada</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-teal-400" /> Strategy in 48 hrs</span>
              <span className="flex items-center gap-1.5"><DollarSign size={12} className="text-teal-400" /> From $299</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-teal-400" /> No lock-in contracts</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-500/20"
              >
                Hire Me — From $299
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
                      <Icon size={16} className="text-teal-400" />
                      <span className="text-2xl font-black text-white">{s.value}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT IS A DIGITAL MARKETING FREELANCER (AIO/GEO definitional block) ── */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  What Is a Digital Marketing Freelancer?
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  A Senior Marketer Who Works Directly With You
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A <strong>digital marketing freelancer</strong> is an independent specialist who plans and executes online marketing for businesses — covering SEO, paid advertising, email marketing, content strategy, and analytics. Unlike an agency, a freelancer provides direct access to the senior expert running your campaigns, with no account managers or junior handoffs.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Businesses hire digital marketing freelancers to grow organic traffic, reduce cost-per-lead on paid ads, build automated email revenue, and create a measurable, repeatable growth system. A specialist freelancer typically costs 40–60% less than a full-service agency while delivering the same strategic depth.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The global digital advertising market is projected to exceed <strong>$870 billion by 2026</strong>. Brands that invest in expert-led, data-driven digital marketing consistently outperform competitors who rely on generalist solutions or ad hoc spending.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Agency vs Freelancer Cost', value: '60%', note: 'average savings with a specialist freelancer' },
                  { label: 'Average Google Ads ROAS', value: '3.2×', note: 'return on managed ad spend' },
                  { label: 'SEO Traffic Growth', value: '47%', note: 'average 6-month organic traffic increase' },
                  { label: 'Email Revenue Lift', value: '4.1×', note: 'from automated email sequences' },
                ].map((item) => (
                  <div key={item.label} className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-teal-600 mb-1">{item.value}</div>
                    <p className="text-xs font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-snug">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS METRICS ── */}
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

        {/* ── SERVICES ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Services
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Digital Marketing Services I Provide
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Every engagement is hands-on and strategy-led — not templated packages handed to junior staff.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-teal-600" />
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GROWTH FUNNEL ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                The System
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                How Digital Marketing Freelancers Build Growth
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Not just running ads — building a full customer acquisition and retention engine across all stages of the buyer journey.
              </p>
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

        {/* ── VS COMPARISON ── */}
        <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Freelancer vs Agency
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                Why Choose a Digital Marketing Freelancer Over an Agency?
              </h2>
              <p className="text-gray-500 text-sm">A specialist freelancer delivers senior-level strategy and execution at a fraction of agency pricing.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 border-b border-gray-200 px-5 py-3">
                <div className="col-span-2">What You Get</div>
                <div className="text-center text-teal-600">Freelancer</div>
                <div className="text-center text-gray-400">Agency</div>
              </div>
              {vsComparison.map((row, i) => (
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
        <section className="py-20 px-4 bg-white" id="pricing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Digital Marketing Freelancer Pricing — No Hidden Fees
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Flat-rate monthly pricing. No percentage of ad spend. No lock-in contracts. Cancel with 30 days notice.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 flex flex-col border-2 ${
                    pkg.highlight
                      ? 'bg-slate-900 border-teal-400 shadow-2xl shadow-teal-500/10 scale-105'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Zap size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-3xl font-black mb-1 ${pkg.highlight ? 'text-teal-400' : 'text-gray-900'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-xs font-semibold mb-1 ${pkg.highlight ? 'text-teal-400/70' : 'text-gray-400'}`}>
                    {pkg.priceNote} · {pkg.turnaround}
                  </p>
                  <p className={`text-sm mb-6 leading-relaxed mt-2 ${pkg.highlight ? 'text-slate-400' : 'text-gray-500'}`}>
                    {pkg.desc}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-teal-400' : 'text-green-600'}`} />
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
                        ? 'bg-teal-400 hover:bg-teal-300 text-teal-900'
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

        {/* ── CHANNELS ── */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Channels &amp; Tools
              </div>
              <h2 className="text-2xl font-black text-white mb-2">
                Platforms Managed as Your Digital Marketing Freelancer
              </h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto">
                All major paid, organic, and automation platforms — managed and optimised in a single engagement.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {channels.map((ch) => (
                <span key={ch} className="bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:border-teal-500/50 hover:text-teal-300 transition-colors">
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── REPORTING ── */}
        <section className="py-14 px-4 bg-teal-50 border-y border-teal-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-2">
                <Clock size={11} /> Reporting
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-1">
                Transparent, Plain-English Reports Every Month
              </h2>
              <p className="text-gray-500 text-sm">No vanity metrics. Everything tracked is tied directly to revenue and business outcomes.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {reportingMetrics.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white border border-teal-200 rounded-xl p-4 text-center">
                    <Icon size={18} className="mx-auto mb-2 text-teal-500" />
                    <p className="text-xs font-semibold text-gray-700 leading-tight">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE THIS FREELANCER ── */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Why Hire This Digital Marketing Freelancer?
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                With thousands of marketers on Upwork and Fiverr, here is what makes this service different.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
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
        <section className="py-16 px-4 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Globe size={12} /> Industries Served
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Digital Marketing for Every Industry
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Data-driven marketing campaigns built for brands across the US, Canada, and Australia — from startups to established businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span key={ind} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-teal-300 hover:text-teal-700 transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (AEO) ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Digital Marketing Freelancer FAQ
              </h2>
              <p className="text-gray-500 text-sm">
                Answers to the most common questions about hiring a digital marketing freelancer.
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
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-lg font-black text-gray-900 mb-6">
              Explore Related Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Shopify Design', href: '/services/shopify-design' },
                { label: 'WordPress Design', href: '/services/wordpress-design' },
                { label: 'Brand Identity', href: '/services/brand-identity' },
                { label: 'Social Media Design', href: '/services/social-media-design' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="bg-white border border-gray-200 hover:border-teal-300 hover:text-teal-700 text-gray-700 text-sm font-semibold text-center px-4 py-3 rounded-xl transition-all"
                >
                  {link.label}
                  <ChevronRight size={14} className="inline ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-teal-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-teal-200 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Hire a Digital Marketing Freelancer
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Ready to Grow Your Business With Proven Digital Marketing?
            </h2>
            <p className="text-teal-100 mb-2 leading-relaxed">
              SEO, Google Ads, Meta Ads, and email marketing — planned and executed by a senior digital marketing specialist with 12+ years experience.
            </p>
            <p className="text-teal-300/70 text-sm mb-8">
              From $299 · No lock-in contracts · 30-day cancellation · Flat-rate pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-teal-800 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Book a Strategy Call
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
