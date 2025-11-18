"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ShieldCheck, Target, ArrowRight } from "lucide-react";

const trustIndicators = [
  { icon: Clock, text: "24-Hour Processing" },
  { icon: ShieldCheck, text: "Secure Storage" },
  { icon: Target, text: "99.9% Accuracy" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafafa] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-6">
                3PL Fulfillment Partner
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Focus on Selling.
                <br />
                <span className="text-gray-400">We&apos;ll Handle</span>
                <br />
                <span className="text-gray-400">the Packing.</span>
              </h1>

              <p className="text-lg text-gray-600 mb-4 max-w-md leading-relaxed">
                Professional fulfillment for D2C brands.
                You provide the label, we do the rest.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 mb-8">
                <span className="text-xs font-semibold tracking-wide">LOCATION:</span>
                <span className="text-sm font-medium">Gurgaon, Delhi NCR</span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-500"
                  >
                    <indicator.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  asChild
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 h-12 font-medium"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-gray-300 hover:border-gray-900 rounded-none px-8 h-12 font-medium"
                >
                  <a href="tel:+919561079271" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</p>
                  <p className="text-xs text-gray-500 mt-1">Orders Fulfilled</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">99.9%</p>
                  <p className="text-xs text-gray-500 mt-1">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">24hr</p>
                  <p className="text-xs text-gray-500 mt-1">Processing</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-gray-200 p-8 lg:p-10 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Us
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Get in touch to start your fulfillment journey
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919561079271"
                  className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Call Now</p>
                    <p className="text-sm text-gray-500">+91 95610 79271</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </a>

                <a
                  href="https://wa.me/919561079271?text=Hi%2C%20I%27m%20interested%20in%20your%20fulfillment%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-green-200 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-500">Quick response</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </a>

              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-gray-900 text-white p-4">
                  <p className="text-xs font-semibold tracking-wide mb-1">WAREHOUSE LOCATION</p>
                  <p className="text-sm font-medium">Sector 55, Gurgaon, Delhi NCR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
