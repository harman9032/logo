import React, { useState } from 'react';
import AdminApp from './components/AdminApp';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ThankYouPage from './pages/ThankYouPage';
import EditableSection from './components/EditableSection';
import { usePageContent } from './hooks/usePageContent';
import { supabase } from './lib/supabase';
import { 
  ArrowRight, 
  Palette, 
  Globe, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Clock,
  Award,
  Zap,
  Shield,
  Rocket,
  X,
  Calendar,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const { content, loading, saveContent } = usePageContent();

  // TidyCal booking link
  const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-free-consulation";

  // Check if current URL is admin route
  React.useEffect(() => {
    const hash = window.location.hash;
    const pathname = window.location.pathname;
    
    if (pathname === '/admin' || hash === '#admin') {
      setShowAdmin(true);
    } else if (hash === '#terms' || pathname === '/terms') {
      setCurrentPage('terms');
    } else if (hash === '#privacy' || pathname === '/privacy') {
      setCurrentPage('privacy');
    } else if (hash === '#thank-you' || pathname === '/thank-you') {
      setCurrentPage('thank-you');
    } else {
      setCurrentPage('home');
    }
    
    // Check if admin is logged in
    const adminData = localStorage.getItem('admin_session');
    if (adminData) {
      setIsAdminLoggedIn(true);
    }
    
    // Add keyboard shortcut for admin access (Ctrl+Shift+A)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsAdminLoggedIn(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Show admin panel if requested
  if (showAdmin) {
    return <AdminApp />;
  }

  // Show specific pages based on route
  if (currentPage === 'terms') {
    return <TermsPage />;
  }
  
  if (currentPage === 'privacy') {
    return <PrivacyPage />;
  }
  
  if (currentPage === 'thank-you') {
    return <ThankYouPage />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Palette className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Daily Creative Designs</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#pricing" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
                <a href="#why-choose" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Why Choose</a>
                <a href="#faq" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  Book Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20 pb-32 overflow-hidden">
        <EditableSection
          id="hero"
          title="Hero Section"
          content={content.hero}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EA580C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Experience Badge */}
            <EditableSection
              id="heroBadge"
              title="Hero Badge"
              content={{ badgeText: content.hero.badgeText }}
              onSave={(id, badgeContent) => saveContent('hero', { ...content.hero, badgeText: badgeContent.badgeText })}
              isAdmin={isAdminLoggedIn}
            >
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-full px-6 py-2 flex items-center">
                  <Award className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-orange-800 font-semibold">{content.hero.badgeText}</span>
                </div>
              </div>
            </EditableSection>

            <EditableSection
              id="heroTitle"
              title="Hero Title & Subtitle"
              content={{ 
                title: content.hero.title,
                subtitle: content.hero.subtitle,
                description: content.hero.description
              }}
              onSave={(id, titleContent) => saveContent('hero', { 
                ...content.hero, 
                title: titleContent.title,
                subtitle: titleContent.subtitle,
                description: titleContent.description
              })}
              isAdmin={isAdminLoggedIn}
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  {content.hero.title}
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  <strong className="text-orange-600">{content.hero.subtitle}</strong><br className="hidden md:block" />
                  <span className="block md:inline mt-2 md:mt-0">{content.hero.description}</span>
                </p>
              </div>
            </EditableSection>

            {/* Value Proposition Boxes */}
            <EditableSection
              id="heroValueProps"
              title="Hero Value Propositions"
              content={{
                valueProposition1: content.hero.valueProposition1,
                valueProposition1Value: content.hero.valueProposition1Value,
                valueProposition1Desc: content.hero.valueProposition1Desc,
                valueProposition2: content.hero.valueProposition2,
                valueProposition2Value: content.hero.valueProposition2Value,
                valueProposition2Desc: content.hero.valueProposition2Desc,
                valueProposition3: content.hero.valueProposition3,
                valueProposition3Value: content.hero.valueProposition3Value,
                valueProposition3Desc: content.hero.valueProposition3Desc
              }}
              onSave={(id, valueProps) => saveContent('hero', { ...content.hero, ...valueProps })}
              isAdmin={isAdminLoggedIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition1}</div>
                  <div className="text-gray-700 font-semibold">{content.hero.valueProposition1Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.hero.valueProposition1Desc}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition2}</div>
                  <div className="text-gray-700 font-semibold">{content.hero.valueProposition2Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.hero.valueProposition2Desc}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition3}</div>
                  <div className="text-gray-700 font-semibold">{content.hero.valueProposition3Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.hero.valueProposition3Desc}</div>
                </div>
              </div>
            </EditableSection>

            {/* Main CTA */}
            <EditableSection
              id="heroCTA"
              title="Hero CTA & Bonus"
              content={{
                ctaText: content.hero.ctaText,
                bonusTitle: content.hero.bonusTitle,
                bonusSubtitle: content.hero.bonusSubtitle,
                bonusUrgency: content.hero.bonusUrgency
              }}
              onSave={(id, ctaContent) => saveContent('hero', { ...content.hero, ...ctaContent })}
              isAdmin={isAdminLoggedIn}
            >
              <div className="flex flex-col gap-4 justify-center items-center mb-12">
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center w-full sm:w-auto justify-center"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  {content.hero.ctaText}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <div className="text-center bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-xl p-4 shadow-lg">
                  <div className="text-lg font-bold text-orange-800 mb-1">{content.hero.bonusTitle}</div>
                  <div className="text-sm text-orange-700 mb-2">{content.hero.bonusSubtitle}</div>
                  <div className="text-xs text-red-600 font-semibold animate-pulse">{content.hero.bonusUrgency}</div>
                </div>
              </div>
            </EditableSection>

            {/* What You'll Learn */}
            <EditableSection
              id="heroLearning"
              title="Hero Learning Points"
              content={{
                learningTitle: content.hero.learningTitle,
                learningPoint1Title: content.hero.learningPoint1Title,
                learningPoint1Desc: content.hero.learningPoint1Desc,
                learningPoint2Title: content.hero.learningPoint2Title,
                learningPoint2Desc: content.hero.learningPoint2Desc,
                learningPoint3Title: content.hero.learningPoint3Title,
                learningPoint3Desc: content.hero.learningPoint3Desc,
                learningPoint4Title: content.hero.learningPoint4Title,
                learningPoint4Desc: content.hero.learningPoint4Desc,
                instantBonusText: content.hero.instantBonusText,
                bonusItems: content.hero.bonusItems
              }}
              onSave={(id, learningContent) => saveContent('hero', { ...content.hero, ...learningContent })}
              isAdmin={isAdminLoggedIn}
            >
              <div className="bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-orange-600 mr-2" />
                  {content.hero.learningTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">{content.hero.learningPoint1Title}</div>
                      <div className="text-gray-600 text-sm">{content.hero.learningPoint1Desc}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">{content.hero.learningPoint2Title}</div>
                      <div className="text-gray-600 text-sm">{content.hero.learningPoint2Desc}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">{content.hero.learningPoint3Title}</div>
                      <div className="text-gray-600 text-sm">{content.hero.learningPoint3Desc}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">{content.hero.learningPoint4Title}</div>
                      <div className="text-gray-600 text-sm">{content.hero.learningPoint4Desc}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-600 bg-green-50 border border-green-200 rounded-lg p-3">
                    {content.hero.instantBonusText} <strong className="text-green-800">INSTANT BONUS:</strong> {content.hero.bonusItems}
                  </div>
                </div>
              </div>
            </EditableSection>
          </div>
        </EditableSection>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <EditableSection
          id="services"
          title="Services Section"
          content={content.services}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content.services.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.logoTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {content.services.logoDescription}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.logoFeature1}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.logoFeature2}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.logoFeature3}
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.landingTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {content.services.landingDescription}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.landingFeature1}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.landingFeature2}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.landingFeature3}
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.adsTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {content.services.adsDescription}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.adsFeature1}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.adsFeature2}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {content.services.adsFeature3}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <EditableSection
          id="pricing"
          title="Pricing Section"
          content={content.pricing}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.pricing.title}
              </h2>
              <p className="text-xl text-gray-600">
                {content.pricing.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Package */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.pricing.starterTitle}</h3>
                  <p className="text-gray-600 mb-6">{content.pricing.starterDescription}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-orange-600">{content.pricing.starterPrice}</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.starterFeature1}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.starterFeature2}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.starterFeature3}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.starterFeature4}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.starterFeature5}</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gray-600 text-white py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                >
                  {content.pricing.starterButtonText}
                </a>
              </div>

              {/* Professional Package */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden transform scale-105">
                <div className="absolute top-4 right-4 bg-yellow-400 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {content.pricing.professionalBadgeText}
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{content.pricing.professionalTitle}</h3>
                  <p className="text-orange-100 mb-6">{content.pricing.professionalDescription}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">{content.pricing.professionalPrice}</span>
                    <span className="text-orange-100 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{content.pricing.professionalFeature1}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{content.pricing.professionalFeature2}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{content.pricing.professionalFeature3}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{content.pricing.professionalFeature4}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>{content.pricing.professionalFeature5}</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-white text-orange-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {content.pricing.professionalButtonText}
                </a>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.pricing.enterpriseTitle}</h3>
                  <p className="text-gray-600 mb-6">{content.pricing.enterpriseDescription}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-orange-600">{content.pricing.enterprisePrice}</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.enterpriseFeature1}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.enterpriseFeature2}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.enterpriseFeature3}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.enterpriseFeature4}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{content.pricing.enterpriseFeature5}</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                >
                  {content.pricing.enterpriseButtonText}
                </a>
              </div>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 bg-white">
        <EditableSection
          id="whyChoose"
          title="Why Choose Section"
          content={content.whyChoose}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.whyChoose.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content.whyChoose.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{content.whyChoose.reason1Title}</h3>
                <p className="text-gray-600">{content.whyChoose.reason1Description}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{content.whyChoose.reason2Title}</h3>
                <p className="text-gray-600">{content.whyChoose.reason2Description}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{content.whyChoose.reason3Title}</h3>
                <p className="text-gray-600">{content.whyChoose.reason3Description}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{content.whyChoose.reason4Title}</h3>
                <p className="text-gray-600">{content.whyChoose.reason4Description}</p>
              </div>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <EditableSection
          id="faq"
          title="FAQ Section"
          content={content.faq}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.faq.title}
              </h2>
              <p className="text-xl text-gray-600">
                {content.faq.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((num) => {
                const questionKey = `question${num}` as keyof typeof content.faq;
                const answerKey = `answer${num}` as keyof typeof content.faq;
                const isExpanded = expandedFaq === num;
                
                return (
                  <div key={num} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : num)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{content.faq[questionKey]}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{content.faq[answerKey]}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* Ready to Talk Section */}
      <section className="py-20 bg-gray-900 text-white">
        <EditableSection
          id="readyToTalk"
          title="Ready to Talk Section"
          content={content.readyToTalk}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {content.readyToTalk.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {content.readyToTalk.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{content.readyToTalk.phoneTitle}</h3>
                <p className="text-gray-300 mb-6">{content.readyToTalk.phoneDescription}</p>
                <a 
                  href={`tel:${content.readyToTalk.phoneNumber}`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  {content.readyToTalk.phoneNumber}
                </a>
                <p className="text-sm text-gray-400 mt-2">{content.readyToTalk.phoneAvailability}</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{content.readyToTalk.whatsappTitle}</h3>
                <p className="text-gray-300 mb-6">{content.readyToTalk.whatsappDescription}</p>
                <a 
                  href="https://wa.me/919876543210?text=Hi, I'm interested in your digital marketing services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  {content.readyToTalk.whatsappButtonText}
                </a>
                <p className="text-sm text-gray-400 mt-2">{content.readyToTalk.whatsappResponse}</p>
              </div>

              {/* Email */}
              <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{content.readyToTalk.emailTitle}</h3>
                <p className="text-gray-300 mb-6">{content.readyToTalk.emailDescription}</p>
                <a 
                  href={`mailto:${content.readyToTalk.emailAddress}`}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Email
                </a>
                <p className="text-sm text-gray-400 mt-2">{content.readyToTalk.emailResponse}</p>
              </div>
            </div>

            {/* Why Talk to Us */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">{content.readyToTalk.whyTalkTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{content.readyToTalk.benefit1Title}</h4>
                  <p className="text-gray-300 text-sm">{content.readyToTalk.benefit1Description}</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{content.readyToTalk.benefit2Title}</h4>
                  <p className="text-gray-300 text-sm">{content.readyToTalk.benefit2Description}</p>
                </div>
                <div className="text-center">
                  <Rocket className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{content.readyToTalk.benefit3Title}</h4>
                  <p className="text-gray-300 text-sm">{content.readyToTalk.benefit3Description}</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{content.readyToTalk.benefit4Title}</h4>
                  <p className="text-gray-300 text-sm">{content.readyToTalk.benefit4Description}</p>
                </div>
              </div>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <EditableSection
          id="testimonials"
          title="Testimonials Section"
          content={content.testimonials}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.testimonials.title}
              </h2>
              <p className="text-xl text-gray-600">
                {content.testimonials.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{content.testimonials.testimonial1Text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {content.testimonials.testimonial1Name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{content.testimonials.testimonial1Name}</p>
                    <p className="text-sm text-gray-600">{content.testimonials.testimonial1Title}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{content.testimonials.testimonial2Text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {content.testimonials.testimonial2Name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{content.testimonials.testimonial2Name}</p>
                    <p className="text-sm text-gray-600">{content.testimonials.testimonial2Title}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{content.testimonials.testimonial3Text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {content.testimonials.testimonial3Name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{content.testimonials.testimonial3Name}</p>
                    <p className="text-sm text-gray-600">{content.testimonials.testimonial3Title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </EditableSection>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <EditableSection
          id="cta"
          title="CTA Section"
          content={content.cta}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content.cta.title}
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {content.cta.primaryButtonText}
              </a>
              <a 
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                {content.cta.secondaryButtonText}
              </a>
            </div>
            <p className="text-orange-100 mt-6 text-sm">
              {content.cta.urgencyText}
            </p>
          </div>
        </EditableSection>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <EditableSection
          id="footer"
          title="Footer Section"
          content={content.footer}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-orange-400" />
                  <span className="ml-2 text-xl font-bold">Daily Creative Designs</span>
                </div>
                <p className="text-gray-400 mb-4">
                  {content.footer.companyDescription}
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">i</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">t</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{content.footer.servicesTitle}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{content.footer.service1}</li>
                  <li>{content.footer.service2}</li>
                  <li>{content.footer.service3}</li>
                  <li>{content.footer.service4}</li>
                  <li>{content.footer.service5}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{content.footer.companyTitle}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Our Work</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
                  <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{content.footer.contactTitle}</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{content.footer.phoneNumber}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>{content.footer.emailAddress}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{content.footer.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>{content.footer.copyrightText} • {' '}
                <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors underline">Terms</button> • {' '}
                <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors underline">Privacy</button> • 
                <button 
                  onClick={() => setShowAdmin(true)}
                  className="ml-2 text-gray-500 hover:text-gray-300 underline"
                >
                  Admin
                </button>
              </p>
            </div>
          </div>
        </EditableSection>
      </footer>
    </div>
  );
}

export default App;