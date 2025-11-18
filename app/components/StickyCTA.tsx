"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex gap-2">
        <a
          href="tel:+919561079271"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 font-medium text-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="https://wa.me/919561079271?text=Hi%2C%20I%27m%20interested%20in%20your%20fulfillment%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 font-medium text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
