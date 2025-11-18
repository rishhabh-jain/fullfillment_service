"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Truck,
  Clock,
  BarChart3,
  TrendingUp,
  Receipt,
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Delhi NCR Location",
    description: "Fast access for local brands",
  },
  {
    icon: Truck,
    title: "No Shipping Hassles",
    description: "You control shipping, we control fulfillment",
  },
  {
    icon: Clock,
    title: "24-Hour Processing",
    description: "Orders packed same/next day",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    description: "Know your inventory status anytime",
  },
  {
    icon: TrendingUp,
    title: "Flexible Scaling",
    description: "Grow from 100 to 10,000 orders/month",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description: "No hidden fees, clear monthly billing",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 bg-white">
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
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Why Choose OrderPack
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Built for D2C brands that want reliability and transparency
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-6 hover:border-gray-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                <benefit.icon className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
