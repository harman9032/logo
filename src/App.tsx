import React, { useState } from 'react';
import AdminApp from './components/AdminApp';
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
  const { content, loading, saveContent } = usePageContent();

  // TidyCal booking link
  const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-free-consulation";

  // Check if current URL is admin route
  React.useEffect(() => {
    if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
      setShowAdmin(true);
    }
    
    // Check if admin is logged in
    const adminData = localStorage.getItem('admin_session');
    if (adminData) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // Show admin panel if requested
  if (showAdmin) {
    return <AdminApp />;
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
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-full px-6 py-2 flex items-center">
                <Award className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-semibold">{content.hero.badgeText}</span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {content.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                <strong className="text-orange-600">{content.hero.subtitle}</strong> and {content.hero.description}
              </p>

              {/* Value Proposition Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {/* Value Box 1 */}
                <EditableSection
                  id="heroValue1"
                  title="Value Box 1"
                  content={content.heroValue1}
                  onSave={saveContent}
                  isAdmin={isAdminLoggedIn}
                  small
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.heroValue1.value}</div>
                  <div className="text-gray-700 font-semibold">{content.heroValue1.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.heroValue1.subLabel}</div>
                  </div>
                </EditableSection>
                {/* Value Box 2 */}
                <EditableSection
                  id="heroValue2"
                  title="Value Box 2"
                  content={content.heroValue2}
                  onSave={saveContent}
                  isAdmin={isAdminLoggedIn}
                  small
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.heroValue2.value}</div>
                  <div className="text-gray-700 font-semibold">{content.heroValue2.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.heroValue2.subLabel}</div>
                  </div>
                </EditableSection>
                {/* Value Box 3 */}
                <EditableSection
                  id="heroValue3"
                  title="Value Box 3"
                  content={content.heroValue3}
                  onSave={saveContent}
                  isAdmin={isAdminLoggedIn}
                  small
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.heroValue3.value}</div>
                  <div className="text-gray-700 font-semibold">{content.heroValue3.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{content.heroValue3.subLabel}</div>
                  </div>
                </EditableSection>
                </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  {content.hero.ctaText}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <div className="text-center">
                  <div className="text-sm text-gray-600">🔥 Limited Time: FREE Session Worth ₹2,999</div>
                  <div className="text-xs text-red-600 font-semibold">Only 5 slots available this week!</div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-orange-600 mr-2" />
                  What You'll Learn in This FREE Call
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">The ₹50 Lead System</div>
                      <div className="text-gray-600 text-sm">Exact targeting strategies that reduce your cost per lead by 75%</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">High-Converting Ad Creatives</div>
                      <div className="text-gray-600 text-sm">Templates and formulas that get 15%+ conversion rate</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Lead Qualification Process</div>
                      <div className="text-gray-600 text-sm">How to filter out tire-kickers and focus on buyers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Scaling Strategies</div>
                      <div className="text-gray-600 text-sm">How to go from 10 leads to 100+ leads per month</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-600">💡 <strong>Bonus:</strong> Get instant access to our Lead Generation Checklist (Worth ₹999)</div>
                </div>
              </div>
            </div>
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
                    5+ Logo Concepts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited Revisions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All File Formats
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
                    Mobile Responsive
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SEO Optimized
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast Loading
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
                    Campaign Setup
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audience Targeting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ad Creatives
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
                    <span>Logo Design (3 concepts)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Basic Landing Page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Basic SEO Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>7-day Support</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gray-600 text-white py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              {/* Professional Package */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden transform scale-105">
                <div className="absolute top-4 right-4 bg-yellow-400 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
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
                    <span>Professional Logo Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Custom Landing Page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Meta Ads Campaign Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>30-day Support</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-white text-orange-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Now
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
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Advanced Analytics Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Email Marketing Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>90-day Support</span>
                  </li>
                </ul>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                >
                  Contact Us
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Talk? Let's Connect!
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Skip the forms and get instant access to our team. Choose your preferred way to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us Now</h3>
              <p className="text-gray-300 mb-6">Speak directly with our experts</p>
              <a 
                href="tel:+919876543210"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                +91 98765 43210
              </a>
              <p className="text-sm text-gray-400 mt-2">Available 9 AM - 9 PM</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp Chat</h3>
              <p className="text-gray-300 mb-6">Quick responses within minutes</p>
              <a 
                href="https://wa.me/919876543210?text=Hi, I'm interested in your digital marketing services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Start Chat
              </a>
              <p className="text-sm text-gray-400 mt-2">Instant responses</p>
            </div>

            {/* Email */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-300 mb-6">Detailed project discussions</p>
              <a 
                href="mailto:hello@dailycreativedesigns.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
              <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
            </div>
          </div>

          {/* Why Talk to Us */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Why Talk to Us Directly?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Instant Clarity</h4>
                <p className="text-gray-300 text-sm">Get immediate answers to your questions</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Personal Touch</h4>
                <p className="text-gray-300 text-sm">Speak with real experts, not chatbots</p>
              </div>
              <div className="text-center">
                <Rocket className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Faster Results</h4>
                <p className="text-gray-300 text-sm">Skip the back-and-forth emails</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-300 text-sm">Tailored advice for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
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
                "Daily Creative Designs transformed our business! We got 150 leads in the first month and our revenue increased by 300%."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Raj Patel</p>
                  <p className="text-sm text-gray-600">CEO, TechStart Solutions</p>
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
                "Amazing service! The landing page looks professional and we're getting quality leads consistently at ₹45 per lead."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Founder, GreenSpace Design</p>
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
                "Best investment we made! The Meta ads are performing exceptionally well. Getting leads at ₹52 average. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Amit Kumar</p>
                  <p className="text-sm text-gray-600">Director, FitLife Gym</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 1000+ businesses that have transformed their digital presence with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book FREE Strategy Call (Worth ₹2,999)
            </a>
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get Complete Package - ₹9,999
            </a>
          </div>
          <p className="text-orange-100 mt-6 text-sm">
            ⚡ Limited Time Offer - Book your call today!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Palette className="h-8 w-8 text-orange-400" />
                <span className="ml-2 text-xl font-bold">Daily Creative Designs</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses with professional digital solutions since 2017.
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
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Logo Design</li>
                <li>Landing Pages</li>
                <li>Meta Ads</li>
                <li>Lead Generation</li>
                <li>SEO Optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>hello@dailycreativedesigns.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Daily Creative Designs. All rights reserved. • Serving clients since 2017 • 
              <button 
                onClick={() => setShowAdmin(true)}
                className="ml-2 text-gray-500 hover:text-gray-300 underline"
              >
                Admin
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;