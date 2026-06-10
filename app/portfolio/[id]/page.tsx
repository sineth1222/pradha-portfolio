// app/portfolio/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Project data object (ඔයාගේ existing data source use කරන්න)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const projectData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "medistore-pos": {
    title: "Medistore POS — Pharmacy Point-of-Sale System",
    description:
      "Role-based Pharmacy POS system with secure auth, inventory management, and dashboards for Admins and Cashiers. Built with Next.js for Arogya Pharmacy.",
    image: "/assets/work/medistore-pos.png",
  },
  "ceylon-trails": {
    title: "Ceylon Trails — AI-Powered Tourism Platform",
    description:
      "Advanced tourism platform with AI-powered tour planner and Admin dashboard with booking alerts. Built for Ceylon Trails Tourist Agency.",
    image: "/assets/work/ceylontrails.png",
  },
  "siena-clothing": {
    title: "Siena Clothing — Fashion E-commerce Platform",
    description:
      "Fashion e-commerce storefront with full product catalog management and Admin panel. Built with Next.js for Siena Clothing Shop.",
    image: "/assets/work/siena-clothing.png",
  },
  "vesak-wishes": {
    title: "Vesak Wishes — Digital Greeting Platform",
    description:
      "Viral digital greeting platform for personalized Vesak wishes via WhatsApp and Email. Reached thousands of users in one season.",
    image: "/assets/work/wesakwishes.jpeg",
  },
  "spice-sea": {
    title: "Spice Sea — Maldivian E-commerce Marketplace",
    description:
      "Premium online marketplace for authentic Maldivian fish and spices with Cash on Delivery system and full Admin control.",
    image: "/assets/work/spicesea.png",
  },
  "lacascade-hotel": {
    title: "LaCascade Dining & Villa — Luxury Hospitality Website",
    description:
      "Luxury boutique villa website for LaCascade Tangalle with immersive booking experience and local tourism guide. 95+ performance score.",
    image: "/assets/work/lacascade2.jpeg",
  },
  sagea: {
    title: "Sagea — React SaaS Rebuild (81% Faster)",
    description:
      "Full rebuild of a legacy jQuery product into modern React SaaS. 0.8s load time, built to handle 10,000+ concurrent users.",
    image: "/og-image.png",
  },
  raptorcv: {
    title: "RaptorCV — ATS-Optimised CV Builder SaaS",
    description:
      "CV builder SaaS with ATS-optimised templates, live preview, and one-click PDF export. 2,000+ CVs generated in 6 months. 4.8/5 rating.",
    image: "/og-image.png",
  },
  rentzy: {
    title: "Rentzy — Multi-Category Rental Marketplace",
    description:
      "Rental marketplace connecting providers with renters for vehicles, properties, and electronics. 30+ providers onboarded, 78% booking completion.",
    image: "/og-image.png",
  },
  "pradha-rental": {
    title: "PraDha Rental — Internal Rental Management System",
    description:
      "Internal rental management replacing WhatsApp + spreadsheets. Zero double-bookings. 4 min admin time per booking.",
    image: "/og-image.png",
  },
  "pos-system": {
    title: "POS System — Offline-First Retail POS",
    description:
      "Offline-first POS for a multi-branch Colombo retail business. Eliminated Rs. 80,000/year in SaaS costs. Survived 2022 power cuts.",
    image: "/og-image.png",
  },
  "newspaper-portal": {
    title: "Newspaper Portal — Digital Media Platform",
    description:
      "Full digital newspaper platform migrating regional print to online. 15,000 articles migrated. 8,000 readers in 3 months.",
    image: "/og-image.png",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Dynamic Metadata Generator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projectData[params.id];

  if (!project) {
    return {
      title: "Project | PraDha Solutions",
      description: "Project details from PraDha Solutions.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://www.pradha.xyz/portfolio/${params.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.pradha.xyz/portfolio/${params.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

// ↓ ඔයාගේ existing page component

function BrowserMock({
  color,
  accentColor,
}: {
  color: string;
  accentColor: string;
}) {
  return (
    <div className={`w-full h-full ${color} flex items-center justify-center`}>
      <div className="w-[75%] bg-white rounded-lg border border-stone-200 shadow-xl overflow-hidden">
        <div className="bg-stone-100 px-3 py-2.5 flex items-center gap-1.5 border-b border-stone-200">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 bg-stone-200 rounded-sm h-3 ml-2" />
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          <div
            className="h-2 w-2/5 rounded-sm"
            style={{ background: accentColor, opacity: 0.4 }}
          />
          <div className="h-1.5 w-full bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-4/5 bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-3/5 bg-stone-200 rounded-sm" />
          <div className="mt-2 flex gap-2">
            <div
              className="h-7 w-24 rounded-sm"
              style={{ background: accentColor, opacity: 0.35 }}
            />
            <div className="h-7 w-16 bg-stone-200 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  /*params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);*/
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-36 pb-0 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-400 hover:text-gold transition-colors mb-10"
          >
            ← All Projects
          </Link>

          <div className="grid md:grid-cols-[1fr_360px] gap-14 pb-16 items-start">
            {/* Left */}
            <div>
              <div
                className="flex items-center gap-3 text-[10px] tracking-[3px] uppercase mb-3 font-medium"
                style={{ color: project.accentColor }}
              >
                <span
                  className="w-5 h-px"
                  style={{ background: project.accentColor }}
                />
                {project.industry}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter mb-5">
                {project.title}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-lg mb-8">
                {project.fullDescription}
              </p>

              {/* Result highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.results.map((r) => (
                  <div
                    key={r.label}
                    className="bg-white border border-stone-200 rounded-sm p-4 text-center"
                  >
                    <p
                      className="font-serif text-2xl font-bold"
                      style={{ color: project.accentColor }}
                    >
                      {r.value}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — meta card */}
            <div className="bg-white border border-stone-200 rounded-sm p-7 shadow-sm self-start">
              <div className="flex flex-col gap-5">
                {[
                  { label: "Client", value: project.client },
                  { label: "Industry", value: project.industry },
                  { label: "Year", value: project.year },
                  { label: "Category", value: project.categoryTag },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <p className="text-[10px] tracking-[2px] uppercase text-gray-400">
                      {m.label}
                    </p>
                    <p className="text-sm font-medium">{m.value}</p>
                  </div>
                ))}

                {/* Stack */}
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-gray-400 mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 bg-amber-50 border border-amber-100 text-amber-700 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-[11px] font-medium tracking-widest uppercase py-3 bg-gold text-white rounded-sm hover:bg-amber-600 transition-colors"
                    >
                      View Live Site ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-[11px] font-medium tracking-widest uppercase py-3 border border-stone-200 text-gray-500 rounded-sm hover:border-gold hover:text-gold transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="text-center text-[11px] font-medium tracking-widest uppercase py-3 bg-black text-white rounded-sm hover:bg-stone-800 transition-colors"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preview ── */}
      <section className="py-14 px-6 md:px-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-72 md:h-[420px] rounded-sm overflow-hidden border border-stone-200 shadow-sm">
            {/* Thumb */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <BrowserMock
                color={project.color}
                accentColor={project.accentColor}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── Challenge / Solution / Outcome ── */}
      <section className="py-16 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-10">
            <span className="w-6 h-px bg-gold" />
            Case Study
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Challenge */}
            <div className="bg-white border border-stone-200 rounded-sm p-8">
              <div className="flex items-center gap-3 text-[10px] tracking-[2.5px] uppercase text-gold mb-4">
                <span className="w-4 h-px bg-gold" />
                01 · Challenge
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white border border-stone-200 rounded-sm p-8">
              <div className="flex items-center gap-3 text-[10px] tracking-[2.5px] uppercase text-gold mb-4">
                <span className="w-4 h-px bg-gold" />
                02 · Solution
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Outcome */}
            <div
              className="bg-white border-2 rounded-sm p-8"
              style={{ borderColor: `${project.accentColor}30` }}
            >
              <div className="flex items-center gap-3 text-[10px] tracking-[2.5px] uppercase text-gold mb-4">
                <span className="w-4 h-px bg-gold" />
                03 · Outcome
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Projects ── */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3px] uppercase mb-2">
                <span className="w-4 h-px bg-gold" />
                More Work
              </div>
              <h2 className="font-serif text-3xl font-bold">Other Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-gold text-[10px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="group bg-white border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all"
              >
                <div className={`h-36 ${p.color}`} />

                <div className="p-5">
                  <p
                    className="text-[10px] tracking-[2px] uppercase font-medium mb-1"
                    style={{ color: p.accentColor }}
                  >
                    {p.industry}
                  </p>
                  <h3 className="font-serif text-lg font-bold group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 mt-1">{p.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
