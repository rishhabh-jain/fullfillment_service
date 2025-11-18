"use client";

import { motion } from "framer-motion";
import { PackageCheck, Warehouse, Gift, RotateCcw } from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    title: "Pick & Pack Fulfillment",
    description:
      "Accurate order picking and professional packing with your provided shipping labels",
  },
  {
    icon: Warehouse,
    title: "Inventory Storage",
    description:
      "Secure, organized storage with real-time tracking and low-stock alerts",
  },
  {
    icon: Gift,
    title: "Kitting & Assembly",
    description:
      "Combo pack creation, gift wrapping, and custom assembly services",
  },
  {
    icon: RotateCcw,
    title: "Returns Processing",
    description:
      "RTO management, quality checks, and restocking services",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            What We Offer
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Comprehensive fulfillment solutions tailored for D2C brands
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-6 hover:border-gray-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                <service.icon className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
