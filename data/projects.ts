export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  categoryTag:
    | "Full Stack"
    | "Web App"
    | "SaaS"
    | "Mobile"
    | "Desktop"
    | "Brand";
  client: string;
  industry: string;
  year: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  results: { label: string; value: string }[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  color: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    id: "rentzy",
    title: "Rentzy",
    category: "Full Stack · Next.js",
    image: "/assets/work/rentzy.png",
    categoryTag: "Full Stack",
    client: "PraDha Solutions",
    industry: "Rental Marketplace",
    year: "2024",
    description:
      "Multi-category rental marketplace connecting verified providers with renters — vehicles, properties, and electronics on one platform.",
    fullDescription:
      "Rentzy is a comprehensive rental marketplace that connects renters with verified providers across multiple categories. The platform handles real-time availability, secure bookings, Stripe payments, and provider dashboards — all in one cohesive product.",
    challenge:
      "Clients needed a single platform to handle rentals across completely different categories — vehicles, properties, and electronics — each with unique booking logic, pricing models, and availability windows. No off-the-shelf solution could handle this complexity.",
    solution:
      "Built a flexible multi-category booking engine using Next.js and Strapi CMS. Implemented a shared availability calendar, category-specific booking flows, Stripe payment integration, automated confirmation emails, and a provider dashboard for managing listings and bookings.",
    outcome:
      "Launched with 30+ providers onboarded in the first month. The platform handled its first Rs. 500,000 in booking value within 6 weeks of launch.",
    results: [
      { label: "Providers onboarded", value: "30+" },
      { label: "Booking completion rate", value: "78%" },
      { label: "Admin time per listing", value: "−60%" },
      { label: "Time to first booking", value: "6 weeks" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],
    liveUrl: "https://anyrenty-icme.vercel.app/",
    githubUrl: "https://github.com/sineth1222/rentzy",
    featured: true,
    color: "bg-amber-50",
    accentColor: "#b8922a",
  },
  {
    id: "sagea",
    title: "Sagea",
    category: "Web App · React",
    image: "/assets/work/sagea.png",
    categoryTag: "Web App",
    client: "Sagea Inc.",
    industry: "Productivity SaaS",
    year: "2024",
    description:
      "Full rebuild of a legacy jQuery product into a modern React SaaS — faster, scalable, and built to handle 10,000+ concurrent users.",
    fullDescription:
      "Sagea is a productivity SaaS platform for small business teams. Features real-time collaboration, task management, and reporting. PraDha was brought in to rebuild the entire frontend after the legacy codebase became unmaintainable.",
    challenge:
      "The client had an existing product built in jQuery that was slow, unmaintainable, and couldn't handle concurrent users. Average page load was 4.2 seconds. They needed a full rebuild without downtime or data loss.",
    solution:
      "Rebuilt the entire frontend in React with a component-driven architecture. Introduced optimistic UI updates, React Query for server state, a custom design system, and a phased migration strategy that kept the old product live throughout.",
    outcome:
      "Page load times dropped from 4.2s to 0.8s. User retention improved by 34% in the 3 months following launch. Zero downtime during migration.",
    results: [
      { label: "Page load time", value: "0.8s" },
      { label: "Load time reduction", value: "−81%" },
      { label: "User retention lift", value: "+34%" },
      { label: "Migration downtime", value: "Zero" },
    ],
    tech: ["React", "Tailwind CSS", "React Query", "Node.js", "MongoDB"],
    liveUrl: "https://anyrenty-icme.vercel.app/",
    githubUrl: "https://github.com/sineth1222/rentzy",
    featured: true,
    color: "bg-sky-50",
    accentColor: "#0284c7",
  },
  {
    id: "raptorcv",
    title: "RaptorCV",
    category: "SaaS · React",
    image: "/assets/work/raptorcv.png",
    categoryTag: "SaaS",
    client: "PraDha Solutions",
    industry: "HR / Career Tech",
    year: "2023",
    description:
      "CV builder SaaS with ATS-optimised templates, live preview, and one-click PDF export — 2,000+ CVs generated in 6 months.",
    fullDescription:
      "RaptorCV helps job seekers in Sri Lanka and beyond create professional, ATS-friendly CVs in minutes. Users pick from curated templates, fill in their details with a live preview, and export a print-ready PDF.",
    challenge:
      "Existing CV builders were either too complex or produced generic output that failed ATS screening. Sri Lankan job seekers in particular lacked access to well-designed, locally relevant templates.",
    solution:
      "Built a live-preview editor with drag-and-drop section reordering, 8 professionally designed templates, and a server-side PDF generation pipeline using Puppeteer that produces pixel-perfect output matching the preview.",
    outcome:
      "2,000+ CVs generated in the first 6 months with a 4.8/5 average user rating. Featured in 2 Sri Lankan job portals as a recommended tool.",
    results: [
      { label: "CVs generated (6 mo.)", value: "2,000+" },
      { label: "User rating", value: "4.8 / 5" },
      { label: "Templates", value: "8" },
      { label: "Partner portals", value: "2" },
    ],
    tech: ["React", "Node.js", "Puppeteer", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "bg-violet-50",
    accentColor: "#7c3aed",
  },
  {
    id: "pradha-rental",
    title: "PraDha Rental",
    category: "Full Stack · Next.js",
    image: "/assets/work/pradharental.png",
    categoryTag: "Full Stack",
    client: "PraDha Solutions (Internal)",
    industry: "Operations / Internal Tooling",
    year: "2023",
    description:
      "Internal rental management system replacing WhatsApp + spreadsheets — bookings, payments, and availability in one dashboard.",
    fullDescription:
      "An internal management system for PraDha's own rental operations. Handles the full rental lifecycle — enquiries, bookings, payments, vehicle and property availability, and automated client communication.",
    challenge:
      "The team was managing bookings through WhatsApp and spreadsheets. Double-bookings were common, payment tracking was manual and error-prone, and there was no way to see real-time availability across multiple properties.",
    solution:
      "Built a custom admin dashboard with a calendar-based availability view, automated booking confirmation emails via Nodemailer, payment status tracking, client portal for self-service bookings, and PDF invoice generation.",
    outcome:
      "Double-bookings eliminated entirely. Admin time per booking dropped from 25 minutes to 4 minutes. Payment tracking accuracy went from ~70% to 100%.",
    results: [
      { label: "Double-bookings", value: "Zero" },
      { label: "Admin time / booking", value: "4 min" },
      { label: "Time saved per booking", value: "21 min" },
      { label: "Payment accuracy", value: "100%" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Nodemailer"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-emerald-50",
    accentColor: "#059669",
  },
  {
    id: "newspaper-portal",
    title: "Newspaper Portal",
    category: "Web Platform · React",
    image: "/assets/work/newspaper.png",
    categoryTag: "Web App",
    client: "Regional Media Group",
    industry: "Digital Media",
    year: "2023",
    description:
      "Full digital newspaper platform migrating a regional print publication online — 15,000 articles, 8,000 readers in 3 months.",
    fullDescription:
      "A full digital newspaper platform for a regional media group transitioning from print. Includes a CMS for journalists, a reader-facing news portal, subscription paywall, and programmatic ad placement.",
    challenge:
      "The media group had no digital presence and needed to migrate 10+ years of print archives while simultaneously launching a modern news portal — without disrupting their ongoing print operations.",
    solution:
      "Built a headless CMS with a custom rich-text editor tailored for journalists, an automated image optimisation pipeline, and a responsive reader portal with category filtering, full-text search, and a subscription paywall.",
    outcome:
      "15,000 articles migrated from print archives. 8,000 registered readers within 3 months of launch. Subscription revenue covered server costs within 60 days.",
    results: [
      { label: "Articles migrated", value: "15,000" },
      { label: "Readers (3 months)", value: "8,000" },
      { label: "Days to break-even", value: "60 days" },
      { label: "Uptime", value: "99.9%" },
    ],
    tech: ["React", "Laravel", "MySQL", "AWS S3", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-rose-50",
    accentColor: "#e11d48",
  },
  {
    id: "pos-system",
    title: "POS System",
    category: "Desktop App · Electron",
    image: "/assets/work/possystem.png",
    categoryTag: "Desktop",
    client: "Retail Client, Colombo",
    industry: "Retail",
    year: "2022",
    description:
      "Offline-first POS for a multi-branch retail business — eliminated Rs. 80,000/year in SaaS licensing and survived the 2022 power cuts.",
    fullDescription:
      "A fully offline-capable point-of-sale system for a multi-branch retail business. Handles product catalogue, barcode scanning, billing, daily reports, stock management, and cashier accounts — all without internet dependency.",
    challenge:
      "The client's existing cloud-based POS cost Rs. 80,000/year and was completely unusable during Sri Lanka's 2022 power cuts and internet outages — directly causing lost sales every day.",
    solution:
      "Built a cross-platform Electron app with SQLite for local-first storage, automatic background sync when online, barcode scanner integration, thermal printer driver for receipts, and a role-based multi-cashier system.",
    outcome:
      "Zero downtime during power cuts. Rs. 80,000/year in licensing eliminated. Successfully deployed to 3 branches with no training issues.",
    results: [
      { label: "Downtime during cuts", value: "Zero" },
      { label: "Annual savings", value: "Rs. 80k" },
      { label: "Branches deployed", value: "3" },
      { label: "Training time", value: "2 hours" },
    ],
    tech: ["Electron", "React", "SQLite", "Node.js", "Thermal Printer API"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-stone-100",
    accentColor: "#78716c",
  },
];

export const testimonials = [
  {
    name: "Gayan Chammika",
    role: "CEO",
    company: "CE Computer Repair",
    quote:
      "The store web system PraDha built works perfectly and is very easy to use. I highly recommend their work to anyone looking for quality software.",
    rating: 5,
    project: "E-commerce & Inventory System",
  },
  {
    name: "Mahela Heshan",
    role: "Owner",
    company: "Warakapola Micro Laboratory",
    quote:
      "PraDha did an excellent job building our website and test report generation system. Everything was delivered on time and exactly as requested.",
    rating: 5,
    project: "Web Platform & Report Generator",
  },
  {
    name: "Rashmi",
    role: "Fashion Designer",
    company: "Independent",
    quote:
      "PraDha completed my project very successfully. They were easy to work with and understood exactly what I needed. Highly recommended for any IT work.",
    rating: 5,
    project: "Portfolio & Brand Website",
  },
];
