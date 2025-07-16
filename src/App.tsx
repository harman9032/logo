import React, { useState, useEffect } from 'react';
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
  ExternalLink,
  Sparkles,
  Rocket,
  Heart,
  Eye,
  Play,
  ArrowUpRight,
  Check,
  Plus,
  Minus
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      icon: <Palette className="w-8 h-8" />,
      title: "AI-Powered Logo Design",
      description: "Next-gen logo creation with AI assistance and human creativity",
      features: ["10+ AI Concepts", "Unlimited Revisions", "Vector & 3D Formats", "Brand DNA Analysis", "Commercial License"],
      gradient: "from-orange-400 via-red-500 to-pink-500",
      delay: "0ms"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Immersive Landing Pages",
      description: "3D interactive experiences that convert visitors into customers",
      features: ["3D Elements", "Micro-Animations", "Voice UI Ready", "AR/VR Compatible", "Performance Optimized"],
      gradient: "from-purple-400 via-pink-500 to-red-500",
      delay: "200ms"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Neural Meta Campaigns",
      description: "AI-driven advertising with predictive audience targeting",
      features: ["AI Audience Prediction", "Dynamic Creative Optimization", "Real-time Bidding", "Cross-Platform Sync", "ROI Forecasting"],
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      delay: "400ms"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      originalPrice: "₹9,999",
      description: "Perfect for emerging brands",
      features: [
        "AI Logo Generation (5 concepts)",
        "Basic Landing Page",
        "Mobile-First Design",
        "SEO Foundation",
        "7-day Priority Support"
      ],
      popular: false,
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-900",
      buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600"
    },
    {
      name: "Professional",
      price: "₹9,999",
      originalPrice: "₹19,999",
      description: "Complete digital transformation",
      features: [
        "Premium AI Logo Suite",
        "Interactive Landing Page",
        "Advanced Meta Campaigns",
        "Analytics Dashboard",
        "30-day VIP Support"
      ],
      popular: true,
      gradient: "from-orange-400 via-red-500 to-pink-500",
      textColor: "text-white",
      buttonStyle: "bg-white text-orange-600 hover:bg-gray-100"
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      originalPrice: "₹39,999",
      description: "Scale with confidence",
      features: [
        "Everything in Professional",
        "Custom 3D Animations",
        "Multi-Platform Integration",
        "Dedicated Success Manager",
        "90-day Premium Support"
      ],
      popular: false,
      gradient: "from-purple-400 via-blue-500 to-indigo-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-purple-600 hover:bg-gray-100"
    }
  ];

  const faqs = [
    {
      question: "How does AI-powered logo design work?",
      answer: "Our AI analyzes your brand requirements, industry trends, and competitor landscapes to generate unique logo concepts. Each design is then refined by our human designers to ensure perfect brand alignment."
    },
    {
      question: "What makes your landing pages 'immersive'?",
      answer: "We integrate 3D elements, micro-animations, parallax scrolling, and interactive components that create engaging user experiences. Our pages are also optimized for voice search and AR/VR compatibility."
    },
    {
      question: "How accurate is your neural campaign targeting?",
      answer: "Our AI models achieve 94% accuracy in audience prediction by analyzing over 500 data points. This results in 3x better conversion rates compared to traditional targeting methods."
    },
    {
      question: "Do you provide ongoing optimization?",
      answer: "Yes! All packages include continuous AI-driven optimization. Our systems automatically adjust campaigns, update designs, and improve performance based on real-time data analysis."
    },
    {
      question: "Can I see examples of your latest work?",
      answer: "Absolutely! Contact us for access to our private portfolio showcasing recent projects with 3D elements, AI-generated designs, and campaign performance metrics."
    }
  ];

  const stats = [
    { number: "2,500+", label: "AI-Generated Designs", icon: <Sparkles className="w-6 h-6" /> },
    { number: "99.2%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Rocket className="w-6 h-6" /> },
    { number: "500%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.1) 0%, transparent 50%)`
          }}
        ></div>
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Futuristic Header */}
      <header className="relative z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 sticky top-0">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
                <div className="flex items-center space-x-2 group">
                  <Phone className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-medium">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Mail className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-medium">info@thelogomakers.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">24/7 AI Support</span>
                </div>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
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
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                  <Palette className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  The Logo Makers
                </h1>
                <p className="text-xs text-gray-400 font-medium">AI-Powered Digital Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://tidycal.com/thelogomakers/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                <span className="relative z-10">Book AI Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/10 py-4 backdrop-blur-xl bg-black/50">
              <div className="flex flex-col space-y-4">
                {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-300 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href="https://tidycal.com/thelogomakers/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full font-bold text-center mt-4 transition-all duration-300 transform hover:scale-105"
                >
                  Book AI Consultation
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - 2025 Style */}
      <section id="home" className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 font-medium">AI-Powered Digital Solutions 2025</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Transform Your
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Digital Presence
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Experience the future of branding with AI-powered logo design, immersive 3D landing pages, 
              and neural marketing campaigns that generate <span className="text-orange-400 font-bold">500%+ ROI</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="https://tidycal.com/thelogomakers/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Start AI Transformation</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-2 border-orange-500/50 backdrop-blur-sm bg-white/5 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 transform hover:scale-110 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Chat with AI Assistant</span>
                </span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-3 text-orange-400 group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2025 Style */}
      <section id="services" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium">Next-Gen Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Cutting-edge solutions powered by artificial intelligence and human creativity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2"
                style={{ 
                  animationDelay: service.delay,
                  animation: `fadeInUp 1s ease-out forwards ${service.delay}`
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 group/item">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-400 group-hover/item:animate-pulse" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - 2025 Style */}
      <section id="pricing" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 mb-8">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium">Transparent Pricing</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Choose Your </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">AI Package</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Flexible plans designed for businesses of all sizes. All packages include AI optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/50 shadow-2xl shadow-orange-500/25' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-8 sm:p-10">
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${plan.textColor}`}>{plan.name}</h3>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className={`text-5xl sm:text-6xl font-black ${plan.textColor}`}>{plan.price}</div>
                      <div className="text-right">
                        <div className="text-gray-400 line-through text-lg">{plan.originalPrice}</div>
                        <div className="text-green-400 text-sm font-bold">50% OFF</div>
                      </div>
                    </div>
                    
                    <p className={`${plan.textColor} opacity-80`}>{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                        </div>
                        <span className={`${plan.textColor} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://tidycal.com/thelogomakers/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 text-center transform hover:scale-105 shadow-lg hover:shadow-xl ${plan.buttonStyle}`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Book Consultation</span>
                    </span>
                  </a>
                </div>

                {/* Animated Border */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-20 animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - 2025 Style */}
      <section id="about" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-medium">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl sm:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">The Future of </span>
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Digital Design</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                We're not just designers—we're digital architects building the future of brand experiences 
                with cutting-edge AI technology and human creativity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: "AI-Powered Quality", desc: "99.9% accuracy with machine learning", color: "from-green-400 to-blue-500" },
                  { icon: <Rocket className="w-6 h-6" />, title: "Lightning Fast", desc: "3x faster delivery with automation", color: "from-orange-400 to-red-500" },
                  { icon: <Users className="w-6 h-6" />, title: "Expert AI Team", desc: "Human creativity + AI precision", color: "from-purple-400 to-pink-500" },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Proven Results", desc: "500%+ ROI for our clients", color: "from-yellow-400 to-orange-500" }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-10 border border-orange-500/30">
                <h3 className="text-3xl font-bold text-white mb-8">Our AI Process</h3>
                <div className="space-y-8">
                  {[
                    { step: "1", title: "AI Analysis", desc: "Deep learning algorithms analyze your brand DNA", icon: <Eye className="w-5 h-5" /> },
                    { step: "2", title: "Creative Generation", desc: "AI generates hundreds of design variations", icon: <Sparkles className="w-5 h-5" /> },
                    { step: "3", title: "Human Refinement", desc: "Expert designers perfect the AI creations", icon: <Heart className="w-5 h-5" /> },
                    { step: "4", title: "Launch & Optimize", desc: "Continuous AI optimization for maximum impact", icon: <Rocket className="w-5 h-5" /> }
                  ].map((process, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{process.title}</h4>
                          <div className="text-orange-400 group-hover:animate-bounce">{process.icon}</div>
                        </div>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 2025 Style */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-8">
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Got Questions?</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Frequently Asked </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Everything you need to know about our AI-powered services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-white text-lg pr-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-180">
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - 2025 Style */}
      <section id="contact" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-2 mb-8">
              <MessageCircle className="w-4 h-4 text-pink-400" />
              <span className="text-pink-300 font-medium">Let's Connect</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Transform?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Start your AI-powered digital transformation today. Book a consultation or reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="w-6 h-6" />, title: "Phone", info: "+91 9876543210", sub: "24/7 AI Support Available", color: "from-green-400 to-blue-500" },
                    { icon: <Mail className="w-6 h-6" />, title: "Email", info: "info@thelogomakers.com", sub: "AI responds within minutes", color: "from-blue-400 to-purple-500" },
                    { icon: <MapPin className="w-6 h-6" />, title: "Office", info: "123 Business District", sub: "Mumbai, Maharashtra 400001", color: "from-purple-400 to-pink-500" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                          {contact.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.info}</p>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{contact.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-8">Quick Actions</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <Calendar className="w-6 h-6" />, title: "Book AI Consultation", desc: "30-minute strategy session with AI insights", link: "https://tidycal.com/thelogomakers/consultation" },
                    { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp AI Chat", desc: "Instant responses from our AI assistant", link: "https://wa.me/919876543210" },
                    { icon: <Phone className="w-6 h-6" />, title: "Call Directly", desc: "Speak with our AI-enhanced team", link: "tel:+919876543210" }
                  ].map((action, index) => (
                    <a 
                      key={index}
                      href={action.link}
                      target={action.link.startsWith('http') ? '_blank' : undefined}
                      rel={action.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group"
                    >
                      <div className="text-white group-hover:animate-bounce">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                          {action.title}
                        </div>
                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                          {action.desc}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-4">Ready for AI Transformation?</h3>
                <p className="text-gray-300 mb-8">
                  Join 2,500+ businesses already using our AI-powered solutions to dominate their markets.
                </p>
                <a 
                  href="https://tidycal.com/thelogomakers/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Start AI Transformation</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="relative z-10 backdrop-blur-xl bg-black/50 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    The Logo Makers
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">AI-Powered Digital Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Pioneering the future of digital design with AI-powered solutions. Transform your brand 
                with cutting-edge technology and human creativity.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <a 
                    key={social}
                    href="#" 
                    className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <div className={`w-5 h-5 rounded ${
                      social === 'Facebook' ? 'bg-blue-500' :
                      social === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      social === 'LinkedIn' ? 'bg-blue-600' : 'bg-blue-400'
                    } group-hover:animate-pulse`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">AI Services</h4>
              <ul className="space-y-3">
                {['AI Logo Design', 'Immersive Landing Pages', 'Neural Meta Campaigns', 'Lead Generation', 'SEO Optimization'].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:bg-clip-text transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 text-orange-400 group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 text-orange-400 group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@thelogomakers.com</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-4 h-4 text-orange-400 mt-1 group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    123 Business District<br />Mumbai, Maharashtra 400001
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2025 The Logo Makers. All rights reserved. Powered by AI.
              </p>
              <div className="flex space-x-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:bg-clip-text transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;