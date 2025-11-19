import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "OrderPack - 3PL Fulfillment Services in Gurgaon | Delhi NCR",
  description:
    "Professional 3PL fulfillment services for D2C brands in Gurgaon, Delhi NCR. 24-hour processing, 99.9% accuracy. Pick & pack, storage, returns. Get free quote today!",
  keywords: [
    "3PL fulfillment Gurgaon",
    "3PL fulfillment Delhi NCR",
    "fulfillment services Gurgaon",
    "D2C fulfillment",
    "ecommerce fulfillment",
    "pick and pack services",
    "inventory storage Gurgaon",
    "warehouse Gurgaon",
    "order fulfillment Delhi",
    "3PL services India",
  ],
  authors: [{ name: "OrderPack" }],
  creator: "OrderPack",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://orderpack.in",
    title: "OrderPack - Professional 3PL Fulfillment Services",
    description:
      "Professional fulfillment services for D2C brands in Delhi NCR. 24-hour processing, 99.9% accuracy.",
    siteName: "OrderPack",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrderPack - Professional 3PL Fulfillment Services",
    description:
      "Professional fulfillment services for D2C brands in Delhi NCR.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking - Replace with your actual IDs */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
