# OrderPack - 3PL Fulfillment Services Landing Page

Professional landing page for OrderPack, a 3PL fulfillment service for D2C brands in Delhi NCR.

**Domain:** [orderpack.in](https://orderpack.in)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/orderpack.git
cd orderpack
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Contact Information

Update the following files with your actual contact details:

1. **app/components/Footer.tsx** - Email, phone, address
2. **app/components/WhatsAppButton.tsx** - WhatsApp number
3. **app/components/CTA.tsx** - Form endpoint

### Form Submission

The contact form uses a form submission service. Choose one:

**Option 1: Formspree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form endpoint
4. Update `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`

**Option 2: Web3Forms**
1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update the form endpoint in `.env.local`

### Google Analytics (Optional)

1. Create a property in [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`
4. Add the GA script to `app/layout.tsx`

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── HowItWorks.tsx   # 3-step process
│   │   ├── Services.tsx     # Services grid
│   │   ├── Pricing.tsx      # Pricing table
│   │   ├── WhyChoose.tsx    # Benefits grid
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── CTA.tsx          # Contact form
│   │   ├── Footer.tsx       # Footer
│   │   └── WhatsAppButton.tsx # Floating button
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/ui/           # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Robots file
└── .env.example             # Environment variables template
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Custom Domain Setup

1. In Vercel, go to your project settings
2. Navigate to Domains
3. Add `orderpack.in`
4. Update your domain's DNS:
   - Add an A record pointing to `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`

## Customization

### Colors

The color scheme is defined in `app/globals.css`:
- **Primary Blue:** `#2563eb` (OKLCH: 0.546 0.245 262.881)
- **Accent Orange:** `#f59e0b` (OKLCH: 0.795 0.184 86.047)

To change colors, update the CSS variables in the `:root` selector.

### Content

All content is hardcoded in the components for easy editing:
- **Hero text:** `app/components/Hero.tsx`
- **Services:** `app/components/Services.tsx`
- **Pricing:** `app/components/Pricing.tsx`
- **FAQ:** `app/components/FAQ.tsx`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Copyright © 2024 OrderPack. All rights reserved.

## Support

For questions or issues, contact hello@orderpack.in
