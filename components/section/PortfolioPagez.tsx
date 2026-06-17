"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

type Filter = "All" | "Full Stack" | "Web App" | "SaaS" | "Desktop";
const filters: Filter[] = ["All", "Full Stack", "Web App", "SaaS", "Desktop"];

function BrowserMock({
  color,
  accentColor,
}: {
  color: string;
  accentColor: string;
}) {
  return (
    <div className={`w-full h-full ${color} flex items-center justify-center`}>
      <div className="w-[80%] bg-white rounded-md border border-stone-200 shadow-md overflow-hidden">
        <div className="bg-stone-100 px-3 py-2 flex items-center gap-1.5 border-b border-stone-200">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 bg-stone-200 rounded-sm h-3 ml-2" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div
            className="h-1.5 w-2/5 rounded-sm"
            style={{ background: accentColor, opacity: 0.4 }}
          />
          <div className="h-1.5 w-11/12 bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-3/5 bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-4/5 bg-stone-200 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categoryTag === active);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
              <span className="w-6 h-px bg-gold" />
              PraDha Solutions
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Our <em className="text-gold not-italic italic">Work</em>
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Every project here solved a real business problem. We build
              digital products that deliver measurable outcomes — not just
              good-looking interfaces.
            </p>
            {/* Stats strip */}
            <div className="flex gap-8">
              {[
                { n: "10+", l: "Projects delivered" },
                { n: "100%", l: "On-time rate" },
                { n: "5★", l: "Average rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-2xl font-bold">{s.n}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[73px] z-40 bg-white/96 backdrop-blur border-b border-stone-200 px-6 md:px-10 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 text-[10px] font-medium tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200 ${
                active === f
                  ? "bg-gold text-white"
                  : "border border-stone-200 text-gray-500 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[10px] text-gray-400 hidden md:block flex-shrink-0">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Project Grid ── */}
      <section className="py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={`/portfolio/${p.id}`}
                    className="group flex flex-col bg-white border border-stone-200 overflow-hidden hover:shadow-xl hover:border-stone-300 transition-all duration-300 h-full"
                  >
                    {/* Thumb */}
                    <div className="h-auto relative overflow-hidden flex-shrink-0">
                      {/*<BrowserMock
                        color={p.color}
                        accentColor={p.accentColor}
                      />*/}
                      {/* Thumb */}
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BrowserMock
                          color={p.color}
                          accentColor={p.accentColor}
                        />
                      )}
                      {/* Hover CTA */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-sm text-[10px] font-medium tracking-widest uppercase px-5 py-2.5 rounded-sm shadow-sm">
                          View Case Study →
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta row */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-[10px] font-medium tracking-[2px] uppercase"
                          style={{ color: p.accentColor }}
                        >
                          {p.industry}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {p.year}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl font-bold mb-2 group-hover:text-gold transition-colors duration-200">
                        {p.title}
                      </h2>

                      {/* Client badge */}
                      <p className="text-[10px] text-gray-400 mb-3">
                        Client:{" "}
                        <span className="text-gray-600 font-medium">
                          {p.client}
                        </span>
                      </p>

                      <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
                        {p.description}
                      </p>

                      {/* Results strip — key differentiator for B2B */}
                      {p.results && (
                        <div className="grid grid-cols-2 gap-2 mb-5 p-3 bg-stone-50 border border-stone-100 rounded-sm">
                          {p.results.slice(0, 2).map((r) => (
                            <div key={r.label}>
                              <p className="font-serif text-lg font-bold text-black leading-none">
                                {r.value}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                                {r.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <div className="flex gap-1.5 flex-wrap">
                          {p.tech.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2.5 py-1 bg-amber-50 border border-amber-100 text-amber-700 rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                          {p.tech.length > 2 && (
                            <span className="text-[10px] px-2.5 py-1 bg-stone-100 text-gray-400 rounded-sm">
                              +{p.tech.length - 2}
                            </span>
                          )}
                        </div>
                        <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── B2B CTA ── */}
      <section className="py-24 bg-black text-white px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Work with us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              Have a project <br />
              <em className="text-gold not-italic italic">
                we should talk about?
              </em>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We work with businesses of all sizes — from local startups to
              established companies. Every engagement starts with a free
              consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
            <Link
              href="/contact"
              className="text-center bg-gold text-white px-10 py-5 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-amber-600 transition-colors"
            >
              Book a Consultation →
            </Link>
            <Link
              href="/case-study"
              className="text-center border border-white/20 text-white px-10 py-5 text-xs font-medium tracking-widest uppercase rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
