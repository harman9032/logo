import { Palette, Globe, Layers, BookOpen, TrendingUp, BarChart3, Monitor, PenTool } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type BlogCategory = 'All' | 'Logo Design' | 'Brand Identity' | 'Web Design' | 'Marketing' | 'Business Growth';

export interface BlogSection {
  heading: string;
  body: string;
  list?: string[];
  callout?: string;
  tip?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'All'>;
  readTime: string;
  date: string;
  image: string;
  icon: LucideIcon;
  iconColor: string;
  iconTextColor: string;
  tagStyle: string;
  featured: boolean;
  intro: string;
  sections: BlogSection[];
  cta: string;
  ctaService?: string;
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'signs-logo-hurting-business',
    title: '7 Signs Your Logo Is Hurting Your Business (And What to Do About It)',
    excerpt: 'Your logo is the first thing people see. If it\'s sending the wrong message, you could be losing customers before they even read a word about your business.',
    category: 'Logo Design',
    readTime: '6 min read',
    date: 'January 2025',
    image: 'https://images.pexels.com/photos/5428676/pexels-photo-5428676.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Palette,
    iconColor: 'bg-amber-100',
    iconTextColor: 'text-amber-600',
    tagStyle: 'bg-amber-100 text-amber-700',
    featured: true,
    intro: 'Your logo is working 24 hours a day, 7 days a week — on your website, business cards, packaging, social media, signage, and everything in between. If it is sending the wrong message, you could be losing customers before they even read a single word about your business. Here are the 7 most common signs your logo is working against you.',
    sections: [
      {
        heading: '1. It Looks Pixelated or Blurry',
        body: 'A pixelated logo signals one thing to customers: this business is not serious. This happens when a logo was designed in low resolution (under 300 DPI) or saved in the wrong format. Professional logos are designed in vector format (SVG or AI), which means they can be scaled to any size — from a business card to a billboard — without losing quality.',
        tip: 'Quick test: zoom into your logo at 400% in a browser. If edges look jagged or blurry, you need a vector version.',
      },
      {
        heading: '2. It Does Not Work in Black and White',
        body: 'A logo that relies entirely on colour to be recognisable is a design problem. Your logo needs to work on fax documents, legal paperwork, newspapers, and single-colour embroidery. Test your logo by converting it to greyscale. If it loses its meaning or becomes unreadable, your logo needs a rethink.',
        tip: 'Every professional logo brief should include a black-and-white version as a deliverable.',
      },
      {
        heading: '3. It Looks Dated Compared to Your Competitors',
        body: 'Design trends change. A logo designed in 2008 using drop shadows, gradients, and decorative fonts may have looked modern then — but looks dated today. Your logo should look as current as your best competitor, if not better. When your logo looks old, customers assume your thinking is old too.',
      },
      {
        heading: '4. It Does Not Communicate What You Do',
        body: 'A logo does not need to literally illustrate your product, but it should reinforce the feeling and positioning of your brand. A children\'s toy company with a serious, corporate logo creates cognitive dissonance. A luxury brand with a cartoonish font destroys trust immediately. Your logo should feel like your brand.',
      },
      {
        heading: '5. You Are Embarrassed to Share It',
        body: 'This is the most honest signal. If you hesitate before handing over your business card, skip adding your logo to a Zoom background, or avoid printing it on merchandise — your instincts are telling you something important. Trust them. A logo you are proud of is a business asset. One you are embarrassed by is a liability.',
      },
      {
        heading: '6. It Was Created With a Free Tool or by a Non-Designer',
        body: 'Free logo makers and well-meaning friends produce logos that look like free logo makers and well-meaning friends. There is no substitute for professional design strategy and execution. The good news: professional logo design does not have to cost a fortune.',
        list: [
          '3 unique professional concepts from a senior designer',
          'All file formats delivered (PNG, SVG, PDF, AI)',
          'Light and dark versions for every use case',
          'Brand colour palette and typography recommendation',
          'Full commercial usage rights — yours forever',
        ],
        callout: 'Our Logo Design package starts at $299 and delivers in 48 hours — less than the cost of one dinner meeting.',
      },
      {
        heading: '7. Customers Keep Asking What Your Business Name Is',
        body: 'If people who have seen your logo still cannot remember or read your business name, your logo is failing at its most basic job. Legibility is not optional — it is foundational. If your business name is being misread, mispronounced, or forgotten by new customers, your logo typography needs immediate attention.',
      },
    ],
    cta: 'If three or more of these signs apply to your logo, it is time for a redesign. Our Logo Design package is delivered in 48 hours, starts at $299, and includes unlimited revisions until you love it.',
    ctaService: '/services/logo-design',
    relatedSlugs: ['build-brand-identity-2025', 'brand-colours-psychology', 'how-to-brief-a-designer'],
  },

  {
    slug: 'build-brand-identity-2025',
    title: 'How to Build a Brand Identity From Scratch in 2025',
    excerpt: 'Brand identity is more than a logo. It\'s the complete visual and verbal system that tells your story — colours, fonts, imagery, tone of voice, and everything in between.',
    category: 'Brand Identity',
    readTime: '9 min read',
    date: 'January 2025',
    image: 'https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Layers,
    iconColor: 'bg-orange-100',
    iconTextColor: 'text-orange-600',
    tagStyle: 'bg-orange-100 text-orange-700',
    featured: false,
    intro: 'Most small business owners think branding means having a logo. It does not. A logo is one element of a brand identity — the same way a front door is one element of a building. Your brand identity is the complete visual and verbal system that tells the world who you are, what you stand for, and why you are different. Here is how to build one from scratch.',
    sections: [
      {
        heading: 'Step 1: Define Your Brand Strategy Before Touching Design',
        body: 'Brand strategy is the foundation that every design decision sits on. Before you pick a colour or choose a font, you need to answer four questions clearly.',
        list: [
          'Who are you? (Mission, values, personality)',
          'Who are you for? (Target customer — be specific)',
          'What problem do you solve? (Your core value proposition)',
          'What makes you different? (Your differentiator — not "quality" or "service")',
        ],
        tip: 'Write a one-sentence brand positioning statement: "We help [target customer] achieve [outcome] through [your unique approach]."',
      },
      {
        heading: 'Step 2: Build a Visual Identity System',
        body: 'Your visual identity is the design expression of your brand strategy. It has five components that must work together as a system.',
        list: [
          'Logo — your primary mark (wordmark, lettermark, or icon + wordmark)',
          'Colour palette — primary, secondary, and neutral colours (3–5 colours maximum)',
          'Typography — heading font, body font, and accent font (2–3 fonts maximum)',
          'Imagery style — photography direction, illustration style, or icon system',
          'Graphic elements — patterns, textures, or shapes used consistently',
        ],
        callout: 'Consistency matters more than perfection. A simple, consistent system always beats a complicated, inconsistently applied one.',
      },
      {
        heading: 'Step 3: Define Your Brand Voice',
        body: 'Brand voice is how your brand speaks — in website copy, social media captions, emails, and customer service. Choose 3–4 personality adjectives that describe how you write and speak.',
        list: [
          'Friendly but not unprofessional',
          'Confident but not arrogant',
          'Direct but not cold',
          'Expert but not jargon-heavy',
        ],
        tip: 'Create a "we are / we are not" list for your brand voice. For example: "We are warm, we are not sycophantic. We are direct, we are not blunt."',
      },
      {
        heading: 'Step 4: Create Brand Guidelines',
        body: 'Brand guidelines (also called a style guide) are the rulebook for your brand. They document every decision you have made so that anyone — a social media manager, a developer, a printer — can apply your brand correctly without asking you.',
        list: [
          'Logo usage rules (minimum sizes, clear space, approved and prohibited uses)',
          'Colour specifications (HEX, RGB, CMYK, and Pantone values)',
          'Typography specifications (fonts, sizes, weights, and line spacing)',
          'Imagery guidelines (what to use and what to avoid)',
          'Voice and tone examples (do / do not write examples)',
        ],
      },
      {
        heading: 'Step 5: Apply Your Identity Consistently Everywhere',
        body: 'A brand identity only works when applied consistently across every touchpoint — website, social media, business cards, packaging, email signatures, invoices, and physical signage. Inconsistency destroys trust. Consistency builds it.',
        callout: 'Run a "brand audit" every six months: collect everything that represents your brand visually and ask — does this all look like it belongs to the same company?',
      },
    ],
    cta: 'Building a brand identity from scratch takes expertise and a structured process. Our Brand Identity package delivers a complete system — logo, colour palette, typography, brand guidelines, and usage rules — starting at $599.',
    ctaService: '/services/brand-identity',
    relatedSlugs: ['signs-logo-hurting-business', 'brand-colours-psychology', 'how-to-brief-a-designer'],
  },

  {
    slug: 'shopify-vs-wordpress',
    title: 'Shopify vs WordPress: Which Platform Is Right for Your Business in 2025?',
    excerpt: 'Both platforms power millions of websites worldwide. But the right choice depends entirely on your business type, technical comfort level, and growth plans.',
    category: 'Web Design',
    readTime: '8 min read',
    date: 'December 2024',
    image: 'https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Globe,
    iconColor: 'bg-sky-100',
    iconTextColor: 'text-sky-600',
    tagStyle: 'bg-sky-100 text-sky-700',
    featured: false,
    intro: 'Shopify and WordPress are the two most popular website platforms in the world — and choosing the wrong one for your business can cost you years of pain, lost sales, and expensive migrations. Here is an honest, practical breakdown to help you decide.',
    sections: [
      {
        heading: 'What Shopify Is Best For',
        body: 'Shopify is a purpose-built e-commerce platform. If your primary goal is selling products online, Shopify is the cleaner, faster, lower-maintenance choice.',
        list: [
          'Online stores selling physical products (clothing, accessories, food, hardware)',
          'Businesses that want a reliable, fast checkout without technical setup',
          'Founders with no web development background',
          'Brands that want to scale quickly without worrying about server management',
          'Businesses using dropshipping or print-on-demand models',
        ],
        tip: 'Shopify\'s App Store has 8,000+ apps that cover almost any functionality you need — from subscriptions to loyalty programmes to multi-currency checkout.',
      },
      {
        heading: 'What WordPress Is Best For',
        body: 'WordPress (with WooCommerce for e-commerce) is the more flexible platform. It is better for businesses that need a content-heavy website, complex functionality, or complete control over their site.',
        list: [
          'Blogs, media sites, and content-driven businesses',
          'Service businesses that need a professional website with occasional e-commerce',
          'Businesses that require complex custom functionality',
          'Organisations with a developer on staff or on retainer',
          'Sites that need deep SEO control and custom integrations',
        ],
        callout: 'WordPress powers 43% of all websites on the internet. The flexibility is unmatched — but so is the maintenance overhead.',
      },
      {
        heading: 'Cost Comparison',
        body: 'Neither platform is free when you factor in everything. Here is what you can expect to pay.',
        list: [
          'Shopify: $39–$399/month (Basic to Advanced), plus 0.5–2% transaction fees if not using Shopify Payments',
          'WordPress: Free software + hosting ($5–$50/month) + premium plugins ($200–$1,000/year)',
          'Both: Domain name ($10–$20/year), professional design, and ongoing maintenance costs',
        ],
        tip: 'For most small businesses, the total cost of ownership is similar between platforms over 3 years. Shopify is predictable; WordPress has more variable costs.',
      },
      {
        heading: 'The SEO Question',
        body: 'Both platforms can rank well in Google — but WordPress gives you more granular control. With plugins like Yoast or RankMath, you can optimise every technical SEO element. Shopify handles SEO basics well but has some structural limitations (like forced URL structures) that can frustrate advanced SEO strategies.',
        tip: 'For local service businesses, both platforms work equally well for SEO. For e-commerce, Shopify\'s built-in structured data and fast load times often give it an edge.',
      },
      {
        heading: 'Our Recommendation',
        body: 'Choose Shopify if your primary purpose is selling products. Choose WordPress if you are a service business, need a content-heavy site, or require complex custom functionality. If you are still unsure, book a free call — we will give you a specific recommendation based on your business.',
        list: [
          'Selling products primarily? → Shopify',
          'Service business with a portfolio or blog? → WordPress',
          'Need heavy customisation or unique functionality? → WordPress',
          'Want the simplest setup with the least maintenance? → Shopify',
        ],
      },
    ],
    cta: 'We design and build on both platforms. Our Shopify Design package starts at $499 and our WordPress Design package starts at $399. Book a free call and we will help you choose the right platform for your specific situation.',
    ctaService: '/services/shopify-design',
    relatedSlugs: ['good-website-design-2025', 'how-to-brief-a-designer', 'small-business-digital-marketing'],
  },

  {
    slug: 'good-website-design-2025',
    title: 'What Makes a Good Website in 2025? 10 Elements That Convert Visitors',
    excerpt: 'Most websites look fine but do nothing. Learn the 10 elements that separate a brochure website from a conversion machine that generates leads and sales.',
    category: 'Web Design',
    readTime: '7 min read',
    date: 'December 2024',
    image: 'https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Monitor,
    iconColor: 'bg-green-100',
    iconTextColor: 'text-green-600',
    tagStyle: 'bg-green-100 text-green-700',
    featured: false,
    intro: 'Most small business websites are built to look good in a presentation. They are not built to convert visitors into customers. There is a profound difference between a website that looks professional and a website that works. Here are the 10 elements that every high-converting website in 2025 must have.',
    sections: [
      {
        heading: '1. A Clear Value Proposition Above the Fold',
        body: 'The most important real estate on your website is what a visitor sees before they scroll — the "above the fold" area. This section must answer one question in under 5 seconds: "What do you do and why should I care?" Most websites fail this test. They lead with generic headlines like "Welcome to Our Website" or the business name.',
        tip: 'A strong value proposition formula: "[We help] [target customer] [achieve outcome] [through differentiator]."',
      },
      {
        heading: '2. Mobile-First Design',
        body: 'In 2025, over 60% of web traffic comes from mobile devices. A website that is not mobile-optimised is losing more than half its potential customers. Mobile-first does not mean a shrunken desktop site — it means designing for the smallest screen first and enhancing for larger screens.',
        callout: 'Google uses mobile-first indexing, which means your mobile site is the version Google ranks. A poor mobile experience hurts both conversions and SEO.',
      },
      {
        heading: '3. Page Load Speed Under 3 Seconds',
        body: 'Research consistently shows that 53% of mobile users abandon a page that takes more than 3 seconds to load. Every extra second of load time reduces conversions by approximately 7%. Fast websites are not a luxury — they are a conversion requirement.',
        list: [
          'Compress and optimise all images before uploading',
          'Use a Content Delivery Network (CDN)',
          'Minimise JavaScript and CSS files',
          'Choose a fast hosting provider',
          'Use next-gen image formats (WebP)',
        ],
      },
      {
        heading: '4. A Single, Clear Call-to-Action',
        body: 'Websites with too many CTAs convert fewer visitors than websites with one focused CTA. Every page should have a primary action you want the visitor to take — book a call, buy now, get a quote, subscribe. Make this action impossible to miss.',
        tip: 'Use contrasting button colours for your CTA. It should stand out from every other element on the page.',
      },
      {
        heading: '5. Social Proof Near the Top',
        body: 'Testimonials, client logos, review counts, and case study results should appear above the fold or in the first scroll. New visitors are sceptical by default. Social proof converts sceptics faster than any sales copy.',
        list: [
          'Star ratings with review counts (even 5 reviews is better than none)',
          'Client logos or "As seen in" media mentions',
          'Before/after case study snapshots',
          'Specific, named testimonials (not "— Happy Customer")',
        ],
      },
      {
        heading: '6. Clear Navigation With Maximum 5-7 Items',
        body: 'Navigation with 10+ items overwhelms visitors and reduces click-through rates. Keep your main navigation to 5–7 items maximum. If you have more pages, use dropdowns or a secondary navigation for less important links.',
      },
      {
        heading: '7. Contact Information Visible Without Scrolling',
        body: 'Your phone number or contact CTA should be visible in the header on desktop and in a sticky footer bar on mobile. Visitors who cannot immediately see how to contact you leave. Every additional step between intent and action loses you customers.',
      },
      {
        heading: '8. An About Page That Builds Trust',
        body: 'People buy from people. An About page with real names, real photos, and a genuine story converts significantly better than a corporate "About Us" page. Do not hide behind your business — let visitors see who they are hiring.',
        tip: 'The most-read section of any About page is the founder story. Make it personal, specific, and honest.',
      },
      {
        heading: '9. On-Page SEO Basics',
        body: 'A beautiful website that no one can find is a beautiful waste of money. Every page should have a target keyword, a descriptive page title (under 60 characters), a meta description (under 160 characters), and header tags (H1, H2, H3) that include your target terms.',
      },
      {
        heading: '10. Analytics From Day One',
        body: 'If you are not measuring your website, you are flying blind. Install Google Analytics (free) on day one. Set up Google Search Console (also free) to track which keywords bring you visitors. Review these monthly — even 15 minutes per month will surface insights that improve your conversions over time.',
        callout: 'Every website we build at Daily Creative Designs comes with Google Analytics pre-installed and Search Console configured before launch.',
      },
    ],
    cta: 'Our AI Website Design package delivers all 10 of these elements — built in 3–5 days, starting at $499. Book a free call to discuss your specific requirements.',
    ctaService: '/services/ai-website-design',
    relatedSlugs: ['shopify-vs-wordpress', 'small-business-digital-marketing', 'how-to-brief-a-designer'],
  },

  {
    slug: 'how-to-brief-a-designer',
    title: 'How to Brief a Designer: The Complete Guide (With Free Template)',
    excerpt: 'The quality of your brief directly determines the quality of the design you receive. Here is exactly what to include in a design brief — and the most common mistakes to avoid.',
    category: 'Business Growth',
    readTime: '10 min read',
    date: 'November 2024',
    image: 'https://images.pexels.com/photos/4238483/pexels-photo-4238483.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: BookOpen,
    iconColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
    tagStyle: 'bg-teal-100 text-teal-700',
    featured: false,
    intro: 'The number one reason design projects go wrong is not a bad designer — it is a bad brief. A vague brief produces generic work. A clear, strategic brief produces focused, effective design. This guide will teach you exactly how to write a design brief that gets you great work on the first round.',
    sections: [
      {
        heading: 'What Is a Design Brief?',
        body: 'A design brief is a document that tells your designer everything they need to know about you, your business, your audience, and what you need. It is the single most important document in any design project. A good brief takes 15–30 minutes to write and can save you weeks of revision cycles.',
      },
      {
        heading: 'Section 1: Business Overview',
        body: 'Start with context. Your designer needs to understand your business before they can design for it.',
        list: [
          'Business name and what you do (2–3 sentences)',
          'How long you have been operating',
          'Location (local, national, global?)',
          'Stage of business (startup, growth, established)',
          'Revenue model (how you make money)',
        ],
      },
      {
        heading: 'Section 2: Target Audience',
        body: 'The most common brief mistake is describing your audience too broadly. "Everyone" is not a target audience. "Women aged 28–40 in urban India who earn above INR 80,000/month and value organic, premium skincare products" is a target audience.',
        list: [
          'Age range and gender (if relevant)',
          'Location and income bracket',
          'Values and lifestyle characteristics',
          'Pain points your product/service solves',
          'Where they spend time online (Instagram vs LinkedIn vs YouTube)',
        ],
        tip: 'If you have existing customers, describe your 3 best ones. Your designer will design for them.',
      },
      {
        heading: 'Section 3: Project Scope and Deliverables',
        body: 'Be specific about what you need. Vague requests lead to misaligned expectations.',
        list: [
          'Exactly what files or assets you need delivered',
          'What format (digital only? Print-ready? Both?)',
          'Sizes and dimensions required',
          'Deadline or target launch date',
          'Budget range',
        ],
      },
      {
        heading: 'Section 4: Brand Personality',
        body: 'Choose 3–5 adjectives that describe how your brand should feel. Then, just as importantly, choose 3–5 words that describe how your brand should NOT feel.',
        list: [
          'Examples of "should feel like": bold, approachable, premium, playful, trustworthy',
          'Examples of "should NOT feel like": corporate, cheap, dated, complicated, cold',
          'What emotions should customers feel when they see your brand?',
          'Think of 2–3 brands (in any industry) that have the right feeling — even if different category',
        ],
        callout: 'The "should NOT feel like" list is often more useful to a designer than the positive list.',
      },
      {
        heading: 'Section 5: Visual References',
        body: 'Provide examples. A Pinterest board, a Google Doc with screenshots, or a list of competitor websites tells a designer more than 500 words of description.',
        list: [
          '3–5 logos or websites you like (and briefly note WHY you like them)',
          '3–5 logos or websites you dislike (and note WHY)',
          'Competitor brands in your space',
          'Any existing brand assets you want to keep or work around',
        ],
        tip: 'Liking a brand does not mean your brand should look like it. Explain what specifically resonates — the colour? The simplicity? The confidence? The typography?',
      },
      {
        heading: 'Section 6: Practical Constraints',
        body: 'Tell your designer about constraints they might not know about.',
        list: [
          'Colours to avoid (religious, cultural, or competitor associations)',
          'Names, words, or symbols to avoid',
          'Must-include elements (tagline, icon, specific words)',
          'Budget constraints that affect scope',
          'Technical constraints (must work on specific platforms)',
        ],
      },
      {
        heading: 'The Most Common Brief Mistakes to Avoid',
        body: 'After reviewing thousands of briefs, here are the most common ways clients sabotage their own projects.',
        list: [
          '"I\'ll know it when I see it" — this is not a brief',
          'Listing 15 different brands as references with no common thread',
          'Not mentioning budget until after work has begun',
          'Describing what a competitor does, not what makes you different',
          'Changing the brief after work has started without expecting to restart',
        ],
      },
    ],
    cta: 'When you book a project with Daily Creative Designs, we guide you through a structured brief process — so you never have to wonder if we got enough information to do great work.',
    ctaService: '/contact',
    relatedSlugs: ['signs-logo-hurting-business', 'build-brand-identity-2025', 'good-website-design-2025'],
  },

  {
    slug: 'social-media-design-tips',
    title: 'Why Your Social Media Looks Amateur (And 5 Design Fixes That Work)',
    excerpt: 'Inconsistent social media design is costing you followers, engagement, and sales every single day. Here are 5 high-impact design fixes you can start implementing today.',
    category: 'Marketing',
    readTime: '5 min read',
    date: 'November 2024',
    image: 'https://images.pexels.com/photos/5744248/pexels-photo-5744248.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: TrendingUp,
    iconColor: 'bg-rose-100',
    iconTextColor: 'text-rose-600',
    tagStyle: 'bg-rose-100 text-rose-700',
    featured: false,
    intro: 'Scroll through your own Instagram or LinkedIn profile as if you are seeing it for the first time. Does it look cohesive, professional, and trustworthy? Or does it look like a random mix of different visual styles? Most small business profiles fall into the second category — and it is costing them followers, engagement, and sales every day. Here are 5 fixes that work.',
    sections: [
      {
        heading: 'Fix 1: Use Only 2–3 Brand Colours (And Use Them Consistently)',
        body: 'The most common reason social media feeds look unprofessional is colour inconsistency. Using 8 different colours across your posts makes your feed look chaotic. Choose 2–3 brand colours and use them in every single post. Your audience should be able to identify your content before they read your name.',
        tip: 'Your brand colours should come from your brand identity. If you do not have defined brand colours, that is the first problem to fix.',
        list: [
          'Primary brand colour (most dominant — used in backgrounds, headlines)',
          'Secondary brand colour (accents, icons, highlights)',
          'Neutral colour (white, off-white, or a dark for text and backgrounds)',
        ],
      },
      {
        heading: 'Fix 2: Pick Two Fonts and Stick to Them',
        body: 'Typography inconsistency is the second most common sign of amateur social media design. Using a different font in every post destroys visual cohesion. Choose one heading font (bold, expressive) and one body font (clean, readable). Use them in every post, every time.',
        callout: 'Free tools like Canva have hundreds of fonts — which makes it tempting to use them all. Resist. Constraint creates consistency; consistency creates brand recognition.',
      },
      {
        heading: 'Fix 3: Create Post Templates for Each Content Type',
        body: 'Professional brands do not design each post from scratch. They create templates. A template is a pre-designed layout that can be updated with new content in minutes while maintaining visual consistency.',
        list: [
          'Quote post template (for testimonials and thought leadership)',
          'Product/service showcase template',
          'Before/after or comparison template',
          'Tip or list post template (for educational content)',
          'Promotional/sale template',
          'Reel cover template',
        ],
        tip: 'Canva Pro allows you to create and reuse templates. If you are managing more than 4 posts per week, templates will save you hours every month.',
      },
      {
        heading: 'Fix 4: Keep Your Feed Grid Intentional',
        body: 'When someone visits your Instagram profile, the first thing they see is the grid — 9 posts arranged in a 3x3 layout. This is your storefront. A chaotic grid means a new visitor leaves. An intentional grid makes them follow. Audit your last 9 posts: do they look like they belong to the same brand?',
        list: [
          'Alternate light and dark background posts to create rhythm',
          'Use consistent image composition (always centre-aligned, or always left-heavy)',
          'Ensure at least 3 colours of the brand palette appear across every 3 posts',
          'Avoid text-heavy images next to other text-heavy images',
        ],
      },
      {
        heading: 'Fix 5: Stop Using Generic Stock Photos',
        body: 'Generic stock photos — the ones with models who look like they have never worked a day in their industry — destroy authenticity and trust. In 2025, audiences can spot inauthentic stock photography immediately. Either use real photos of your business, or use illustration-style graphics that are distinctly branded.',
        callout: 'If you must use stock photography, choose photos that look natural and un-posed. Websites like Unsplash and Pexels have free, high-quality options that are far less generic than traditional stock libraries.',
      },
    ],
    cta: 'Our Social Media Design package delivers 30 professionally designed templates — quotes, product showcases, reels covers, stories, and campaign posts — all matching your brand identity. Starting at $199.',
    ctaService: '/services/social-media-design',
    relatedSlugs: ['build-brand-identity-2025', 'brand-colours-psychology', 'small-business-digital-marketing'],
  },

  {
    slug: 'brand-colours-psychology',
    title: 'Brand Colour Psychology: How to Choose the Right Colours for Your Business',
    excerpt: 'Colours communicate before words do. The right palette builds trust instantly, signals your price point, and attracts exactly the right customers to your business.',
    category: 'Brand Identity',
    readTime: '7 min read',
    date: 'October 2024',
    image: 'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Palette,
    iconColor: 'bg-amber-100',
    iconTextColor: 'text-amber-600',
    tagStyle: 'bg-amber-100 text-amber-700',
    featured: false,
    intro: 'Before a customer reads a single word about your business, they have already formed an emotional impression based on your colours. Colour psychology is not mysticism — it is documented consumer behaviour. The right colours attract the right customers and signal the right price point. The wrong colours can undermine everything else you do right.',
    sections: [
      {
        heading: 'How Colour Psychology Works in Branding',
        body: 'Colour associations are formed through culture, experience, and biology. While individual responses vary, research consistently shows strong associations between specific colours and emotional states. In branding, we use these associations to shape first impressions before a word is read.',
        callout: 'Studies show that colour influences up to 85% of a purchase decision. It is the fastest communication tool your brand has.',
      },
      {
        heading: 'Green: Growth, Nature, Health, and Trust',
        body: 'Green communicates growth, health, and reliability. It works exceptionally well for financial services (growth, security), health and wellness brands, eco-friendly and organic businesses, and technology companies that want to project stability. It is not typically used for luxury brands or products aimed at children.',
        list: [
          'Industries: Finance, health, wellness, organic food, environmental, technology',
          'Emotions: Trust, growth, calm, balance, freshness',
          'Avoid if: You want to signal luxury exclusivity or high energy/excitement',
        ],
      },
      {
        heading: 'Blue: Trust, Reliability, and Professionalism',
        body: 'Blue is the most universally trusted colour. It dominates professional services, corporate brands, and technology because it communicates reliability and expertise. Dark blue signals authority; light blue signals approachability. The risk: overuse makes brands look generic.',
        list: [
          'Industries: Banking, legal, healthcare, technology, corporate services',
          'Emotions: Trust, dependability, calm, intelligence, loyalty',
          'Avoid if: You want to stand out in a corporate industry (everyone else is blue)',
        ],
      },
      {
        heading: 'Red and Orange: Energy, Urgency, and Appetite',
        body: 'Red creates urgency and increases heart rate — which is why it dominates sale banners, food brands, and CTAs. Orange is more approachable and friendlier than red, working well for affordable consumer brands and creative services. Both colours create high energy and demand attention.',
        list: [
          'Red industries: Food, entertainment, retail sale, emergency services',
          'Orange industries: Affordable retail, creative services, fitness, food delivery',
          'Avoid if: Your brand needs to communicate calm, precision, or luxury',
        ],
      },
      {
        heading: 'Black and Gold: Luxury, Premium, and Exclusivity',
        body: 'The classic luxury combination. Black signals sophistication, power, and elegance. Gold signals premium quality and exclusivity. Together, they are the most effective colour combination for positioning a brand as aspirational and premium. The risk: they can feel cold or intimidating if not balanced with warmer elements.',
        list: [
          'Industries: Luxury fashion, fine dining, premium jewellery, high-end services',
          'Emotions: Power, sophistication, exclusivity, elegance',
          'Avoid if: Your target customer is value-conscious or your brand personality is warm and friendly',
        ],
      },
      {
        heading: 'How to Choose Your Brand Colours',
        body: 'Follow this process to choose colours that are strategic, not just pretty.',
        list: [
          'Step 1: List 5 emotions you want customers to feel about your brand',
          'Step 2: List the colours associated with those emotions using the psychology above',
          'Step 3: Review your competitors — and consider being different (if they are all blue, consider green)',
          'Step 4: Test your shortlisted colours against your target audience and their expectations',
          'Step 5: Choose 1 primary colour, 1 secondary colour, and 1 neutral colour',
        ],
        tip: 'Test your colours by showing them to 5 people in your target audience and asking: "What word comes to mind?" If the words match your brand personality, you have the right colours.',
      },
    ],
    cta: 'Choosing brand colours strategically is a core part of our Brand Identity package. We deliver a complete colour system with rationale — so you always know exactly why your brand looks the way it does.',
    ctaService: '/services/brand-identity',
    relatedSlugs: ['build-brand-identity-2025', 'signs-logo-hurting-business', 'how-to-brief-a-designer'],
  },

  {
    slug: 'small-business-digital-marketing',
    title: 'Digital Marketing for Small Businesses in India: Where to Start in 2025',
    excerpt: 'With limited budget and time, small business owners need a focused digital marketing strategy. Here is what actually works for Indian small businesses in 2025 — and what to ignore.',
    category: 'Marketing',
    readTime: '8 min read',
    date: 'October 2024',
    image: 'https://images.pexels.com/photos/19915765/pexels-photo-19915765.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: BarChart3,
    iconColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
    tagStyle: 'bg-teal-100 text-teal-700',
    featured: false,
    intro: 'The internet is full of digital marketing advice written for companies with a ₹50 lakh monthly budget. This article is for everyone else. If you are a small business owner in India with limited time and a realistic budget, here is the digital marketing strategy that will give you the highest return on your investment in 2025.',
    sections: [
      {
        heading: 'Start With Your Google Business Profile (Free, High Impact)',
        body: 'If your business serves a local area and you are not on Google Business Profile, you are invisible to your most valuable customers — people searching right now for what you offer. Set it up, complete every field, upload real photos, and ask your existing customers to leave reviews. This alone can generate significant local leads at zero cost.',
        list: [
          'Complete every section (category, description, hours, website)',
          'Upload 10+ real photos of your business, team, and products',
          'Respond to every review (positive and negative)',
          'Post weekly updates using the Posts feature',
          'Add your services/products with prices where possible',
        ],
        callout: 'A fully optimised Google Business Profile can appear in the local "3-pack" — the three businesses that appear in Google Maps results. This position generates enormous free traffic.',
      },
      {
        heading: 'Instagram: The Highest ROI Platform for Most Indian Small Businesses',
        body: 'With 230+ million Indian users, Instagram offers unparalleled reach for visual businesses. The key is consistency and content quality, not frequency. Posting once per week with excellent, on-brand content consistently outperforms posting daily with poor-quality content.',
        list: [
          'Post 3–4 times per week at minimum (not 2–3 times per day)',
          'Use Reels — they get 3–5x more reach than regular posts currently',
          'Show the people behind your business (this drives trust, not just awareness)',
          'Use location tags and relevant hashtags in every post',
          'Respond to every comment within 24 hours (algorithm reward)',
        ],
        tip: 'Instagram rewards consistency over volume. A schedule you can maintain beats an aggressive schedule you will abandon.',
      },
      {
        heading: 'WhatsApp Business: India\'s Most Under-Rated Marketing Channel',
        body: 'India has 500+ million WhatsApp users. For local and service businesses, WhatsApp Business is a conversion tool unlike any other. Customers who message you on WhatsApp have high intent and respond to direct conversation far better than email.',
        list: [
          'Set up your business profile with hours, website, and catalogue',
          'Create a broadcast list of past customers for promotions (with consent)',
          'Use the auto-reply feature for after-hours enquiries',
          'Add your WhatsApp number to every touchpoint (website, social media bio, packaging)',
          'Share updates, seasonal offers, and behind-the-scenes content via WhatsApp Status',
        ],
      },
      {
        heading: 'Google Ads vs Meta Ads: Which Is Better for Your Business?',
        body: 'Both platforms work — for different goals. Understanding the difference will help you avoid wasting your budget.',
        list: [
          'Google Ads = capture demand (people searching RIGHT NOW for what you offer)',
          'Meta (Facebook/Instagram) Ads = create demand (introduce people to something they were not searching for)',
          'If you sell a product or service people search for → start with Google Ads',
          'If you sell something people do not know they need yet → start with Meta Ads',
          'Minimum viable budget: ₹500–₹1,000/day for Google, ₹300–₹500/day for Meta',
        ],
        callout: 'Do not run paid ads until your website converts. A well-targeted ad driving traffic to a poorly designed website is money wasted.',
      },
      {
        heading: 'Content Marketing: The Long Game That Pays Forever',
        body: 'A blog post or YouTube video that ranks in Google keeps bringing you customers for years — without any ongoing spend. Unlike paid ads that stop the moment you stop paying, content marketing compounds over time.',
        list: [
          'Write one article per month answering a question your customers actually ask',
          'Target "how to" and "best [service] in [city]" keywords',
          'Repurpose each article into 3–4 social media posts',
          'A 12-month blog publishing schedule costs less than two months of paid ads',
        ],
        tip: 'The best topics come from your customers. What do they ask you most often? Those questions are keywords.',
      },
      {
        heading: 'The One Mistake That Kills Every Small Business Marketing Strategy',
        body: 'Trying to do everything at once. The businesses that get consistent results pick one or two channels, master them, and then expand. A business that does Instagram brilliantly will always outperform a business that does Instagram, YouTube, LinkedIn, Pinterest, Twitter, and a blog — all badly.',
        callout: 'Recommendation: Start with Google Business Profile + Instagram. Master those for 6 months. Then add one more channel based on where your results are strongest.',
      },
    ],
    cta: 'Our Digital Marketing strategy package includes a customised 90-day marketing plan, competitor analysis, channel prioritisation, and content calendar — built specifically for your business and budget. Starting at $299.',
    ctaService: '/services/digital-marketing',
    relatedSlugs: ['good-website-design-2025', 'social-media-design-tips', 'build-brand-identity-2025'],
  },
];

export const BLOG_CATEGORIES: BlogCategory[] = ['All', 'Logo Design', 'Brand Identity', 'Web Design', 'Marketing', 'Business Growth'];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedSlugs || post.relatedSlugs.length === 0) return [];
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
