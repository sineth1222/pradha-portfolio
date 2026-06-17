"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    tag: "Discovery",
    title: "Discovery Call",
    duration: "Day 1",
    desc: "Free 30-minute consultation. We understand your goals, timeline, and budget — no jargon, just an honest conversation about whether we're the right fit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Planning",
    title: "Proposal & Planning",
    duration: "Days 2–3",
    desc: "A clear written proposal — scope, deliverables, timeline, fixed pricing. No surprise invoices. Once approved, we lock in your start date and kick off with a detailed project plan.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Creative",
    title: "Design",
    duration: "Week 1–2",
    desc: "Wireframes first, then high-fidelity Figma mockups. You see exactly what you're getting before a single line of code is written. Two rounds of revisions included.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "Development",
    title: "Build & Test",
    duration: "Week 2–5",
    desc: "Development in weekly sprints with a live staging link to track progress. Tested across all devices and browsers before anything goes live — no surprises on launch day.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "Go live",
    title: "Launch",
    duration: "Final week",
    desc: "We handle deployment, DNS setup, and go-live checks. You get a handover call, full documentation, and access to all source code. Your product is yours — completely.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    num: "06",
    tag: "Aftercare",
    title: "Support",
    duration: "Ongoing",
    desc: "Bug fixes within 48 hours, feature additions on request, and optional monthly retainer plans for businesses that need continuous development.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="py-24 px-6 md:px-10" style={{ background: "#0a0906" }}>
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div
              className="flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase mb-4 font-mono"
              style={{ color: "#C9A84C" }}
            >
              <span className="w-6 h-px" style={{ background: "#C9A84C" }} />
              How we work
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "rgba(240,237,230,0.85)" }}
            >
              From idea to{" "}
              <em className="not-italic italic" style={{ color: "#C9A84C" }}>
                live product
              </em>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(240,237,230,0.38)" }}
          >
            A clear, repeatable process that keeps you informed at every stage —
            no black boxes, no surprises. Just steady progress toward your
            launch date.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border"
          style={{
            borderColor: "rgba(201,168,76,0.12)",
            gap: "1px",
            background: "rgba(201,168,76,0.1)",
          }}
        >
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={step.num}
                type="button"
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative text-left overflow-hidden transition-all duration-300 group"
                style={{
                  background: isActive ? "#100e07" : "#0a0906",
                  padding: "28px 24px 32px",
                }}
              >
                {/* Gold bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-400 origin-left"
                  style={{
                    background: "#C9A84C",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />

                {/* Big number */}
                <p
                  className="font-serif font-bold leading-none mb-4 transition-colors duration-300"
                  style={{
                    fontSize: "42px",
                    color: isActive
                      ? "rgba(201,168,76,0.35)"
                      : "rgba(201,168,76,0.1)",
                  }}
                >
                  {step.num}
                </p>

                {/* Icon */}
                <div
                  className="mb-4 transition-colors duration-300"
                  style={{
                    color: isActive
                      ? "rgba(201,168,76,0.75)"
                      : "rgba(201,168,76,0.28)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Tag */}
                <p
                  className="font-mono text-[9px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: "rgba(201,168,76,0.45)" }}
                >
                  {step.tag}
                </p>

                {/* Title */}
                <h3
                  className="font-serif text-base font-bold mb-3 transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "rgba(240,237,230,0.92)"
                      : "rgba(240,237,230,0.65)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Duration badge */}
                <div
                  className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 mb-4 border"
                  style={{
                    color: isActive ? "#C9A84C" : "rgba(201,168,76,0.4)",
                    borderColor: isActive
                      ? "rgba(201,168,76,0.4)"
                      : "rgba(201,168,76,0.15)",
                  }}
                >
                  {step.duration}
                </div>

                {/* Description — animates open */}
                <motion.div
                  initial={false}
                  animate={
                    isActive
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(240,237,230,0.48)" }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-8 py-6 border border-t-0"
          style={{
            borderColor: "rgba(201,168,76,0.12)",
            background: "#0a0906",
          }}
        >
          <div>
            <p
              className="font-serif text-xl font-bold mb-1"
              style={{ color: "rgba(240,237,230,0.75)" }}
            >
              Ready to start?
            </p>
            <p
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(201,168,76,0.45)" }}
            >
              Most projects launch within 3–6 weeks of kickoff
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 font-mono text-[10px] tracking-[0.2em] uppercase px-8 py-4 font-bold transition-all hover:brightness-90"
            style={{ background: "#C9A84C", color: "#0a0906" }}
          >
            Book a free call →
          </a>
        </div>
      </div>
    </section>
  );
}
