"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page or small site takes 1–2 weeks. A full-stack web app typically takes 4–8 weeks. We'll give you a realistic timeline in your proposal — and we stick to it.",
  },
  {
    q: "What does a project cost?",
    a: "We work across a wide range — from Rs. 15,000 for a simple landing page to Rs. 200,000+ for complex platforms. Every project gets a fixed-price quote upfront. No hourly billing, no surprise invoices.",
  },
  {
    q: "Will I own the source code?",
    a: "Yes, 100%. Once the project is complete and payment is settled, all source code, assets, and intellectual property transfer to you. We don't retain any ownership.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. We offer monthly retainer plans for businesses that need continuous updates, new features, or technical support. Bug fixes within 48 hours are included for all projects for 30 days post-launch.",
  },
  {
    q: "Can I see work-in-progress before launch?",
    a: "Absolutely. You get a private staging URL from day one so you can track development in real time. Weekly check-ins and milestone reviews are part of every project.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, on request — no questions asked. We understand that many projects involve sensitive business ideas or proprietary processes. An NDA can be signed before any discussion takes place.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Every project includes two rounds of design revisions before development begins. We work in Figma, so you see exactly what you're getting before a single line of code is written.",
  },
  {
    q: "Do you work with clients outside Sri Lanka?",
    a: "Yes. We work remotely with clients worldwide. Payments can be made via bank transfer, Wise, or PayPal. All communication is in English and handled asynchronously across time zones.",
  },
];

export default function QASection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">
          {/* ── Left sticky panel ── */}
          <div className="md:sticky md:top-32">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[3.5px] uppercase mb-4 text-gold">
              <span className="w-6 h-px bg-gold" />
              FAQ
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 text-stone-900">
              Common <em className="not-italic italic text-gold">questions</em>
            </h2>

            {/* Sub */}
            <p className="text-sm leading-relaxed mb-8 text-gray-500">
              Can't find what you're looking for? We're happy to answer anything
              directly.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block font-mono text-[9px] font-bold tracking-[0.22em] uppercase px-7 py-3.5 transition-all hover:brightness-90 bg-gold text-white"
            >
              Ask us directly →
            </Link>

            {/* Count badge */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p
                className="font-serif font-bold leading-none mb-1 text-stone-200"
                style={{ fontSize: "36px" }}
              >
                {String(faqs.length).padStart(2, "0")}
              </p>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-stone-400">
                questions answered
              </p>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="border-t border-stone-200">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    {/* Index num */}
                    <span className="font-mono text-[9px] tracking-[0.2em] flex-shrink-0 pt-0.5 min-w-[28px] text-stone-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className="flex-1 text-sm font-medium leading-snug transition-colors duration-200"
                      style={{
                        color: isOpen ? "#C9A84C" : "#1c1917",
                      }}
                    >
                      {faq.q}
                    </span>

                    {/* Toggle icon */}
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center border transition-all duration-200 mt-0.5"
                      style={{
                        borderColor: isOpen ? "#C9A84C" : "#e7e5e4",
                        background: isOpen ? "#C9A84C" : "transparent",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={isOpen ? "#ffffff" : "#a8a29e"}
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed pb-5 pl-9 pr-8 text-gray-500">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
