import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Star } from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

const COMPANY = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white" aria-label="Site footer">
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                ))}
                <span className="text-yellow-200 text-sm font-semibold ml-1">5.0 from 500+ clients</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Ready to transform your brand?
              </h2>
              <p className="text-green-100 mt-1 text-sm">
                Get a free brand audit — no strings attached.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free call (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 border border-white/20"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">

          <div className="md:col-span-5">
            <Link to="/" aria-label="Daily Creative Designs — Home">
              <span className="text-2xl font-black text-white">
                Daily Creative <span className="text-yellow-400">Designs</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-4 mb-6 text-sm leading-relaxed max-w-xs">
              Transforming businesses into memorable brands since 2012. Over 5,000 brands elevated worldwide.
            </p>

            <div className="flex gap-3 mb-8">
              <a
                href="https://facebook.com/dailycreativedesigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dailycreativedesigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/daily-creative-designs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+917837319660"
                aria-label="Call us at +91 78373 19660"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-green-600/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Phone className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                </span>
                <span className="text-sm">+91 78373 19660</span>
              </a>
              <a
                href="mailto:sales@dailycreativedesigns.com"
                aria-label="Email us at sales@dailycreativedesigns.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-green-600/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Mail className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                </span>
                <span className="text-sm">sales@dailycreativedesigns.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                </span>
                <span className="text-sm">India — Serving Clients Globally</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-5">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-0.5 transition-transform duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-5">Business Hours</h3>
            <div className="bg-gray-900 rounded-xl p-4 mb-5 border border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-white">Mon – Sat</span>
                <span className="text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-0.5 rounded-full">Open</span>
              </div>
              <p className="text-gray-400 text-sm">9:00 AM – 9:00 PM IST</p>
              <div className="border-t border-gray-800 mt-3 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-white">Sunday</span>
                  <span className="text-xs text-gray-500 font-semibold bg-gray-800 px-2 py-0.5 rounded-full">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-700/20 border border-green-700/30 rounded-xl p-4">
              <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Response Time</p>
              <p className="text-white font-black text-lg leading-tight">Under 2 Hours</p>
              <p className="text-gray-400 text-xs mt-1">During business hours</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2026 Daily Creative Designs. All rights reserved.
            </p>
            <span className="hidden sm:block text-gray-700">·</span>
            <p className="text-gray-600 text-sm">Elevating brands since 2012</p>
          </div>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LEGAL.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="text-gray-500 hover:text-green-400 text-xs transition-colors duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
