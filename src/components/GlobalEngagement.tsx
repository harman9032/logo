import { useState, useEffect, useRef, useCallback } from 'react';
import { X, MessageCircle, ArrowRight, Gift, Mail } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20your%20design%20services";
const BOOKING_LINK = "https://rzp.io/rzp/x16Tmd2";

function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    if (!hasShownTooltip) {
      const timer = setTimeout(() => {
        setIsTooltipVisible(true);
        setHasShownTooltip(true);
        setTimeout(() => setIsTooltipVisible(false), 5000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasShownTooltip]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isTooltipVisible && (
        <div
          role="status"
          aria-live="polite"
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 max-w-[220px] animate-fade-slide-up"
        >
          <p className="text-xs font-bold text-gray-900 mb-0.5">Chat with us now</p>
          <p className="text-xs text-gray-500">We typically reply in minutes</p>
          <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" aria-hidden="true" />
        </div>
      )}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        aria-label="Chat with us on WhatsApp (opens in new tab)"
        className="group w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 ring-4 ring-[#25D366]/20"
      >
        <MessageCircle className="h-7 w-7 text-white fill-current" aria-hidden="true" />
      </a>
    </div>
  );
}

function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const mouseYRef = useRef(0);
  const shownRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const triggerPopup = useCallback(() => {
    const sessionKey = 'exit_popup_shown';
    if (shownRef.current || sessionStorage.getItem(sessionKey)) return;
    shownRef.current = true;
    sessionStorage.setItem(sessionKey, '1');
    previousFocusRef.current = document.activeElement as HTMLElement;
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const sessionKey = 'exit_popup_shown';
    if (sessionStorage.getItem(sessionKey)) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseYRef.current = e.clientY;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && mouseYRef.current > 100) {
        triggerPopup();
      }
    };

    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768) triggerPopup();
    }, 30000);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [triggerPopup]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          close();
        }
        if (e.key === 'Tab') {
          const dialog = document.getElementById('exit-intent-dialog');
          if (!dialog) return;
          const focusable = dialog.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const close = () => {
    setIsVisible(false);
    previousFocusRef.current?.focus();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      <div
        id="exit-intent-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-slide-up"
      >
        <button
          ref={closeButtonRef}
          onClick={close}
          aria-label="Close offer popup"
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="h-4 w-4 text-gray-700" aria-hidden="true" />
        </button>

        <div className="bg-gradient-to-br from-green-600 to-emerald-700 px-8 pt-8 pb-6 text-white text-center">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4" aria-hidden="true">
            <Gift className="h-7 w-7 text-yellow-300" />
          </div>
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Free Offer
          </div>
          <h2 id="popup-title" className="text-2xl font-black leading-tight mb-2">
            Get Your Free<br />Brand Audit Report
          </h2>
          <p id="popup-description" className="text-green-100 text-sm leading-relaxed">
            We'll review your current brand and tell you exactly what's costing you clients — at no charge.
          </p>
        </div>

        <div className="px-8 py-6">
          {!submitted ? (
            <>
              <ul className="flex flex-col gap-2.5 mb-5 list-none" aria-label="What's included in your free audit">
                {[
                  'Your logo strength score',
                  'Website conversion gaps',
                  '3 quick wins to attract premium clients',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
                  <label htmlFor="popup-email" className="sr-only">Email address for your free brand audit</label>
                  <input
                    ref={firstFocusableRef}
                    id="popup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your best email address"
                    required
                    autoComplete="email"
                    aria-required="true"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  Send Me the Free Audit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              <div className="mt-3 text-center">
                <button
                  onClick={close}
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors min-h-[44px] px-4"
                >
                  No thanks, I'll pass on the free audit
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-4" role="status" aria-live="polite">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">You're in!</h3>
              <p className="text-gray-500 text-sm mb-5">Check your inbox in the next few minutes. While you wait, book a free call to discuss your brand.</p>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free strategy call (opens in new tab)"
                className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-green-500 transition-all duration-200"
              >
                Book Free Strategy Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GlobalEngagement() {
  return (
    <>
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
