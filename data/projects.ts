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
    id: "medistore-pos",
    title: "Medistore POS",
    category: "Pharmacy POS · Next.js",
    image: "/assets/work/medistore-pos.png", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Web App",
    client: "Arogya Pharmacy",
    industry: "Healthcare / Retail",
    year: "2026",
    description:
      "A role-based Pharmacy Point-of-Sale system featuring secure authentication, inventory management, and specialized dashboards for Admins and Cashiers.",
    fullDescription:
      "Medistore POS is a modern, web-based management system tailored for pharmacies. It implements strict Role-Based Access Control (RBAC) to ensure security and operational integrity, providing specific feature access depending on whether the logged-in user is an Admin or a Cashier.",
    challenge:
      "The pharmacy needed a secure way to process sales while restricting access to sensitive business data like profit margins and inventory updates. Cashiers needed a fast billing interface, while Admins required full system control without overlapping access risks.",
    solution:
      "Built using Next.js for high performance and structured routing. Implemented a robust user role management system where authentication dynamically switches the user interface. Cashiers get an optimized checkout and billing screen, while Admins gain exclusive access to full inventory control, sales analytics, and user parameters.",
    outcome:
      "Successfully streamlined the pharmacy's daily operations. Prevented unauthorized access to backend financial data, reduced checkout times significantly, and provided a clear separation of duties between management and cashiers.",
    results: [
      { label: "Role Security", value: "100% Isolated" },
      { label: "Billing Speed", value: "Fast UI" },
      { label: "User Roles", value: "Admin & Cashier" },
      { label: "Data Integrity", value: "High" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://medistore-pos.vercel.app/",
    githubUrl: "#", // GitHub link එකක් තියෙනවා නම් මෙතනට දාන්න
    featured: true,
    color: "bg-blue-50", // ඖෂධ සැලකට ගැලපෙන පිරිසිදු නිල්/නිල්-කොළ පාටක්
    accentColor: "#2563eb",
  },
  {
    id: "ceylon-trails",
    title: "Ceylon Trails",
    category: "Travel & AI · Next.js",
    image: "/assets/work/ceylontrails.png", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Full Stack",
    client: "Ceylon Trails Tourist Agency",
    industry: "Tourism & Travel Tech",
    year: "2026",
    description:
      "An advanced tourism platform featuring an AI-powered tour planner and a comprehensive Admin dashboard with upcoming booking alerts.",
    fullDescription:
      "Ceylon Trails is a next-generation travel booking and planning web application. It integrates AI capabilities to allow travelers to customize their itineraries instantly, alongside a dedicated separate Admin portal for complete management of packages, bookings, and automated operational alerts.",
    challenge:
      "The agency wanted to stand out from traditional travel sites by offering automated, personalized trip planning. Additionally, they needed an efficient admin workflow to track urgent bookings without manually filtering lists daily.",
    solution:
      "Developed a full-stack Next.js platform integrating an AI module that allows users to seamlessly plan their custom tour packages based on preferences. Designed a separate Admin Panel with full CRUD capabilities for packages and bookings. Implemented an urgent alert system on the Admin Dashboard that dynamically highlights bookings scheduled within the next 7 days.",
    outcome:
      "Transformed user engagement through interactive AI planning. Dramatically reduced administrative overhead by automatically surfacing time-sensitive bookings, ensuring the agency never misses an upcoming tour deadline.",
    results: [
      { label: "Tour Planning", value: "AI-Powered" },
      { label: "Urgent Alerts", value: "7-Day Window" },
      { label: "Admin Control", value: "Full Dashboard" },
      { label: "User Experience", value: "Highly Interactive" },
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "AI Integration",
      "TypeScript",
      "Vercel",
    ],
    liveUrl: "https://ceylon-trails-two.vercel.app/",
    githubUrl: "#", // GitHub link එකක් තියෙනවා නම් මෙතනට දාන්න
    featured: true,
    color: "bg-teal-50", // ලංකාවේ සංචාරක ව්‍යාපාරයට ගැළපෙන සොබාදහම් පාටක්
    accentColor: "#0d9488",
  },
  {
    id: "siena-clothing",
    title: "Siena Clothing",
    category: "E-commerce · Next.js",
    image: "/assets/work/siena-clothing.png", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Full Stack",
    client: "Siena Clothing Shop",
    industry: "E-commerce / Fashion Retail",
    year: "2026",
    description:
      "A seamless fashion e-commerce storefront for customer ordering, paired with an advanced Admin panel for product catalog management.",
    fullDescription:
      "Siena Clothing is a dynamic online fashion store designed for smooth retail operations. It provides customers with an elegant interface to browse and order clothing, backed by an extensive administrative control panel that allows store managers to handle inventory in real time.",
    challenge:
      "The clothing brand needed a modern digital storefront to scale their sales online. They required an easy-to-use backend system that allows non-technical staff to rapidly upload new fashion collections and update stock availability.",
    solution:
      "Built a highly responsive web store using Next.js. Integrated a streamlined customer checkout flow for placing orders. Developed a robust Admin Panel equipped with full product management capabilities (Create, Read, Update, Delete) enabling instant updates to clothing items, prices, and visual variants.",
    outcome:
      "Successfully launched an end-to-end retail channel. Enabled the brand to digitize their inventory completely, giving them the ability to update their store dynamically and fulfill customer orders efficiently.",
    results: [
      { label: "Storefront UI", value: "Premium Fashion" },
      { label: "Catalog Control", value: "Full CRUD" },
      { label: "Order Placement", value: "Seamless" },
      { label: "Mobile Shopping", value: "100% Optimized" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "#",
    githubUrl: "#", // GitHub link එකක් තියෙනවා නම් මෙතනට දාන්න
    color: "bg-fuchsia-50", // Fashion/Clothing වලට ගැලපෙන Trendy පාටක්
    accentColor: "#c026d3",
  },
  {
    id: "vesak-wishes",
    title: "Vesak Wishes",
    category: "Web App · Next.js",
    image: "/assets/work/wesakwishes.jpeg", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Web App",
    client: "PraDha Solutions (Internal)",
    industry: "Social Media / Culture",
    year: "2026",
    description:
      "A digital greeting platform designed to share personalized Vesak wishes via WhatsApp and Email, reaching thousands of users during the season.",
    fullDescription:
      "Vesak Wishes is a community-focused web application built to digitize traditional greeting cards. It allows users to generate and share high-quality digital Vesak cards and messages instantly across social platforms, focusing on ease of use and mobile accessibility.",
    challenge:
      "The goal was to create a lightweight, high-traffic capable platform that could handle thousands of simultaneous users during the festive season. It needed to be highly shareable and performant on slow mobile connections.",
    solution:
      "Developed using Next.js for optimized performance and SEO. Implemented a seamless integration with the Web Share API for native mobile sharing (WhatsApp/Messenger). Used Tailwind CSS for a serene, spiritual UI design and optimized image assets for instant loading.",
    outcome:
      "Successfully launched as an internal initiative by PraDha Solutions. The platform facilitated thousands of digital greetings, promoting eco-friendly celebrations by reducing paper waste and connecting Sri Lankans globally.",
    results: [
      { label: "Social Shares", value: "High-Volume" },
      { label: "Load Speed", value: "< 1s" },
      { label: "Mobile Optimized", value: "100%" },
      { label: "Eco Impact", value: "Paperless" },
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Web Share API",
      "Vercel",
      "Lucide Icons",
    ],
    liveUrl: "https://vesak-wishes.vercel.app/",
    githubUrl: "https://github.com/sineth1222/vesak-wishes", // GitHub link එක හරිද බලන්න
    featured: false,
    color: "bg-amber-50", // වෙසක් පහන් වල ආලෝකය නිරූපණය වන පාටක්
    accentColor: "#d97706",
  },
  {
    id: "spice-sea",
    title: "Spice Sea",
    category: "E-commerce · Next.js",
    image: "/assets/work/spicesea.png", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Full Stack",
    client: "Spice Sea - Premium Spices",
    industry: "E-commerce / Food & Beverage",
    year: "2026",
    description:
      "A premium online marketplace for authentic Maldivian fish, dried fish, and high-quality spices with a seamless Cash on Delivery system.",
    fullDescription:
      "Spice Sea is a specialized e-commerce platform bringing premium dry food products to customers. It features a full-blown admin ecosystem for inventory management, a real-time order tracking system, and a dedicated culinary section for recipes using the sold products.",
    challenge:
      "The client needed a way to manage high-volume spice and dry fish orders while providing a transparent tracking process for customers. They also required a robust back-office to handle inventory and order statuses (Pending, Shipped, Delivered) without needing technical knowledge.",
    solution:
      "Built using Next.js and Tailwind CSS for a high-performance frontend. Integrated Supabase (PostgreSQL) for secure data storage and Nodemailer for automated order notifications. Developed a custom Admin Dashboard that allows full CRUD operations on products and a dedicated 'Recipe' module to drive user engagement.",
    outcome:
      "Successfully launched an end-to-end e-commerce solution. The platform streamlined the ordering process through COD, eliminated manual order tracking errors via the status dashboard, and provided value-added content through the integrated recipe portal.",
    results: [
      { label: "Order Management", value: "Automated" },
      { label: "Admin Control", value: "Full CRUD" },
      { label: "Payment Method", value: "COD" },
      { label: "Status Tracking", value: "Real-time" },
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Nodemailer",
      "TypeScript",
      "Vercel",
    ],
    liveUrl: "https://spice-sea.vercel.app/",
    githubUrl: "https://github.com/sineth1222/spice-sea", // GitHub link එක හරිද බලන්න
    featured: true,
    color: "bg-orange-50", // Spices වලට ගැලපෙන Warm පාටක්
    accentColor: "#c2410c",
  },
  {
    id: "lacascade-hotel",
    title: "LaCascade Dining & Villa",
    category: "Hospitality · Next.js",
    image: "/assets/work/lacascade2.jpeg", // ඔයාගේ image path එක මෙතනට දාන්න
    categoryTag: "Web App",
    client: "LaCascade Tangalle",
    industry: "Tourism & Hospitality",
    year: "2026",
    description:
      "A luxury boutique villa website for LaCascade Tangalle, featuring an immersive booking experience and local tourism guide.",
    fullDescription:
      "A high-end web platform designed for LaCascade, a luxury dining and villa destination in Tangalle. The site showcases the serene environment through high-quality visual storytelling, integrated booking inquiries, and a curated guide to the local area.",
    challenge:
      "The client needed a digital identity that reflects the tranquility of Tangalle. The challenge was to balance high-resolution imagery for visual appeal with fast performance to ensure a seamless experience for international tourists.",
    solution:
      "Developed a responsive React frontend with Framer Motion for smooth animations. Integrated a custom contact system for reservations, optimized image delivery for fast loading, and implemented SEO best practices to attract global travelers.",
    outcome:
      "Launched a modern digital presence that successfully captures the 'Jungle & Ocean' essence of the property. Improved online visibility and streamlined the reservation process for international guests.",
    results: [
      { label: "Performance Score", value: "95+" },
      { label: "Image Optimization", value: "100%" },
      { label: "Mobile Responsive", value: "Yes" },
      { label: "User Experience", value: "Premium" },
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJs",
      "Nodemailer",
      "Vercel",
    ],
    liveUrl: "https://lacascade.vercel.app/",
    githubUrl: "https://github.com/sineth1222/lacascade-git_v20",
    color: "bg-emerald-50", // හෝටලයේ Nature තේමාවට ගැලපෙන පාටක්
    accentColor: "#065f46",
  },
  {
    id: "sagea",
    title: "Sagea",
    category: "Web App · React",
    image: "/assets/work/sagea.png",
    categoryTag: "Web App",
    client: "Sagea Inc.",
    industry: "Productivity SaaS",
    year: "2025",
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
    liveUrl: "https://sagea.vercel.app/",
    githubUrl: "https://github.com/sineth1222/segea---git",
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
    year: "2025",
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
    liveUrl: "https://raptorcv.vercel.app/",
    githubUrl: "https://github.com/sineth1222/RaptorCV",
    featured: true,
    color: "bg-violet-50",
    accentColor: "#7c3aed",
  },
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
    id: "pradha-rental",
    title: "PraDha Rental",
    category: "Full Stack · Next.js",
    image: "/assets/work/pradharental.png",
    categoryTag: "Full Stack",
    client: "PraDha Solutions (Internal)",
    industry: "Operations / Internal Tooling",
    year: "2025",
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
    liveUrl: "https://pra-dha-rental-service.vercel.app/",
    githubUrl: "https://github.com/sineth1222/PraDha_Rental_service",
    color: "bg-emerald-50",
    accentColor: "#059669",
  },
  {
    id: "pos-system",
    title: "POS System",
    category: "Desktop App · Electron",
    image: "/assets/work/possystem.png",
    categoryTag: "Desktop",
    client: "Retail Client, Colombo",
    industry: "Retail",
    year: "2024",
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
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7375560525985820672/",
    githubUrl: "#",
    color: "bg-stone-100",
    accentColor: "#78716c",
  },
  {
    id: "newspaper-portal",
    title: "Newspaper Portal",
    category: "Web Platform · React",
    image: "/assets/work/newspaper.png",
    categoryTag: "Web App",
    client: "Regional Media Group",
    industry: "Digital Media",
    year: "2024",
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
    liveUrl: "https://newspaper-gray.vercel.app/",
    githubUrl: "https://github.com/sineth1222/newspaper",
    color: "bg-rose-50",
    accentColor: "#e11d48",
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
