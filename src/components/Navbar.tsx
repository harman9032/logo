import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Palette, Monitor, ShoppingCart, Globe, Layers, Image, TrendingUp, Package } from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const SERVICE_LINKS = [
  { label: 'Logo Design', href: '/services/logo-design', icon: Palette, color: 'text-amber-500' },
  { label: 'AI Website Design', href: '/services/ai-website-design', icon: Monitor, color: 'text-green-500' },
  { label: 'Shopify Design', href: '/services/shopify-design', icon: ShoppingCart, color: 'text-emerald-600' },
  { label: 'WordPress Design', href: '/services/wordpress-design', icon: Globe, color: 'text-sky-500' },
  { label: 'Brand Identity', href: '/services/brand-identity', icon: Layers, color: 'text-orange-500' },
  { label: 'Social Media Design', href: '/services/social-media-design', icon: Image, color: 'text-rose-500' },
  { label: 'Digital Marketing', href: '/services/digital-marketing', icon: TrendingUp, color: 'text-teal-500' },
  { label: 'Complete Package', href: '/services', icon: Package, color: 'text-slate-400' },
];

const NAV_LINKS = [
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 backdrop-blur-md z-50 border-b border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-black text-yellow-400">
              Daily Creative <span className="text-amber-400">Designs</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                  isServicesActive ? 'text-yellow-300 border-b-2 border-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                Our Services
                <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50">
                  <div className="px-3 py-2 border-b border-gray-100 mb-1">
                    <Link to="/services" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-green-700 transition-colors">
                      View All Services →
                    </Link>
                  </div>
                  {SERVICE_LINKS.map((svc) => {
                    const Icon = svc.icon;
                    const isActive = location.pathname === svc.href;
                    return (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${isActive ? 'bg-green-50' : ''}`}
                      >
                        <Icon size={16} className={svc.color} />
                        <span className={`text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}`}>{svc.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-yellow-300 border-b-2 border-yellow-400' : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-yellow-400 text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all duration-300 shadow-md"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-yellow-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 border-t border-green-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Services accordion */}
            <button
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold"
            >
              Our Services
              <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileServicesOpen && (
              <div className="ml-4 space-y-0.5 bg-green-800/50 rounded-xl p-2">
                <Link to="/services" className="block text-green-200 hover:text-yellow-300 px-3 py-2 text-sm font-bold">
                  View All Services →
                </Link>
                {SERVICE_LINKS.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      to={svc.href}
                      className="flex items-center gap-2 text-green-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium"
                    >
                      <Icon size={14} className={svc.color} />
                      {svc.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-400 text-black px-3 py-2 text-base font-bold text-center rounded-lg mx-3 mt-4 hover:bg-yellow-300 transition-colors"
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
