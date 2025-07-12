import React, { useState } from 'react';
import AdminApp from './components/AdminApp';
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
  Lightbulb
} from 'lucide-react';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
    message: ''
  });

  // Check if current URL is admin route
  React.useEffect(() => {
    if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
      setShowAdmin(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number - allow only numbers, spaces, +, -, (, )
    if (name === 'phone') {
      const cleanedValue = value.replace(/[^\d\s\-\+\(\)]/g, '');
      setFormData({
        ...formData,
        [name]: cleanedValue
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate and save lead to Supabase
    if (validateForm()) {
      saveLead();
    }
  };

  const validateForm = () => {
    // Validate required fields
    if (!formData.name.trim()) {
      alert('Please enter your full name.');
      return false;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return false;
    }

    if (!formData.phone.trim()) {
      alert('Please enter your phone number.');
      return false;
    }

    if (!formData.package) {
      alert('Please select your interest.');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number (minimum 10 digits).');
      return false;
    }

    return true;
  };

  const saveLead = async () => {
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            business: formData.business || null,
            package: formData.package,
            message: formData.message || null,
            status: 'new',
            priority: 'medium',
            source: 'website'
          }
        ]);

      if (error) {
        console.error('Error saving lead:', error);
        alert(`Error submitting form: ${error.message}. Please try again.`);
        return;
      }

      // Success message with more details
      alert('🎉 Thank you for your interest!\n\nYour request has been submitted successfully. Our team will contact you within 2 hours to discuss your requirements.\n\nWhat happens next:\n• Strategy call within 2 hours\n• Custom proposal within 24 hours\n• Project kickoff once approved');
      
      setShowPopup(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        package: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact us directly.`);
    }
  };

  // Show admin panel if requested
  if (showAdmin) {
    return <AdminApp />;
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
                <a href="#about" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  Book Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20 pb-32 overflow-hidden">
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
              <span className="text-orange-800 font-semibold">8 Years of Excellence • Since 2017 • 1000+ Happy Clients</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get High-Intent Clients at
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                ₹50 Per Lead Average
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Book a <strong className="text-orange-600">FREE 30-minute strategy session</strong> (Worth ₹2,999) and discover 
              the exact system we use to generate quality leads for businesses like yours.
            </p>

            {/* Value Proposition Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹50</div>
                <div className="text-gray-700 font-semibold">Average Cost Per Lead</div>
                <div className="text-sm text-gray-500 mt-1">Industry average: ₹200+</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">15%+</div>
                <div className="text-gray-700 font-semibold">Conversion Rate</div>
                <div className="text-sm text-gray-500 mt-1">Industry average: 2-5%</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-700 font-semibold">Leads Per Month</div>
                <div className="text-sm text-gray-500 mt-1">Guaranteed results</div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book FREE Strategy Call
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to establish a strong online presence and attract customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Logo Design</h3>
              <p className="text-gray-600 mb-6">
                Professional, memorable logo that represents your brand identity perfectly. 
                Multiple concepts, unlimited revisions, and all file formats included.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Page</h3>
              <p className="text-gray-600 mb-6">
                High-converting, mobile-responsive landing page designed to turn visitors into customers. 
                Optimized for speed and conversions.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meta Ads Setup</h3>
              <p className="text-gray-600 mb-6">
                Complete Facebook and Instagram ad campaigns setup with targeting, 
                creative design, and optimization for maximum ROI.
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
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that's right for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Package</h3>
                <p className="text-gray-600 mb-6">Everything you need to get started</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-orange-600">₹9,999</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Professional Logo Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom Landing Page</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Meta Ads Campaign Setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Mobile Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Free 30-day Support</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowPopup(true)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                Get Started Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Monthly Lead Generation</h3>
                <p className="text-orange-100 mb-6">Guaranteed 100+ leads every month</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">₹9,999</span>
                  <span className="text-orange-100 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>100+ Qualified Leads</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Ad Campaign Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Performance Analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Monthly Strategy Calls</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>A/B Testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowPopup(true)}
                className="w-full bg-white text-orange-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Lead Generation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Daily Creative Designs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver results that matter to your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Complete package delivered within 7 days</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">8 years of experience since 2017</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Helped 1000+ businesses grow their revenue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600">100% satisfaction or your money back</p>
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
            Ready to Get ₹50 Per Lead Results?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your FREE strategy session now and discover the exact system that's working for 1000+ businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowPopup(true)}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book FREE Strategy Call (Worth ₹2,999)
            </button>
            <button 
              onClick={() => setShowPopup(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get Complete Package - ₹9,999
            </button>
          </div>
          <p className="text-orange-100 mt-6 text-sm">
            ⚡ Limited Time Offer - Only 5 strategy sessions available this week!
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
            <p>&copy; 2024 Daily Creative Designs. All rights reserved. • Serving clients since 2017 • 
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

      {/* Lead Generation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Book Your FREE Strategy Call</h3>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center text-orange-800 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-semibold">FREE 30-Minute Session (Worth ₹2,999)</span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Discover how to get high-intent clients at ₹50 per lead average
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    autoFocus
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={255}
                    autoComplete="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={15}
                    pattern="[\d\s\-\+\(\)]+"
                    autoComplete="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your phone number (e.g., +91 98765 43210)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    maxLength={100}
                    autoComplete="organization"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interested In *</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select your interest</option>
                    <option value="strategy-call">FREE Strategy Call</option>
                    <option value="complete-package">Complete Package (₹9,999 one-time)</option>
                    <option value="monthly-leads">Monthly Lead Generation (₹9,999/month)</option>
                    <option value="both-packages">Both Packages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your business goals</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={1000}
                    autoComplete="off"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="What are your main challenges with lead generation?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.package}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book My FREE Strategy Call
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-green-500 mr-1" />
                  100% Secure
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-1" />
                  24hr Response
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-purple-500 mr-1" />
                  1000+ Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;