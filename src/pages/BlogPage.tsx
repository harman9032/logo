import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, BookOpen, TrendingUp, Palette, Globe, Layers, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

type BlogCategory = 'All' | 'Logo Design' | 'Brand Identity' | 'Web Design' | 'Marketing' | 'Business Growth';

const blogCategories: BlogCategory[] = ['All', 'Logo Design', 'Brand Identity', 'Web Design', 'Marketing', 'Business Growth'];

const posts = [
  {
    slug: 'signs-logo-hurting-business',
    title: '7 Signs Your Logo Is Hurting Your Business (And What to Do About It)',
    excerpt: 'Your logo is the first thing people see. If it\'s sending the wrong message, you could be losing customers before they even read a word about your business.',
    category: 'Logo Design' as BlogCategory,
    readTime: '6 min read',
    date: 'January 2025',
    icon: Palette,
    iconColor: 'bg-amber-100',
    iconTextColor: 'text-amber-600',
    tagStyle: 'bg-amber-100 text-amber-700',
    featured: true,
    content: [
      'It looks pixelated or blurry in any size',
      'It doesn\'t work in black and white',
      'It looks dated compared to your competitors',
      'It doesn\'t communicate what your business actually does',
      'You\'re embarrassed to share it',
      'It was designed by a friend, not a professional',
      'Customers keep asking what your business name is',
    ],
  },
  {
    slug: 'build-brand-identity-2025',
    title: 'How to Build a Brand Identity From Scratch in 2025',
    excerpt: 'Brand identity is more than a logo. It\'s the complete system that tells your story — colours, fonts, imagery, tone of voice, and everything in between.',
    category: 'Brand Identity' as BlogCategory,
    readTime: '9 min read',
    date: 'January 2025',
    icon: Layers,
    iconColor: 'bg-orange-100',
    iconTextColor: 'text-orange-600',
    tagStyle: 'bg-orange-100 text-orange-700',
    featured: false,
    content: [],
  },
  {
    slug: 'shopify-vs-wordpress',
    title: 'Shopify vs WordPress: Which Platform Is Right for Your Business in 2025?',
    excerpt: 'Both platforms power millions of websites. But the right choice depends on your business type, technical comfort, and growth plans.',
    category: 'Web Design' as BlogCategory,
    readTime: '8 min read',
    date: 'December 2024',
    icon: Globe,
    iconColor: 'bg-sky-100',
    iconTextColor: 'text-sky-600',
    tagStyle: 'bg-sky-100 text-sky-700',
    featured: false,
    content: [],
  },
  {
    slug: 'good-website-design-2025',
    title: 'What Makes a Good Website in 2025? 10 Elements That Convert Visitors',
    excerpt: 'Most websites look fine but do nothing. Learn the 10 elements that separate a brochure website from a conversion machine.',
    category: 'Web Design' as BlogCategory,
    readTime: '7 min read',
    date: 'December 2024',
    icon: Globe,
    iconColor: 'bg-green-100',
    iconTextColor: 'text-green-600',
    tagStyle: 'bg-green-100 text-green-700',
    featured: false,
    content: [],
  },
  {
    slug: 'how-to-brief-a-designer',
    title: 'How to Brief a Designer: The Complete Guide (With Free Template)',
    excerpt: 'The quality of your brief directly determines the quality of the design you receive. Here is exactly what to include — and what to avoid.',
    category: 'Business Growth' as BlogCategory,
    readTime: '10 min read',
    date: 'November 2024',
    icon: BookOpen,
    iconColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
    tagStyle: 'bg-teal-100 text-teal-700',
    featured: false,
    content: [],
  },
  {
    slug: 'social-media-design-tips',
    title: 'Why Your Social Media Looks Amateur (And 5 Design Fixes That Work)',
    excerpt: 'Inconsistent social media design is costing you followers, engagement, and sales. Here are 5 high-impact fixes you can implement today.',
    category: 'Marketing' as BlogCategory,
    readTime: '5 min read',
    date: 'November 2024',
    icon: TrendingUp,
    iconColor: 'bg-rose-100',
    iconTextColor: 'text-rose-600',
    tagStyle: 'bg-rose-100 text-rose-700',
    featured: false,
    content: [],
  },
  {
    slug: 'brand-colours-psychology',
    title: 'Brand Colour Psychology: How to Choose the Right Colours for Your Business',
    excerpt: 'Colours communicate before words do. The right palette builds trust, signals your price point, and attracts the right customers.',
    category: 'Brand Identity' as BlogCategory,
    readTime: '7 min read',
    date: 'October 2024',
    icon: Palette,
    iconColor: 'bg-amber-100',
    iconTextColor: 'text-amber-600',
    tagStyle: 'bg-amber-100 text-amber-700',
    featured: false,
    content: [],
  },
  {
    slug: 'small-business-digital-marketing',
    title: 'Digital Marketing for Small Businesses in India: Where to Start in 2025',
    excerpt: 'With limited budget and time, small business owners need a focused digital marketing strategy. Here is what actually works in 2025.',
    category: 'Marketing' as BlogCategory,
    readTime: '8 min read',
    date: 'October 2024',
    icon: BarChart3,
    iconColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
    tagStyle: 'bg-teal-100 text-teal-700',
    featured: false,
    content: [],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const featuredPost = posts.find((p) => p.featured);
  const filtered = activeCategory === 'All'
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            Design Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Design Insights for{' '}
            <span className="text-green-400">Growing Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Practical guides on branding, web design, and digital marketing — written for founders and small business owners, not designers.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Tag className="h-3.5 w-3.5" />
              Featured Article
            </div>
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
              <div className={`${featuredPost.iconColor} flex items-center justify-center p-16`}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    {React.createElement(featuredPost.icon, { className: `h-10 w-10 ${featuredPost.iconTextColor}` })}
                  </div>
                  <span className={`inline-block ${featuredPost.tagStyle} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${featuredPost.tagStyle} text-xs font-bold px-3 py-1 rounded-full`}>{featuredPost.category}</span>
                  <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                {featuredPost.content.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {featuredPost.content.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all self-start hover:-translate-y-0.5 shadow-md"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-green-600 text-white shadow-md shadow-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => {
              const Icon = post.icon;
              return (
                <div
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                >
                  <div className={`${post.iconColor} flex items-center justify-center py-10`}>
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Icon className={`h-7 w-7 ${post.iconTextColor}`} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`${post.tagStyle} text-xs font-bold px-3 py-1 rounded-full`}>{post.category}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-3 leading-tight flex-1">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-bold text-sm transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-md border border-green-100 p-10">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Get Free Design Tips in Your Inbox</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Practical branding and design advice for small business owners — no fluff, once a week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Need Help Applying These Ideas?</h2>
          <p className="text-green-100 mb-8">
            Book a free call with our team and we will give you personalised advice for your brand.
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

      <Footer />
    </div>
  );
}
