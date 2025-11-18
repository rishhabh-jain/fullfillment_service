"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "StyleBox India",
    text: "Switched from self-fulfillment to OrderPack. Our dispatch time went from 3 days to same-day. Customer complaints dropped 80%.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "GlowUp Cosmetics",
    text: "Finally a 3PL that understands D2C. Transparent pricing, no hidden fees, and the location in Gurgaon means faster delivery to North India.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "FitGear Pro",
    text: "We scaled from 200 to 2000 orders/month without hiring. OrderPack handled the growth seamlessly. Best decision for our business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Trusted by D2C Brands
          </h2>
          <p className="mt-4 text-gray-600">
            See what our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
