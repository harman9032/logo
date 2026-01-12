import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

// Static content - Webinar focused
const content = {
  hero: {
    title: "Confused About Your Career? Discover 10 Astrology Methods for Your Perfect Profession",
    subtitle: "Live Webinar: Vedic Astrology Career Clarity Masterclass - Just ₹99",
    description: "Learn how to use Vedic astrology techniques to identify your ideal career, whether you want to excel in business or climb the corporate ladder. Stop wasting years in the wrong profession.",
    ctaText: "Register for Webinar - ₹99",
    badgeText: "Vedic Astrology Webinar • Certified Astrologer • Life-Changing Insights",
    valueProposition1: "10,000+",
    valueProposition1Value: "Career Transformations",
    valueProposition1Desc: "People Who Found Their Ideal Path",
    valueProposition2: "10",
    valueProposition2Value: "Astrology Methods",
    valueProposition2Desc: "Vedic & Modern Systems to Guide You",
    valueProposition3: "90 Min",
    valueProposition3Value: "Life-Changing Session",
    valueProposition3Desc: "Get Complete Career Clarity",
    learningTitle: "What You'll Learn in This Webinar",
    learningPoint1Title: "D1 Chart Analysis",
    learningPoint1Desc: "Understand your natal chart placement and career potential through D1 analysis",
    learningPoint2Title: "D10 Dasamsa Chart",
    learningPoint2Desc: "Explore career success indicators through the 10th harmonic division",
    learningPoint3Title: "KP System Methodology",
    learningPoint3Desc: "Apply Krishnamurti Paddhati techniques for precise career guidance",
    learningPoint4Title: "10 Astrology Methods",
    learningPoint4Desc: "Master D1, D10, BNN, KP, Char Dasha, Jamini, House, Rashi, Naksatra & Mahadasha",
    bonusTitle: "BONUS WORTH Rs.4,999!",
    bonusSubtitle: "Career Assessment Workbook + Industry Salary Guide + Interview Success Templates",
    bonusItems: "Get our exclusive Career Clarity Toolkit - Assessment Tools, Salary Benchmarks, and Step-by-Step Career Planning Guide",
    bonusUrgency: "Limited Seats: Only 100 Spots Available!",
    instantBonusText: "INSTANT ACCESS:",
    heroBackgroundText: "15 Years Experience • 10,000+ Success Stories • Certified Vedic Astrologer",
    heroCalloutText: "Transform Your Career Confusion into Crystal Clear Direction"
  },
  services: {
    title: "10 Astrology Methods for Career Clarity",
    subtitle: "Discover Your Ideal Career Through Ancient Wisdom & Vedic Astrology",
    sectionDescription: "Master these 10 proven astrology methods used for centuries to uncover career alignment and guide professional decisions with precision.",
    logoTitle: "D1 Chart Analysis",
    logoDescription: "Explore your natal chart (Rashi Chart) to identify core career strengths and personality traits that influence career success.",
    logoFeature1: "Birth Chart Reading",
    logoFeature2: "Planet Placement Analysis",
    logoFeature3: "Career Indicators",
    logoPrice: "Covered in Webinar",
    logoDelivery: "Method 1",
    landingTitle: "D10 & BNN Analysis",
    landingDescription: "Study the 10th harmonic division (Dasamsa) and Bhava Chakra for detailed career success indicators and professional achievement patterns.",
    landingFeature1: "Dasamsa Chart",
    landingFeature2: "Bhava Analysis",
    landingFeature3: "Success Timing",
    landingPrice: "Covered in Webinar",
    landingDelivery: "Method 2",
    adsTitle: "KP & Char Dasha",
    adsDescription: "Apply Krishnamurti Paddhati system and Character Dasha techniques for precise career predictions and optimal timing.",
    adsFeature1: "KP Sublords",
    adsFeature2: "Dasha Prediction",
    adsFeature3: "Timing Analysis",
    adsPrice: "Covered in Webinar",
    adsDelivery: "Method 3",
    packageTitle: "Complete Career Clarity",
    packageSubtitle: "Transform confusion into confidence",
    packageDescription: "Walk away with a clear roadmap for your career success, whether in business or employment.",
    packagePrice: "₹99",
    packageDelivery: "90 Minutes",
    packageButtonText: "Register Now - ₹99",
    guaranteeText: "100% Value Guaranteed",
    supportText: "Q&A Session Included"
  },
  pricing: {
    title: "Choose Your Astrology Career Guidance Path",
    subtitle: "From webinar (₹99) to personalized astrological consulting",
    starterTitle: "Webinar",
    starterPrice: "₹99",
    starterDescription: "Perfect for getting started with career clarity",
    starterFeature1: "90-Minute Live Session",
    starterFeature2: "10 Astrology Methods",
    starterFeature3: "Q&A Session",
    starterFeature4: "Career Assessment Workbook",
    starterFeature5: "Recording Access (48 hrs)",
    starterButtonText: "Register Now",
    professionalTitle: "Career Coaching",
    professionalPrice: "Rs.9,999",
    professionalDescription: "Personal guidance for career transformation",
    professionalFeature1: "Everything in Free Webinar",
    professionalFeature2: "3 One-on-One Sessions",
    professionalFeature3: "Personalized Career Roadmap",
    professionalFeature4: "Resume & LinkedIn Review",
    professionalFeature5: "30-Day Email Support",
    professionalButtonText: "Book Coaching",
    professionalBadgeText: "Most Popular",
    enterpriseTitle: "Career Transformation",
    enterprisePrice: "Rs.24,999",
    enterpriseDescription: "Complete career change support",
    enterpriseFeature1: "Everything in Career Coaching",
    enterpriseFeature2: "6 Personal Coaching Sessions",
    enterpriseFeature3: "Industry Connections",
    enterpriseFeature4: "Interview Preparation",
    enterpriseFeature5: "90-Day Priority Support",
    enterpriseButtonText: "Apply Now"
  },
  whyChoose: {
    title: "Why Learn Vedic Astrology for Career from Us?",
    subtitle: "We've helped thousands discover their ideal path through astrology",
    reason1Title: "15+ Years Experience",
    reason1Description: "Certified Vedic Astrologer with proven success in career guidance",
    reason2Title: "10,000+ Success Stories",
    reason2Description: "Helped people find fulfilling careers through astrological analysis",
    reason3Title: "10 Methods Mastery",
    reason3Description: "Combine D1, D10, BNN, KP, and other proven techniques",
    reason4Title: "Lifetime Clarity",
    reason4Description: "Astrological insights that guide your entire career journey"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the webinar",
    question1: "Who is this webinar for?",
    answer1: "This webinar is perfect for students, fresh graduates, working professionals considering a career change, or anyone confused about choosing their ideal career.",
    question2: "What's included for ₹99?",
    answer2: "For just ₹99, you get the full 90-minute live session, all 10 astrology methods explained, bonus career assessment workbook, Q&A session, and access to the recording for 48 hours.",
    question3: "What are the 10 astrology methods covered?",
    answer3: "We cover D1 Chart Analysis, D10 Dasamsa Chart, BNN (Bhava Chakra), KP (Krishnamurti Paddhati), Char Dasha, Jamini Astrology, House Analysis, Rashi Analysis, Naksatra Analysis, and Mahadasha Prediction.",
    question4: "Will I get a recording of the webinar?",
    answer4: "Yes, all registered participants receive access to the webinar recording for 48 hours. Premium members get lifetime access to all recordings and materials.",
    question5: "How is this different from other career guidance?",
    answer5: "Our approach combines scientific personality assessment with practical market insights. We don't just tell you what to do - we give you frameworks to make your own informed decisions.",
    question6: "Can I ask questions during the webinar?",
    answer6: "Absolutely! We have a dedicated Q&A session at the end where you can ask specific questions about your career situation and get personalized guidance."
  },
  readyToTalk: {
    title: "Have Questions? Let's Connect!",
    subtitle: "Get clarity about the webinar or discuss your career challenges directly.",
    phoneTitle: "Call Us Now",
    phoneDescription: "Speak with our career advisors",
    phoneNumber: "+91 78373 19660",
    phoneAvailability: "Available 9 AM - 9 PM",
    whatsappTitle: "WhatsApp Chat",
    whatsappDescription: "Quick responses within minutes",
    whatsappButtonText: "Start Chat",
    whatsappResponse: "Instant responses",
    emailTitle: "Email Us",
    emailDescription: "Detailed career discussions",
    emailAddress: "career@webinar.com",
    emailResponse: "Response within 2 hours",
    whyTalkTitle: "Why Talk to Us Directly?",
    benefit1Title: "Career Clarity",
    benefit1Description: "Get immediate answers about your career path",
    benefit2Title: "Expert Guidance",
    benefit2Description: "Speak with certified career counselors",
    benefit3Title: "Personalized Advice",
    benefit3Description: "Solutions tailored to your situation",
    benefit4Title: "No Obligation",
    benefit4Description: "Free consultation, no strings attached"
  },
  testimonials: {
    title: "Success Stories",
    subtitle: "Real people who found their perfect career path",
    testimonial1Text: "I was stuck in a dead-end job for 5 years. After attending this webinar, I finally understood what I truly wanted. Now I run my own consulting business!",
    testimonial1Name: "Rahul Verma",
    testimonial1Title: "Former IT Employee, Now Entrepreneur",
    testimonial2Text: "The 10 ways framework changed everything. I discovered my passion for teaching and made a successful career switch. Best decision ever!",
    testimonial2Name: "Sneha Gupta",
    testimonial2Title: "Career Changer, Education Sector",
    testimonial3Text: "As a fresh graduate, I was completely lost. This webinar helped me choose the right industry. Now I'm in my dream job at a Fortune 500 company.",
    testimonial3Name: "Arjun Mehta",
    testimonial3Title: "Software Engineer, Google"
  },
  cta: {
    title: "Ready to Find Your Perfect Career?",
    subtitle: "Join 10,000+ people who discovered their true calling through this webinar",
    primaryButtonText: "Register Now - ₹99",
    secondaryButtonText: "Book 1-on-1 Career Coaching",
    urgencyText: "Limited Seats - Only 100 spots available!"
  },
  footer: {
    companyDescription: "Helping people discover their true career calling since 2010. 10,000+ success stories worldwide.",
    servicesTitle: "Programs",
    service1: "Webinar - ₹99",
    service2: "Career Coaching",
    service3: "Resume Building",
    service4: "Interview Prep",
    service5: "Career Transformation",
    companyTitle: "Company",
    contactTitle: "Contact Info",
    phoneNumber: "+91 78373 19660",
    emailAddress: "career@webinar.com",
    location: "India",
    copyrightText: "© 2025 Career Clarity Webinar. All rights reserved. • Transforming careers since 2010"
  }
};

export default function HomePage() {
  const navigate = useNavigate();
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

  const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

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
        navigate('/thank-you');
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
      <nav className="fixed top-0 w-full bg-gradient-to-br from-green-600  backdrop-blur-md z-50 border-b border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-black text-yellow-400">
                  Gaja Astro <span className="text-amber-400">Marketing</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors">
                  Contact
                </button>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-[#009e00] px-6 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all duration-300 shadow-md"
                >
                  Book Free Call
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-300 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 border-t border-green-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left">
                Contact
              </button>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-yellow-400 text-[#009e00] px-3 py-2 text-base font-bold text-center rounded-lg mx-3 mt-4 hover:bg-yellow-300 transition-colors"
              >
                Book Free Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center btn-gold-gradient border border-yellow-400 rounded-full px-5 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-green-900">
                Live Webinar - Limited Seats Available
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
             Confused About Your <span className="text-gold-gradient">Career?</span>
              <span className="block mt-2">Discover </span>
              <span className="block mt-2 text-gold-gradient">10 Proven Ways</span><span className=" mt-2"> to Choose Your Profession</span>
            </h1>

            <p className="text-xl text-green-50 leading-relaxed mb-10 max-w-3xl mx-auto">
              Learn how to choose between business and job, find your true calling, and make confident career decisions
              <span className="font-semibold text-white block">Stop wasting years in the wrong career path!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-gradient text-green-900 px-10 py-5 rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
              >
                Register Now - ₹99
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-green-900 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                View Programs
              </button>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-semibold">90 Min Session</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-semibold">Certified Career Coach</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-green-500">
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-1">10,000+</div>
                <div className="text-sm text-green-100">Success Stories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-1">15+</div>
                <div className="text-sm text-green-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-1">10</div>
                <div className="text-sm text-green-100">Proven Methods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Logo Design */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{content.services.logoTitle}</h3>
              <p className="text-gray-600 mb-6 font-medium">{content.services.logoDescription}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.logoFeature3}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-black text-green-700">{content.services.logoPrice}</span>
                <span className="text-sm text-gray-600 flex items-center font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.logoDelivery}
                </span>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Landing Page */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{content.services.landingTitle}</h3>
              <p className="text-gray-600 mb-6 font-medium">{content.services.landingDescription}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.landingFeature3}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-black text-green-700">{content.services.landingPrice}</span>
                <span className="text-sm text-gray-600 flex items-center font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.landingDelivery}
                </span>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Meta Ads */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{content.services.adsTitle}</h3>
              <p className="text-gray-600 mb-6 font-medium">{content.services.adsDescription}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature2}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{content.services.adsFeature3}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-black text-green-700">{content.services.adsPrice}</span>
                <span className="text-sm text-gray-600 flex items-center font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  {content.services.adsDelivery}
                </span>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Complete Package */}
          <div className="bg-green-600 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
                <Zap className="h-5 w-5 mr-2" />
                <span className="font-bold">Best Value</span>
              </div>

              <h3 className="text-4xl font-black mb-4">{content.services.packageTitle}</h3>
              <p className="text-xl mb-2 font-semibold">{content.services.packageSubtitle}</p>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto font-medium">{content.services.packageDescription}</p>

              <div className="flex items-center justify-center mb-8">
                <span className="text-5xl font-black">{content.services.packagePrice}</span>
                <span className="text-xl ml-2 text-green-100 font-semibold">one-time</span>
              </div>

              <div className="flex items-center justify-center mb-8">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-semibold">{content.services.packageDelivery}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-md"
                >
                  {content.services.packageButtonText}
                </button>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300"
                >
                  Book Free Call
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-semibold">
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
      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.pricing.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12 shadow-2xl border-2 border-green-600">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{content.pricing.starterTitle}</h3>
              <div className="text-6xl font-bold text-green-700 mb-4">{content.pricing.starterPrice}</div>
              <p className="text-lg text-gray-600 font-medium">{content.pricing.starterDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">What You Get:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{content.pricing.starterFeature1}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Career Assessment Workbook</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{content.pricing.starterFeature3}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{content.pricing.starterFeature5}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">10 Methods Covered:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">1.</span>
                    <span className="text-gray-700">D1 Chart Analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span className="text-gray-700">D10 Dasamsa Chart</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">3.</span>
                    <span className="text-gray-700">BNN (Bhava Chakra)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">4.</span>
                    <span className="text-gray-700">KP (Krishnamurti)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">5.</span>
                    <span className="text-gray-700">Char Dasha</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">6.</span>
                    <span className="text-gray-700">Jamini Astrology</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">7.</span>
                    <span className="text-gray-700">House Analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">8.</span>
                    <span className="text-gray-700">Rashi Analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">9.</span>
                    <span className="text-gray-700">Nakshatra Analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">10.</span>
                    <span className="text-gray-700">Mahadasha Prediction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 text-white px-12 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl text-lg"
              >
                {content.pricing.starterButtonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {content.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{content.whyChoose.reason1Title}</h3>
              <p className="text-gray-600 font-medium">{content.whyChoose.reason1Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{content.whyChoose.reason2Title}</h3>
              <p className="text-gray-600 font-medium">{content.whyChoose.reason2Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{content.whyChoose.reason3Title}</h3>
              <p className="text-gray-600 font-medium">{content.whyChoose.reason3Description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{content.whyChoose.reason4Title}</h3>
              <p className="text-gray-600 font-medium">{content.whyChoose.reason4Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              {content.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 font-medium">
                "{content.testimonials.testimonial1Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black mr-4">
                  {content.testimonials.testimonial1Name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{content.testimonials.testimonial1Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial1Title}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 font-medium">
                "{content.testimonials.testimonial2Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black mr-4">
                  {content.testimonials.testimonial2Name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{content.testimonials.testimonial2Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial2Title}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 font-medium">
                "{content.testimonials.testimonial3Text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black mr-4">
                  {content.testimonials.testimonial3Name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{content.testimonials.testimonial3Name}</p>
                  <p className="text-gray-600 text-sm">{content.testimonials.testimonial3Title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {content.faq.title}
            </h2>
            <p className="text-xl text-gray-600 font-medium">
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
              <div key={index} className="bg-gray-50 rounded-2xl shadow-md border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-700" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
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
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.readyToTalk.phoneTitle}</h3>
              <p className="text-gray-600 mb-4">{content.readyToTalk.phoneDescription}</p>
              <a 
                href={`tel:${content.readyToTalk.phoneNumber}`}
                className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors block mb-2"
              >
                {content.readyToTalk.phoneNumber}
              </a>
              <p className="text-sm text-green-700">{content.readyToTalk.phoneAvailability}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.readyToTalk.whatsappTitle}</h3>
              <p className="text-gray-600 mb-6">{content.readyToTalk.whatsappDescription}</p>
              <a 
                href="https://wa.me/919876543210?text=Hi, I'm interested in your digital marketing services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {content.readyToTalk.whatsappButtonText}
              </a>
              <p className="text-sm text-green-700 mt-4">{content.readyToTalk.whatsappResponse}</p>
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.readyToTalk.benefit2Title}</h4>
                <p className="text-gray-600 text-sm">{content.readyToTalk.benefit2Description}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 text-green-100 font-semibold">
            {content.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {content.cta.primaryButtonText}
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              {content.cta.secondaryButtonText}
            </button>
          </div>

          <p className="text-green-100 font-bold animate-pulse">
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
                <span className="text-2xl font-black text-white">
                  Gaja Astro <span className="text-gold-gradient">Marketing</span>
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
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <a href={`tel:${content.footer.phoneNumber}`} className="text-gray-300 hover:text-white transition-colors">
                    {content.footer.phoneNumber}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <a href={`mailto:${content.footer.emailAddress}`} className="text-gray-300 hover:text-white transition-colors">
                    {content.footer.emailAddress}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
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
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-green-600 text-sm transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-green-600 text-sm transition-colors font-medium"
                >
                  Terms
                </Link>
                <Link
                  to="/cookies-policy"
                  className="text-gray-400 hover:text-green-600 text-sm transition-colors font-medium"
                >
                  Cookies Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}