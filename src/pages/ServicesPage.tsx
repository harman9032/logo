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
  MessageCircle,
  Phone,
  Calendar,
  Users,
  Target,
} from 'lucide-react';
import SEO from '../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20your%20design%20services";

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
    desc: "Custom logos crafted to represent your brand perfectly, with unlimited revisions until you love it.",
    from: "From $149",
    href: "/services/logo-design",
    color: "bg-amber-100 text-amber-600",
    keywords: "professional logo design",
  },
  {
    icon: Monitor,
    title: "AI Website Design",
    desc: "Modern, responsive websites built with AI-assisted design for fast, beautiful, conversion-optimized results.",
    from: "From $299",
    href: "/services/ai-website-design",
    color: "bg-green-100 text-green-600",
    keywords: "AI website design service",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Website Design",
    desc: "High-converting Shopify stores designed, configured, and ready to sell from day one — no technical headaches.",
    from: "From $499",
    href: "/services/shopify-design",
    color: "bg-emerald-100 text-emerald-700",
    keywords: "Shopify store design",
  },
  {
    icon: Globe,
    title: "WordPress Design",
    desc: "Powerful, flexible WordPress sites with full CMS control, SEO-ready structure, and WooCommerce options.",
    from: "From $399",
    href: "/services/wordpress-design",
    color: "bg-sky-100 text-sky-700",
    keywords: "WordPress website design",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    desc: "Complete brand systems — logo, style guidelines, stationery, and social media kits that tell your story.",
    from: "From $599",
    href: "/services/brand-identity",
    color: "bg-orange-100 text-orange-600",
    keywords: "brand identity design",
  },
  {
    icon: Image,
    title: "Social Media Design",
    desc: "Scroll-stopping social media visuals for Instagram, Facebook, LinkedIn, and more that grow engagement.",
    from: "From $199",
    href: "/services/social-media-design",
    color: "bg-rose-100 text-rose-600",
    keywords: "social media graphic design",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Meta Ads, email marketing, and data-driven strategies that bring measurable ROI.",
    from: "From $299",
    href: "/services/digital-marketing",
    color: "bg-teal-100 text-teal-700",
    keywords: "digital marketing services",
  },
  {
    icon: Package,
    title: "Complete Package",
    desc: "The full digital transformation: brand, website, and marketing strategy bundled at our best price.",
    from: "From $999",
    href: "/contact",
    color: "bg-slate-100 text-slate-700",
    keywords: "complete branding package",
  },
];

const stats = [
  { value: "5,000+", label: "Brands Created", icon: Users },
  { value: "12+", label: "Years Experience", icon: Award },
  { value: "100%", label: "Satisfaction Rate", icon: Star },
  { value: "48hr", label: "Avg. Turnaround", icon: Clock }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn about your business, target audience, goals, and design preferences in a free 15-minute call.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "You receive a detailed scope, timeline, and transparent pricing — no surprises, no hidden fees.",
    icon: Target,
  },
  {
    step: "03",
    title: "Design & Revise",
    desc: "Our designers get to work. You review concepts and request unlimited changes until it's perfect.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Delivery & Launch",
    desc: "Final files delivered in all formats. We support you through launch and beyond.",
    icon: Zap,
  },
];

const faqs = [
  {
    q: "How long does a logo design project take?",
    a: "Most logo projects are completed within 3–5 business days. Rush delivery (24–48 hrs) is available on request.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes — unlimited revisions are included on all packages. We don't stop until you're completely satisfied.",
  },
  {
    q: "What file formats will I receive?",
    a: "You'll receive all source files (AI, PSD, Figma) plus export-ready formats: PNG, SVG, PDF, JPEG in multiple sizes.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Many clients start with a logo and add a website or brand identity package later. We credit previous work.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients worldwide. All communication is in English and payments are accepted globally.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "We offer unlimited revisions to ensure satisfaction. If we cannot meet the agreed brief, we provide a full refund.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <SEO
        title="Professional Design Services — Logo, Website, Brand Identity & Digital Marketing"
        description="Expert design services for businesses: logo design from $149, AI website design from $299, Shopify stores, WordPress sites, brand identity, social media design & digital marketing. 5,000+ brands transformed since 2012. Free consultation."
        canonical="/services"
      />
      <main id="main-content">

      {/* ── HERO ── */}
      <section aria-labelledby="services-hero-heading" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} />
            Professional Design Services Since 2012
          </div>
          <h1 id="services-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Design Services That{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            From memorable logos and high-converting websites to full brand identity systems and digital marketing — every service is crafted by experts with 12+ years of experience helping businesses stand out online.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-10">
            Trusted by 5,000+ businesses worldwide. Unlimited revisions. Fast delivery. 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/25 text-base"
            >
              <Calendar size={18} />
              Book Free Consultation
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                  <StatIcon size={16} className="text-green-400 mb-2 mx-auto" />
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES GRID ── */}
      <section aria-labelledby="all-services-heading" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="all-services-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              All Design Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether you need a single service or a complete digital transformation, we have a solution tailored to your business goals and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  to={svc.href}
                  aria-label={`${svc.title} — ${svc.from}`}
                  className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col"
                >
                  <div className={`w-11 h-11 rounded-xl ${svc.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-green-400 transition-colors">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm">{svc.from}</span>
                    <ArrowRight size={16} className="text-slate-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PACKAGES ── */}
      <section aria-labelledby="packages-heading" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Star size={12} />
              Most Requested
            </div>
            <h2 id="packages-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Popular Service Packages
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every package includes unlimited revisions and dedicated support.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              const AccentIcon = service.accentIcon;
              return (
                <article
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

                    <h3 className="text-2xl font-black text-white mb-1">{service.title}</h3>
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

                    <ul className="space-y-2.5 mb-6 flex-1" aria-label={`${service.title} features`}>
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section aria-labelledby="process-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              How Our Design Process Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A simple, transparent process designed to get you exceptional results without the stress.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-slate-700 z-10" />
                  )}
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <StepIcon size={22} className="text-green-400" />
                  </div>
                  <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">Step {step.step}</div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section aria-labelledby="why-us-heading" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why Businesses Choose{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Daily Creative Designs
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We've helped over 5,000 businesses build brands that attract customers, build trust, and drive growth since 2012.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { icon: Award, title: "12+ Years of Expertise", desc: "Over a decade crafting brands across every major industry worldwide — from startups to Fortune 500 companies.", color: "text-amber-400", bg: "bg-amber-400/10" },
              { icon: Zap, title: "Fast 48-Hour Turnaround", desc: "Speed without compromise. Most projects are delivered within 48 hours, with rush options available.", color: "text-green-400", bg: "bg-green-400/10" },
              { icon: BarChart3, title: "Results-Driven Strategy", desc: "Every design decision is backed by brand strategy, audience research, and conversion best practices.", color: "text-sky-400", bg: "bg-sky-400/10" },
              { icon: Shield, title: "100% Satisfaction Guarantee", desc: "Unlimited revisions included. We revise until you're completely happy — no extra charges, no excuses.", color: "text-rose-400", bg: "bg-rose-400/10" }
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <div className={`w-11 h-11 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
                    <ItemIcon size={22} className={item.color} strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Trust signals */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Countries Served", value: "40+" },
              { label: "5-Star Reviews", value: "1,200+" },
              { label: "Repeat Clients", value: "78%" },
              { label: "Avg. Response Time", value: "< 2 hrs" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Everything you need to know before getting started. Can't find your answer?{' '}
              <Link to="/contact" className="text-green-400 hover:text-green-300 underline underline-offset-2">
                Contact us directly.
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-3 flex items-start gap-3">
                  <span className="text-green-400 font-black text-sm mt-0.5 shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section aria-labelledby="cta-heading" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-green-900/40 to-slate-900/40 border border-green-800/40 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                <Layers size={28} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-slate-300 mb-3 leading-relaxed max-w-2xl mx-auto">
                Book a free 15-minute consultation. Our design experts will recommend the right service for your goals and budget — no pressure, no commitment.
              </p>
              <p className="text-slate-500 text-sm mb-10">
                Available Mon–Sat · Response within 2 hours · 100% free consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20 text-base"
                >
                  <Calendar size={18} />
                  Book Free Consultation
                </a>
                <a
                  href={`tel:+917837319660`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all text-base"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all text-base"
                >
                  Send a Message
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
