import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award, 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  BarChart3, 
  Lightbulb,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Send
} from 'lucide-react';
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    netlify?: boolean;
  }
};
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import ThankYou from './components/ThankYou';
import Terms from './components/Terms';
/**
 * ExternalLink icon is imported from lucide-react but not used.
 * To fix the warning, either use it in your code or remove it from the import list.
 * 
 * Alternative fix: Remove ExternalLink from the import statement.
 */
// Static content - no database needed
const content = {
  hero: {
  "title": "We Build Landing Pages & Ads That Convert Traffic Into Paying Clients",
  "subtitle": "Book a FREE 30-Minute Strategy Session (Worth ₹2,999)",
  "description": "Discover the exact system we use to deliver high-quality leads to businesses like yours—consistently, predictably, and affordably.",
  "ctaText": "Book My FREE Call Now",
  "badgeText": "8 Years of Excellence • 1000+ Happy Clients • Since 2017",
  "valueProposition1": "100+",
  "valueProposition1Value": "Quality Leads Monthly",
  "valueProposition1Desc": "Guaranteed Results with Every Project",
  "valueProposition2": "5X",
  "valueProposition2Value": "Revenue Growth",
  "valueProposition2Desc": "Average Growth Seen by Our Clients",
  "valueProposition3": "7 Days",
  "valueProposition3Value": "Complete Setup",
  "valueProposition3Desc": "Go Live & Get Clients in Just 1 Week",
  "learningTitle": "What You'll Learn in This FREE Call",
  "learningPoint1Title": "The 100+ Lead Generation System",
  "learningPoint1Desc": "Our proven method to generate predictable, high-quality leads month after month",
  "learningPoint2Title": "Revenue Multiplier Strategy",
  "learningPoint2Desc": "How to scale your business with client-converting digital assets",
  "learningPoint3Title": "Quality Lead Attraction",
  "learningPoint3Desc": "Attract the right audience that is ready to buy",
  "learningPoint4Title": "7-Day Launch Blueprint",
  "learningPoint4Desc": "How we set up your system so you're ready to get leads within a week",
  "bonusTitle": "🎁 FREE BONUS WORTH ₹4,999!",
  "bonusSubtitle": "✅ Lead Generation Checklist + ✅ Ready-Made Ad Templates + ✅ High-Converting Landing Page Guide",
  "bonusItems": "Get our exclusive Lead Gen Toolkit – Templates, Checklists, and a Complete Step-by-Step Guide (Worth ₹4,999)",
  "bonusUrgency": "⚡ Limited Offer: Only 10 Free Sessions Available This Week!",
  "instantBonusText": "💡 INSTANT BONUS:",
  "heroBackgroundText": "8 Years of Excellence • Since 2017 • 1000+ Happy Clients",
  "heroCalloutText": "Transform Traffic into Clients with a Done-For-You Growth System"
},
  services: {
    title: "Complete Digital Package",
    subtitle: "Everything you need to establish a strong online presence and attract customers",
    sectionDescription: "Our comprehensive digital solutions are designed to transform your business and drive real results.",
    logoTitle: "Logo Design",
    logoDescription: "Professional, memorable logo that represents your brand identity perfectly. Multiple concepts, unlimited revisions, and all file formats included.",
    logoFeature1: "5+ Logo Concepts",
    logoFeature2: "Unlimited Revisions", 
    logoFeature3: "All File Formats",
    logoPrice: "Starting at ₹2,999",
    logoDelivery: "2-3 Days",
    landingTitle: "Landing Page",
    landingDescription: "High-converting, mobile-responsive landing page designed to turn visitors into customers. Optimized for speed and conversions.",
    landingFeature1: "Mobile Responsive",
    landingFeature2: "SEO Optimized",
    landingFeature3: "Fast Loading",
    landingPrice: "Starting at ₹4,999",
    landingDelivery: "5-7 Days",
    adsTitle: "Meta Ads Setup",
    adsDescription: "Complete Facebook and Instagram ad campaigns setup with targeting, creative design, and optimization for maximum ROI.",
    adsFeature1: "Campaign Setup",
    adsFeature2: "Audience Targeting",
    adsFeature3: "Ad Creatives",
    adsPrice: "Starting at ₹3,999",
    adsDelivery: "3-5 Days",
    packageTitle: "Complete Package",
    packageSubtitle: "Get everything for one low price",
    packageDescription: "Save money and get better results with our complete digital marketing package.",
    packagePrice: "₹9,999",
    packageDelivery: "7-10 Days",
    packageButtonText: "Get Complete Package",
    guaranteeText: "100% Money-Back Guarantee",
    supportText: "30 Days Free Support"
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the package that's right for your business",
    starterTitle: "Starter Package",
    starterPrice: "₹4,999",
    starterDescription: "Perfect for small businesses getting started",
    starterFeature1: "Logo Design (3 concepts)",
    starterFeature2: "Basic Landing Page",
    starterFeature3: "Mobile Responsive",
    starterFeature4: "Basic SEO Setup",
    starterFeature5: "7-day Support",
    starterButtonText: "Get Started",
    professionalTitle: "Professional Package",
    professionalPrice: "₹9,999",
    professionalDescription: "Most popular choice for growing businesses",
    professionalFeature1: "Professional Logo Design",
    professionalFeature2: "Custom Landing Page",
    professionalFeature3: "Meta Ads Campaign Setup",
    professionalFeature4: "SEO Optimization",
    professionalFeature5: "30-day Support",
    professionalButtonText: "Get Started Now",
    professionalBadgeText: "Most Popular",
    enterpriseTitle: "Enterprise Package",
    enterprisePrice: "₹19,999",
    enterpriseDescription: "Complete solution for established businesses",
    enterpriseFeature1: "Everything in Professional",
    enterpriseFeature2: "Advanced Analytics Setup",
    enterpriseFeature3: "CRM Integration",
    enterpriseFeature4: "Email Marketing Setup",
    enterpriseFeature5: "90-day Support",
    enterpriseButtonText: "Contact Us"
  },
  whyChoose: {
    title: "Why Choose Daily Creative Designs?",
    subtitle: "We deliver results that matter to your business growth",
    reason1Title: "Fast Delivery",
    reason1Description: "Complete package delivered within 7 days",
    reason2Title: "Expert Team",
    reason2Description: "8 years of experience since 2017",
    reason3Title: "Proven Results",
    reason3Description: "Helped 1000+ businesses grow their revenue",
    reason4Title: "Money-Back Guarantee",
    reason4Description: "100% satisfaction or your money back"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our services",
    question1: "How long does it take to complete the package?",
    answer1: "Our complete package is delivered within 7 business days. Logo concepts are provided within 2-3 days, landing page within 5 days, and Meta ads setup within 7 days.",
    question2: "Do you provide unlimited revisions?",
    answer2: "Yes, we provide unlimited revisions for the logo design until you're 100% satisfied. For landing pages, we include up to 3 rounds of revisions.",
    question3: "What's included in the Meta ads setup?",
    answer3: "Complete Facebook and Instagram campaign setup including audience research, ad creative design, campaign structure, targeting setup, and initial optimization.",
    question4: "Do you provide ongoing support?",
    answer4: "Yes, we provide 30 days of free support after project completion. For ongoing management, we offer monthly packages starting at ₹9,999.",
    question5: "What if I'm not satisfied with the work?",
    answer5: "We offer a 100% money-back guarantee. If you're not completely satisfied with our work, we'll refund your payment within 30 days.",
    question6: "Can you help with other digital marketing services?",
    answer6: "Absolutely! We offer additional services like SEO, content marketing, social media management, and Google Ads. Contact us to discuss your specific needs."
  },
  readyToTalk: {
    title: "Ready to Talk? Let's Connect!",
    subtitle: "Skip the forms and get instant access to our team. Choose your preferred way to connect.",
    phoneTitle: "Call Us Now",
    phoneDescription: "Speak directly with our experts",
    phoneNumber: "+91 98765 43210",
    phoneAvailability: "Available 9 AM - 9 PM",
    whatsappTitle: "WhatsApp Chat",
    whatsappDescription: "Quick responses within minutes",
    whatsappButtonText: "Start Chat",
    whatsappResponse: "Instant responses",
    emailTitle: "Email Us",
    emailDescription: "Detailed project discussions",
    emailAddress: "hello@dailycreativedesigns.com",
    emailResponse: "Response within 2 hours",
    whyTalkTitle: "Why Talk to Us Directly?",
    benefit1Title: "Instant Clarity",
    benefit1Description: "Get immediate answers to your questions",
    benefit2Title: "Personal Touch",
    benefit2Description: "Speak with real experts, not chatbots",
    benefit3Title: "Faster Results",
    benefit3Description: "Skip the back-and-forth emails",
    benefit4Title: "Custom Solutions",
    benefit4Description: "Tailored advice for your business"
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Don't just take our word for it",
    testimonial1Text: "Daily Creative Designs transformed our business! We got 150 leads in the first month and our revenue increased by 300%.",
    testimonial1Name: "Raj Patel",
    testimonial1Title: "CEO, TechStart Solutions",
    testimonial2Text: "Amazing service! The landing page looks professional and we're getting quality leads consistently.",
    testimonial2Name: "Priya Sharma",
    testimonial2Title: "Founder, GreenSpace Design",
    testimonial3Text: "Best investment we made! The Meta ads are performing exceptionally well. Getting 100+ leads monthly. Highly recommended.",
    testimonial3Name: "Amit Kumar",
    testimonial3Title: "Director, FitLife Gym"
  },
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Join 1000+ businesses that have transformed their digital presence with us",
    primaryButtonText: "Book FREE Strategy Call (Worth ₹2,999)",
    secondaryButtonText: "Get Complete Package - ₹9,999",
    urgencyText: "⚡ Limited Time Offer - Book your call today!"
  },
  footer: {
    companyDescription: "Transforming businesses with professional digital solutions since 2017.",
    servicesTitle: "Services",
    service1: "Logo Design",
    service2: "Landing Pages",
    service3: "Meta Ads",
    service4: "Lead Generation",
    service5: "SEO Optimization",
    companyTitle: "Company",
    contactTitle: "Contact Info",
    phoneNumber: "+91 78373 19660",
    emailAddress: "hello@dailycreativedesigns.com",
    location: "Mumbai, India",
    copyrightText: "© 2025 Daily Creative Designs. All rights reserved. • Serving clients since 2017"
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-free-consulation";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// HubSpot Form Submission Handler with reCAPTCHA v2 verification
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    // Get reCAPTCHA response token
    // @ts-ignore
    const recaptchaToken = window.grecaptcha?.getResponse();
    if (!recaptchaToken) {
      setSubmitMessage('Please complete the reCAPTCHA.');
      setIsSubmitting(false);
      return;
    }

    // Verify reCAPTCHA token with Google
    const recaptchaSecret = "6Lc1oZ0UAAAAADtekDZqR1hK5C6aIuMjf69qfn1q";
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
    });
    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      setSubmitMessage('reCAPTCHA verification failed. Please try again.');
      setIsSubmitting(false);
      // @ts-ignore
      window.grecaptcha?.reset();
      return;
    }

    // Replace with your HubSpot portal ID and form GUID
    const HUBSPOT_PORTAL_ID = "242481138";
    const HUBSPOT_FORM_GUID = "e103e55b-f0e9-42de-82a8-285e7a94c4f3";
    const HUBSPOT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

    // Prepare HubSpot fields (field names must match your HubSpot form)
    const fields = [
      { name: "firstname", value: formData.name },
      { name: "email", value: formData.email },
      { name: "hs_whatsapp_phone_number", value: formData.phone },
      { name: "company", value: formData.business },
      { name: "package", value: formData.package },
      { name: "message", value: formData.message }
    ];

    // Optionally, you can add context (e.g., pageUri, pageName)
    const context = {
      pageUri: window.location.href,
      pageName: document.title
    };

    const payload = {
      fields,
      context
    };

    const response = await fetch(HUBSPOT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setSubmitMessage("Thank you! We'll contact you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        package: '',
        message: ''
      });
      // @ts-ignore
      window.grecaptcha?.reset();
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } else {
      const errorData = await response.json();
      setSubmitMessage(
        errorData?.message ||
          'There was an error. Please try again or contact us directly.'
      );
      // @ts-ignore
      window.grecaptcha?.reset();
    }
  } catch (error: any) {
    setSubmitMessage(
      error?.message ||
        'There was an error. Please try again or contact us directly.'
    );
    // @ts-ignore
    window.grecaptcha?.reset();
  } finally {
    setIsSubmitting(false);
  }
};

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Daily Creative Designs
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </button>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  Book Free Call
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Contact
              </button>
              <a 
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-2 text-base font-medium text-center rounded-lg mx-3 mt-4"
              >
                Book Free Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-orange-100">
              <Award className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {content.hero.badgeText}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-6 leading-tight">
                {content.hero.title}
                
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {content.hero.subtitle}
              </p>
              
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                {content.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {content.hero.ctaText}
                </a>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition1}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{content.hero.valueProposition1Value}</div>
                  <div className="text-xs text-gray-600">{content.hero.valueProposition1Desc}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition2}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{content.hero.valueProposition2Value}</div>
                  <div className="text-xs text-gray-600">{content.hero.valueProposition2Desc}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.hero.valueProposition3}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{content.hero.valueProposition3Value}</div>
                  <div className="text-xs text-gray-600">{content.hero.valueProposition3Desc}</div>
                </div>
              </div>
            </div>

            {/* Right Column - What You'll Learn */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100">         
              
               
              <div className="text-center mb-6">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {content.hero.learningTitle}
              </h2>
                <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                  </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                  </label>
                  <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                  </label>
                  <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Package *
                  </label>
                  <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                  <option value="">Select a package</option>
                  <option value="complete">Complete Package (₹9,999 one-time)</option>
                  <option value="monthly">Monthly Lead Generation (₹9,999/month)</option>
                  <option value="both">Both Packages</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your business goals..."
                  />
                </div>

                {/* reCAPTCHA v2 */}
                <div className="flex justify-center">
                  <div
                  className="g-recaptcha"
                  data-sitekey="6Lc1oZ0UAAAAAApCZDmd_UtlZVj4W7ZGgTZOPNBF"
                  ></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                  ) : (
                  <>
                    Get My Digital Package
                    <Send className="w-5 h-5 ml-2" />
                  </>
                  )}
                </button>
                {submitMessage && !isSubmitting && (
                  <div className={`bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-center`}>
                  {submitMessage}
                  </div>
                )}
                </form>
                {/* reCAPTCHA v2 script */}
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>

              {/* Bonus Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    {content.hero.bonusTitle}
                  </h3>
                  <p className="text-sm text-green-700 mb-3">
                    {content.hero.bonusSubtitle}
                  </p>
                  <p className="text-xs text-green-600">
                    {content.hero.bonusItems}
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-red-600 animate-pulse">
                  {content.hero.bonusUrgency}
                </p>
              </div>
           
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Logo Design */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.logoTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.logoDescription}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature3}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-orange-600">{content.services.logoPrice}</span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.logoDelivery}
                </span>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Landing Page */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.landingTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.landingDescription}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature3}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-orange-600">{content.services.landingPrice}</span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.landingDelivery}
                </span>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Meta Ads */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.adsTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.adsDescription}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature3}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-orange-600">{content.services.adsPrice}</span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.adsDelivery}
                </span>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Complete Package */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
                <Zap className="h-5 w-5 mr-2" />
                <span className="font-semibold">Best Value</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">{content.services.packageTitle}</h2>
              <p className="text-xl mb-2">{content.services.packageSubtitle}</p>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">{content.services.packageDescription}</p>
              
              <div className="flex items-center justify-center mb-8">
                <span className="text-5xl font-bold">{content.services.packagePrice}</span>
                <span className="text-xl ml-2 text-orange-100">one-time</span>
              </div>
              
              <div className="flex items-center justify-center mb-8">
                <Clock className="h-5 w-5 mr-2" />
                <span>{content.services.packageDelivery}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  {content.services.packageButtonText}
                </button>
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Book Free Call
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  <span>{content.services.guaranteeText}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{content.services.supportText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-200 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.pricing.starterTitle}</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">{content.pricing.starterPrice}</div>
              <p className="text-gray-600 mb-6">{content.pricing.starterDescription}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature3}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature4}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature5}</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                {content.pricing.starterButtonText}
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {content.pricing.professionalBadgeText}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.pricing.professionalTitle}</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">{content.pricing.professionalPrice}</div>
              <p className="text-gray-600 mb-6">{content.pricing.professionalDescription}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.professionalFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.professionalFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.professionalFeature3}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.professionalFeature4}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.professionalFeature5}</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                {content.pricing.professionalButtonText}
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-200 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.pricing.enterpriseTitle}</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">{content.pricing.enterprisePrice}</div>
              <p className="text-gray-600 mb-6">{content.pricing.enterpriseDescription}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature3}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature4}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature5}</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                {content.pricing.enterpriseButtonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason1Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason1Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason2Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason2Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason3Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason3Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason4Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason4Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{content.testimonials.testimonial1Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {content.testimonials.testimonial1Name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{content.testimonials.testimonial1Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial1Title}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{content.testimonials.testimonial2Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {content.testimonials.testimonial2Name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{content.testimonials.testimonial2Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial2Title}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{content.testimonials.testimonial3Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {content.testimonials.testimonial3Name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{content.testimonials.testimonial3Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial3Title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { question: content.faq.question1, answer: content.faq.answer1 },
              { question: content.faq.question2, answer: content.faq.answer2 },
              { question: content.faq.question3, answer: content.faq.answer3 },
              { question: content.faq.question4, answer: content.faq.answer4 },
              { question: content.faq.question5, answer: content.faq.answer5 },
              { question: content.faq.question6, answer: content.faq.answer6 }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.readyToTalk.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.readyToTalk.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.readyToTalk.phoneTitle}</h3>
              <p className="text-gray-600 mb-4">{content.readyToTalk.phoneDescription}</p>
              <a 
                href={`tel:${content.readyToTalk.phoneNumber}`}
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2"
              >
                {content.readyToTalk.phoneNumber}
              </a>
              <p className="text-sm text-green-600">{content.readyToTalk.phoneAvailability}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.readyToTalk.whatsappTitle}</h3>
              <p className="text-gray-600 mb-6">{content.readyToTalk.whatsappDescription}</p>
              <a 
                href="https://wa.me/917837319660?text=Hi, I'm interested in your digital marketing services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {content.readyToTalk.whatsappButtonText}
              </a>
              <p className="text-sm text-green-600 mt-4">{content.readyToTalk.whatsappResponse}</p>
            </div>

            {/* Email */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.readyToTalk.emailTitle}</h3>
              <p className="text-gray-600 mb-4">{content.readyToTalk.emailDescription}</p>
              <a 
                href={`mailto:${content.readyToTalk.emailAddress}`}
                className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
              >
                {content.readyToTalk.emailAddress}
              </a>
              <p className="text-sm text-blue-600">{content.readyToTalk.emailResponse}</p>
            </div>
          </div>

          {/* Why Talk to Us */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {content.readyToTalk.whyTalkTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.readyToTalk.benefit1Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit1Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.readyToTalk.benefit2Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit2Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.readyToTalk.benefit3Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit3Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.readyToTalk.benefit4Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit4Description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6" netlify>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Enter your email address"
                />
              </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
                </label>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business Name
                </label>
                <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Enter your business name"
                />
              </div>
              </div>

              <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Interested Package *
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="">Select a package</option>
                <option value="Free Bonus">Free Bonus</option>
                <option value="Complete Package (₹9,999 one-time)">Complete Package (₹9,999 one-time)</option>
                <option value="Monthly Lead Generation (₹9,999/month)">Monthly Lead Generation (₹9,999/month)</option>
                <option value="Both Packages">Both Packages</option>
                <option value="Custom Solution">Custom Solution</option>
              </select>
              </div>

              <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                placeholder="Describe your business goals and what you're looking to achieve..."
              />
              </div>

              {/* reCAPTCHA v2 */}
              <div className="flex justify-center">
              <div
                className="g-recaptcha"
                data-sitekey="6Lc1oZ0UAAAAAApCZDmd_UtlZVj4W7ZGgTZOPNBF"
              ></div>
              </div>

              {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {submitMessage}
              </div>
              )}

              <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
              </button>

              <div className="text-center">
              <p className="text-sm text-gray-600">
                Or call us directly at{' '}
                <a href="tel:+917837319660" className="text-orange-600 font-semibold hover:text-orange-700">
                +91 78373 19660
                </a>
              </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            {content.cta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {content.cta.primaryButtonText}
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              {content.cta.secondaryButtonText}
            </button>
          </div>
          
          <p className="text-orange-200 font-semibold animate-pulse">
            {content.cta.urgencyText}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Daily Creative Designs
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {content.footer.companyDescription}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.182 17.635l1.044-1.944c-.8-.875-1.297-2.026-1.297-3.323c0-2.734 2.215-4.949 4.949-4.949s4.949 2.215 4.949 4.949S11.652 16.988 8.449 16.988z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{content.footer.servicesTitle}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{content.footer.service1}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{content.footer.service2}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{content.footer.service3}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{content.footer.service4}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{content.footer.service5}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{content.footer.contactTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-400 mr-3" />
                  <a href={`tel:${content.footer.phoneNumber}`} className="text-gray-300 hover:text-white transition-colors">
                    {content.footer.phoneNumber}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-400 mr-3" />
                  <a href={`mailto:${content.footer.emailAddress}`} className="text-gray-300 hover:text-white transition-colors">
                    {content.footer.emailAddress}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">{content.footer.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                {content.footer.copyrightText}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
