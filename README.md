# Rabrix Landing Page

A high-converting, SEO-optimized landing page for Rabrix - Automated Lead Qualification for Realtors.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for smooth animations
- **next-seo** for SEO optimization

## Features

- ✅ Premium Apple-like minimalist design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Comprehensive SEO (metadata, structured data, sitemap, robots.txt)
- ✅ Optimized for AI tools (ChatGPT, Gemini, Claude)
- ✅ Fast performance with Core Web Vitals optimization
- ✅ Smooth animations and transitions
- ✅ Accessible and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```
   NEXT_PUBLIC_SITE_URL=https://rabrix.com
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-link
   ```

4. Add logo files:
   - Place your logo files in `/public/logos/`
   - Name them:
     - `rabrix-logo-black.png` (for light backgrounds)
     - `rabrix-logo-white.png` (for dark backgrounds, if needed)
   - Recommended size: 48x48px to 96x96px

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── robots.ts           # Robots.txt generation
│   ├── sitemap.ts          # Sitemap generation
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Site header with logo
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with main CTA
│   │   ├── WithoutRabrix.tsx  # Pain points section
│   │   ├── WithRabrix.tsx  # 3-step solution
│   │   ├── Outcomes.tsx    # Benefits section
│   │   ├── Pricing.tsx     # Pricing section
│   │   ├── WhoIsThisFor.tsx # Target audience
│   │   ├── FAQ.tsx         # FAQ with accordion
│   │   └── FinalCTA.tsx    # Final call-to-action
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx        # Card component
│       └── Container.tsx   # Max-width container
├── lib/
│   ├── seo.ts              # SEO metadata and structured data
│   └── faq-schema.ts       # FAQ structured data
└── public/
    └── logos/              # Logo files go here
```

## SEO Features

- Comprehensive metadata (title, description, Open Graph, Twitter Cards)
- Structured data (JSON-LD) for:
  - Organization
  - Service
  - FAQPage
- Dynamic sitemap generation
- Optimized robots.txt
- Semantic HTML structure
- Optimized for AI tool indexing

## Customization

### Colors

Colors are defined in `app/globals.css` using CSS custom properties:
- Black: `#000000`
- White: `#FFFFFF`
- Grays: `#1F2937`, `#374151`, `#6B7280`
- Blue Accent: `#2563EB` (for CTAs)

### Content

Update content in the respective section components:
- `components/sections/Hero.tsx` - Hero headline and subheadline
- `components/sections/WithRabrix.tsx` - 3-step solution details
- `components/sections/FAQ.tsx` - FAQ questions and answers
- And other section components as needed

### Calendly Integration

Update the Calendly URL in `.env.local`:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

The URL is used in all CTA buttons throughout the site.

## Build for Production

```bash
npm run build
npm start
```

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Static page generation where possible
- Compressed assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Rabrix
