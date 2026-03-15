import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Palette, Monitor, ShoppingCart, Globe, Layers, Image, TrendingUp, Package } from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

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
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

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

  const handleServicesKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsServicesOpen(false);
      servicesButtonRef.current?.focus();
    }
    if (e.key === 'ArrowDown' && isServicesOpen) {
      e.preventDefault();
      const firstItem = dropdownMenuRef.current?.querySelector<HTMLElement>('a, button');
      firstItem?.focus();
    }
  }, [isServicesOpen]);

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      setIsServicesOpen(false);
      servicesButtonRef.current?.focus();
      return;
    }
    const items = dropdownMenuRef.current?.querySelectorAll<HTMLElement>('a, button');
    if (!items || items.length === 0) return;
    const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[(currentIndex + 1) % items.length];
      next?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    }
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className="fixed top-0 w-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 backdrop-blur-md z-50 border-b border-green-900"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="Daily Creative Designs — Home"
          >
            <span className="text-2xl font-black text-yellow-400">
              Daily Creative <span className="text-amber-400">Designs</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef} onKeyDown={handleServicesKeyDown}>
              <button
                ref={servicesButtonRef}
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-expanded={isServicesOpen}
                aria-haspopup="menu"
                aria-controls="services-dropdown"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                  isServicesActive ? 'text-yellow-300 border-b-2 border-yellow-400' : 'text-white hover:text-yellow-300'
                }`}
              >
                Our Services
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isServicesOpen && (
                <div
                  id="services-dropdown"
                  ref={dropdownMenuRef}
                  role="menu"
                  aria-label="Services menu"
                  onKeyDown={handleDropdownKeyDown}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50"
                >
                  <div className="px-3 py-2 border-b border-gray-100 mb-1">
                    <Link
                      to="/services"
                      role="menuitem"
                      className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-green-700 transition-colors"
                    >
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
                        role="menuitem"
                        className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${isActive ? 'bg-green-50' : ''}`}
                      >
                        <Icon size={16} className={svc.color} aria-hidden="true" />
                        <span className={`text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}`}>{svc.label}</span>
                        {isActive && <span className="sr-only">(current page)</span>}
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
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
              aria-label="Book a free call (opens in new tab)"
              className="ml-4 bg-yellow-400 text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all duration-200 shadow-md"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white hover:text-yellow-300 p-2 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen
              ? <X className="h-6 w-6" aria-hidden="true" />
              : <Menu className="h-6 w-6" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="md:hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 border-t border-green-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Services accordion */}
            <button
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              aria-expanded={isMobileServicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-between text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold rounded-md min-h-[44px]"
            >
              Our Services
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileServicesOpen && (
              <div id="mobile-services-menu" className="ml-4 space-y-0.5 bg-green-800/50 rounded-xl p-2">
                <Link to="/services" className="block text-green-200 hover:text-yellow-300 px-3 py-2 text-sm font-bold min-h-[44px] flex items-center">
                  View All Services →
                </Link>
                {SERVICE_LINKS.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      to={svc.href}
                      className="flex items-center gap-2 text-green-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium min-h-[44px]"
                    >
                      <Icon size={14} className={svc.color} aria-hidden="true" />
                      {svc.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold rounded-md min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free call (opens in new tab)"
              className="block bg-yellow-400 text-black px-3 py-3 text-base font-bold text-center rounded-lg mx-3 mt-4 hover:bg-yellow-300 transition-colors min-h-[44px]"
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
