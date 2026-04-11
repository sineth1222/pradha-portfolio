"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
});

export default function FounderSection() {
  return (
    <section className="py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-14"
        >
          <span className="w-6 h-px bg-gold" />
          The Person Behind It
        </motion.div>

        <div className="grid md:grid-cols-[340px_1fr] gap-14 lg:gap-20 items-start">
          {/* ── Left — Photo + name card ── */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-5">
            {/* Photo */}
            <div className="relative">
              {/* Gold frame accent */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-sm -z-10"
                style={{ border: "1px solid rgba(212,160,23,0.30)" }}
              />

              <div className="relative overflow-hidden rounded-sm aspect-[4/5] w-full">
                <Image
                  src="/images/sineth.png"
                  alt="Sineth Mashenka — Founder & CEO of PraDha Solutions"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
                {/* Subtle bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating role badge */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-sm backdrop-blur-sm"
                style={{
                  background: "rgba(10,10,10,0.75)",
                  border: "1px solid rgba(212,160,23,0.25)",
                }}
              >
                <p className="text-white text-sm font-medium leading-tight">
                  Sineth Mashenka
                </p>
                <p
                  className="text-[11px] mt-0.5 font-medium tracking-wide"
                  style={{ color: "#D4A017" }}
                >
                  Founder & CEO · PraDha Solutions
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-2">
              {[
                {
                  label: "LinkedIn",
                  sub: "linkedin.com/in/sineth",
                  href: "https://www.linkedin.com/in/sineth-mashenka-113122241/",
                },
                {
                  label: "GitHub",
                  sub: "github.com/sineth",
                  href: "https://github.com/sineth1222",
                },
                {
                  label: "Portfolio",
                  sub: "sinethmashenka.shop",
                  href: "https://sinethmashenka-protfolio--beta.vercel.app/",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 bg-white border border-stone-200 rounded-sm hover:border-gold/50 transition-all"
                >
                  <span className="text-xs font-medium">{l.label}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-gold transition-colors">
                    {l.sub} ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right — Bio + details ── */}
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <motion.div {...fadeUp(0.15)}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
                Built by a developer
                <br />
                <em className="text-gold not-italic italic">who ships.</em>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                PraDha Solutions was founded by Sineth Mashenka — a software
                engineer with a passion for turning ideas into production-ready
                digital products. Every project is handled with direct
                involvement from the founder, ensuring quality, transparency,
                and on-time delivery.
              </p>
            </motion.div>

            {/* Bio points */}
            <motion.div {...fadeUp(0.22)} className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🎓",
                  title: "BSc in Software Engineering",
                  sub: "Currently pursuing — 2025 intake",
                },
                {
                  icon: "💼",
                  title: "3+ Years Experience",
                  sub: "Internships at Gravity Plus & Silicon Radon",
                },
                {
                  icon: "🌏",
                  title: "Based in Sri Lanka",
                  sub: "Remote-first · Available worldwide",
                },
                {
                  icon: "🚀",
                  title: "10+ Projects Shipped",
                  sub: "Startups, SMEs & enterprise clients",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3 bg-cream border border-stone-200 rounded-sm p-5"
                >
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{b.title}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      {b.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              {...fadeUp(0.28)}
              className="relative pl-6"
              style={{ borderLeft: "2px solid #D4A017" }}
            >
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "I started PraDha Solutions because I believe great software
                shouldn't be reserved for big companies with big budgets. Every
                business — no matter the size — deserves a digital product that
                actually works and grows with them."
              </p>
              <p
                className="text-[10px] tracking-[2px] uppercase mt-3 font-medium"
                style={{ color: "#D4A017" }}
              >
                — Sineth Mashenka, Founder
              </p>
            </motion.blockquote>

            {/* Skills strip */}
            <motion.div {...fadeUp(0.33)}>
              <p className="text-[10px] tracking-[2.5px] uppercase text-gray-400 mb-3">
                Core technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "React Native",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "MongoDB",
                  "Figma",
                  "AWS",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-3 py-1.5 bg-amber-50 border border-amber-100 text-amber-700 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA /}
            <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-block px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm text-white transition-all duration-200 hover:bg-amber-600"
                style={{ background: "#D4A017" }}
              >
                Work with Sineth →
              </Link>
              <Link
                href="/portfolio"
                className="inline-block px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm border border-stone-300 text-gray-600 hover:border-gold hover:text-gold transition-all duration-200"
              >
                View Projects
              </Link>
            </motion.div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
