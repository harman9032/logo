import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://dailycreativedesigns.com';
const DEFAULT_IMAGE = 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1200';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, canonical, ogImage, ogType = 'website', noIndex = false }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Daily Creative Designs`;

    setMeta('description', description);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    const url = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${window.location.pathname}`;
    const image = ogImage || DEFAULT_IMAGE;

    setMeta('og:title', `${title} | Daily Creative Designs`, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:image', image, true);
    setMeta('og:type', ogType, true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | Daily Creative Designs`);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    setCanonical(url);
  }, [title, description, canonical, ogImage, ogType, noIndex]);

  return null;
}
