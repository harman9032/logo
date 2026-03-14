import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, ArrowLeft, BookOpen, CheckCircle, Tag, Lightbulb, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const SITE_URL = "https://dailycreativedesigns.com";

function BlogPostSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "url": `${SITE_URL}/blog/${post.slug}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "name": "Daily Creative Designs",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Creative Designs",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": [post.category, "WordPress", "web design", "branding", "small business"],
    "wordCount": post.sections.reduce((acc, s) => acc + s.body.split(' ').length, 0)
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}/blog/${post.slug}` }
    ]
  };

  const faqSchema = post.sections.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.sections.slice(0, 5).map((s) => ({
      "@type": "Question",
      "name": s.heading,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": s.body
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Daily Creative Designs Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', post.title);

      let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', post.excerpt);

      let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', post.image);

      let twitterCard = document.querySelector('meta[name="twitter:card"]') as HTMLMetaElement | null;
      if (!twitterCard) {
        twitterCard = document.createElement('meta');
        twitterCard.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCard);
      }
      twitterCard.setAttribute('content', 'summary_large_image');
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <main id="main-content">
        <div className="flex-1 flex items-center justify-center py-40">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-gray-200 mx-auto mb-6" />
            <h1 className="text-3xl font-black text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-500 mb-8">This article does not exist or has been moved.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        </main>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <BlogPostSchema post={post} />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-300 line-clamp-1" aria-current="page">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`${post.tagStyle} text-xs font-bold px-3 py-1.5 rounded-full`}>{post.category}</span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="text-gray-500 text-xs">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8" itemProp="headline">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 pt-6 border-t border-gray-700">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">
              D
            </div>
            <div>
              <p className="text-white font-bold text-sm">Daily Creative Designs Team</p>
              <p className="text-gray-400 text-xs">WordPress Development & Branding Specialists</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            itemProp="image"
            width="900"
            height="600"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

      <section className="py-14 bg-white" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content="Daily Creative Designs" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium border-l-4 border-green-400 pl-6" itemProp="abstract">
            {post.intro}
          </p>

          <div className="space-y-12" itemProp="articleBody">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">{section.body}</p>

                {section.list && section.list.length > 0 && (
                  <ul className="space-y-3 mt-4 mb-4">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tip && (
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mt-4">
                    <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <span className="font-bold">Quick tip: </span>{section.tip}
                    </p>
                  </div>
                )}

                {section.callout && (
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4 mt-4">
                    <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm leading-relaxed">{section.callout}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mt-14">
            <h3 className="text-xl font-black text-white mb-3">What to Do Next</h3>
            <p className="text-green-100 leading-relaxed mb-6">{post.cta}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md"
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </a>
              {post.ctaService && (
                <Link
                  to={post.ctaService}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  View Service Details
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => {
                const Icon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width="400"
                        height="300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-2 left-2">
                        <div className={`w-8 h-8 ${related.iconColor} rounded-lg flex items-center justify-center shadow-sm`}>
                          <Icon className={`h-4 w-4 ${related.iconTextColor}`} />
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${related.tagStyle} text-xs font-bold px-2.5 py-0.5 rounded-full`}>{related.category}</span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related.readTime}
                        </span>
                      </div>
                      <h3 className="text-sm font-black text-gray-900 leading-tight group-hover:text-green-700 transition-colors flex-1">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-1 text-green-600 font-bold text-xs mt-3">
                        Read article
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Articles
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
