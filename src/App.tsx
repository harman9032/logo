import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Clock,
  Shield,
  Award,
  Zap,
  Users,
  TrendingUp,
  Target,
  Palette,
  Globe,
  Megaphone,
  ChevronDown,
  ChevronUp,
  Calendar,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxQR8vK9YNzJ5vK8wK9YNzJ5vK8wK9YNzJ5vK8wK9YNzJ5vK8wK9YNzJ5vK8w/exec';
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', data.name);
    formDataToSend.append('email', data.email);
    formDataToSend.append('phone', data.phone);
    formDataToSend.append('service', data.service);
    formDataToSend.append('message', data.message);
    formDataToSend.append('timestamp', new Date().toISOString());

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const success = await submitToGoogleSheets(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Professional Logo Design",
      description: "Custom logo designs that represent your brand identity perfectly",
      features: ["5+ Logo Concepts", "Unlimited Revisions", "All File Formats", "Brand Guidelines", "Commercial Rights"]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Landing Page Development",
      description: "High-converting landing pages optimized for lead generation",
      features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "Lead Forms", "Analytics Setup"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-purple-600" />,
      title: "Meta Ads Management",
      description: "Strategic Facebook & Instagram advertising campaigns",
      features: ["Campaign Setup", "Audience Targeting", "Ad Creatives", "Performance Tracking", "Monthly Reports"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      description: "Perfect for new businesses",
      features: [
        "Logo Design (3 concepts)",
        "Basic Landing Page",
        "Mobile Responsive",
        "Basic SEO Setup",
        "7-day Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹9,999",
      description: "Complete digital package",
      features: [
        "Professional Logo Design",
        "Custom Landing Page",
        "Meta Ads Campaign Setup",
        "SEO Optimization",
        "30-day Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      description: "For growing businesses",
      features: [
        "Everything in Professional",
        "Advanced Analytics Setup",
        "CRM Integration",
        "Email Marketing Setup",
        "90-day Support"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Logo design typically takes 3-5 business days, landing pages take 5-7 days, and Meta ads setup takes 2-3 days. Complete packages are delivered within 10-14 business days."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes! We provide unlimited revisions for logo design and up to 3 major revisions for landing pages to ensure you're completely satisfied with the final result."
    },
    {
      question: "What's included in the Meta Ads service?",
      answer: "Our Meta Ads service includes campaign strategy, audience research, ad creative design, campaign setup, optimization, and monthly performance reports."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, all packages include support ranging from 7 days (Starter) to 90 days (Enterprise). We also offer monthly maintenance packages for ongoing support."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Absolutely! Contact us and we'll share our portfolio with recent projects similar to your industry and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>info@thelogomakers.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </span>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full text-xs font-medium transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">The Logo Makers</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Professional Digital Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Get Quote
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Contact
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium text-center mt-4"
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Professional Digital Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Get a complete digital package - Logo Design, Landing Page & Meta Ads for just ₹9,999. 
                Start generating 100+ leads monthly with our proven system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </button>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  WhatsApp Us
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Quick Quote</h3>
                  <p className="text-gray-600">Get your project estimate in minutes</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="meta-ads">Meta Ads</option>
                      <option value="complete-package">Complete Package</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center font-medium">
                      Thank you! We'll contact you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-center font-medium">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include our quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just another design agency. We're your growth partners, committed to delivering 
                results that matter to your business.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">100% satisfaction guaranteed or money back</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 text-sm">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Experienced professionals in every field</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Track record of successful projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultation</h4>
                      <p className="text-blue-100 text-sm">Understanding your needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Design & Development</h4>
                      <p className="text-blue-100 text-sm">Creating your digital assets</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Launch & Support</h4>
                      <p className="text-blue-100 text-sm">Going live with ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Got questions? We've got answers to help you make the right decision.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="meta-ads">Meta Ads</option>
                      <option value="complete-package">Complete Package</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-700 font-medium">Message sent successfully!</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-red-700 font-medium">Something went wrong!</div>
                    <p className="text-red-600 text-sm mt-1">Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                      <p className="text-sm text-gray-500">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@thelogomakers.com</p>
                      <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600">123 Business District<br />Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp Chat</div>
                      <div className="text-sm text-blue-100">Get instant responses</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  <a 
                    href="https://calendly.com/thelogomakers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all"
                  >
                    <Calendar className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Book a Call</div>
                      <div className="text-sm text-blue-100">Schedule consultation</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Logo Makers</h3>
                  <p className="text-gray-400 text-sm">Professional Digital Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your business with our comprehensive digital solutions. From logo design to lead generation, 
                we help businesses grow online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-5 h-5 bg-blue-500 rounded"></div>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-5 h-5 bg-pink-500 rounded"></div>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-5 h-5 bg-blue-600 rounded"></div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Logo Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Meta Ads</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@thelogomakers.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>123 Business District<br />Mumbai, Maharashtra 400001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2024 The Logo Makers. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;