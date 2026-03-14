import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Award, TrendingUp, Globe, Heart, Lightbulb,
  CheckCircle, Star, Clock, Shield, Target, Zap
} from 'lucide-react';
import SEO from '../components/SEO';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

const stats = [
  { value: '5,000+', label: 'Brands Created', icon: Users },
  { value: '12+', label: 'Years Experience', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '100%', label: 'Satisfaction Rate', icon: Heart },
];

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & Creative Director',
    years: '12 years in brand design',
    focus: 'Brand strategy, logo systems, identity design',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Priya Nair',
    role: 'Lead Web Designer',
    years: '9 years in web & UI design',
    focus: 'Conversion-optimised websites, Shopify, WordPress',
    color: 'from-sky-500 to-blue-500',
  },
  {
    name: 'Rohan Mehta',
    role: 'Digital Marketing Strategist',
    years: '7 years in growth marketing',
    focus: 'SEO, paid ads, social media growth',
    color: 'from-amber-500 to-yellow-400',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Strategy First',
    desc: 'Every design decision is rooted in business strategy. Beautiful work that drives real results.',
  },
  {
    icon: Shield,
    title: 'No Compromises',
    desc: 'Unlimited revisions, full commercial rights, and 100% satisfaction — always.',
  },
  {
    icon: Zap,
    title: 'Speed Without Shortcuts',
    desc: '48-hour logo delivery and 3–5 day websites — fast because we have mastered the process.',
  },
  {
    icon: Target,
    title: 'Built for Small Business',
    desc: 'Agency-quality work at prices that work for founders, freelancers, and growing brands.',
  },
];

const milestones = [
  { year: '2012', event: 'Founded in India with a mission to make world-class design accessible to small businesses.' },
  { year: '2015', event: 'Reached 500 brands served. Expanded services to include website design and brand identity.' },
  { year: '2018', event: 'Went fully global. Serving clients across USA, UK, Australia, UAE, and Southeast Asia.' },
  { year: '2021', event: 'Launched AI-assisted design workflow — cutting delivery time in half without sacrificing quality.' },
  { year: '2024', event: 'Surpassed 5,000 brand transformations. Rated 5.0 by clients across all platforms.' },
];

const whyIndia = [
  {
    icon: Clock,
    title: 'IST Timezone Advantage',
    desc: 'India Standard Time overlaps with US evenings and EU mornings — we are working while you sleep, delivering faster.',
  },
  {
    icon: Award,
    title: 'World-Class Design Education',
    desc: 'India produces some of the world\'s most talented designers, trained in international design principles.',
  },
  {
    icon: TrendingUp,
    title: 'Premium Quality, Honest Pricing',
    desc: 'Lower operating costs mean we can charge a fraction of Western agency rates without reducing quality.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="About Us — Design Agency Since 2012" description="Meet the team behind 5,000+ successful brand transformations. Daily Creative Designs has been delivering premium logo and website design since 2012." canonical="/about" />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Heart className="h-3.5 w-3.5 fill-current" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            12+ Years Building Brands{' '}
            <span className="text-yellow-400">That Mean Business</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            We started Daily Creative Designs with one belief: small businesses deserve the same quality of design as Fortune 500 companies — without the Fortune 500 price tag.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="flex justify-center text-green-400 mb-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Lightbulb className="h-3.5 w-3.5" />
                Our Founding Story
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                Built to Give Small Businesses a Competitive Edge
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  In 2012, our founder Arjun Sharma noticed a pattern: brilliant small business owners with great products were losing customers to bigger competitors — not because of quality, but because of presentation. Their branding looked cheap. Their websites were outdated. Their social media was inconsistent.
                </p>
                <p>
                  The problem wasn't effort — it was access. Top design studios charged $5,000–$15,000 for a logo. Professional websites cost $10,000+. Small businesses couldn't compete.
                </p>
                <p>
                  Daily Creative Designs was built to change that. By combining deep design expertise with a streamlined process, we deliver agency-quality work at prices that make sense for real businesses.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-3xl p-10 text-white">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-900" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-center mb-4 text-yellow-400">Our Mission</h3>
              <p className="text-gray-300 text-center text-lg leading-relaxed mb-8">
                To make world-class brand design and digital strategy accessible to every small business, startup, and entrepreneur — regardless of budget or geography.
              </p>
              <div className="space-y-3">
                {[
                  'Affordable doesn\'t mean average',
                  'Every brand deserves a professional identity',
                  'Design should drive business results',
                  'Client success is our success',
                ].map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Users className="h-3.5 w-3.5" />
              Meet the Team
            </div>
            <h2 className="text-4xl font-black text-gray-900">The People Behind Your Brand</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              A focused team of specialists — each with deep expertise in their craft and a shared obsession with results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white font-black text-3xl mx-auto mb-6`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs font-medium mb-4 uppercase tracking-wide">{member.years}</p>
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold text-gray-800">Focus: </span>{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Star className="h-3.5 w-3.5" />
              What We Stand For
            </div>
            <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-green-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              Our Journey
            </div>
            <h2 className="text-4xl font-black text-white">12 Years of Brand Transformations</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-700" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="relative flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-black text-xs">{m.year}</span>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-6 flex-1">
                    <p className="text-gray-200 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Globe className="h-3.5 w-3.5" />
              India-Based, Global Standard
            </div>
            <h2 className="text-4xl font-black text-gray-900">Why Global Clients Choose an India-Based Studio</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              Being based in India is a strategic advantage for our clients — not a compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyIndia.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl shadow-md border border-green-100 p-8">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Work Together?</h2>
          <p className="text-green-100 text-lg mb-8">
            Start with a free 30-minute discovery call. No obligations, just a real conversation about your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book a Free Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
