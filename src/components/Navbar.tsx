import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

const NAV_LINKS = [
  { label: 'Our Services', href: '/services', type: 'link' as const },
  { label: 'Masterclass', section: 'hero', type: 'scroll' as const },
  { label: 'Pricing', section: 'pricing', type: 'scroll' as const },
  { label: 'Testimonials', section: 'testimonials', type: 'scroll' as const },
  { label: 'FAQ', section: 'faq', type: 'scroll' as const },
  { label: 'Contact', section: 'contact', type: 'scroll' as const },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScrollLink = (section: string) => {
    setIsMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 backdrop-blur-md z-50 border-b border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-black text-yellow-400">
              Daily Creative <span className="text-amber-400">Designs</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              if (link.type === 'link') {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className={`px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-yellow-300 border-b-2 border-yellow-400'
                        : 'text-white hover:text-yellow-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleScrollLink(link.section!)}
                  className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-semibold transition-colors"
                >
                  {link.label}
                </button>
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

          <button
            className="md:hidden text-white hover:text-yellow-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 border-t border-green-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.type === 'link') {
                return (
                  <Link
                    key={link.label}
                    to={link.href!}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleScrollLink(link.section!)}
                  className="block text-white hover:text-yellow-300 px-3 py-2 text-base font-semibold w-full text-left"
                >
                  {link.label}
                </button>
              );
            })}
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
