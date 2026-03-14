import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
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
  AlertCircle,
} from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi, I'm interested in your design services";

const INPUT_BASE = "w-full border rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-white transition-colors duration-200";
const INPUT_NORMAL = `${INPUT_BASE} border-gray-200 focus:ring-green-500`;
const INPUT_ERROR = `${INPUT_BASE} border-red-400 focus:ring-red-400`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  business: string;
  package: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your full name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Please tell us about your project.';
  return errors;
}

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name as keyof FormData]) {
      const newErrors = validateForm(updated);
      setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = validateForm(formData);
    setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<keyof FormData, boolean>> = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach(k => { allTouched[k] = true; });
    setTouched(allTouched);
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await new Promise((res) => setTimeout(res, 1000));
      navigate('/thank-you');
    } catch {
      setSubmitError('Failed to send message. Please check your connection and try again, or email us directly at sales@dailycreativedesigns.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field: keyof FormData) =>
    errors[field] && touched[field] ? INPUT_ERROR : INPUT_NORMAL;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="Contact Us — Get a Free Brand Audit" description="Contact Daily Creative Designs for a free brand audit, project quote, or just to say hello. We respond within 2 hours during business hours." canonical="/contact" />
      <Navbar />
      <main id="main-content">

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
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

      <section className="py-8 bg-white border-b border-gray-100" aria-label="Contact options">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="tel:+917837319660"
              aria-label="Call us at +91 78373 19660"
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl px-6 py-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">Call Us</p>
                <p className="font-bold text-gray-900 text-sm">+91 78373 19660</p>
                <p className="text-xs text-gray-500">9 AM – 9 PM IST</p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp (opens in new tab)"
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl px-6 py-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">WhatsApp</p>
                <p className="font-bold text-gray-900 text-sm">Chat Now</p>
                <p className="text-xs text-gray-500">Instant responses</p>
              </div>
            </a>

            <a
              href="mailto:sales@dailycreativedesigns.com"
              aria-label="Email us at sales@dailycreativedesigns.com"
              className="flex items-center gap-4 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-2xl px-6 py-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-0.5">Email</p>
                <p className="font-bold text-gray-900 text-sm">sales@dailycreativedesigns.com</p>
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
              <p className="text-gray-500 mb-2">Fields marked with <span aria-label="required">*</span> are required. We'll reply within 2 hours during business hours.</p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-8"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      className={fieldClass('name')}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-red-600 text-xs font-medium">
                        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@company.com"
                      className={fieldClass('email')}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-red-600 text-xs font-medium">
                        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 99999 99999"
                      className={fieldClass('phone')}
                    />
                    <p className="mt-1 text-xs text-gray-400">We'll use this to schedule your free call</p>
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Business Name <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      autoComplete="organization"
                      value={formData.business}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your company name"
                      className={fieldClass('business')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-package" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Which service interests you?
                  </label>
                  <select
                    id="contact-package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('package')}
                  >
                    <option value="">Select a service...</option>
                    <option value="logo">Logo Design — $299</option>
                    <option value="website">AI Website Design — $499</option>
                    <option value="complete">Complete Digital Package — $999</option>
                    <option value="other">Not sure yet — let's talk</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span aria-label="required" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? 'message-error' : 'message-hint'}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    className={fieldClass('message')}
                  />
                  <p id="message-hint" className="mt-1 text-xs text-gray-400">
                    Briefly describe your business and what you're looking to achieve
                  </p>
                  {errors.message && touched.message && (
                    <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-red-600 text-xs font-medium">
                      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-red-700 text-sm font-medium">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all duration-200 shadow-md hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" aria-hidden="true" />
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
                    "12+ years of brand design expertise",
                    "5,000+ successful brand transformations",
                    "Unlimited revisions until you love it",
                    "48-hour turnaround on logo projects",
                    "100% satisfaction guarantee",
                    "Full ownership of all final files",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <CheckCircle className="h-4.5 w-4.5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-black text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Mon – Sat</p>
                      <p className="text-xs text-gray-500">9:00 AM – 9:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">India</p>
                      <p className="text-xs text-gray-500">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-7 text-white">
                <Calendar className="h-8 w-8 text-yellow-400 mb-3" aria-hidden="true" />
                <h3 className="text-lg font-black mb-2">Prefer a Call?</h3>
                <p className="text-green-100 text-sm mb-4">Book a free 30-minute discovery call and talk directly with our design team.</p>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a free discovery call (opens in new tab)"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200"
                >
                  Book Free Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" aria-label="Daily Creative Designs — Home" className="text-xl font-black">
            Daily Creative <span className="text-yellow-400">Designs</span>
          </Link>
          <p className="text-gray-400 text-sm">© 2026 Daily Creative Designs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
