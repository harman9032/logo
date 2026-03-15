import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Calendar,
  Globe,
  BarChart2,
  Palette,
  PenTool,
  Smartphone,
  Search,
  BadgeCheck,
  Layers,
  Shield,
  MessageCircle,
  Clock,
  DollarSign,
  Phone,
  Users,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi%2C+I%27m+interested+in+your+design+services.+Can+we+chat%3F";

const RECENT_CLIENTS = [
  { name: 'Marcus T.', location: 'Texas, US', service: 'Logo + Website', time: '2 min ago' },
  { name: 'Sarah K.', location: 'Ontario, CA', service: 'Brand Identity', time: '14 min ago' },
  { name: 'Ravi P.', location: 'New York, US', service: 'Shopify Store', time: '31 min ago' },
  { name: 'Amanda L.', location: 'Calgary, CA', service: 'WordPress Site', time: '47 min ago' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStat({ value, suffix, label, icon, started }: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  started: boolean;
}) {
  const count = useCountUp(value, 1600, started);
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-5 px-4">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-2xl font-black text-white">
          {started ? `${count.toLocaleString()}${suffix}` : `0${suffix}`}
        </span>
      </div>
      <span className="text-xs text-green-200 font-medium">{label}</span>
    </div>
  );
}

function LiveNotification() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % RECENT_CLIENTS.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  const client = RECENT_CLIENTS[idx];

  return (
    <div
      className={`inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
      <span className="text-white text-xs font-semibold">
        <span className="text-yellow-300">{client.name}</span> from {client.location} just hired us for <span className="text-yellow-300">{client.service}</span>
      </span>
      <span className="text-green-300 text-xs font-medium whitespace-nowrap hidden sm:inline">{client.time}</span>
    </div>
  );
}

const PORTFOLIO_TABS = [
  {
    id: 'website',
    label: 'Website',
    icon: <Globe className="h-3.5 w-3.5" />,
    img: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=900',
    badge: 'Web Design',
    client: 'Healthcare Clinic',
    location: 'Texas, US',
    result: '+312% Leads',
    sub: 'Launched in 4 days',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'brand',
    label: 'Branding',
    icon: <Palette className="h-3.5 w-3.5" />,
    img: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=900',
    badge: 'Brand Identity',
    client: 'Boutique Law Firm',
    location: 'Ontario, CA',
    result: '3× More Clients',
    sub: 'Full rebrand in 5 days',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'shopify',
    label: 'Shopify',
    icon: <BarChart2 className="h-3.5 w-3.5" />,
    img: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=900',
    badge: 'Shopify Store',
    client: 'Fashion Retailer',
    location: 'New York, US',
    result: '+$48K Revenue',
    sub: 'First month after launch',
    color: 'from-sky-500 to-blue-600',
  },
];

const TESTIMONIALS = [
  { init: 'S', bg: 'from-sky-400 to-blue-600', name: 'Sarah K.', role: 'Brand Identity · Ontario, CA', quote: '"Best investment we made. Inquiries tripled in our first month."' },
  { init: 'M', bg: 'from-amber-400 to-orange-500', name: 'Marcus T.', role: 'Logo + Website · Texas, US', quote: '"Delivered faster than anyone else and it looked world-class."' },
  { init: 'R', bg: 'from-emerald-400 to-green-600', name: 'Ravi P.', role: 'Shopify Store · New York, US', quote: '"Our store generated $48k in the first month after launch."' },
];

function RightPanel({ whatsappLink, bookingLink }: { whatsappLink: string; bookingLink: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const [testimIdx, setTestimIdx] = useState(0);
  const [testimVisible, setTestimVisible] = useState(true);
  const tab = PORTFOLIO_TABS[activeTab];

  useEffect(() => {
    const t = setInterval(() => {
      setTestimVisible(false);
      setTimeout(() => {
        setTestimIdx((i) => (i + 1) % TESTIMONIALS.length);
        setTestimVisible(true);
      }, 350);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const testimonial = TESTIMONIALS[testimIdx];

  return (
    <div className="relative lg:pl-6">

      {/* ── Floating badge top-left ── */}
      <div className="absolute -top-6 -left-2 z-20 hidden lg:flex items-center gap-2.5 bg-white rounded-2xl shadow-2xl border border-gray-100 px-3.5 py-2.5 animate-[fadeSlideDown_0.5s_ease_both]">
        <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center ring-1 ring-green-100 flex-shrink-0">
          <TrendingUp className="h-4.5 w-4.5 text-green-600 h-[18px] w-[18px]" />
        </div>
        <div>
          <p className="text-xs font-black text-gray-900 leading-none">Leads Up 4×</p>
          <p className="text-[10px] text-gray-400 mt-0.5">avg. in first week</p>
        </div>
      </div>

      {/* ── Floating badge top-right ── */}
      <div className="absolute -top-6 -right-2 z-20 hidden lg:flex items-center gap-2.5 bg-white rounded-2xl shadow-2xl border border-gray-100 px-3.5 py-2.5 animate-[fadeSlideDown_0.5s_ease_0.1s_both]">
        <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center ring-1 ring-amber-100 flex-shrink-0">
          <Sparkles className="h-[18px] w-[18px] text-amber-500" />
        </div>
        <div>
          <p className="text-xs font-black text-gray-900 leading-none">5,000+ Brands</p>
          <p className="text-[10px] text-gray-400 mt-0.5">delivered globally</p>
        </div>
      </div>

      {/* ── Main card ── */}
      <div className="rounded-3xl overflow-hidden shadow-[0_40px_90px_-16px_rgba(0,0,0,0.6)] ring-1 ring-white/25 mt-8 bg-gray-950">

        {/* Tab switcher */}
        <div className="flex items-center gap-1 px-4 pt-4 pb-0">
          <div className="flex bg-white/5 rounded-xl p-1 gap-1 flex-1">
            {PORTFOLIO_TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                  i === activeTab
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 bg-green-500/15 rounded-xl px-3 py-2 ml-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-green-300 font-bold tracking-wide">LIVE</span>
          </div>
        </div>

        {/* Portfolio image */}
        <div className="relative overflow-hidden mx-4 mt-3 rounded-2xl" style={{ height: '220px' }}>
          <img
            key={tab.id}
            src={tab.img}
            alt={tab.badge}
            className="w-full h-full object-cover object-top transition-all duration-500"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

          {/* Top-left badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className={`bg-gradient-to-r ${tab.color} text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wide shadow-lg`}>
              {tab.badge}
            </span>
          </div>

          {/* Bottom result card */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2.5 shadow-2xl flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-8 h-8 bg-gradient-to-br ${tab.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <BadgeCheck className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-gray-900 leading-none truncate">{tab.client} · {tab.location}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{tab.sub}</p>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className={`bg-gradient-to-r ${tab.color} text-white text-xs font-black px-2.5 py-1 rounded-lg whitespace-nowrap shadow`}>
                  {tab.result}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3 proof metrics ── */}
        <div className="grid grid-cols-3 gap-2 px-4 pt-3">
          {[
            { icon: <BarChart2 className="h-3.5 w-3.5 text-green-400" />, stat: '+280%', label: 'Avg. Traffic' },
            { icon: <DollarSign className="h-3.5 w-3.5 text-yellow-400" />, stat: '3.8×', label: 'Avg. ROI' },
            { icon: <Users className="h-3.5 w-3.5 text-sky-400" />, stat: '5,000+', label: 'Brands Built' },
          ].map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-0.5 bg-white/5 rounded-xl py-2.5 px-2">
              {m.icon}
              <span className="text-white text-sm font-black leading-none mt-0.5">{m.stat}</span>
              <span className="text-gray-500 text-[10px] font-medium">{m.label}</span>
            </div>
          ))}
        </div>

        {/* ── Rotating testimonial ── */}
        <div
          className={`mx-4 mt-3 mb-4 bg-white rounded-2xl px-4 py-3.5 shadow-sm transition-all duration-350 ${testimVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.bg} rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0`}>
              {testimonial.init}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">Verified</span>
              </div>
              <p className="text-gray-800 text-xs leading-snug font-semibold">{testimonial.quote}</p>
              <p className="text-gray-400 text-[10px] mt-1 font-medium">{testimonial.name} · {testimonial.role}</p>
            </div>
          </div>
          {/* Testimonial dots */}
          <div className="flex justify-center gap-1 mt-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setTestimVisible(false); setTimeout(() => { setTestimIdx(i); setTestimVisible(true); }, 350); }}
                className={`rounded-full transition-all duration-200 ${i === testimIdx ? 'w-4 h-1.5 bg-green-500' : 'w-1.5 h-1.5 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* ── CTA strip at bottom ── */}
        <div className="border-t border-white/5 px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[
                { bg: 'bg-amber-500', init: 'M' },
                { bg: 'bg-sky-500', init: 'S' },
                { bg: 'bg-rose-500', init: 'A' },
                { bg: 'bg-emerald-500', init: 'R' },
              ].map((c, i) => (
                <div key={i} className={`w-6 h-6 ${c.bg} rounded-full border-2 border-gray-950 flex items-center justify-center text-white text-[9px] font-black`}>
                  {c.init}
                </div>
              ))}
            </div>
            <span className="text-gray-400 text-[11px] font-medium">
              <span className="text-white font-bold">43 hired</span> this month
            </span>
          </div>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-black text-green-400 hover:text-green-300 transition-colors group"
          >
            See All Work
            <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Mobile-only quick contact strip */}
      <div className="lg:hidden mt-5 grid grid-cols-2 gap-3">
        <a
          href="tel:+917837319660"
          className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] rounded-xl px-4 py-3 text-white text-sm font-bold hover:bg-[#1ebe5c] transition-all"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-[130px] pb-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── TOP BADGE ROW ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center btn-gold-gradient border border-yellow-400 rounded-full px-4 py-1.5 shadow-lg">
            <div className="w-2 h-2 bg-green-700 rounded-full mr-2 animate-pulse" />
            <span className="text-xs font-bold text-green-900 uppercase tracking-wide">
              Only 3 Design Spots Left This Week
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white text-xs font-semibold">4.9/5 · 200+ Verified Reviews</span>
          </div>
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">

          {/* LEFT: COPY */}
          <div className="text-left">

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.1] mb-5 tracking-tight">
              US & Canadian Businesses:<br />
              Stop Losing Deals to<br />
              <span className="text-gold-gradient">Better-Looking Competitors</span>
            </h1>

            <p className="text-lg text-green-100 leading-relaxed mb-5 max-w-xl">
              We build logos, websites &amp; brand systems that make your business the <span className="text-white font-bold">obvious first choice</span> — so clients pick you before you even speak.
            </p>

            {/* Live notification */}
            <div className="mb-6">
              <LiveNotification />
            </div>

            {/* Outcome bullets */}
            <ul className="space-y-2.5 mb-7">
              {[
                { text: 'Professional logo delivered in 48 hours — or 100% refund' },
                { text: 'Conversion-optimised websites that rank on Google from day 1' },
                { text: 'Unlimited revisions — we work until you say "perfect"' },
                { text: 'You own every file — no subscriptions, no lock-in, ever' },
              ].map((b) => (
                <li key={b.text} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-green-50 text-sm font-medium">{b.text}</span>
                </li>
              ))}
            </ul>

            {/* PRIMARY CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-gradient text-green-900 px-8 py-4 rounded-xl text-base font-black hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Get My Free Brand Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5c] text-white px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us Now
              </a>
            </div>

            {/* Risk reversal */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-5">
              <span className="flex items-center gap-1.5 text-green-200 text-xs font-medium">
                <Shield className="h-3.5 w-3.5 text-green-300" />
                100% Satisfaction Guarantee
              </span>
              <span className="flex items-center gap-1.5 text-green-200 text-xs font-medium">
                <Clock className="h-3.5 w-3.5 text-green-300" />
                Response within 2 hours
              </span>
              <span className="flex items-center gap-1.5 text-green-200 text-xs font-medium">
                <DollarSign className="h-3.5 w-3.5 text-green-300" />
                From $149 · Split payments available
              </span>
            </div>

            {/* Social proof avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { bg: 'bg-amber-500', init: 'M' },
                  { bg: 'bg-sky-500', init: 'S' },
                  { bg: 'bg-rose-500', init: 'A' },
                  { bg: 'bg-emerald-500', init: 'R' },
                  { bg: 'bg-orange-500', init: 'J' },
                ].map((c, i) => (
                  <div key={i} className={`w-8 h-8 ${c.bg} rounded-full border-2 border-green-700 flex items-center justify-center text-white text-xs font-black`}>
                    {c.init}
                  </div>
                ))}
              </div>
              <p className="text-green-100 text-sm">
                <span className="text-white font-bold">43 businesses</span> hired us in the last 30 days
              </p>
            </div>
          </div>

          {/* RIGHT: VISUAL PROOF */}
          <RightPanel whatsappLink={WHATSAPP_LINK} bookingLink={BOOKING_LINK} />
        </div>

        {/* ── ANIMATED STATS BAR ── */}
        <div
          ref={statsRef}
          className="border-t border-green-500/50 bg-green-800/40 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-green-500/30">
              <AnimatedStat value={5000} suffix="+" label="Brands Delivered" icon={<Award className="h-4 w-4 text-yellow-400" />} started={statsStarted} />
              <AnimatedStat value={12} suffix="+" label="Years Experience" icon={<Calendar className="h-4 w-4 text-yellow-400" />} started={statsStarted} />
              <AnimatedStat value={200} suffix="+" label="5-Star Reviews" icon={<Star className="h-4 w-4 text-yellow-400 fill-current" />} started={statsStarted} />
              <AnimatedStat value={48} suffix="hr" label="Logo Turnaround" icon={<Zap className="h-4 w-4 text-yellow-400" />} started={statsStarted} />
            </div>
          </div>
        </div>

        {/* ── PLATFORM TRUST STRIP ── */}
        <div className="bg-white py-5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Trusted by 5,000+ businesses · Built on industry-leading platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {[
                { label: 'WordPress', icon: <Globe className="h-4 w-4" /> },
                { label: 'Shopify', icon: <BarChart2 className="h-4 w-4" /> },
                { label: 'Google Partner', icon: <Search className="h-4 w-4" /> },
                { label: 'Adobe Suite', icon: <Palette className="h-4 w-4" /> },
                { label: 'Figma', icon: <Layers className="h-4 w-4" /> },
                { label: 'WooCommerce', icon: <Smartphone className="h-4 w-4" /> },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-200 group">
                  <span className="group-hover:scale-110 transition-transform">{p.icon}</span>
                  <span className="text-sm font-semibold">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
