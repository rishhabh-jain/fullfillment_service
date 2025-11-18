"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const fulfillmentRates = [
  { description: "Inbound per unit", rate: "₹4.00" },
  { description: "Outbound for first unit", rate: "₹10.00" },
  { description: "Additional Unit Outbound", rate: "₹7.00" },
  { description: "Returns", rate: "₹5.00" },
  { description: "RTV (Return to Vendor)", rate: "₹5.00" },
  { description: "Outbound per unit for B2B order", rate: "₹5.00" },
  { description: "Kitting/Labelling (optional)", rate: "₹2.00" },
];

const storageRates = [
  { weight: "< 500 gram", rate: "₹0.10" },
  { weight: "500 gram - 1 kg", rate: "₹0.20" },
  { weight: "1 - 2 kg", rate: "₹0.35" },
  { weight: "2 - 5 kg", rate: "₹0.45" },
  { weight: "5 - 10 kg", rate: "₹0.65" },
  { weight: "10 - 30 kg", rate: "₹2.20" },
  { weight: "30 - 50 kg", rate: "₹6.50" },
];

const included = [
  "20+ D2C & Marketplace integrations",
  "Order & Inventory Management",
  "Warehouse Management bundle",
  "Centralized Control Tower",
  "Shipping Aggregation",
  "Real-time tracking & alerts",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            No hidden fees. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Fulfillment Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200"
          >
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="font-semibold text-white text-sm tracking-wide">
                FULFILLMENT SERVICES
              </h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {fulfillmentRates.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-sm text-gray-600">
                        {item.description}
                      </td>
                      <td className="py-3 text-sm text-gray-900 font-medium text-right">
                        {item.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Storage Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-gray-200"
          >
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="font-semibold text-white text-sm tracking-wide">
                STORAGE RATES (per unit/day)
              </h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {storageRates.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-sm text-gray-600">
                        {item.weight}
                      </td>
                      <td className="py-3 text-sm text-gray-900 font-medium text-right">
                        {item.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-4">
                50kg+ products: Contact sales team
              </p>
            </div>
          </motion.div>
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-gray-200 p-6 mb-8"
        >
          <h3 className="text-xs font-semibold text-gray-400 tracking-wide uppercase mb-4">
            Included With All Plans
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-amber-50/50 border border-amber-100 p-6 mb-8"
        >
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase mb-3">
            Important Notes
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Minimum billing:</strong> ₹20,000/month</li>
            <li><strong>Long-term Storage:</strong> 2X charges beyond DOI (96 days apparel, 36 days others)</li>
            <li><strong>Packaging/RTV Storage:</strong> ₹900/pallet/month</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 h-12 font-medium"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Custom Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
