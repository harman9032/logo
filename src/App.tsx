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
  ExternalLink
} from 'lucide-react';

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
    phoneNumber: "+91 98765 43210",
    emailAddress: "hello@dailycreativedesigns.com",
    location: "Mumbai, India",
    copyrightText: "© 2025 Daily Creative Designs. All rights reserved. • Serving clients since 2017"
  }
};

export default function App() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simple form submission without database
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you! We\'ll contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        package: '',
        message: ''
      });
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
      
    } catch (error) {
      setSubmitMessage('There was an error. Please try again or contact us directly.');
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
                  The Logo Makers
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
              <div className="grid grid-cols-3 gap-6 text-center">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {content.hero.learningTitle}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{content.hero.learningPoint1Title}</h3>
                    <p className="text-gray-600 text-sm">{content.hero.learningPoint1Desc}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{content.hero.learningPoint2Title}</h3>
                    <p className="text-gray-600 text-sm">{content.hero.learningPoint2Desc}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{content.hero.learningPoint3Title}</h3>
                    <p className="text-gray-600 text-sm">{content.hero.learningPoint3Desc}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{content.hero.learningPoint4Title}</h3>
                    <p className="text-gray-600 text-sm">{content.hero.learningPoint4Desc}</p>
                  </div>
                </div>
              </div>

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
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.logoTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.logoDescription}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature3}</span>
                </li>
              </ul>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">{content.services.logoPrice}</div>
                  <div className="text-sm text-gray-500">{content.services.logoDelivery}</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Landing Page */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.landingTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.landingDescription}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature3}</span>
                </li>
              </ul>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">{content.services.landingPrice}</div>
                  <div className="text-sm text-gray-500">{content.services.landingDelivery}</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Meta Ads */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.services.adsTitle}</h3>
              <p className="text-gray-600 mb-6">{content.services.adsDescription}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature3}</span>
                </li>
              </ul>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">{content.services.adsPrice}</div>
                  <div className="text-sm text-gray-500">{content.services.adsDelivery}</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Complete Package */}
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">{content.services.packageTitle}</h3>
              <p className="text-xl mb-2">{content.services.packageSubtitle}</p>
              <p className="text-lg mb-8 opacity-90">{content.services.packageDescription}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{content.services.packagePrice}</div>
                  <div className="text-lg opacity-90">{content.services.packageDelivery}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">{content.services.guaranteeText}</div>
                  <div className="text-lg opacity-90">{content.services.supportText}</div>
                </div>
              </div>
              
              <button className="bg-white text-green-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                {content.services.packageButtonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason1Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason1Description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason2Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason2Description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason3Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason3Description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{content.whyChoose.reason4Title}</h3>
              <p className="text-gray-600">{content.whyChoose.reason4Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.pricing.starterTitle}</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">{content.pricing.starterPrice}</div>
              <p className="text-gray-600 mb-8">{content.pricing.starterDescription}</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature3}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature4}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.starterFeature5}</span>
                </li>
              </ul>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300">
                {content.pricing.starterButtonText}
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 shadow-2xl text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                  {content.pricing.professionalBadgeText}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{content.pricing.professionalTitle}</h3>
              <div className="text-4xl font-bold mb-2">{content.pricing.professionalPrice}</div>
              <p className="opacity-90 mb-8">{content.pricing.professionalDescription}</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3" />
                  <span>{content.pricing.professionalFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3" />
                  <span>{content.pricing.professionalFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3" />
                  <span>{content.pricing.professionalFeature3}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3" />
                  <span>{content.pricing.professionalFeature4}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3" />
                  <span>{content.pricing.professionalFeature5}</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                {content.pricing.professionalButtonText}
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.pricing.enterpriseTitle}</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">{content.pricing.enterprisePrice}</div>
              <p className="text-gray-600 mb-8">{content.pricing.enterpriseDescription}</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature1}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature2}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature3}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature4}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{content.pricing.enterpriseFeature5}</span>
                </li>
              </ul>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300">
                {content.pricing.enterpriseButtonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{content.testimonials.testimonial1Text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{content.testimonials.testimonial1Name}</div>
                <div className="text-gray-600 text-sm">{content.testimonials.testimonial1Title}</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{content.testimonials.testimonial2Text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{content.testimonials.testimonial2Name}</div>
                <div className="text-gray-600 text-sm">{content.testimonials.testimonial2Title}</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{content.testimonials.testimonial3Text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{content.testimonials.testimonial3Name}</div>
                <div className="text-gray-600 text-sm">{content.testimonials.testimonial3Title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.readyToTalk.phoneTitle}</h3>
              <p className="text-gray-600 mb-6">{content.readyToTalk.phoneDescription}</p>
              <a 
                href={`tel:${content.readyToTalk.phoneNumber}`}
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2"
              >
                {content.readyToTalk.phoneNumber}
              </a>
              <p className="text-sm text-gray-500">{content.readyToTalk.phoneAvailability}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.readyToTalk.whatsappTitle}</h3>
              <p className="text-gray-600 mb-6">{content.readyToTalk.whatsappDescription}</p>
              <a 
                href={`https://wa.me/917837319660`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-block mb-2"
              >
                {content.readyToTalk.whatsappButtonText}
              </a>
              <p className="text-sm text-gray-500">{content.readyToTalk.whatsappResponse}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.readyToTalk.emailTitle}</h3>
              <p className="text-gray-600 mb-6">{content.readyToTalk.emailDescription}</p>
              <a 
                href={`mailto:${content.readyToTalk.emailAddress}`}
                className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors block mb-2"
              >
                {content.readyToTalk.emailAddress}
              </a>
              <p className="text-sm text-gray-500">{content.readyToTalk.emailResponse}</p>
            </div>
          </div>

          {/* Why Talk Benefits */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {content.readyToTalk.whyTalkTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{content.readyToTalk.benefit1Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit1Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{content.readyToTalk.benefit2Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit2Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{content.readyToTalk.benefit3Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit3Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{content.readyToTalk.benefit4Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit4Description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            {submitMessage && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Package Interest
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter Package - ₹4,999</option>
                  <option value="professional">Professional Package - ₹9,999</option>
                  <option value="enterprise">Enterprise Package - ₹19,999</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-10 opacity-90">
            {content.cta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {content.cta.primaryButtonText}
            </a>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              {content.cta.secondaryButtonText}
            </button>
          </div>
          
          <p className="text-lg font-semibold animate-pulse">
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
                <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  The Logo Makers
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.footer.companyDescription}
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`tel:+917837319660`}
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a 
                  href={`https://wa.me/917837319660`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${content.footer.emailAddress}`}
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{content.footer.servicesTitle}</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">{content.footer.service1}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">{content.footer.service2}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">{content.footer.service3}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">{content.footer.service4}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">{content.footer.service5}</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{content.footer.contactTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-400 mr-3" />
                  <a href={`tel:+917837319660`} className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 78373 19660
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-400 mr-3" />
                  <a href={`mailto:${content.footer.emailAddress}`} className="text-gray-300 hover:text-green-400 transition-colors">
                    {content.footer.emailAddress}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">{content.footer.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              {content.footer.copyrightText}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex bg-white border-t border-gray-200 shadow-lg">
        <a
          href="tel:+917837319660"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 flex items-center justify-center font-semibold transition-colors"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </a>
        <a
          href="https://tidycal.com/harmanpreetsingh/get-free-consulation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 flex items-center justify-center font-semibold transition-colors"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Get Free Consultation
        </a>
      </div>

      {/* Add bottom padding to prevent content from being hidden behind sticky buttons */}
      <div className="h-16"></div>
    </div>
  );
}