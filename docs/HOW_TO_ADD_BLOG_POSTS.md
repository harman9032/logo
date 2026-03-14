# How to Add New Blog Posts

All blog content lives in a single file:

```
src/data/blogPosts.ts
```

You do **not** need to edit `BlogPage.tsx` or `BlogPostPage.tsx` to add new posts. Everything is driven by this data file.

---

## Step-by-Step: Adding a New Post

### 1. Open the data file

Open `src/data/blogPosts.ts` in your code editor.

### 2. Add your post to the `blogPosts` array

Copy this template and paste it **at the top** of the `blogPosts` array (to make it appear first):

```ts
{
  slug: 'your-post-slug-here',
  title: 'Your Post Title Here',
  excerpt: 'A 1-2 sentence summary shown on the blog listing page.',
  category: 'Logo Design',           // see valid categories below
  readTime: '5 min read',
  date: 'March 2025',
  icon: Palette,                     // see valid icons below
  iconColor: 'bg-amber-100',         // background colour of the icon area
  iconTextColor: 'text-amber-600',   // icon colour
  tagStyle: 'bg-amber-100 text-amber-700', // category badge colour
  featured: false,                   // set true for ONE post only (the hero feature)
  intro: 'Your opening paragraph. This appears at the top of the article in larger text.',
  sections: [
    {
      heading: 'Section Heading',
      body: 'Main paragraph text for this section.',
      list: [                        // optional: add bullet points
        'First bullet point',
        'Second bullet point',
      ],
      tip: 'Optional quick tip shown in an amber callout box.',      // optional
      callout: 'Optional important note shown in a green callout box.', // optional
    },
    // add more sections...
  ],
  cta: 'The call-to-action text shown at the bottom of the article.',
  ctaService: '/services/logo-design', // optional: links to a service page
  relatedSlugs: [                    // optional: slugs of 1-3 related posts
    'build-brand-identity-2025',
    'brand-colours-psychology',
  ],
},
```

### 3. Save the file

The blog listing page and the article page will automatically show the new post. No other changes needed.

---

## Field Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | URL-safe identifier. Use lowercase letters, numbers, and hyphens only. Must be unique. Example: `'logo-trends-2025'` |
| `title` | string | Full article title as it appears on the listing and article page |
| `excerpt` | string | 1-2 sentences shown on the blog card. Keep under 150 characters |
| `category` | BlogCategory | The category this post belongs to (see valid values below) |
| `readTime` | string | Estimated read time. Example: `'6 min read'` |
| `date` | string | Publication date. Example: `'March 2025'` |
| `icon` | LucideIcon | Icon displayed on the blog card (see valid icons below) |
| `iconColor` | string | Tailwind background colour class for the icon area. Example: `'bg-amber-100'` |
| `iconTextColor` | string | Tailwind text colour class for the icon. Example: `'text-amber-600'` |
| `tagStyle` | string | Two Tailwind classes for the category badge. Example: `'bg-amber-100 text-amber-700'` |
| `featured` | boolean | Set `true` for the post shown as the featured hero card. Only ONE post should be featured at a time |
| `intro` | string | Opening paragraph shown in larger text at the top of the article |
| `sections` | array | Array of content sections (see Section Fields below) |
| `cta` | string | Call-to-action text shown in the green box at the bottom of the article |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `ctaService` | string | Internal route for the "View Service Details" button at the bottom. Example: `'/services/logo-design'` |
| `relatedSlugs` | string[] | Array of 1-3 post slugs to show in the "Related Articles" section |

### Section Fields

Each item in the `sections` array can have:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heading` | string | Yes | Section heading (H2) |
| `body` | string | Yes | Main paragraph text |
| `list` | string[] | No | Bullet point items shown with green checkmarks |
| `tip` | string | No | Shown in an amber/yellow callout box with a lightbulb icon. Use for quick actionable tips |
| `callout` | string | No | Shown in a green callout box with an info icon. Use for important notes or key insights |

---

## Valid Categories

```ts
'Logo Design'
'Brand Identity'
'Web Design'
'Marketing'
'Business Growth'
```

To add a **new category**, open `src/data/blogPosts.ts` and:
1. Add the new category name to the `BlogCategory` type at the top
2. Add it to the `BLOG_CATEGORIES` array
3. Use it in your new post

---

## Valid Icons

These icons are already imported in `blogPosts.ts`:

| Icon | Import name | Best for |
|------|-------------|----------|
| `Palette` | Logo design, colours, brand identity |
| `Globe` | Web design, websites, WordPress |
| `Layers` | Brand identity, design systems |
| `BookOpen` | Guides, tutorials, business growth |
| `TrendingUp` | Marketing, growth, social media |
| `BarChart3` | Analytics, digital marketing, data |
| `Monitor` | Websites, screens, digital |
| `PenTool` | Logo design, illustration |

To use a **different icon**, add it to the import line at the top of `blogPosts.ts`:

```ts
import { Palette, Globe, Layers, BookOpen, TrendingUp, BarChart3, Monitor, PenTool, YourNewIcon } from 'lucide-react';
```

Browse all available icons at [lucide.dev](https://lucide.dev).

---

## Colour Combinations by Category

Use these consistent colour combinations to match each category:

| Category | `iconColor` | `iconTextColor` | `tagStyle` |
|----------|-------------|-----------------|------------|
| Logo Design | `bg-amber-100` | `text-amber-600` | `bg-amber-100 text-amber-700` |
| Brand Identity | `bg-orange-100` | `text-orange-600` | `bg-orange-100 text-orange-700` |
| Web Design (green) | `bg-green-100` | `text-green-600` | `bg-green-100 text-green-700` |
| Web Design (sky) | `bg-sky-100` | `text-sky-600` | `bg-sky-100 text-sky-700` |
| Marketing | `bg-rose-100` | `text-rose-600` | `bg-rose-100 text-rose-700` |
| Business Growth | `bg-teal-100` | `text-teal-600` | `bg-teal-100 text-teal-700` |

---

## Changing the Featured Post

Only one post should have `featured: true` at any time. The featured post appears as the large hero card at the top of the blog listing page.

To change which post is featured:
1. Find the current post with `featured: true` and change it to `featured: false`
2. Find the post you want to feature and change it to `featured: true`

---

## Full Example Post

Here is a complete, ready-to-paste example of a new post:

```ts
{
  slug: 'how-to-choose-a-domain-name',
  title: 'How to Choose a Domain Name for Your Business (5 Rules That Matter)',
  excerpt: 'Your domain name is your digital address. Choosing the wrong one can hurt your brand and SEO for years. Here are the 5 rules to follow.',
  category: 'Business Growth',
  readTime: '4 min read',
  date: 'February 2025',
  icon: Globe,
  iconColor: 'bg-teal-100',
  iconTextColor: 'text-teal-600',
  tagStyle: 'bg-teal-100 text-teal-700',
  featured: false,
  intro: 'Your domain name is the first thing a potential customer types or reads about your business online. It appears in your email address, your social media bios, your print materials, and your ads. Getting it right from the start saves you from an expensive, disruptive rebrand later.',
  sections: [
    {
      heading: 'Rule 1: Keep It Short and Easy to Spell',
      body: 'The ideal domain name is under 15 characters and uses only common, easy-to-spell words. Every character of friction between someone hearing your domain name and successfully typing it is a potential lost customer.',
      list: [
        'Aim for 1-2 words maximum',
        'Avoid hyphens, numbers, and unusual spellings',
        'Say it out loud — can someone spell it after hearing it once?',
      ],
      tip: 'Test your domain name by saying it on a noisy phone call. If you have to spell it out letter by letter, it is too complex.',
    },
    {
      heading: 'Rule 2: Use .com Where Possible',
      body: 'Despite hundreds of new domain extensions (.io, .co, .app, .design), customers still trust and default to .com. If your .com is taken, try adding your location (.in for India) or a describing word before purchasing an unusual extension.',
      callout: 'The exception: .io has become accepted and trusted in the tech startup space. If you are a tech company, a .io domain is entirely credible.',
    },
    {
      heading: 'Rule 3: Make Sure It Is Available as a Social Handle',
      body: 'Before registering a domain, check that the same name (or close to it) is available on Instagram, LinkedIn, and Facebook. Brand consistency across your domain and social handles is important for discoverability and trust.',
    },
    {
      heading: 'Rule 4: Avoid Trademark Issues',
      body: 'Do a quick Google search for your proposed domain name before registering it. If there is a well-known brand with a similar name in any country, you risk trademark infringement issues later.',
    },
    {
      heading: 'Rule 5: Register It for Multiple Years',
      body: 'Register your domain for 3-5 years rather than 1 year. This is a minor cost saving, reduces the risk of accidentally losing your domain on renewal, and sends a positive signal to Google (long-term domain registration is associated with legitimate businesses).',
    },
  ],
  cta: 'If you are launching a new business or rebranding, our Complete Digital Package includes domain consultation, website design, and brand identity — everything you need to launch professionally.',
  ctaService: '/services',
  relatedSlugs: ['good-website-design-2025', 'build-brand-identity-2025'],
},
```

---

## File Structure Summary

```
src/
  data/
    blogPosts.ts          ← ALL blog content lives here. Edit this file to add posts.
  pages/
    BlogPage.tsx          ← Blog listing page. Do not edit to add posts.
    BlogPostPage.tsx      ← Individual article page. Do not edit to add posts.
```

---

## Troubleshooting

**My post does not appear on the blog page**
- Check that the slug is unique (no other post has the same slug)
- Check that the `category` value exactly matches one of the valid categories listed above (case-sensitive)
- Make sure the post object is inside the `blogPosts` array and ends with a comma

**The article page shows "Article Not Found"**
- The URL slug in the browser must exactly match the `slug` field in your post object
- Check for any typos between the slug in `blogPosts.ts` and the URL

**TypeScript shows an error on my icon**
- Make sure the icon is imported at the top of `blogPosts.ts`
- The icon must be a Lucide React icon component (not a string)
