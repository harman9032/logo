import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
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

export default function App() {
  return (
    <>
      <ScrollToTop />
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
