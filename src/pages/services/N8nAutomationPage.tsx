import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Zap, ChevronRight, MessageCircle,
  Clock, GitBranch, Repeat, Database, Bell, Mail,
  ShoppingCart, Users, BarChart3, Shield, Code, Globe,
  Store, Stethoscope, GraduationCap, Briefcase, Home, Utensils,
} from 'lucide-react';
import SEO from '../../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20n8n%20workflow%20automation.";

const packages = [
  {
    name: 'Starter Automation',
    price: '$399',
    desc: 'Perfect for businesses ready to eliminate their first repetitive manual task and start saving time immediately.',
    features: [
      '1 automated workflow',
      'Up to 3 app integrations',
      'Error notifications',
      '30-day support included',
      'Workflow documentation',
    ],
    highlight: false,
  },
  {
    name: 'Business Automation',
    price: '$799',
    desc: 'A full automation suite that connects your core tools — CRM, email, forms, and more — into one seamless system.',
    features: [
      'Up to 5 automated workflows',
      'Unlimited app integrations',
      'Conditional logic & branching',
      'Error handling & retries',
      'Google Sheets / Airtable sync',
      'Email & Slack notifications',
      '60-day priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise Automation',
    price: '$1,499',
    desc: 'End-to-end automation architecture for teams with complex processes, data pipelines, and multi-system workflows.',
    features: [
      'Unlimited workflows',
      'Custom API integrations',
      'Data transformation & filtering',
      'Scheduled & webhook triggers',
      'Self-hosted n8n setup',
      'Team access & permissions',
      '90-day dedicated support',
    ],
    highlight: false,
  },
];

const coreFeatures = [
  { icon: Repeat, title: 'Workflow Automation', desc: 'Automate repetitive tasks between 400+ apps — zero manual effort, zero errors, running 24/7.' },
  { icon: GitBranch, title: 'Conditional Logic', desc: 'Build smart workflows with if/else branching, filters, and multi-step decision trees.' },
  { icon: Database, title: 'Data Sync', desc: 'Keep your CRM, spreadsheets, databases, and tools in perfect sync — automatically.' },
  { icon: Bell, title: 'Real-Time Triggers', desc: 'React instantly to form submissions, payments, emails, and webhooks across your stack.' },
  { icon: Mail, title: 'Email & Notifications', desc: 'Auto-send welcome emails, follow-ups, alerts, and reports — perfectly timed every time.' },
  { icon: ShoppingCart, title: 'eCommerce Automation', desc: 'Connect Shopify, WooCommerce, or Stripe to automate orders, refunds, and customer journeys.' },
  { icon: Users, title: 'CRM Integration', desc: 'Sync leads from forms to HubSpot, Pipedrive, or Notion automatically — no copy-pasting.' },
  { icon: BarChart3, title: 'Reporting & Dashboards', desc: 'Automate daily/weekly reports delivered to Slack, email, or Google Sheets on schedule.' },
];

const useCases = [
  {
    title: 'Lead Capture to CRM',
    desc: 'Form submission → auto-creates contact in CRM → sends personalised welcome email → notifies your sales team on Slack.',
    tag: 'Lead Generation',
  },
  {
    title: 'eCommerce Order Processing',
    desc: 'New order in Shopify → updates inventory spreadsheet → sends customer confirmation → alerts fulfilment team.',
    tag: 'eCommerce',
  },
  {
    title: 'Invoice & Payment Automation',
    desc: 'Stripe payment received → generates invoice PDF → sends to client → logs revenue in Google Sheets.',
    tag: 'Finance',
  },
  {
    title: 'Social Media Scheduling',
    desc: 'New blog post published → automatically creates social captions → schedules posts across platforms.',
    tag: 'Marketing',
  },
  {
    title: 'Support Ticket Routing',
    desc: 'Email arrives → categorised by keyword → assigned to correct team member → confirmation sent to customer.',
    tag: 'Customer Support',
  },
  {
    title: 'Weekly Business Reports',
    desc: 'Every Monday at 8am → pulls data from GA4, CRM, and Stripe → compiles report → emails to leadership.',
    tag: 'Reporting',
  },
];

const integrations = [
  'Gmail', 'Slack', 'HubSpot', 'Notion', 'Google Sheets',
  'Airtable', 'Shopify', 'WooCommerce', 'Stripe', 'Typeform',
  'Calendly', 'Mailchimp', 'Pipedrive', 'Zapier Migration', 'Webhooks',
  'PostgreSQL', 'MySQL', 'WordPress', 'Telegram', 'WhatsApp Business',
];

const industries = [
  { icon: Store, label: 'Retail & eCommerce' },
  { icon: Stethoscope, label: 'Healthcare & Clinics' },
  { icon: GraduationCap, label: 'Coaches & Educators' },
  { icon: Briefcase, label: 'Agencies & Consultants' },
  { icon: Home, label: 'Real Estate' },
  { icon: Utensils, label: 'Restaurants & Food' },
];

const techStack = [
  { label: 'n8n', desc: 'Open-source workflow engine' },
  { label: 'Webhooks & APIs', desc: 'Connect any service or tool' },
  { label: 'Self-Hosted Option', desc: 'Full data control on your server' },
  { label: 'Cloud Deployment', desc: 'Managed hosting with uptime SLA' },
  { label: 'Error Monitoring', desc: 'Alerts and auto-retry on failure' },
  { label: '400+ Integrations', desc: 'Native nodes for major platforms' },
];

const faqs = [
  {
    q: 'What is n8n and why use it over Zapier?',
    a: 'n8n is an open-source workflow automation platform. Unlike Zapier, it can be self-hosted (giving you full data ownership), supports complex logic, and has no per-task pricing — making it far more cost-effective at scale.',
  },
  {
    q: 'Do I need technical knowledge to use the automations you build?',
    a: 'No. We build and configure everything for you, and provide clear documentation. Most clients manage their automations through simple dashboards without any coding.',
  },
  {
    q: 'How long does it take to set up an automation?',
    a: 'Simple workflows are typically live within 2–3 business days. Complex multi-step automations may take 5–10 days depending on integrations and testing requirements.',
  },
  {
    q: 'Can you migrate my existing Zapier or Make workflows to n8n?',
    a: 'Yes — migration is one of the most common requests. We analyse your existing workflows and recreate them in n8n, often improving their reliability and reducing your monthly costs.',
  },
  {
    q: 'What if a workflow breaks or stops working?',
    a: 'All our automations include error handling and notification alerts. We also provide post-delivery support so you can reach us if anything needs attention.',
  },
  {
    q: 'Can the automations handle large data volumes?',
    a: 'Yes. n8n is built for scale. We configure workflows to handle batch processing, pagination, and rate limiting to ensure smooth operation even with thousands of records.',
  },
];

export default function N8nAutomationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="n8n Workflow Automation Services — Save 10+ Hours a Week"
        description="Custom n8n automation workflows that eliminate manual tasks, sync your tools, and run your business on autopilot. From $399. Zapier migration included."
        canonical="/services/n8n-automation"
      />
      <main id="main-content" className="flex-1 pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-green-950 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Zap size={12} />
              n8n Workflow Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Automate the Work.{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Focus on Growth.
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We build custom n8n automation workflows that connect your apps, eliminate manual tasks, and keep your business running on autopilot — 24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
              >
                Start Automating — From $399
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Save 10+ hours per week</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 400+ app integrations</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Self-hosted or cloud</span>
            </div>
          </div>
        </section>

        {/* Why Automate */}
        <section className="py-16 px-4 bg-green-50 border-b border-green-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { stat: '10+ hrs', label: 'Saved per week', sub: 'Average time reclaimed by our clients' },
                { stat: '400+', label: 'App integrations', sub: 'Gmail, Slack, Shopify, HubSpot & more' },
                { stat: '99.9%', label: 'Workflow uptime', sub: 'With error alerts and auto-retry logic' },
              ].map((item) => (
                <div key={item.stat} className="bg-white rounded-2xl border border-green-100 p-7 shadow-sm">
                  <p className="text-4xl font-black text-green-700 mb-1">{item.stat}</p>
                  <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                What We Automate
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">8 Automation Capabilities in Every Build</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Every workflow we build is robust, documented, and built to run without supervision.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-green-300 hover:bg-green-50 hover:shadow-sm transition-all">
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

        {/* Real-world use cases */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Use Cases
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Automation Workflows We Build</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Real examples of automations saving our clients hours every single week.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all">
                  <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                    {uc.tag}
                  </span>
                  <h3 className="font-black text-gray-900 mb-2 text-sm">{uc.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Automation Packages</h2>
              <p className="text-gray-500">From a single time-saving workflow to a full business automation system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 flex flex-col border-2 ${
                    pkg.highlight
                      ? 'bg-slate-900 border-green-400 shadow-2xl shadow-green-500/10 scale-105'
                      : 'bg-white border-gray-200'
                  }`}
                >
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
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3 rounded-xl transition-all ${
                      pkg.highlight
                        ? 'bg-green-400 hover:bg-green-300 text-green-900'
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

        {/* Integrations */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Integrations
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Connects With the Tools You Already Use</h2>
              <p className="text-slate-400 text-sm">400+ native integrations — if it has an API, we can automate it.</p>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {integrations.map((name) => (
                <span key={name} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold px-3.5 py-2 rounded-lg hover:border-green-500/40 hover:text-white transition-colors">
                  {name}
                </span>
              ))}
              <span className="bg-green-600/20 border border-green-500/30 text-green-400 text-xs font-semibold px-3.5 py-2 rounded-lg">
                + 380 more
              </span>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Technology
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">What Powers Your Automations</h2>
              <p className="text-gray-500 text-sm">Enterprise-grade tools, configured for your exact needs.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((t) => (
                <div key={t.label} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors">
                  <Code size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.label}</p>
                    <p className="text-gray-500 text-xs">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Industry Experience
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Industries We Automate For</h2>
              <p className="text-gray-500 text-sm">Every sector has repetitive workflows. We find them and eliminate them.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:bg-green-50 hover:border-green-200 transition-colors group">
                    <Icon size={20} className="mx-auto mb-2 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <p className="text-xs font-semibold text-gray-700 leading-tight">{ind.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Clock size={12} /> Timeline
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Your Automation Goes Live in Days</h2>
              <p className="text-gray-500 text-sm">A focused delivery process so you start saving time fast.</p>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-green-200" />
              {[
                { day: 'Day 1', title: 'Discovery Call', desc: 'We map your current workflows, identify the highest-impact tasks to automate first, and define the integration scope.' },
                { day: 'Day 2', title: 'Workflow Design', desc: 'We design the automation logic — triggers, conditions, actions, and error handling — and share a visual diagram for your approval.' },
                { day: 'Day 3–5', title: 'Build & Configure', desc: 'We build and configure the n8n workflow, connect all integrations, and run internal tests with real data.' },
                { day: 'Day 6–7', title: 'UAT & Refinement', desc: 'You test the live workflow. We gather feedback, fix edge cases, and ensure everything runs exactly as intended.' },
                { day: 'Day 8', title: 'Go Live + Handover', desc: 'Workflows are activated. We provide full documentation, a walkthrough session, and your support window begins.' },
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
            <h2 className="text-3xl font-black mb-3">Ready to Stop Doing It Manually?</h2>
            <p className="text-green-100 mb-8">Let's build automations that work while you sleep. Book a free 30-minute call and we'll map out your first workflow together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold px-8 py-4 rounded-xl transition-all"
              >
                Book Free Strategy Call <ArrowRight size={18} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all"
              >
                All Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
