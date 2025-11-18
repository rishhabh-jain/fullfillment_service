"use client";

export default function TopBanner() {
  return (
    <div className="bg-gray-900 text-white py-2.5 px-4">
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
    </div>
  );
}
