import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, BookOpen, Rss } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { blogPosts, BLOG_CATEGORIES, getFeaturedPost, getPostsByCategory } from '../data/blogPosts';
import type { BlogCategory } from '../data/blogPosts';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const SITE_URL = "https://dailycreativedesigns.com";

function BlogListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Daily Creative Designs Blog",
    "description": "Practical guides on WordPress development, branding, web design, and digital marketing for founders and small business owners.",
    "url": `${SITE_URL}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Daily Creative Designs",
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `${SITE_URL}/blog/${post.slug}`,
      "image": post.image,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": "Daily Creative Designs" },
      "keywords": post.category
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const featuredPost = getFeaturedPost();
  const allNonFeatured = blogPosts.filter((p) => !p.featured);

  const filtered = activeCategory === 'All'
    ? allNonFeatured
    : getPostsByCategory(activeCategory).filter((p) => !p.featured);

  useEffect(() => {
    document.title = "Blog | WordPress & Branding Tips for Small Businesses | Daily Creative Designs";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Practical guides on WordPress development, branding, logo design, and digital marketing. Written for freelancers and small business owners targeting US and Canadian clients.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="Blog — Design & Digital Marketing Insights" description="Expert articles on logo design, website optimization, brand strategy, and digital marketing. Actionable advice from our design team." canonical="/blog" />
      <BlogListSchema />
      <BreadcrumbSchema />
      <Navbar />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-300" aria-current="page">Blog</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            WordPress & Design Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            WordPress Tips &{' '}
            <span className="text-green-400">Design Strategies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Practical guides on WordPress development, branding, and digital marketing — written for freelancers and small business owners targeting US and Canadian clients.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400 flex-wrap">
            <span className="flex items-center gap-1.5"><Rss className="h-3.5 w-3.5 text-green-400" />{blogPosts.length} articles</span>
            <span>·</span>
            <span>New posts monthly</span>
            <span>·</span>
            <span>Free, no sign-up</span>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Tag className="h-3.5 w-3.5" />
              Featured Article
            </div>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative overflow-hidden min-h-[280px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="900"
                    height="600"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block ${featuredPost.tagStyle} text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${featuredPost.tagStyle} text-xs font-bold px-3 py-1 rounded-full`}>{featuredPost.category}</span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-base">{featuredPost.excerpt}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{featuredPost.intro}</p>
                  <span className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all self-start hover:-translate-y-0.5 shadow-md">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-green-600 text-white shadow-md shadow-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({blogPosts.filter((p) => p.category === cat && !p.featured).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No articles in this category yet.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-green-600 font-semibold text-sm hover:underline"
              >
                View all articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => {
                const Icon = post.icon;
                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    <meta itemProp="datePublished" content={post.date} />
                    <meta itemProp="author" content="Daily Creative Designs" />
                    <Link to={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden" tabIndex={-1}>
                      <img
                        src={post.image}
                        alt={post.title}
                        itemProp="image"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width="400"
                        height="300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className={`w-9 h-9 ${post.iconColor} rounded-lg flex items-center justify-center shadow-sm`}>
                          <Icon className={`h-4 w-4 ${post.iconTextColor}`} />
                        </div>
                      </div>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`${post.tagStyle} text-xs font-bold px-3 py-1 rounded-full`}>{post.category}</span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2
                        className="text-lg font-black text-gray-900 mb-3 leading-tight flex-1 group-hover:text-green-700 transition-colors"
                        itemProp="headline"
                      >
                        <Link to={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3" itemProp="description">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-gray-400 text-xs">{post.date}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-bold text-sm transition-colors"
                          aria-label={`Read ${post.title}`}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-md border border-green-100 p-10">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Get WordPress & Design Tips Weekly</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Practical WordPress, SEO, and branding advice for freelancers targeting US clients — no fluff, once a week.
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
          <h2 className="text-3xl font-black mb-4">Need a WordPress Site Built for US Clients?</h2>
          <p className="text-green-100 mb-8">
            Book a free discovery call and get a custom strategy for your WordPress project — healthcare, local business, SaaS, or e-commerce.
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
