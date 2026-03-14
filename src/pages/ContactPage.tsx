import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Send,
  Calendar,
} from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi, I'm interested in your design services";

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await new Promise((res) => setTimeout(res, 1000));
      navigate('/thank-you');
    } catch {
      setSubmitError('Something went wrong. Please try again or reach us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-3.5 w-3.5" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Let's Build Your{' '}
            <span className="text-yellow-400">Brand Together</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to talk through your options, we are here to help.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:+917837319660`}
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl px-6 py-5 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">Call Us</p>
                <p className="font-bold text-gray-900 text-sm">+91 78373 19660</p>
                <p className="text-xs text-gray-500">9 AM – 9 PM</p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl px-6 py-5 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">WhatsApp</p>
                <p className="font-bold text-gray-900 text-sm">Chat Now</p>
                <p className="text-xs text-gray-500">Instant responses</p>
              </div>
            </a>

            <a
              href="mailto:design@creativedaily.com"
              className="flex items-center gap-4 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-2xl px-6 py-5 transition-colors group"
            >
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-0.5">Email</p>
                <p className="font-bold text-gray-900 text-sm">design@creativedaily.com</p>
                <p className="text-xs text-gray-500">Reply within 2 hours</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill in the form and we will get back to you within 2 hours during business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Name</label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="logo">Logo Design — $299</option>
                    <option value="website">AI Website Design — $499</option>
                    <option value="complete">Complete Digital Package — $999</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white resize-none"
                  />
                </div>

                {submitError && (
                  <p className="text-red-600 text-sm font-medium">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-all shadow-md hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-black text-gray-900 mb-5">Why Work With Us</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "12+ years of brand design expertise" },
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "5,000+ successful brand transformations" },
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "Unlimited revisions until you love it" },
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "48-hour turnaround on logo projects" },
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "100% satisfaction guarantee" },
                    { icon: <CheckCircle className="h-4.5 w-4.5 text-green-500" />, text: "Full ownership of all final files" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      {item.icon}
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-black text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Mon – Sat</p>
                      <p className="text-xs text-gray-500">9:00 AM – 9:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">India</p>
                      <p className="text-xs text-gray-500">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-7 text-white">
                <Calendar className="h-8 w-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-black mb-2">Prefer a Call?</h3>
                <p className="text-green-100 text-sm mb-4">Book a free 30-minute discovery call and talk directly with our design team.</p>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                >
                  Book Free Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-black">
            Daily Creative <span className="text-yellow-400">Designs</span>
          </Link>
          <p className="text-gray-400 text-sm">© 2025 Daily Creative Designs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
