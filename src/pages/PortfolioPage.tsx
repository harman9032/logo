import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Monitor, ShoppingCart, Globe, Layers, Image, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

type Category = 'All' | 'Logo Design' | 'Website' | 'Brand Identity' | 'Social Media' | 'Shopify';

const categories: Category[] = ['All', 'Logo Design', 'Website', 'Brand Identity', 'Social Media', 'Shopify'];

const projects = [
  {
    id: 1,
    client: 'FreshBrew Coffee',
    industry: 'Food & Beverage',
    category: 'Logo Design' as Category,
    service: 'Logo Design',
    result: '+45% brand recognition',
    colors: ['#1a4731', '#f59e0b', '#fef3c7'],
    gradient: 'from-amber-500 to-yellow-400',
    icon: Palette,
    description: 'Bold wordmark identity for a specialty coffee chain in Mumbai.',
  },
  {
    id: 2,
    client: 'NovaTech Solutions',
    industry: 'SaaS / Technology',
    category: 'Website' as Category,
    service: 'AI Website Design',
    result: '4x more leads generated',
    colors: ['#065f46', '#10b981', '#ecfdf5'],
    gradient: 'from-green-500 to-emerald-500',
    icon: Monitor,
    description: 'Conversion-focused website with product demo integration for a B2B SaaS startup.',
  },
  {
    id: 3,
    client: 'Zara Jewels',
    industry: 'Retail / E-Commerce',
    category: 'Shopify' as Category,
    service: 'Shopify Design',
    result: '3.2x revenue in 60 days',
    colors: ['#4c1d95', '#8b5cf6', '#ede9fe'],
    gradient: 'from-violet-500 to-purple-500',
    icon: ShoppingCart,
    description: 'Premium Shopify store design for a handmade jewellery brand targeting international buyers.',
  },
  {
    id: 4,
    client: 'HealthFirst Clinic',
    industry: 'Healthcare',
    category: 'Brand Identity' as Category,
    service: 'Brand Identity',
    result: '60% more patient enquiries',
    colors: ['#0c4a6e', '#0ea5e9', '#e0f2fe'],
    gradient: 'from-sky-500 to-blue-500',
    icon: Layers,
    description: 'Complete brand identity system: logo, color palette, typography, stationery, and signage.',
  },
  {
    id: 5,
    client: 'Bella Skincare',
    industry: 'Beauty & Wellness',
    category: 'Social Media' as Category,
    service: 'Social Media Design',
    result: '+300% Instagram engagement',
    colors: ['#881337', '#f43f5e', '#fff1f2'],
    gradient: 'from-rose-500 to-pink-500',
    icon: Image,
    description: '30-post social media kit with reels covers, product showcases, and seasonal campaigns.',
  },
  {
    id: 6,
    client: 'Greenleaf Organics',
    industry: 'Health & Wellness',
    category: 'Website' as Category,
    service: 'WordPress Design',
    result: '250% more organic traffic',
    colors: ['#14532d', '#16a34a', '#f0fdf4'],
    gradient: 'from-green-600 to-teal-500',
    icon: Globe,
    description: 'SEO-focused WordPress website with WooCommerce for an organic food delivery brand.',
  },
  {
    id: 7,
    client: 'Atlas Fitness',
    industry: 'Fitness & Sports',
    category: 'Logo Design' as Category,
    service: 'Logo Design',
    result: 'Franchise launched with identity',
    colors: ['#1c1917', '#f97316', '#fff7ed'],
    gradient: 'from-orange-500 to-amber-500',
    icon: Palette,
    description: 'Dynamic lettermark logo system for a fitness chain expanding to 5 cities.',
  },
  {
    id: 8,
    client: 'LegalEdge LLP',
    industry: 'Professional Services',
    category: 'Brand Identity' as Category,
    service: 'Brand Identity',
    result: 'Series A pitch deck ready',
    colors: ['#1e3a5f', '#3b82f6', '#eff6ff'],
    gradient: 'from-blue-600 to-sky-500',
    icon: Layers,
    description: 'Corporate brand identity with stationery, email signatures, and office signage system.',
  },
  {
    id: 9,
    client: 'TastyBites Cloud Kitchen',
    industry: 'Food & Beverage',
    category: 'Shopify' as Category,
    service: 'Shopify Design',
    result: '2x average order value',
    colors: ['#7f1d1d', '#ef4444', '#fef2f2'],
    gradient: 'from-red-500 to-orange-500',
    icon: ShoppingCart,
    description: 'Full Shopify store with meal-kit bundles, subscription products, and delivery zone maps.',
  },
];

const stats = [
  { value: '5,000+', label: 'Projects Completed' },
  { value: '40+', label: 'Countries Served' },
  { value: '7', label: 'Service Categories' },
  { value: '12+', label: 'Years of Work' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Palette className="h-3.5 w-3.5" />
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            5,000+ Brands.{' '}
            <span className="text-yellow-400">See the Proof.</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            From bold logos to full brand systems to high-converting websites — here is a selection of the work we have delivered.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Filter className="h-3.5 w-3.5" />
              Filter by Service
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-green-600 text-white shadow-md shadow-green-200'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 group"
                >
                  <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/30" />
                      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/20" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-white/90 font-black text-xl">{project.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{project.service}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{project.industry}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">
                        {project.result}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg mb-6">These are just a sample. We have 5,000+ projects in our library.</p>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              See Work in Your Industry
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-green-100 text-lg mb-8">
            Book a free discovery call and let's talk about what your brand needs.
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
              View Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
