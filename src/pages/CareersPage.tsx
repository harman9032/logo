import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, Clock, Briefcase, Heart, Zap,
  Users, Globe, Star, CheckCircle, ChevronDown, ChevronUp,
  Laptop, Palette, TrendingUp, Workflow, Coffee, Shield,
  MessageCircle, Send,
} from 'lucide-react';
import SEO from '../components/SEO';

const WHATSAPP = "https://wa.me/917837319660?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20a%20role%20at%20Daily%20Creative%20Designs.";
const EMAIL_LINK = "mailto:careers@dailycreativedesigns.com?subject=Job%20Application";

const perks = [
  { icon: Globe, title: '100% Remote', desc: 'Work from anywhere in the world. All you need is great Wi-Fi and great work.' },
  { icon: Clock, title: 'Flexible Hours', desc: 'No rigid 9-to-5. We care about output, not clock-watching.' },
  { icon: Zap, title: 'Fast-Moving Team', desc: 'Join a lean, ambitious crew where your work ships in days, not months.' },
  { icon: TrendingUp, title: 'Grow With Us', desc: 'We invest in people who invest in their craft. Courses, tools, mentorship.' },
  { icon: Heart, title: 'Creative Culture', desc: 'A design-first environment where quality and craft are taken seriously.' },
  { icon: Coffee, title: 'Work-Life Balance', desc: 'We believe sustainable pace produces better work. No crunch culture here.' },
];

const values = [
  { icon: Star, title: 'Quality Over Speed', desc: "We'd rather do it right than do it fast. Our clients notice the difference." },
  { icon: Shield, title: 'Ownership Mindset', desc: 'Every team member owns their work end-to-end. No hand-offs, no excuses.' },
  { icon: Users, title: 'Collaborative by Nature', desc: 'We share knowledge, give feedback freely, and make each other better.' },
  { icon: Laptop, title: 'Tools Matter', desc: 'We invest in the best tools — Figma, n8n, VS Code, and whatever you need.' },
];

interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  icon: React.ElementType;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const openRoles: JobListing[] = [
  {
    id: 'web-designer',
    title: 'Web Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    icon: Palette,
    about: "We're looking for a talented web designer who can craft beautiful, conversion-focused websites for our global client base. You'll work on WordPress, Shopify, and custom projects from concept through to delivery.",
    responsibilities: [
      'Design responsive websites in Figma for WordPress and Shopify',
      'Create wireframes, mockups, and interactive prototypes',
      'Collaborate with developers to ensure pixel-perfect implementation',
      'Develop and maintain brand identity assets for clients',
      'Contribute to landing page and UI/UX decisions',
    ],
    requirements: [
      '2+ years of professional web design experience',
      'Expert-level Figma skills',
      'Portfolio showing strong typography, layout, and visual hierarchy',
      'Understanding of UX principles and conversion design',
      'Experience designing for WordPress or Shopify',
    ],
    niceToHave: [
      'Experience with Elementor or similar page builders',
      'Basic HTML/CSS knowledge',
      'Motion design or micro-interaction skills',
    ],
  },
  {
    id: 'wordpress-developer',
    title: 'WordPress Developer',
    department: 'Development',
    type: 'Full-time',
    location: 'Remote',
    icon: Laptop,
    about: "We're hiring a WordPress developer who takes pride in clean, performant websites. You'll build and customise sites for clients ranging from small businesses to growing eCommerce brands.",
    responsibilities: [
      'Build custom WordPress websites from approved Figma designs',
      'Develop and maintain custom themes and plugins',
      'Optimise site performance (Core Web Vitals, PageSpeed)',
      'Configure Elementor, ACF, and WooCommerce as required',
      'Handle migrations, updates, and ongoing maintenance retainers',
    ],
    requirements: [
      '3+ years of WordPress development experience',
      'Strong PHP, HTML, CSS, and JavaScript skills',
      'Experience with WooCommerce and custom plugin development',
      'Proficiency with Git and version control workflows',
      'Understanding of SEO technical requirements',
    ],
    niceToHave: [
      'Experience with headless WordPress / REST API',
      'Familiarity with React or Vue',
      'DevOps or cPanel/server management experience',
    ],
  },
  {
    id: 'automation-specialist',
    title: 'n8n Automation Specialist',
    department: 'Automation',
    type: 'Full-time / Contract',
    location: 'Remote',
    icon: Workflow,
    about: "We're building out our automation practice and need a workflow engineer who can design and deploy complex n8n automations for clients. This is a high-impact role where every workflow you build saves clients hours every week.",
    responsibilities: [
      'Design and build n8n workflows for clients across industries',
      'Integrate apps via APIs, webhooks, and native n8n nodes',
      'Handle data transformation, filtering, and conditional logic',
      'Set up self-hosted n8n instances on client servers',
      'Document workflows and onboard clients post-delivery',
    ],
    requirements: [
      '2+ years of experience with n8n, Make, or Zapier',
      'Strong understanding of REST APIs and webhooks',
      'Experience integrating CRMs, email tools, and eCommerce platforms',
      'Comfortable with JSON, basic scripting, and debugging',
      'Excellent client communication and documentation skills',
    ],
    niceToHave: [
      'Experience with self-hosted deployments (Docker, Linux)',
      'JavaScript / Node.js scripting inside n8n',
      'Database query experience (PostgreSQL or MySQL)',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote',
    icon: TrendingUp,
    about: "We're growing our marketing delivery team and need someone who understands SEO, paid ads, and content strategy. You'll manage campaigns for our clients and help them grow measurably online.",
    responsibilities: [
      'Manage SEO strategies including on-page, technical, and link building',
      'Plan and execute Google Ads and Meta Ads campaigns',
      'Write and optimise website copy and blog content',
      'Produce monthly performance reports with clear recommendations',
      'Work with the design team on landing pages and ad creatives',
    ],
    requirements: [
      '2+ years in digital marketing with proven results',
      'Hands-on experience with Google Ads and Meta Business Suite',
      'Solid understanding of SEO tools (Ahrefs, SEMrush, Search Console)',
      'Strong written English and copywriting skills',
      'Experience with Google Analytics 4',
    ],
    niceToHave: [
      'Email marketing experience (Mailchimp, Klaviyo)',
      'Knowledge of conversion rate optimisation',
      'Basic Canva or Adobe skills for ad creatives',
    ],
  },
];

const process = [
  { step: '01', title: 'Apply', desc: "Send us your CV and portfolio (or relevant work samples) via WhatsApp or email. Tell us why you're a great fit in a few lines." },
  { step: '02', title: 'Intro Call', desc: "A 30-minute call with our hiring lead. We'll cover your experience, expectations, and what the role looks like day-to-day." },
  { step: '03', title: 'Skills Test', desc: 'A short, practical task relevant to the role. We keep it focused — no unpaid week-long projects.' },
  { step: '04', title: 'Final Interview', desc: "Meet the team. We'll go deep on how you think, how you work, and how you handle client feedback." },
  { step: '05', title: 'Offer', desc: "If it's a mutual fit, we'll send an offer within 48 hours and get you onboarded fast." },
];

function JobCard({ job }: { job: JobListing }) {
  const [open, setOpen] = useState(false);
  const Icon = job.icon;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-green-300 hover:shadow-md transition-all">
      <button
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-500/20">
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-black text-gray-900 text-lg leading-tight">{job.title}</h3>
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <Briefcase size={11} /> {job.department}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <Clock size={11} /> {job.type}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <MapPin size={11} /> {job.location}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          {open ? <ChevronUp size={18} className="text-green-600" /> : <ChevronDown size={18} className="text-gray-400" />}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-7 border-t border-gray-100 pt-5">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{job.about}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Nice to Have</h4>
              <ul className="space-y-2">
                {job.niceToHave.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <Star size={13} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 text-xs leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <MessageCircle size={16} /> Apply via WhatsApp
            </a>
            <a
              href={`${EMAIL_LINK}&body=Hi%2C%20I%27m%20applying%20for%20the%20${encodeURIComponent(job.title)}%20role.`}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <Send size={16} /> Apply via Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Careers at Daily Creative Designs — Remote Jobs in Design & Automation"
        description="Join our remote-first team of designers, developers, and automation specialists. We're hiring across web design, WordPress development, n8n automation, and digital marketing."
        canonical="/careers"
      />
      <main id="main-content" className="flex-1 pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-green-950 py-24 px-4 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Briefcase size={12} />
              We're Hiring
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Build Great Work{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                With Great People.
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're a remote-first digital studio crafting websites, brands, and automations for clients worldwide. Join a small team that ships fast, cares deeply, and takes pride in every pixel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
              >
                See Open Roles <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 100% Remote</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Flexible hours</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> {openRoles.length} open positions</span>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Why Join Us
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Work That Fits Your Life</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">We believe the best work comes from people who have the space and freedom to do it well.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div key={perk.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:bg-green-50 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-green-500/20">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-black text-gray-900 mb-1.5">{perk.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Our Values
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">How We Work</h2>
              <p className="text-gray-500 text-sm">The principles that guide every decision, every project, every hire.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-green-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-green-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="py-20 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Open Positions
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                {openRoles.length} Roles Currently Open
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Click any role to see the full description, requirements, and how to apply.
              </p>
            </div>
            <div className="space-y-4">
              {openRoles.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Hiring Process
              </div>
              <h2 className="text-3xl font-black text-white mb-2">What to Expect</h2>
              <p className="text-slate-400 text-sm">Transparent, fast, and respectful of your time.</p>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-green-800/60" />
              {process.map((step) => (
                <div key={step.step} className="relative flex gap-6 mb-7">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black shadow z-10">
                    {step.step}
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex-1">
                    <h3 className="font-black text-white mb-1">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speculative applications */}
        <section className="py-16 px-4 bg-green-50 border-y border-green-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Don't See Your Role?
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Send a Speculative Application</h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              If you're exceptionally talented in design, development, content, or operations — we want to hear from you. We're always looking for brilliant people even when we don't have a specific opening.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle size={18} /> Introduce Yourself on WhatsApp
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black mb-3">Ready to Do the Best Work of Your Career?</h2>
            <p className="text-green-100 mb-8">
              We're building something great. If you bring craftsmanship, reliability, and a growth mindset — we'd love to meet you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold px-8 py-4 rounded-xl transition-all"
              >
                View All Roles <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
