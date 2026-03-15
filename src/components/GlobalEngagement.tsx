import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi%2C%20I%27m%20interested%20in%20your%20design%20services";

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

export default function GlobalEngagement() {
  return <WhatsAppButton />;
}
