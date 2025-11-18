"use client";

import { motion } from "framer-motion";
import { Package, Warehouse, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "Send Your Inventory",
    description: "Ship your products to our warehouse in bulk",
  },
  {
    icon: Warehouse,
    number: "02",
    title: "We Store & Track",
    description: "Your inventory is organized, tracked, and ready",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Orders Get Packed",
    description: "Send us order details + label, we pack and prep for courier",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 border border-gray-100 p-8 h-full">
                <span className="text-6xl font-bold text-gray-100 absolute top-4 right-6">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                    <step.icon className="h-5 w-5 text-gray-900" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-l-2 border-primary pl-6"
        >
          <p className="text-sm text-gray-600 mb-2">
            <strong className="text-gray-900">Note:</strong> You handle shipping labels & costs. We handle everything else.
          </p>
          <p className="text-xs text-gray-400">
            Integrations: Shiprocket, Delhivery, Pickrr, Shipmozo, Ecom Express, XpressBees, Shadowfax, BlueDart, DTDC, Ekart & more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
