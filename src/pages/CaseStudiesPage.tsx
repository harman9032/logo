import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, Star, Users, Award, Palette, Monitor,
  ShoppingCart, Layers, Quote
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const caseStudies = [
  {
    id: 'freshbrew-coffee',
    client: 'FreshBrew Coffee',
    industry: 'Food & Beverage — Mumbai, India',
    service: 'Complete Digital Package',
    serviceIcon: Palette,
    serviceColor: 'text-amber-500',
    serviceTag: 'bg-amber-100 text-amber-700',
    challenge: 'FreshBrew was a promising specialty coffee chain with 3 locations but zero consistent brand identity. Every location looked different, their packaging was generic, and their website was built on a free template from 2018. Customers were confused — is this a premium brand or a budget option?',
    solution: 'We delivered a complete brand overhaul: a bold wordmark logo, unified colour palette (deep espresso brown, warm gold, cream), packaging system, and a conversion-focused website that led with their story and specialty sourcing credentials.',
    result: '+300%',
    resultLabel: 'Customer engagement in 3 months',
    metrics: [
      { value: '+300%', label: 'Social engagement' },
      { value: '3x', label: 'Website bookings' },
      { value: '48hrs', label: 'Delivery time (logo)' },
    ],
    quote: 'Our brand was losing market share. After the design masterclass and brand package, we rebranded completely. Our customer engagement increased by 300% in just 3 months!',
    quoteName: 'Priya Sharma',
    quoteRole: 'Founder, FreshBrew Coffee',
    gradient: 'from-amber-500 to-yellow-400',
    beforeIssues: ['3 locations with 3 different logo versions', 'Generic packaging with no brand story', 'Free website template from 2018', 'No social media design guidelines'],
    afterWins: ['Single bold wordmark used across all locations', 'Premium packaging with origin story', 'Conversion-optimised website with booking system', 'Full social media kit — 30 branded templates'],
  },
  {
    id: 'novatech-solutions',
    client: 'NovaTech Solutions',
    industry: 'SaaS / Technology — Bengaluru, India',
    service: 'Logo Design + AI Website Design',
    serviceIcon: Monitor,
    serviceColor: 'text-green-600',
    serviceTag: 'bg-green-100 text-green-700',
    challenge: 'NovaTech had a strong product but looked like every other B2B SaaS startup. Their old logo was a stock icon with generic blue text. Their website had no clear value proposition above the fold, and investors were not taking them seriously.',
    solution: 'We created a distinctive abstract mark logo that conveys precision and growth, rebuilt their website with a clear hero section leading with ROI metrics, and added a product demo video section and social proof bar with client logos.',
    result: 'Series A',
    resultLabel: 'Funded after rebrand',
    metrics: [
      { value: '4x', label: 'More investor enquiries' },
      { value: 'Series A', label: 'Funding secured' },
      { value: '5 days', label: 'Website delivery' },
    ],
    quote: 'The design principles taught here are gold. I applied them to my tech startup\'s branding and we got funded immediately. Investors loved the professional visual identity!',
    quoteName: 'Vikram Singh',
    quoteRole: 'CEO, NovaTech Solutions',
    gradient: 'from-green-500 to-emerald-500',
    beforeIssues: ['Stock icon logo with generic blue text', 'No clear value proposition on homepage', 'No product demo or social proof', 'Investors not engaging with pitch deck'],
    afterWins: ['Custom abstract mark conveying precision + growth', 'Hero section leading with ROI metrics', 'Product demo section + client logo strip', 'Raised Series A within 60 days of launch'],
  },
  {
    id: 'bella-skincare',
    client: 'Bella Skincare',
    industry: 'Beauty & Wellness — Delhi, India',
    service: 'Social Media Design',
    serviceIcon: Layers,
    serviceColor: 'text-rose-500',
    serviceTag: 'bg-rose-100 text-rose-700',
    challenge: 'Bella Skincare had great products but their Instagram looked like a confusing mix of Canva templates, random stock photos, and inconsistent fonts. Their ads were getting clicks but not conversions, and their profile looked untrustworthy to new visitors.',
    solution: 'We designed a complete social media kit: 30 branded templates covering product showcases, quote posts, before/after cards, story templates, reel covers, and seasonal campaign sets — all in a cohesive visual language that matched their premium positioning.',
    result: '+300%',
    resultLabel: 'Instagram engagement rate',
    metrics: [
      { value: '+300%', label: 'Engagement rate' },
      { value: '60%', label: 'More DMs per week' },
      { value: '40%', label: 'Lower ad cost per click' },
    ],
    quote: 'I had zero brand identity before. Now we have a cohesive look across everything. Customers constantly comment on how professional we look.',
    quoteName: 'Sneha Kapoor',
    quoteRole: 'Founder, Bella Skincare',
    gradient: 'from-rose-500 to-pink-500',
    beforeIssues: ['Inconsistent mix of random Canva templates', 'No visual brand language or colour system', 'Stock photos that did not match brand values', 'Ad creative not converting'],
    afterWins: ['30-template branded social media kit', 'Consistent colour palette and typography', 'Product photography framing guidelines', '40% lower cost per click on ads'],
  },
  {
    id: 'tasty-restaurant',
    client: 'Tasty Bites Restaurant Chain',
    industry: 'Food & Beverage — Hyderabad, India',
    service: 'AI Website Design',
    serviceIcon: Monitor,
    serviceColor: 'text-teal-600',
    serviceTag: 'bg-teal-100 text-teal-700',
    challenge: 'This 5-location restaurant chain was losing online orders to competitors. Their website was slow, not mobile-friendly, and the online ordering system was buried three clicks deep. Their Google ranking was poor because the site had no SEO structure.',
    solution: 'We built a fast, mobile-first website with the online ordering CTA in the hero section, embedded Google Maps for all 5 locations, added a full menu with food photography sections, integrated customer reviews, and implemented on-page SEO across all location pages.',
    result: '4x',
    resultLabel: 'Online conversions in first week',
    metrics: [
      { value: '4x', label: 'Online conversions' },
      { value: 'Sub-2s', label: 'Page load time' },
      { value: 'Page 1', label: 'Google ranking in 6 weeks' },
    ],
    quote: 'Working with Daily Creative Designs was the best investment we made this year. Our new website converted 4x better than the old one within the first week of launch.',
    quoteName: 'Rahul Mehta',
    quoteRole: 'Owner, Tasty Bites Restaurant Chain',
    gradient: 'from-teal-500 to-green-500',
    beforeIssues: ['Slow website not mobile-friendly', 'Order button buried 3 clicks deep', 'No SEO structure on location pages', 'Poor Google Maps integration'],
    afterWins: ['Online ordering CTA above the fold on mobile', 'Sub-2 second load time', 'All 5 locations with SEO-optimised pages', 'Page 1 Google ranking in 6 weeks'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-3.5 w-3.5" />
            Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            From Brief to Brand:{' '}
            <span className="text-yellow-400">Real Projects, Real Results</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            We do not just design — we deliver measurable business outcomes. Here is a deep look at how we have transformed real brands.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '5,000+', label: 'Projects Delivered' },
              { icon: Star, value: '5.0', label: 'Average Client Rating' },
              { icon: Award, value: '12+', label: 'Years of Results' },
              { icon: TrendingUp, value: '100%', label: 'Satisfaction Rate' },
            ].map((s) => {
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => {
              const ServiceIcon = cs.serviceIcon;
              return (
                <div key={cs.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className={`bg-gradient-to-r ${cs.gradient} p-8 md:p-12`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                            <ServiceIcon className="h-3.5 w-3.5" />
                            {cs.service}
                          </span>
                          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                            Case Study #{idx + 1}
                          </span>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">{cs.client}</h2>
                        <p className="text-white/80 font-medium">{cs.industry}</p>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-5xl font-black text-white">{cs.result}</div>
                        <div className="text-white/80 text-sm font-medium mt-1">{cs.resultLabel}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Our Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-red-700 uppercase tracking-widest mb-4">Before</h4>
                        <ul className="space-y-2.5">
                          {cs.beforeIssues.map((issue) => (
                            <li key={issue} className="flex items-start gap-2.5">
                              <span className="text-red-400 mt-0.5 flex-shrink-0 text-lg leading-none">✗</span>
                              <span className="text-red-800 text-sm leading-relaxed">{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-green-700 uppercase tracking-widest mb-4">After</h4>
                        <ul className="space-y-2.5">
                          {cs.afterWins.map((win) => (
                            <li key={win} className="flex items-start gap-2.5">
                              <span className="text-green-500 mt-0.5 flex-shrink-0 text-lg leading-none">✓</span>
                              <span className="text-green-800 text-sm leading-relaxed">{win}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center bg-gray-50 rounded-2xl p-5">
                          <div className="text-2xl font-black text-green-600 mb-1">{m.value}</div>
                          <div className="text-xs text-gray-500 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-8">
                      <Quote className="h-8 w-8 text-green-400 mb-4" />
                      <blockquote className="text-gray-200 text-lg leading-relaxed font-medium mb-6">
                        "{cs.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${cs.gradient} rounded-full flex items-center justify-center text-white font-black`}>
                          {cs.quoteName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{cs.quoteName}</p>
                          <p className="text-gray-400 text-xs">{cs.quoteRole}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Your Brand Could Be Next</h2>
          <p className="text-green-100 text-lg mb-8">
            Every case study started with a free discovery call. Let's talk about what's possible for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
