import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Palette, Monitor, ShoppingCart,
  Globe, Layers, Image, TrendingUp, Package, Phone,
} from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

const SERVICE_LINKS = [
  { label: 'Logo Design', href: '/services/logo-design', icon: Palette, color: 'text-amber-500', desc: 'Brand marks & identity' },
  { label: 'AI Website Design', href: '/services/ai-website-design', icon: Monitor, color: 'text-green-500', desc: 'Fast, smart web builds' },
  { label: 'Shopify Design', href: '/services/shopify-design', icon: ShoppingCart, color: 'text-emerald-600', desc: 'eCommerce stores' },
  { label: 'WordPress Design', href: '/services/wordpress-design', icon: Globe, color: 'text-sky-500', desc: 'Custom WP themes' },
  { label: 'Brand Identity', href: '/services/brand-identity', icon: Layers, color: 'text-orange-500', desc: 'Visual systems & style' },
  { label: 'Social Media Design', href: '/services/social-media-design', icon: Image, color: 'text-rose-500', desc: 'Posts, reels & banners' },
  { label: 'Digital Marketing', href: '/services/digital-marketing', icon: TrendingUp, color: 'text-teal-500', desc: 'SEO, ads & growth' },
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      items[(currentIndex + 1) % items.length]?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-gray-950'
      }`}
      aria-label="Main navigation"
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500 via-green-400 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 group"
            aria-label="Daily Creative Designs — Home"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Palette size={16} className="text-white" />
              </div>
              <div className="leading-none">
                <span className="text-lg font-black text-white tracking-tight">Daily Creative</span>
                <span className="text-lg font-black bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent tracking-tight"> Designs</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef} onKeyDown={handleServicesKeyDown}>
              <button
                ref={servicesButtonRef}
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-expanded={isServicesOpen}
                aria-haspopup="menu"
                aria-controls="services-dropdown"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                  isServicesActive
                    ? 'text-teal-400 bg-teal-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Services
                <ChevronDown
                  size={13}
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50"
                  style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.18)' }}
                >
                  {/* Dropdown header */}
                  <div className="px-4 py-3 border-b border-gray-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Services</span>
                    <Link
                      to="/services"
                      role="menuitem"
                      className="text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                    >
                      View all
                      <ChevronDown size={11} className="-rotate-90" />
                    </Link>
                  </div>

                  <div className="px-2">
                    {SERVICE_LINKS.map((svc) => {
                      const Icon = svc.icon;
                      const isActive = location.pathname === svc.href;
                      return (
                        <Link
                          key={svc.href}
                          to={svc.href}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                            isActive ? 'bg-teal-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-teal-100' : 'bg-gray-100 group-hover:bg-gray-200'
                          } transition-colors`}>
                            <Icon size={15} className={svc.color} aria-hidden="true" />
                          </div>
                          <div>
                            <div className={`text-sm font-semibold leading-tight ${isActive ? 'text-teal-700' : 'text-gray-800'}`}>
                              {svc.label}
                            </div>
                            <div className="text-xs text-gray-400 leading-tight">{svc.desc}</div>
                          </div>
                          {isActive && <span className="sr-only">(current page)</span>}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown footer CTA */}
                  <div className="px-4 pt-3 pb-2 mt-1 border-t border-gray-100">
                    <Link
                      to="/services"
                      role="menuitem"
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <Package size={13} />
                      View Complete Packages
                    </Link>
                  </div>
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
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-teal-400 bg-teal-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
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
              className="ml-3 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-md shadow-teal-900/30 hover:shadow-teal-700/30 hover:-translate-y-px"
            >
              <Phone size={13} />
              Book Free Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
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
          className="md:hidden bg-gray-950 border-t border-white/5"
        >
          <div className="px-3 pt-3 pb-5 space-y-0.5">

            {/* Services accordion */}
            <button
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              aria-expanded={isMobileServicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 text-sm font-semibold rounded-xl min-h-[44px] transition-colors"
            >
              Services
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileServicesOpen && (
              <div id="mobile-services-menu" className="ml-2 mr-1 space-y-0.5 bg-white/5 rounded-xl p-2">
                <Link to="/services" className="block text-teal-400 hover:text-teal-300 px-3 py-2 text-sm font-bold min-h-[44px] flex items-center gap-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Package size={14} />
                  View Complete Packages
                </Link>
                {SERVICE_LINKS.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      to={svc.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium min-h-[44px] rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Icon size={14} className={svc.color} aria-hidden="true" />
                      <span>{svc.label}</span>
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
                  className={`flex items-center text-sm font-semibold px-3 py-2.5 rounded-xl min-h-[44px] transition-colors ${
                    isActive
                      ? 'text-teal-400 bg-teal-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
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
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 text-white px-3 py-3 text-sm font-bold text-center rounded-xl mt-3 hover:from-teal-400 hover:to-green-400 transition-all min-h-[44px] shadow-md"
            >
              <Phone size={14} />
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
