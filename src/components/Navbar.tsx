import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Palette, Monitor, ShoppingCart,
  Globe, Layers, Image, TrendingUp, Package, Phone,
  Star, ArrowRight, Zap, BadgeCheck, Sparkles,
} from 'lucide-react';

const BOOKING_LINK = "https://tidycal.com/harmanpreetsingh/get-consulation";

const SERVICE_LINKS = [
  {
    label: 'Logo Design',
    href: '/services/logo-design',
    icon: Palette,
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    desc: 'Memorable brand marks that sell',
  },
  {
    label: 'AI Website Design',
    href: '/services/ai-website-design',
    icon: Monitor,
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    desc: 'High-converting sites, built fast',
  },
  {
    label: 'Shopify Design',
    href: '/services/shopify-design',
    icon: ShoppingCart,
    bg: 'bg-green-50',
    iconColor: 'text-green-600',
    desc: 'eCommerce that drives revenue',
  },
  {
    label: 'WordPress Design',
    href: '/services/wordpress-design',
    icon: Globe,
    bg: 'bg-sky-50',
    iconColor: 'text-sky-500',
    desc: 'Scalable, SEO-ready websites',
  },
  {
    label: 'Brand Identity',
    href: '/services/brand-identity',
    icon: Layers,
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    desc: 'Systems that make you unforgettable',
  },
  {
    label: 'Social Media Design',
    href: '/services/social-media-design',
    icon: Image,
    bg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    desc: 'Content that stops the scroll',
  },
  {
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    icon: TrendingUp,
    bg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    desc: 'SEO, ads & measurable growth',
  },
];

const NAV_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const TRUST_STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '5.0', label: 'Avg Rating', icon: Star },
  { value: '48h', label: 'Avg Turnaround' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      dropdownMenuRef.current?.querySelector<HTMLElement>('a, button')?.focus();
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
    const idx = Array.from(items).indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed top-0 w-full z-50">

      {/* ── Announcement Bar ── */}
      {announcementVisible && (
        <div className="relative bg-gradient-to-r from-green-600 via-teal-600 to-green-600 text-white text-xs font-semibold py-2 px-4 text-center">
          <span className="inline-flex items-center gap-2">
            <Zap size={11} className="text-yellow-300 flex-shrink-0" />
            <span>
              Limited slots this month —{' '}
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-yellow-200 transition-colors font-bold"
              >
                Book your free strategy call now
              </a>
              {' '}and get a free brand audit
            </span>
            <Zap size={11} className="text-yellow-300 flex-shrink-0" />
          </span>
          <button
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* ── Main Navbar ── */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[66px]">

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex-shrink-0 group"
              aria-label="Daily Creative Designs — Home"
            >
              <div className="flex items-center gap-2.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                  className="flex-shrink-0 drop-shadow-sm group-hover:drop-shadow-md transition-all"
                >
                  <rect x="14" y="1" width="18.38" height="18.38" rx="2" transform="rotate(45 14 1)" fill="#16a34a" />
                </svg>
                <span className="text-[17px] font-black text-gray-900 tracking-tight whitespace-nowrap">
                  Daily Creative <span className="text-green-600">Designs</span>
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">

              {/* Services Mega Dropdown */}
              <div className="relative" ref={dropdownRef} onKeyDown={handleServicesKeyDown}>
                <button
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesOpen((v) => !v)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="menu"
                  aria-controls="services-dropdown"
                  className={`flex items-center gap-1 px-4 py-2.5 text-[13.5px] font-semibold rounded-lg transition-all duration-150 ${
                    isServicesActive || isServicesOpen
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Services
                  <ChevronDown
                    size={13}
                    aria-hidden="true"
                    className={`transition-transform duration-200 mt-px ${isServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    id="services-dropdown"
                    ref={dropdownMenuRef}
                    role="menu"
                    aria-label="Services menu"
                    onKeyDown={handleDropdownKeyDown}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                    style={{ width: '680px' }}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 z-10" />

                    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">

                      {/* Dropdown top bar */}
                      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50 bg-gray-50/60">
                        <div>
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">What we do</p>
                          <p className="text-sm font-bold text-gray-800">Design & Marketing Services</p>
                        </div>
                        <Link
                          to="/services"
                          role="menuitem"
                          className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
                        >
                          <Package size={12} />
                          All Packages
                          <ArrowRight size={11} />
                        </Link>
                      </div>

                      {/* Service grid */}
                      <div className="grid grid-cols-2 gap-0.5 p-3 bg-gray-50/40">
                        {SERVICE_LINKS.map((svc) => {
                          const Icon = svc.icon;
                          const isActive = location.pathname === svc.href;
                          return (
                            <Link
                              key={svc.href}
                              to={svc.href}
                              role="menuitem"
                              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all group ${
                                isActive ? 'bg-green-50 ring-1 ring-green-200' : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${svc.bg} transition-transform group-hover:scale-110`}>
                                <Icon size={16} className={svc.iconColor} aria-hidden="true" />
                              </div>
                              <div className="min-w-0">
                                <div className={`text-[13px] font-bold leading-tight truncate ${isActive ? 'text-green-700' : 'text-gray-800'}`}>
                                  {svc.label}
                                </div>
                                <div className="text-[11px] text-gray-400 leading-tight mt-0.5 truncate">{svc.desc}</div>
                              </div>
                              {isActive && <span className="sr-only">(current page)</span>}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown bottom trust bar */}
                      <div className="flex items-center gap-6 px-5 py-3 border-t border-gray-100 bg-white">
                        {TRUST_STATS.map((s) => (
                          <div key={s.label} className="flex items-center gap-1.5">
                            {s.icon && <s.icon size={12} className="text-yellow-400 fill-yellow-400" />}
                            <span className="text-sm font-black text-gray-900">{s.value}</span>
                            <span className="text-[11px] text-gray-400">{s.label}</span>
                          </div>
                        ))}
                        <div className="ml-auto flex items-center gap-1.5">
                          <BadgeCheck size={13} className="text-green-500" />
                          <span className="text-[11px] text-gray-500 font-semibold">Trusted by 50+ businesses</span>
                        </div>
                      </div>
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
                    className={`px-4 py-2.5 text-[13.5px] font-semibold rounded-lg transition-all duration-150 ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a free quote"
                className="px-4 py-2.5 text-[13.5px] font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-150 border border-gray-200 hover:border-gray-300"
              >
                Free Quote
              </a>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free strategy call (opens in new tab)"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-[13.5px] font-bold transition-all duration-200 shadow-md shadow-green-200 hover:shadow-green-300 hover:-translate-y-px active:translate-y-0"
              >
                <Phone size={13} />
                Book Free Call
              </a>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden text-gray-700 hover:text-gray-900 p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen
                ? <X className="h-5 w-5" aria-hidden="true" />
                : <Menu className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 pt-3 pb-5 space-y-1">

              {/* Services accordion */}
              <button
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-menu"
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-3 text-sm font-semibold rounded-xl min-h-[44px] transition-colors border border-transparent hover:border-gray-100"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-green-500" />
                  Services
                </span>
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div id="mobile-services-menu" className="ml-1 mr-0 space-y-0.5 bg-gray-50 rounded-2xl p-2 border border-gray-100">
                  <Link
                    to="/services"
                    className="flex items-center gap-2.5 text-green-700 font-bold px-3 py-2.5 text-sm min-h-[44px] rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <Package size={14} className="text-green-600" />
                    View All Packages & Pricing
                    <ArrowRight size={13} className="ml-auto" />
                  </Link>
                  {SERVICE_LINKS.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-3 py-2.5 text-sm font-medium min-h-[44px] rounded-xl hover:bg-white hover:shadow-sm transition-all"
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${svc.bg}`}>
                          <Icon size={13} className={svc.iconColor} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="font-semibold text-[13px]">{svc.label}</div>
                          <div className="text-[11px] text-gray-400">{svc.desc}</div>
                        </div>
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
                    className={`flex items-center text-sm font-semibold px-3 py-3 rounded-xl min-h-[44px] transition-colors ${
                      isActive
                        ? 'text-green-700 bg-green-50 border border-green-100'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA block */}
              <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 font-semibold text-sm py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[44px]"
                >
                  Get a Free Quote
                </a>
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a free call (opens in new tab)"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all min-h-[44px] shadow-md shadow-green-200"
                >
                  <Phone size={14} />
                  Book Free Strategy Call
                </a>

                {/* Mobile trust signals */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label} className="flex flex-col items-center">
                      <span className="text-sm font-black text-gray-900 leading-none">{s.value}</span>
                      <span className="text-[10px] text-gray-400 leading-none mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
