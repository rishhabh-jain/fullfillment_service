"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-2.5 px-4 z-[60]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium">
          <span className="text-yellow-400 font-semibold">Limited Offer:</span>{" "}
          First month storage FREE for new clients
          <span className="hidden sm:inline"> — </span>
          <a
            href="#contact"
            className="underline hover:text-yellow-400 transition-colors sm:ml-0 block sm:inline mt-1 sm:mt-0"
          >
            Claim Now
          </a>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
