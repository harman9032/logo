import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Package,
  Layers,
  Monitor,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
  BarChart3,
  Search,
  Smartphone,
  Palette,
  FileText,
  Shield,
  Clock,
  X
} from 'lucide-react';
import Navbar from '../components/Navbar';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const services = [
  {
    id: 1,
    badge: "Brand Identity",
    icon: Palette,
    accentIcon: Star,
    title: "Logo Design",
    tagline: "Make a lasting first impression",
    price: "$51.00",
    priceNote: "One-time payment",
    description:
      "A professionally crafted custom logo that captures your brand's personality and sets you apart from the competition. Perfect for startups and small businesses ready to establish a strong visual identity.",
    features: [
      "3 unique logo concepts",
      "Unlimited revisions until perfect",
      "Final files: PNG, SVG, PDF, AI",
      "Light & dark versions included",
      "Brand color palette suggestion",
      "Typography recommendation",
      "Commercial usage rights"
    ],
    cta: "Get Your Logo",
    popular: false,
    color: {
      bg: "from-slate-900 to-slate-800",
      accent: "from-amber-400 to-yellow-300",
      badge: "bg-amber-400/20 text-amber-300 border border-amber-400/30",
      button: "bg-amber-400 hover:bg-amber-300 text-slate-900",
      check: "text-amber-400",
      glow: "shadow-amber-500/20",
      ring: "ring-amber-400/30",
      tag: "bg-amber-400/10 text-amber-300"
    },
    target: "Ideal for small businesses & startups"
  },
  {
    id: 2,
    badge: "Most Popular",
    icon: Monitor,
    accentIcon: Zap,
    title: "AI Website Design",
    tagline: "Your digital storefront, built fast",
    price: "$51.00",
    priceNote: "One-time payment",
    description:
      "An AI-powered responsive website or landing page that looks stunning on every device. Get online quickly with a professional web presence optimized for conversions and search engines.",
    features: [
      "Fully responsive design",
      "Mobile-first optimization",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Fast loading performance",
      "Social media links",
      "Google Analytics ready"
    ],
    excludes: ["Domain registration", "Hosting fees"],
    cta: "Build My Website",
    popular: true,
    color: {
      bg: "from-green-900 to-green-800",
      accent: "from-green-400 to-emerald-300",
      badge: "bg-green-400/20 text-green-300 border border-green-400/30",
      button: "bg-green-400 hover:bg-green-300 text-green-900",
      check: "text-green-400",
      glow: "shadow-green-500/20",
      ring: "ring-green-400/30",
      tag: "bg-green-400/10 text-green-300"
    },
    target: "Ideal for entrepreneurs & small businesses"
  },
  {
    id: 3,
    badge: "Best Value",
    icon: Package,
    accentIcon: Award,
    title: "Complete Digital Package",
    tagline: "Everything you need to dominate online",
    price: "$99.99",
    priceNote: "One-time payment",
    description:
      "The ultimate digital transformation bundle. Get a custom logo, a professional website, and a comprehensive digital marketing strategy — all working together to grow your business online.",
    features: [
      "Everything in Logo Design",
      "Everything in AI Website Design",
      "Digital marketing strategy plan",
      "Social media brand guidelines",
      "Content calendar framework",
      "Competitor analysis report",
      "Growth roadmap (90 days)",
      "Priority support included"
    ],
    cta: "Start Full Transformation",
    popular: false,
    color: {
      bg: "from-sky-900 to-sky-800",
      accent: "from-sky-400 to-cyan-300",
      badge: "bg-sky-400/20 text-sky-300 border border-sky-400/30",
      button: "bg-sky-400 hover:bg-sky-300 text-sky-900",
      check: "text-sky-400",
      glow: "shadow-sky-500/20",
      ring: "ring-sky-400/30",
      tag: "bg-sky-400/10 text-sky-300"
    },
    target: "Ideal for businesses wanting full digital transformation"
  }
];

const stats = [
  { value: "5,000+", label: "Brands Created" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "48hr", label: "Avg. Turnaround" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} />
            Professional Design Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Transform Your Brand with{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Expert Design
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            From memorable logos to complete digital presences — choose the package that fits your ambition and budget. Every project is crafted with precision and passion.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, index) => {
              const Icon = service.icon;
              const AccentIcon = service.accentIcon;
              return (
                <div
                  key={service.id}
                  className={`relative rounded-2xl bg-gradient-to-b ${service.color.bg} border ${service.popular ? `border-slate-500/60 ${service.color.ring} ring-2` : 'border-slate-700/50'} shadow-2xl ${service.popular ? service.color.glow : ''} overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1`}
                >
                  {/* Popular Banner */}
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-400 text-green-950 text-xs font-bold text-center py-1.5 tracking-wide uppercase">
                      Most Popular Choice
                    </div>
                  )}

                  <div className={`p-8 ${service.popular ? 'pt-10' : ''} flex flex-col flex-1`}>
                    {/* Badge + Icon Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${service.color.badge}`}>
                        <AccentIcon size={11} />
                        {service.badge}
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color.accent} flex items-center justify-center shadow-lg`}>
                        <Icon size={22} className="text-slate-900" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-2xl font-black text-white mb-1">{service.title}</h2>
                    <p className={`text-sm font-medium mb-4 ${service.color.tag.split(' ')[1]}`}>{service.tagline}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-end gap-2">
                        <span className={`text-5xl font-black bg-gradient-to-r ${service.color.accent} bg-clip-text text-transparent leading-none`}>
                          {service.price}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">{service.priceNote}</p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Target */}
                    <div className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg mb-6 ${service.color.tag}`}>
                      <Shield size={11} />
                      {service.target}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className={`${service.color.check} mt-0.5 flex-shrink-0`} strokeWidth={2.5} />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Excludes */}
                    {service.excludes && (
                      <div className="bg-slate-800/60 rounded-lg p-3 mb-6">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">Not included</p>
                        <ul className="space-y-1">
                          {service.excludes.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-slate-500 text-xs">
                              <X size={11} className="flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={BOOKING_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${service.color.button} hover:scale-[1.02] active:scale-[0.98] shadow-lg`}
                    >
                      {service.cta}
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </a>

                    {/* Trust Line */}
                    <p className="text-center text-slate-500 text-xs mt-3">
                      <Clock size={10} className="inline mr-1" />
                      Fast delivery • No hidden fees
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison / Why Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Daily Creative Designs?
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              We combine design expertise with strategic thinking to deliver results that actually grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Award-Winning Quality", desc: "Every design is crafted by experienced professionals with 12+ years in the industry.", color: "text-amber-400", bg: "bg-amber-400/10" },
              { icon: Zap, title: "Fast Turnaround", desc: "Get your designs delivered quickly without sacrificing quality or attention to detail.", color: "text-green-400", bg: "bg-green-400/10" },
              { icon: BarChart3, title: "Strategy-Driven", desc: "Designs built with your target audience and business goals in mind from day one.", color: "text-sky-400", bg: "bg-sky-400/10" },
              { icon: Shield, title: "Satisfaction Guaranteed", desc: "We revise until you're completely happy. Your satisfaction is our commitment.", color: "text-rose-400", bg: "bg-rose-400/10" }
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
                    <ItemIcon size={20} className={item.color} strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-green-900/40 to-slate-900/40 border border-green-800/40 rounded-2xl p-10 sm:p-14">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
              <Layers size={26} className="text-slate-900" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Not sure which package is right for you?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Book a free 15-minute consultation and our design experts will help you choose the best option for your business goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                Book Free Consultation
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                View Masterclass
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-yellow-400">
            Daily Creative <span className="text-amber-400">Designs</span>
          </span>
          <p className="text-slate-500 text-sm text-center">
            © 2025 Daily Creative Designs. All rights reserved. Elevating brands since 2012.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
