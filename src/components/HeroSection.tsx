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
    <section className="relative pt-24 pb-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
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

        {/* ── LIVE NOTIFICATION BAR ── */}
        <div className="flex justify-center mb-8">
          <LiveNotification />
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16">

          {/* LEFT: COPY */}
          <div className="text-left">

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.1] mb-5 tracking-tight">
              US & Canadian Businesses:<br />
              Stop Losing Deals to<br />
              <span className="text-gold-gradient">Better-Looking Competitors</span>
            </h1>

            <p className="text-lg text-green-100 leading-relaxed mb-6 max-w-xl">
              We build logos, websites &amp; brand systems that make your business the <span className="text-white font-bold">obvious first choice</span> — so clients pick you before you even speak.
            </p>

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
          <div className="relative">

            {/* Floating badge — top left (desktop only) */}
            <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-2xl px-4 py-3 hidden lg:flex items-center gap-3 border border-gray-100 animate-[fadeSlideDown_0.6s_ease_both]">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-green-200">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 leading-none">Leads Up 4×</p>
                <p className="text-xs text-gray-400 mt-0.5">Within the first week</p>
              </div>
            </div>

            {/* Floating badge — bottom right (desktop only) */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-2xl px-4 py-3.5 hidden lg:flex items-center gap-3 border border-gray-100 animate-[fadeSlideUp_0.6s_ease_0.2s_both]">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-amber-200">
                <Star className="h-5 w-5 text-amber-400 fill-current" />
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-semibold leading-tight">"Best investment we ever made"</p>
              </div>
            </div>

            {/* Browser mock + screenshot */}
            <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <BadgeCheck className="h-3.5 w-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-mono tracking-tight">dailycreativedesigns.com</span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/20 rounded-md px-2 py-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-green-300 font-semibold">LIVE</span>
                </div>
              </div>

              <div className="relative overflow-hidden" style={{ height: '320px' }}>
                <img
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional website design sample"
                  className="w-full h-full object-cover object-top scale-[1.02] hover:scale-100 transition-transform duration-700"
                  width="900"
                  height="600"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />

                {/* Result card inside screenshot */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-900 leading-none">Healthcare Clinic · Texas, US</p>
                        <p className="text-xs text-gray-400 mt-0.5">Launched in 4 days</p>
                      </div>
                    </div>
                    <span className="bg-green-500 text-white text-xs font-black px-2.5 py-1 rounded-lg whitespace-nowrap">+312% leads</span>
                  </div>
                </div>
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
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] rounded-xl px-4 py-3 text-white text-sm font-bold hover:bg-[#1ebe5c] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
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
