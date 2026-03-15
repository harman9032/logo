import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Calendar,
} from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";
const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20your%20design%20services";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Contact Us — Get a Free Brand Audit"
        description="Contact Daily Creative Designs for a free brand audit, project quote, or just to say hello. We respond within 2 hours during business hours."
        canonical="/contact"
      />
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

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-gray-900 mb-3">Reach Us Directly</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Choose the channel that works best for you. We reply within 2 hours during business hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="tel:+917837319660"
                aria-label="Call us at +91 78373 19660"
                className="group flex flex-col items-center text-center bg-white border border-gray-200 hover:border-green-400 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 bg-green-600 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200" aria-hidden="true">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Call Us</p>
                <p className="font-bold text-gray-900 text-base mb-1">+91 78373 19660</p>
                <p className="text-xs text-gray-400">9 AM – 9 PM IST, Mon – Sat</p>
                <span className="mt-4 inline-flex items-center gap-1 text-green-600 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Call now <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp (opens in new tab)"
                className="group flex flex-col items-center text-center bg-white border border-gray-200 hover:border-green-400 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 bg-green-600 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200" aria-hidden="true">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">WhatsApp</p>
                <p className="font-bold text-gray-900 text-base mb-1">Chat With Us</p>
                <p className="text-xs text-gray-400">Instant responses</p>
                <span className="mt-4 inline-flex items-center gap-1 text-green-600 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Open WhatsApp <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>

              <a
                href="mailto:sales@dailycreativedesigns.com"
                aria-label="Email us at sales@dailycreativedesigns.com"
                className="group flex flex-col items-center text-center bg-white border border-gray-200 hover:border-sky-400 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 bg-sky-500 group-hover:bg-sky-400 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200" aria-hidden="true">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-1">Email</p>
                <p className="font-bold text-gray-900 text-base mb-1">sales@dailycreativedesigns.com</p>
                <p className="text-xs text-gray-400">Reply within 2 hours</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sky-600 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Send email <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-black text-gray-900 mb-5">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    "12+ years of brand design expertise",
                    "5,000+ successful brand transformations",
                    "Unlimited revisions until you love it",
                    "48-hour turnaround on logo projects",
                    "100% satisfaction guarantee",
                    "Full ownership of all final files",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
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

                <div className="bg-green-600 rounded-2xl p-7 text-white flex-1">
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
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Daily Creative Designs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
