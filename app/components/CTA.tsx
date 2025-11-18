"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  volume: z.string().min(1, "Please select your monthly order volume"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const volumeOptions = [
  "0 - 500",
  "500 - 1,000",
  "1,000 - 5,000",
  "5,000 - 10,000",
  "10,000+",
];

export default function CTA() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Quote request submitted! We'll contact you within 24 hours.");
        reset();

        // Fire Google Ads conversion event
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
            'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
          });
        }
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us about your business. <strong>Response within 24 hours.</strong>
          </p>
          <p className="mt-2 text-sm text-green-600 font-medium">
            First month storage FREE for new clients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 border border-gray-200 p-8 md:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  className={`mt-1 rounded-none border-gray-300 focus:border-gray-900 focus:ring-gray-900 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className={`mt-1 rounded-none border-gray-300 focus:border-gray-900 focus:ring-gray-900 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className={`mt-1 rounded-none border-gray-300 focus:border-gray-900 focus:ring-gray-900 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="volume" className="text-sm font-medium text-gray-700">
                  Monthly Order Volume *
                </Label>
                <Select onValueChange={(value) => setValue("volume", value)}>
                  <SelectTrigger
                    className={`mt-1 rounded-none border-gray-300 focus:border-gray-900 focus:ring-gray-900 ${
                      errors.volume ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select volume" />
                  </SelectTrigger>
                  <SelectContent>
                    {volumeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option} orders
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.volume && (
                  <p className="text-red-500 text-xs mt-1">{errors.volume.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Tell us about your products
              </Label>
              <Textarea
                id="message"
                placeholder="Product type, SKU count, special requirements..."
                rows={4}
                {...register("message")}
                className="mt-1 rounded-none border-gray-300 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none h-12 font-medium"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Get Free Quote Now
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              No commitment required. We'll contact you within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
