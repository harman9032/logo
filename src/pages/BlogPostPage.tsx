import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, ArrowLeft, BookOpen, CheckCircle, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const postContent: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  tagStyle: string;
  intro: string;
  sections: { heading: string; body: string; list?: string[] }[];
  cta: string;
}> = {
  'signs-logo-hurting-business': {
    title: '7 Signs Your Logo Is Hurting Your Business (And What to Do About It)',
    category: 'Logo Design',
    readTime: '6 min read',
    date: 'January 2025',
    tagStyle: 'bg-amber-100 text-amber-700',
    intro: 'Your logo is working 24 hours a day, 7 days a week — on your website, business cards, packaging, social media, signage, and everything in between. If it is sending the wrong message, you could be losing customers before they even read a single word about your business. Here are the 7 most common signs your logo is working against you.',
    sections: [
      {
        heading: '1. It Looks Pixelated or Blurry',
        body: 'A pixelated logo signals one thing to customers: this business is not serious. This happens when a logo was designed in low resolution (under 300 DPI) or saved in the wrong format. Professional logos are designed in vector format (SVG or AI), which means they can be scaled to any size — from a business card to a billboard — without losing quality.',
      },
      {
        heading: '2. It Does Not Work in Black and White',
        body: 'A logo that relies entirely on colour to be recognisable is a design problem. Your logo needs to work on fax documents, legal paperwork, newspapers, and single-colour embroidery. Test your logo by converting it to greyscale. If it loses its meaning, your logo needs a rethink.',
      },
      {
        heading: '3. It Looks Dated Compared to Your Competitors',
        body: 'Design trends change. A logo designed in 2008 using drop shadows, gradients, and decorative fonts may have looked modern then — but looks dated today. Your logo should look as current as your best competitor, if not better.',
      },
      {
        heading: '4. It Does Not Communicate What You Do',
        body: 'A logo does not need to literally illustrate your product, but it should reinforce the feeling and positioning of your brand. A children\'s toy company with a serious, corporate logo creates cognitive dissonance. A luxury brand with a cartoonish font destroys trust immediately.',
      },
      {
        heading: '5. You Are Embarrassed to Share It',
        body: 'This is the most honest signal. If you hesitate before handing over your business card, skip adding your logo to a Zoom background, or avoid printing it on merchandise — your instincts are telling you something important. Trust them.',
      },
      {
        heading: '6. It Was Designed Free or by a Non-Designer',
        body: 'Free logo makers and well-meaning friends produce logos that look like free logo makers and well-meaning friends. There is no substitute for professional design strategy and execution. The good news: professional logo design does not have to cost a fortune. Our Logo Design package starts at $299 and includes unlimited revisions.',
        list: [
          '3 unique professional concepts',
          'All file formats (PNG, SVG, PDF, AI)',
          'Light and dark versions',
          'Brand colour palette',
          'Full commercial rights',
        ],
      },
      {
        heading: '7. Customers Keep Asking What Your Business Name Is',
        body: 'If people who have seen your logo still cannot remember or read your business name, your logo is failing at its most basic job. Legibility is not optional — it is foundational. If your business name is being misread, mispronounced, or forgotten, your logo typography needs immediate attention.',
      },
    ],
    cta: 'If three or more of these signs apply to your logo, it is time for a redesign. Our Logo Design package is delivered in 48 hours and starts at $299 — book a free call to discuss.',
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-40">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-gray-200 mx-auto mb-6" />
            <h1 className="text-3xl font-black text-gray-900 mb-4">Article Coming Soon</h1>
            <p className="text-gray-500 mb-8">We are still writing this one. Check back soon.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className={`${post.tagStyle} text-xs font-bold px-3 py-1.5 rounded-full`}>{post.category}</span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="text-gray-500 text-xs">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-black text-sm">
              D
            </div>
            <div>
              <p className="text-white font-bold text-sm">Daily Creative Designs Team</p>
              <p className="text-gray-400 text-xs">Design & Branding Specialists</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
              {post.intro}
            </p>

            {post.sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-black text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{section.body}</p>
                {section.list && (
                  <ul className="space-y-2 mt-4">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-black text-gray-900 mb-3">What to Do Next</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{post.cta}</p>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md"
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              More Articles
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
