import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalEngagement from './components/GlobalEngagement';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const CookiesPolicy = lazy(() => import('./components/CookiesPolicy'));
const Terms = lazy(() => import('./components/Terms'));
const ThankYou = lazy(() => import('./components/ThankYou'));
const RefundPolicy = lazy(() => import('./components/RefundPolicy'));
const LogoDesignPage = lazy(() => import('./pages/services/LogoDesignPage'));
const AIWebsiteDesignPage = lazy(() => import('./pages/services/AIWebsiteDesignPage'));
const ShopifyDesignPage = lazy(() => import('./pages/services/ShopifyDesignPage'));
const WordPressDesignPage = lazy(() => import('./pages/services/WordPressDesignPage'));
const BrandIdentityPage = lazy(() => import('./pages/services/BrandIdentityPage'));
const SocialMediaDesignPage = lazy(() => import('./pages/services/SocialMediaDesignPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));
const N8nAutomationPage = lazy(() => import('./pages/services/N8nAutomationPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center" aria-label="Loading page">
      <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-green-700 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <GlobalEngagement />
      <Suspense fallback={<PageLoader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/logo-design" element={<LogoDesignPage />} />
            <Route path="/services/ai-website-design" element={<AIWebsiteDesignPage />} />
            <Route path="/services/shopify-design" element={<ShopifyDesignPage />} />
            <Route path="/services/wordpress-design" element={<WordPressDesignPage />} />
            <Route path="/services/brand-identity" element={<BrandIdentityPage />} />
            <Route path="/services/social-media-design" element={<SocialMediaDesignPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/n8n-automation" element={<N8nAutomationPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}
