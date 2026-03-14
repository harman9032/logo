import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Phone,
  Mail,
  MessageCircle,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Users,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Clock,
  Lightbulb,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  Layers,
  Globe,
  BarChart2,
  Palette,
  PenTool,
  Smartphone,
  Search,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioProjects';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi, I'm interested in your design services";

const FEATURED_PROJECTS = portfolioProjects.slice(0, 6);

function PortfolioPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Award className="h-3 w-3" />
            Portfolio Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real Projects.{' '}
            <span className="text-green-600">Real Results.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            WordPress sites built for US and Canadian clients — healthcare, B2B, local services, e-commerce, and SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accentColor} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className={`inline-block ${project.tagColor} ${project.tagTextColor} text-xs font-bold px-2.5 py-0.5 rounded-full mb-1.5`}>
                    {project.category}
                  </span>
                  <h3 className="text-white font-black text-base leading-tight">{project.client}</h3>
                  <p className="text-white/70 text-xs">{project.industry}</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="bg-white px-5 py-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.role.slice(0, 2).map((r) => (
                    <span key={r} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  <TrendingUp className="h-3 w-3" />
                  {project.resultTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-md hover:-translate-y-0.5"
          >
            View All 18 Case Studies
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "Who is this for?",
      answer: "Perfect for entrepreneurs, small business owners, startups, and anyone looking to create or rebrand their business with a strong, professional visual identity.",
    },
    {
      question: "How long does a project take?",
      answer: "Logo Design is typically delivered within 48 hours. AI Website Design takes 3–5 business days. The Complete Digital Package is delivered in 7–10 business days.",
    },
    {
      question: "How many revisions do I get?",
      answer: "Unlimited. We iterate until you are 100% happy with the outcome. No revision caps, no extra charges.",
    },
    {
      question: "Who owns the final designs?",
      answer: "You do. Once the project is complete and payment received, full ownership and commercial usage rights transfer to you.",
    },
    {
      question: "Can I upgrade packages later?",
      answer: "Yes. If you start with Logo Design or AI Website Design and decide you want the full package, we offer upgrade pricing so you only pay the difference.",
    },
    {
      question: "Do you offer a satisfaction guarantee?",
      answer: "Absolutely. We offer a 100% satisfaction guarantee. We will work with you through revisions until you love the result.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center btn-gold-gradient border border-yellow-400 rounded-full px-5 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-700 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-green-900">
                Award-Winning Design Studio · 12+ Years · 5,000+ Brands
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Brand Deserves to
              <span className="block mt-2 text-gold-gradient">Look as Good as It Is</span>
            </h1>

            <p className="text-xl text-green-50 leading-relaxed mb-10 max-w-3xl mx-auto">
              We build custom logos, high-converting websites, and full digital strategies that make your business the obvious choice — from day one.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { label: 'Logo Design', price: '$299', icon: <PenTool className="h-3.5 w-3.5 text-yellow-400" /> },
                { label: 'AI Website', price: '$499', icon: <Globe className="h-3.5 w-3.5 text-yellow-400" /> },
                { label: 'Full Package', price: '$999', icon: <Layers className="h-3.5 w-3.5 text-yellow-400" /> },
              ].map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                  {s.icon}
                  {s.label} — {s.price}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-gradient text-green-900 px-10 py-5 rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Book a Free Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-green-900 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                View All Packages
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-green-500">
              {[
                { value: '5,000+', label: 'Brands Created' },
                { value: '12+', label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction Rate' },
                { value: '48hr', label: 'Avg. Turnaround' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold text-gold-gradient mb-1">{s.value}</div>
                  <div className="text-sm text-green-100">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET (VALUE BREAKDOWN) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Sparkles className="h-3 w-3" />
              What You Actually Get
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Every Deliverable,{' '}
              <span className="text-green-600">Spelled Out</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              No vague promises. Here is exactly what lands in your inbox when we are done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Design */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-amber-100 px-8 py-7">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">Logo Design</h3>
                <p className="text-sm text-amber-600 font-semibold">$299 · Delivered in 48 hrs</p>
              </div>
              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {[
                    '3 unique logo concepts to choose from',
                    'Unlimited revisions until perfect',
                    'PNG, SVG, PDF & AI source files',
                    'Light & dark versions',
                    'Brand colour palette',
                    'Typography recommendation',
                    'Full commercial usage rights',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Website Design */}
            <div className="border-2 border-green-500 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300 relative">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold text-center py-1.5 tracking-wide uppercase">
                Most Popular
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-100 px-8 py-7 pt-9">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">AI Website Design</h3>
                <p className="text-sm text-green-600 font-semibold">$499 · Delivered in 3–5 days</p>
              </div>
              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {[
                    'Fully responsive, mobile-first design',
                    'AI-powered layout for conversions',
                    'On-page SEO setup',
                    'Contact form integration',
                    'Google Analytics ready',
                    'Social media links',
                    'Fast-loading performance',
                    'Full source code ownership',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complete Package */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-gradient-to-br from-sky-50 to-cyan-50 border-b border-sky-100 px-8 py-7">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">Complete Digital Package</h3>
                <p className="text-sm text-sky-600 font-semibold">$999 · Delivered in 7–10 days</p>
              </div>
              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {[
                    'Everything in Logo Design',
                    'Everything in AI Website Design',
                    'Digital marketing strategy plan',
                    'Social media brand guidelines',
                    'Content calendar framework',
                    'Competitor analysis report',
                    '90-day growth roadmap',
                    'Priority support included',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              See full service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUE COMPARISON ── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">
              What You'd Pay Elsewhere vs.{' '}
              <span className="text-yellow-400">What You Pay Here</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our packages bundle premium services that typically cost 5–10x more when purchased separately.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 pr-6 text-gray-400 font-semibold">Service</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">Agency Rate</th>
                  <th className="text-center py-4 px-4 text-yellow-400 font-bold">Our Price</th>
                  <th className="text-center py-4 pl-4 text-green-400 font-semibold">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { service: 'Custom Logo Design', agency: '$800–$1,500', ours: '$299', saving: 'Up to $1,200' },
                  { service: 'Responsive Website', agency: '$2,000–$5,000', ours: '$499', saving: 'Up to $4,500' },
                  { service: 'Brand Guidelines', agency: '$500–$1,000', ours: 'Included', saving: '$500+' },
                  { service: 'Digital Marketing Strategy', agency: '$1,500–$3,000', ours: 'Included', saving: '$1,500+' },
                  { service: 'Social Media Guidelines', agency: '$400–$800', ours: 'Included', saving: '$400+' },
                  { service: '90-Day Growth Roadmap', agency: '$1,000–$2,000', ours: 'Included', saving: '$1,000+' },
                ].map((row) => (
                  <tr key={row.service} className="hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 pr-6 font-medium text-white">{row.service}</td>
                    <td className="py-4 px-4 text-center text-gray-400 line-through">{row.agency}</td>
                    <td className="py-4 px-4 text-center font-bold text-yellow-400">{row.ours}</td>
                    <td className="py-4 pl-4 text-center">
                      <span className="bg-green-900/60 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-700">
                        {row.saving}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Lightbulb className="h-3 w-3" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              From First Call to{' '}
              <span className="text-green-600">Launch-Ready Brand</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A clear, collaborative 4-step process — no guesswork, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900">Before Working With Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'No professional brand identity', desc: 'Generic visuals make you look untrustworthy and forgettable.' },
                  { title: 'No website or a poor one', desc: 'You lose leads every day because prospects can\'t find or trust you.' },
                  { title: 'Wasted ad spend', desc: 'Running ads without a strong brand burns money with little return.' },
                  { title: 'Inconsistent online presence', desc: 'Mixed messages across platforms confuse and erode confidence.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-red-600" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900">After Working With Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'A brand that commands trust', desc: 'Custom logo and visual identity that make you the obvious choice.' },
                  { title: 'A website that converts', desc: 'Mobile-first site built to turn visitors into paying customers — fast.' },
                  { title: 'A clear digital strategy', desc: 'A marketing roadmap so every dollar you spend delivers measurable ROI.' },
                  { title: 'Consistent brand voice', desc: 'Unified look across all channels so customers instantly recognise you.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-green-700" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', icon: <MessageCircle className="h-6 w-6 text-green-700" />, title: 'Free Discovery Call', desc: 'We start with a 30-minute call to understand your business, goals, and audience.', color: 'bg-green-100' },
                { step: '02', icon: <Lightbulb className="h-6 w-6 text-amber-700" />, title: 'Strategy & Concepts', desc: 'We research your market and craft tailored design concepts aligned with your vision.', color: 'bg-amber-100' },
                { step: '03', icon: <Zap className="h-6 w-6 text-sky-700" />, title: 'Build & Refine', desc: 'We execute and iterate based on your feedback — unlimited revisions.', color: 'bg-sky-100' },
                { step: '04', icon: <TrendingUp className="h-6 w-6 text-emerald-700" />, title: 'Launch & Grow', desc: 'You receive all final files and a growth roadmap to attract customers from day one.', color: 'bg-emerald-100' },
              ].map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300 relative z-10`}>
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 left-1/2 md:left-auto md:right-auto w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-black flex items-center justify-center z-20">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Users className="h-3 w-3" />
              Industries We Serve
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              We've Built Brands Across{' '}
              <span className="text-green-600">Every Industry</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From tech startups to local restaurants — our design system adapts to your market.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: <Smartphone className="h-5 w-5 text-green-700" />, label: 'Tech & SaaS', color: 'bg-green-50 border-green-200' },
              { icon: <BarChart2 className="h-5 w-5 text-amber-700" />, label: 'E-commerce', color: 'bg-amber-50 border-amber-200' },
              { icon: <Palette className="h-5 w-5 text-sky-700" />, label: 'Creative & Media', color: 'bg-sky-50 border-sky-200' },
              { icon: <BadgeCheck className="h-5 w-5 text-emerald-700" />, label: 'Professional Services', color: 'bg-emerald-50 border-emerald-200' },
              { icon: <Globe className="h-5 w-5 text-rose-700" />, label: 'Retail & F&B', color: 'bg-rose-50 border-rose-200' },
              { icon: <Search className="h-5 w-5 text-teal-700" />, label: 'Health & Wellness', color: 'bg-teal-50 border-teal-200' },
              { icon: <Award className="h-5 w-5 text-orange-700" />, label: 'Education', color: 'bg-orange-50 border-orange-200' },
              { icon: <TrendingUp className="h-5 w-5 text-cyan-700" />, label: 'Finance & Legal', color: 'bg-cyan-50 border-cyan-200' },
            ].map((ind) => (
              <div key={ind.label} className={`flex items-center gap-3 border ${ind.color} rounded-xl px-5 py-4`}>
                <div className="flex-shrink-0">{ind.icon}</div>
                <span className="text-sm font-bold text-gray-800">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Why Hundreds of Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We are not just designers — we are strategic partners invested in your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-8 w-8 text-green-700" />, title: '12+ Years Experience', desc: 'Award-winning designers with deep expertise in brand identity.' },
              { icon: <Award className="h-8 w-8 text-green-700" />, title: '5,000+ Brands Created', desc: 'Helping businesses of every size establish powerful visual identities.' },
              { icon: <TrendingUp className="h-8 w-8 text-green-700" />, title: 'Results-Driven Design', desc: 'Every design decision is backed by market research and strategy.' },
              { icon: <Shield className="h-8 w-8 text-green-700" />, title: '100% Satisfaction', desc: 'Unlimited revisions and a satisfaction guarantee on every project.' },
            ].map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-500 font-medium">Real businesses. Real results. Verified outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Working with Daily Creative Designs was the best investment we made this year. Our new website converted 4x better than the old one within the first week of launch.",
                name: "Rahul Mehta",
                role: "Owner, Restaurant Chain",
                result: "4x conversions",
                color: "bg-green-600",
              },
              {
                text: "I applied the brand strategy to my tech startup and we got funded immediately. Investors loved the professional visual identity they had built for us!",
                name: "Vikram Singh",
                role: "CEO, SaaS Startup",
                result: "Series A funded",
                color: "bg-amber-500",
              },
              {
                text: "As a freelancer, I was struggling to stand out. They helped me create a strong personal brand. Now I attract premium clients who value my expertise!",
                name: "Anjali Desai",
                role: "Freelance Design Consultant",
                result: "2x client rate",
                color: "bg-sky-500",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 font-medium leading-relaxed">"{t.text}"</blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-black`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              Read all success stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <PortfolioPreview />

      {/* ── TRUST BAR ── */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            {[
              { icon: <Award className="h-5 w-5 text-amber-400" />, text: '12+ Years Experience' },
              { icon: <Users className="h-5 w-5 text-green-400" />, text: '5,000+ Brands Created' },
              { icon: <Shield className="h-5 w-5 text-sky-400" />, text: '100% Satisfaction Guarantee' },
              { icon: <Clock className="h-5 w-5 text-rose-400" />, text: '48hr Turnaround' },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-white text-sm font-semibold">
                {t.icon}
                {t.text}
              </div>
            ))}
          </div>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg"
          >
            Book Free Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Quick answers to the most common questions.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-7 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-base font-bold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-7 pb-5 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              See all questions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Talk?</h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              Reach us directly — we respond within minutes during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a href="tel:+917837319660" className="flex items-center gap-4 bg-white border border-green-200 rounded-2xl px-6 py-5 hover:bg-green-50 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">Call Us</p>
                <p className="font-bold text-gray-900 text-sm">+91 78373 19660</p>
                <p className="text-xs text-gray-500">9 AM – 9 PM IST</p>
              </div>
            </a>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-green-200 rounded-2xl px-6 py-5 hover:bg-green-50 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">WhatsApp</p>
                <p className="font-bold text-gray-900 text-sm">Chat Now</p>
                <p className="text-xs text-gray-500">Instant responses</p>
              </div>
            </a>

            <a href="mailto:design@creativedaily.com" className="flex items-center gap-4 bg-white border border-sky-200 rounded-2xl px-6 py-5 hover:bg-sky-50 transition-colors">
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-0.5">Email</p>
                <p className="font-bold text-gray-900 text-sm">design@creativedaily.com</p>
                <p className="text-xs text-gray-500">Reply within 2 hours</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-md hover:-translate-y-0.5"
            >
              Send Us a Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TOOLS & TECHNOLOGY ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <BadgeCheck className="h-3.5 w-3.5" />
              Our Toolkit
            </div>
            <h2 className="text-3xl font-black text-gray-900">Built With Industry-Leading Tools</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We use the same professional software as the world's best design agencies — at a fraction of the price.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Figma', icon: Palette },
              { label: 'Adobe Illustrator', icon: PenTool },
              { label: 'Adobe Photoshop', icon: Layers },
              { label: 'React & Next.js', icon: Globe },
              { label: 'Shopify', icon: BarChart2 },
              { label: 'WordPress', icon: Globe },
              { label: 'Tailwind CSS', icon: Sparkles },
              { label: 'Google Analytics', icon: BarChart2 },
              { label: 'Meta Ads Manager', icon: TrendingUp },
              { label: 'Canva Pro', icon: Palette },
              { label: 'SEMrush', icon: Search },
              { label: 'Klaviyo', icon: MessageCircle },
            ].map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.label} className="flex items-center gap-2 bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 rounded-full px-5 py-2.5 transition-all duration-200">
                  <Icon className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700 font-semibold text-sm">{tool.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SATISFACTION GUARANTEE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Our 100% Satisfaction Promise</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We won't stop until you genuinely love your brand. That's not a marketing line — it's how we've maintained a 100% satisfaction rate for 12 years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: ArrowRight, text: 'Unlimited revisions until you love it' },
                { icon: Clock, text: 'Full refund if we miss the agreed timeline' },
                { icon: BadgeCheck, text: 'Full file ownership — no lock-in, ever' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 shadow-sm border border-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                    <p className="text-green-900 font-semibold text-sm text-center leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
              >
                Start Risk-Free
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/process"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-green-300 text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-10 text-green-100 font-semibold max-w-2xl mx-auto">
            Join 5,000+ businesses that chose professional design to stand out, build trust, and grow faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book a Free Call
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <span className="text-2xl font-black text-white">
                Daily Creative <span className="text-gold-gradient">Designs</span>
              </span>
              <p className="text-gray-300 mt-4 mb-6 max-w-md">
                Transforming brands with expert design strategy since 2012. 5,000+ successful brand transformations globally.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.182 17.635l1.044-1.944c-.8-.875-1.297-2.026-1.297-3.323c0-2.734 2.215-4.949 4.949-4.949s4.949 2.215 4.949 4.949S11.652 16.988 8.449 16.988z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Logo Design — $299</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Website Design — $499</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Complete Package — $999</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Brand Guidelines</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <a href="tel:+917837319660" className="text-gray-300 hover:text-white transition-colors">+91 78373 19660</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <a href="mailto:design@creativedaily.com" className="text-gray-300 hover:text-white transition-colors">design@creativedaily.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Daily Creative Designs. All rights reserved. · Elevating brands since 2012</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors font-medium">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-500 text-sm transition-colors font-medium">Terms</Link>
              <Link to="/cookies-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors font-medium">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
