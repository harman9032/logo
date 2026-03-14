import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Package,
  Layers,
  Monitor,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
  BarChart3,
  Shield,
  Clock,
  X,
  Palette,
  ShoppingCart,
  Globe,
  Image,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

const featuredServices = [
  {
    id: 1,
    badge: "Brand Identity",
    icon: Palette,
    accentIcon: Star,
    title: "Logo Design",
    tagline: "Make a lasting first impression",
    price: "$149",
    priceNote: "Starting from",
    href: "/services/logo-design",
    description:
      "A professionally crafted custom logo that captures your brand's personality and sets you apart from the competition.",
    features: [
      "3 unique logo concepts",
      "Unlimited revisions until perfect",
      "Final files: PNG, SVG, PDF, AI",
      "Light & dark versions included",
      "Brand color palette suggestion",
      "Commercial usage rights"
    ],
    cta: "View Logo Packages",
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
    price: "$299",
    priceNote: "Starting from",
    href: "/services/ai-website-design",
    description:
      "An AI-powered responsive website or landing page that looks stunning on every device, optimized for conversions.",
    features: [
      "Fully responsive design",
      "Mobile-first optimization",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Fast loading performance",
      "Google Analytics ready"
    ],
    excludes: ["Domain registration", "Hosting fees"],
    cta: "View Website Packages",
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
    price: "$999",
    priceNote: "One-time payment",
    href: "/contact",
    description:
      "The ultimate digital transformation bundle — logo, professional website, and comprehensive digital marketing strategy.",
    features: [
      "Everything in Logo Design",
      "Everything in AI Website Design",
      "Digital marketing strategy plan",
      "Social media brand guidelines",
      "Competitor analysis report",
      "Growth roadmap (90 days)",
      "Priority support included"
    ],
    cta: "Get Full Package",
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

const allServices = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Custom logos crafted to represent your brand perfectly, with unlimited revisions.",
    from: "From $149",
    href: "/services/logo-design",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Monitor,
    title: "AI Website Design",
    desc: "Modern, responsive websites built with AI-assisted design for fast, beautiful results.",
    from: "From $299",
    href: "/services/ai-website-design",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Website Design",
    desc: "High-converting Shopify stores designed, configured, and ready to sell from day one.",
    from: "From $499",
    href: "/services/shopify-design",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Globe,
    title: "WordPress Design",
    desc: "Powerful, flexible WordPress sites with full CMS control, SEO, and WooCommerce options.",
    from: "From $399",
    href: "/services/wordpress-design",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    desc: "Complete brand systems — logo, guidelines, stationery, and social kits.",
    from: "From $599",
    href: "/services/brand-identity",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Image,
    title: "Social Media Design",
    desc: "Scroll-stopping social media visuals for Instagram, Facebook, LinkedIn, and more.",
    from: "From $199",
    href: "/services/social-media-design",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Meta Ads, email marketing, and strategy — all data-driven.",
    from: "From $299",
    href: "/services/digital-marketing",
    color: "bg-teal-100 text-teal-700",
  },
  {
    icon: Package,
    title: "Complete Package",
    desc: "The full digital transformation: brand, website, and marketing strategy bundled.",
    from: "From $999",
    href: "/contact",
    color: "bg-slate-100 text-slate-700",
  },
];

const stats = [
  { value: "5,000+", label: "Brands Created" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "48hr", label: "Avg. Turnaround" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO title="Design Services — Logo, Website & Brand Identity" description="Complete design services: logo design, AI website design, Shopify, WordPress, brand identity, social media & digital marketing. Starting from $299." canonical="/services" />
      <main id="main-content">

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
            From memorable logos to complete digital presences — every project is crafted with precision and passion. 5,000+ brands transformed since 2012.
          </p>

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

      {/* All Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">All Services</h2>
            <p className="text-slate-400 text-sm">Click any service to see full details, packages, and pricing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  to={svc.href}
                  className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 hover:bg-slate-800 transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className={`w-10 h-10 rounded-xl ${svc.color} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm">{svc.from}</span>
                    <ArrowRight size={16} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Service Cards */}
      <section className="py-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Most Popular Packages</h2>
            <p className="text-slate-400 text-sm">Our three most-requested services with full feature breakdowns.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              const AccentIcon = service.accentIcon;
              return (
                <div
                  key={service.id}
                  className={`relative rounded-2xl bg-gradient-to-b ${service.color.bg} border ${service.popular ? `border-slate-500/60 ${service.color.ring} ring-2` : 'border-slate-700/50'} shadow-2xl ${service.popular ? service.color.glow : ''} overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-400 text-green-950 text-xs font-bold text-center py-1.5 tracking-wide uppercase">
                      Most Popular Choice
                    </div>
                  )}

                  <div className={`p-8 ${service.popular ? 'pt-10' : ''} flex flex-col flex-1`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${service.color.badge}`}>
                        <AccentIcon size={11} />
                        {service.badge}
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color.accent} flex items-center justify-center shadow-lg`}>
                        <Icon size={22} className="text-slate-900" strokeWidth={2.5} />
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-1">{service.title}</h2>
                    <p className={`text-sm font-medium mb-4 ${service.color.tag.split(' ')[1]}`}>{service.tagline}</p>

                    <div className="mb-6">
                      <div className="flex items-end gap-2">
                        <span className={`text-5xl font-black bg-gradient-to-r ${service.color.accent} bg-clip-text text-transparent leading-none`}>
                          {service.price}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">{service.priceNote}</p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg mb-6 ${service.color.tag}`}>
                      <Shield size={11} />
                      {service.target}
                    </div>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className={`${service.color.check} mt-0.5 flex-shrink-0`} strokeWidth={2.5} />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

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

                    <Link
                      to={service.href}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${service.color.button} hover:scale-[1.02] active:scale-[0.98] shadow-lg`}
                    >
                      {service.cta}
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>

                    <p className="text-center text-slate-500 text-xs mt-3">
                      <Clock size={10} className="inline mr-1" />
                      Fast delivery · No hidden fees · Split payment available
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Daily Creative Designs?
              </span>
            </h2>
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
              Not sure which service is right for you?
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
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Contact Us
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
