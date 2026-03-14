import { Routes, Route } from 'react-router-dom';
import GlobalEngagement from './components/GlobalEngagement';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import Terms from './components/Terms';
import ThankYou from './components/ThankYou';
import RefundPolicy from './components/RefundPolicy';
import ScrollToTop from './components/ScrollToTop';
import LogoDesignPage from './pages/services/LogoDesignPage';
import AIWebsiteDesignPage from './pages/services/AIWebsiteDesignPage';
import ShopifyDesignPage from './pages/services/ShopifyDesignPage';
import WordPressDesignPage from './pages/services/WordPressDesignPage';
import BrandIdentityPage from './pages/services/BrandIdentityPage';
import SocialMediaDesignPage from './pages/services/SocialMediaDesignPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import PricingPage from './pages/PricingPage';

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
      </Routes>
    </>
  );
}
