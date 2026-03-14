import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Star, ArrowRight, Quote, TrendingUp, Users, Award } from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const testimonials = [
  {
    text: "Our brand was losing market share. After the design masterclass and brand package, we rebranded completely. Our customer engagement increased by 300% in just 3 months!",
    name: "Priya Sharma",
    title: "Founder, Fashion E-commerce Brand",
    service: "Complete Digital Package",
    result: "+300% engagement",
    color: "from-green-500 to-emerald-500",
  },
  {
    text: "The design principles taught here are gold. I applied them to my tech startup's branding and we got funded immediately. Investors loved the professional visual identity!",
    name: "Vikram Singh",
    title: "CEO, SaaS Startup",
    service: "Logo Design",
    result: "Series A funded",
    color: "from-amber-500 to-yellow-400",
  },
  {
    text: "As a freelancer, I was struggling to stand out. This program helped me create a strong personal brand. Now I attract premium clients who value my expertise!",
    name: "Anjali Desai",
    title: "Freelance Design Consultant",
    service: "AI Website Design",
    result: "2x client rate",
    color: "from-sky-500 to-blue-500",
  },
  {
    text: "Working with Daily Creative Designs was the best investment we made this year. Our new website converted 4x better than the old one within the first week of launch.",
    name: "Rahul Mehta",
    title: "Owner, Restaurant Chain",
    service: "AI Website Design",
    result: "4x conversions",
    color: "from-green-600 to-teal-500",
  },
  {
    text: "I had zero brand identity before. Now we have a cohesive look across everything — social media, website, packaging. Customers constantly comment on how professional we look.",
    name: "Sneha Kapoor",
    title: "Founder, Handmade Jewellery Brand",
    service: "Complete Digital Package",
    result: "60% more DMs",
    color: "from-rose-500 to-pink-500",
  },
  {
    text: "The turnaround was incredible — 48 hours for a full logo suite with all files. No agency has ever delivered that fast without cutting corners. Quality was outstanding.",
    name: "Arun Nair",
    title: "Marketing Head, EdTech Startup",
    service: "Logo Design",
    result: "48hr delivery",
    color: "from-amber-600 to-orange-500",
  },
];

const stats = [
  { icon: <Users className="h-6 w-6" />, value: "5,000+", label: "Brands Transformed" },
  { icon: <Star className="h-6 w-6" />, value: "5.0", label: "Average Rating" },
  { icon: <Award className="h-6 w-6" />, value: "12+", label: "Years Experience" },
  { icon: <TrendingUp className="h-6 w-6" />, value: "100%", label: "Satisfaction Rate" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Star className="h-3.5 w-3.5 fill-current" />
            Client Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Real Brands,{' '}
            <span className="text-yellow-400">Real Results</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Over 5,000 businesses have transformed their brand identity with us. Here is what they have to say.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center text-green-400 mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gray-100 flex-shrink-0" />
                </div>

                <blockquote className="text-gray-700 leading-relaxed flex-1 mb-6 font-medium">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-black text-lg`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-0.5">{t.service}</p>
                    <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                      {t.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-green-100 text-lg mb-8">
            Join thousands of businesses that transformed their brand with Daily Creative Designs.
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
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-black">
            Daily Creative <span className="text-yellow-400">Designs</span>
          </Link>
          <p className="text-gray-400 text-sm">© 2025 Daily Creative Designs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
