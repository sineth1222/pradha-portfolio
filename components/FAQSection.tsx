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

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-14 items-start">
          {/* Left — sticky label */}
          <div className="md:sticky md:top-32">
            <div
              className="flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase mb-3 font-medium"
              style={{ color: "#D4A017" }}
            >
              <span className="w-6 h-px" style={{ background: "#D4A017" }} />
              FAQ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
              Common{" "}
              <em className="not-italic italic" style={{ color: "#D4A017" }}>
                questions
              </em>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Can't find what you're looking for? We're happy to answer anything
              directly.
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs font-medium tracking-widest uppercase px-7 py-3.5 rounded-sm text-white transition-all duration-200 hover:brightness-110"
              style={{ background: "#D4A017" }}
            >
              Ask us directly →
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-stone-200">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span
                      className="font-medium text-sm leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? "#D4A017" : undefined }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5"
                      style={{
                        borderColor: isOpen ? "#D4A017" : "#d6d3d1",
                        background: isOpen ? "#D4A017" : "transparent",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={isOpen ? "white" : "#78716c"}
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

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 leading-relaxed pb-6 pr-10">
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
