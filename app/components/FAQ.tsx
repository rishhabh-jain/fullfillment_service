"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the shipping label process work?",
    answer:
      "You generate shipping labels through your preferred shipping aggregator or courier partner. When you send us an order, include the shipping label. We print it, attach it to the package, and your courier picks it up. This gives you full control over shipping costs and carrier selection.",
  },
  {
    question: "Which shipping aggregators do you support?",
    answer:
      "We integrate seamlessly with all major shipping aggregators including Shiprocket, Delhivery, Pickrr, Shipmozo, Ecom Express, XpressBees, Shadowfax, BlueDart, DTDC, Ekart, and more. Whatever shipping partner you use, we'll work with them. You maintain full control over your shipping rates and carrier selection.",
  },
  {
    question: "What types of products can you handle?",
    answer:
      "We handle most D2C products including apparel, accessories, cosmetics, electronics, home goods, and food items (non-perishable). We have climate-controlled storage for sensitive products. For specialized requirements, please contact us for a custom assessment.",
  },
  {
    question: "How do you track my inventory?",
    answer:
      "We provide real-time inventory tracking through our dashboard. You can see stock levels, movement history, and receive automated low-stock alerts. We conduct regular cycle counts to ensure accuracy and provide monthly inventory reports.",
  },
  {
    question: "What's your order processing time?",
    answer:
      "Orders received before 2 PM are processed the same day. Orders received after 2 PM are processed the next business day. For high-volume periods like sales, we can arrange extended processing hours with advance notice.",
  },
  {
    question: "How do I send you orders daily?",
    answer:
      "You can send orders via our online dashboard, API integration, or even a simple Excel sheet via email. We'll work with your existing systems to make the process as seamless as possible. Most clients use our dashboard or integrate with platforms like Shopify and WooCommerce.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-gray-200"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100 last:border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-gray-700 py-5 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
