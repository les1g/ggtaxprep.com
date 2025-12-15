# GG Tax Services

A modern, professional tax preparation business web application built with Next.js, featuring client management, appointment scheduling, and comprehensive service information.

![GG Tax Services](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## 🌐 Live Demo

Visit the live application: [https://gg-tax.vercel.app/](https://gg-tax.vercel.app/)

## 📋 About

GG Tax Services is a professional tax preparation business based in Scottsdale, Arizona. This web application provides:

- Comprehensive information about tax preparation services
- Online appointment scheduling
- Client portal for document management
- Educational resources and tax guides
- Transparent pricing information
- Secure client authentication

## ✨ Features

### For Clients

- **Service Information**: Detailed descriptions of individual and business tax services
- **Online Scheduling**: Easy appointment booking system
- **Client Portal**: Secure login for document uploads and status tracking
- **Resource Center**: Tax guides, calculators, and educational materials
- **Transparent Pricing**: Clear pricing structure with no hidden fees
- **Contact Forms**: Multiple ways to get in touch with our team

### For Business

- **Professional Design**: Modern, trustworthy interface that builds client confidence
- **Mobile Responsive**: Seamless experience across all devices
- **SEO Optimized**: Built for search engine visibility
- **Fast Performance**: Optimized with Next.js for speed
- **Secure**: Industry-standard security practices

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform
- **Font**: [Geist](https://vercel.com/font) - Modern, professional typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/les1g/GG-Tax.git
cd GG-Tax
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

## 📁 Project Structure

```
GG-Tax/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── login/             # Client login
│   ├── pricing/           # Pricing information
│   ├── resources/         # Tax resources
│   ├── scheduling/        # Appointment scheduling
│   ├── services/          # Services overview
│   ├── signup/            # Client registration
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   ├── images/           # Image files
│   ├── icons/            # Icon files
│   └── logo.png          # Company logo
├── components/            # Reusable components
├── styles/               # Global styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Key Pages

- **Home** (`/`) - Landing page with service overview and CTAs
- **About** (`/about`) - Company information and team details
- **Services** (`/services`) - Detailed service descriptions
- **Pricing** (`/pricing`) - Transparent pricing structure
- **Resources** (`/resources`) - Tax guides and educational content
- **Scheduling** (`/scheduling`) - Online appointment booking
- **Contact** (`/contact`) - Contact information and inquiry form
- **Login/Signup** - Client portal access

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🚢 Deployment

This application is deployed on Vercel. Any push to the `main` branch automatically triggers a new deployment.

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## 📱 Social Media & Reviews

- **Instagram**: [@ggtaxservices_](https://www.instagram.com/ggtaxservices_/)
- **Facebook**: [GG Tax Services](https://www.facebook.com/profile.php?id=61582094297032)
- **Google Reviews**: [Leave a Review](https://share.google/6EWZ0fv9gCbniIfqF)

## 🔒 Security

- All client data is encrypted
- HTTPS-only connections
- Secure authentication system
- Regular security updates
- AFSP certified and IRS PTIN registered

## 📄 License

© 2025 GG Tax Preparation Services LLC. All rights reserved.

## 🤝 Contributing

This is a private business application. For inquiries about collaboration or services, please visit [https://gg-tax.vercel.app/contact](https://gg-tax.vercel.app/contact).

## 📞 Contact

**GG Tax Preparation Services LLC**
- Website: [https://gg-tax.vercel.app/](https://gg-tax.vercel.app/)
- Location: Scottsdale, Arizona
- Services: Professional Tax Preparation

---

Built with ❤️ using Next.js and deployed on Vercel
