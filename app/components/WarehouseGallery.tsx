"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/orderpack1.jpeg",
    alt: "Packing station with organized supplies and branded packaging",
    caption: "Professional Packing Station",
  },
  {
    src: "/orderpack2.jpeg",
    alt: "Packed orders ready for dispatch",
    caption: "Ready for Dispatch",
  },
  {
    src: "/orderpack3.jpeg",
    alt: "Warehouse inventory shelves stocked with products",
    caption: "Organized Inventory Storage",
  },
  {
    src: "/orderpack4.jpeg",
    alt: "Modern warehouse shelving system",
    caption: "Scalable Storage Solutions",
  },
];

export default function WarehouseGallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Our Facility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Inside Our Fulfillment Center
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Take a look at our state-of-the-art warehouse where your orders are carefully stored, picked, and packed
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              {/* Caption */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {image.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
