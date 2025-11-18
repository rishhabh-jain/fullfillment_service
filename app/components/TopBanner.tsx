"use client";

export default function TopBanner() {
  return (
    <>
      {/* Fixed banner */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-2 px-4 z-[60]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium">
            <span className="text-yellow-400 font-semibold">Limited Offer:</span>{" "}
            <span className="hidden sm:inline">First month storage FREE for new clients — </span>
            <span className="sm:hidden">Free storage 1st month — </span>
            <a
              href="#contact"
              className="underline hover:text-yellow-400 transition-colors"
            >
              Claim Now
            </a>
          </p>
        </div>
      </div>
      {/* Spacer to prevent content from going under fixed banner */}
      <div className="h-9 sm:h-10" />
    </>
  );
}
