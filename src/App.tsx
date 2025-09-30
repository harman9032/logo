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
              <div className="w-16 h-16 bg-gradient-to-r from-