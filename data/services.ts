export type Plan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
};

export type Service = {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // material symbol name
  plans: Plan[];
  deliverables: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    num: "01",
    title: "Web Development",
    shortDesc:
      "Building responsive, fast, and dynamic websites with React, Next.js, and Node.js — performant across all devices.",
    fullDesc:
      "End-to-end web development from architecture to deployment. I build fast, scalable web applications using the latest technologies — with a focus on clean code, great UX, and long-term maintainability.",
    icon: "web",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    deliverables: [
      "Fully responsive website / web app",
      "Source code (GitHub repo)",
      "Deployment on Vercel / Netlify",
      "Basic SEO setup",
      "30-day post-launch support",
    ],
    plans: [
      {
        name: "Starter",
        price: "Rs. 25,000",
        period: "one-time",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form",
          "Basic SEO",
          "1 revision round",
        ],
      },
      {
        name: "Professional",
        price: "Rs. 55,000",
        period: "one-time",
        highlight: true,
        features: [
          "Up to 12 pages",
          "CMS integration",
          "Authentication system",
          "Database setup",
          "3 revision rounds",
          "30-day support",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited pages",
          "Full-stack architecture",
          "Third-party integrations",
          "Performance optimisation",
          "Ongoing maintenance",
          "Priority support",
        ],
      },
    ],
  },
  {
    id: "ui-ux-design",
    num: "02",
    title: "UI / UX Design",
    shortDesc:
      "Visually compelling and user-friendly interfaces in Figma — pixel-perfect handoffs and conversion-focused layouts.",
    fullDesc:
      "From wireframes to polished Figma prototypes, I design interfaces that are both beautiful and functional. Every design decision is intentional — grounded in user behaviour, hierarchy, and brand identity.",
    icon: "palette",
    tech: ["Figma", "Adobe XD", "Framer", "Tailwind CSS", "CSS Animations"],
    deliverables: [
      "Figma design file (all screens)",
      "Interactive prototype",
      "Design system / component library",
      "Developer handoff notes",
      "2 revision rounds",
    ],
    plans: [
      {
        name: "Landing Page",
        price: "Rs. 15,000",
        period: "one-time",
        features: [
          "Single page design",
          "Mobile + desktop",
          "2 concept variations",
          "Figma file included",
          "1 revision round",
        ],
      },
      {
        name: "Full Product",
        price: "Rs. 40,000",
        period: "one-time",
        highlight: true,
        features: [
          "Up to 15 screens",
          "Interactive prototype",
          "Design system",
          "Mobile + desktop",
          "3 revision rounds",
        ],
      },
      {
        name: "Brand + UI",
        price: "Custom",
        features: [
          "Logo & brand identity",
          "Full UI design",
          "Style guide",
          "Social media kit",
          "Unlimited revisions",
        ],
      },
    ],
  },
  {
    id: "mobile-development",
    num: "03",
    title: "Mobile App Development",
    shortDesc:
      "High-performing apps for Android and iOS — clean architecture, smooth UX, and secure back-end integration.",
    fullDesc:
      "Cross-platform mobile apps built with React Native — one codebase, two platforms. I handle the full stack from UI to API integration, authentication, and app store submission.",
    icon: "smartphone",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "REST APIs"],
    deliverables: [
      "iOS + Android app",
      "Source code",
      "App store submission support",
      "API integration",
      "30-day post-launch support",
    ],
    plans: [
      {
        name: "MVP",
        price: "Rs. 60,000",
        period: "one-time",
        features: [
          "Core features only",
          "iOS + Android",
          "Basic auth",
          "REST API integration",
          "Play Store / App Store setup",
        ],
      },
      {
        name: "Full App",
        price: "Rs. 120,000",
        period: "one-time",
        highlight: true,
        features: [
          "Full feature set",
          "Push notifications",
          "Offline support",
          "Admin dashboard",
          "60-day support",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Complex architecture",
          "Third-party integrations",
          "Analytics setup",
          "CI/CD pipeline",
          "Ongoing maintenance",
        ],
      },
    ],
  },
  {
    id: "logo-branding",
    num: "04",
    title: "Logo & Brand Identity",
    shortDesc:
      "Unique, memorable logos and brand systems that reflect your values — from concept to production-ready assets.",
    fullDesc:
      "A great brand is more than a logo. I create cohesive brand identities that tell your story across every touchpoint — from the first sketch to the final brand guidelines document.",
    icon: "draw",
    tech: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
    deliverables: [
      "Primary logo (SVG + PNG + PDF)",
      "Logo variations (dark / light / icon)",
      "Brand colour palette",
      "Typography system",
      "Brand guidelines PDF",
    ],
    plans: [
      {
        name: "Logo Only",
        price: "Rs. 8,000",
        period: "one-time",
        features: [
          "3 initial concepts",
          "2 revision rounds",
          "Final files (SVG, PNG, PDF)",
          "Dark + light versions",
        ],
      },
      {
        name: "Brand Kit",
        price: "Rs. 22,000",
        period: "one-time",
        highlight: true,
        features: [
          "Logo (all above)",
          "Colour palette",
          "Typography system",
          "Business card design",
          "Brand guidelines PDF",
        ],
      },
      {
        name: "Full Identity",
        price: "Custom",
        features: [
          "Full brand kit",
          "Social media templates",
          "Email signature",
          "Stationery design",
          "Unlimited revisions",
        ],
      },
    ],
  },
];
