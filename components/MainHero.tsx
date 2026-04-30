"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ══════════════════════════════
          VIDEO BACKGROUND
      ══════════════════════════════ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-bg1.mp4"
        /* poster="/images/hero-poster.jpg" ← add a poster frame so users
           see something before the video loads on slow connections */
      />

      {/* ══════════════════════════════
          OVERLAY STACK  (z-10)
          Adjust the opacity values to taste.
          Use the interactive preview widget to find your ideal values.
      ══════════════════════════════ */}

      {/* 1 — Primary dark veil — controls overall darkness */}
      <div className="absolute inset-0 z-10 bg-black/[0.72]" />

      {/* 2 — Bottom-to-top gradient — lifts text off the footer area */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* 3 — Gold radial warmth — subtle brand accent from left */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 8% 62%, rgba(212,160,23,0.13) 0%, transparent 70%)",
        }}
      />

      {/* 4 — Right-side vignette — keeps card area slightly darker */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

      {/* 5 — Scanline film grain texture — very subtle cinematic feel */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
          opacity: 0.035,
        }}
      />

      {/* 6 — Bottom page transition — fades into your page background colour */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════
          CONTENT  (z-20)
      ══════════════════════════════ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 grid md:grid-cols-[1fr_380px] gap-14 items-center">
        {/* ── Left — Text ── */}
        <div>
          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px" style={{ background: "#D4A017" }} />
            <span
              className="text-[10px] tracking-[4px] uppercase font-medium"
              style={{ color: "#D4A017" }}
            >
              Software Agency · Sri Lanka
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-serif font-bold leading-[0.92] tracking-tighter mb-6 text-white"
            style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
          >
            PraDha
            <br />
            <em className="not-italic italic" style={{ color: "#D4A017" }}>
              Solutions
            </em>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-base md:text-lg font-light max-w-md leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            We build digital products that solve real business problems — from
            scalable web applications to pixel-perfect interfaces. Delivering
            since 2023.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/portfolio"
              className="inline-block px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#D4A017" }}
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
              style={{
                border: "1px solid rgba(212,160,23,0.60)",
                color: "#D4A017",
              }}
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.52)}
            className="flex gap-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}
          >
            {[
              { num: "3+", label: "Years experience" },
              { num: "10+", label: "Projects shipped" },
              { num: "100%", label: "On-time delivery" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold leading-none text-white">
                  {s.num.replace(/[+%]/g, "")}
                  <span style={{ color: "#D4A017", fontSize: "1.35rem" }}>
                    {s.num.includes("+") ? "+" : "%"}
                  </span>
                </p>
                <p
                  className="text-xs mt-2 tracking-wide"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Status Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:block"
        >
          {/* Subtle gold glow behind card */}
          <div
            className="absolute -inset-6 rounded-sm pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,160,23,0.10) 0%, transparent 72%)",
            }}
          />

          <div
            className="relative rounded-sm p-7 backdrop-blur-md"
            style={{
              background: "rgba(8,8,8,0.75)",
              border: "1px solid rgba(212,160,23,0.20)",
            }}
          >
            {/* Card header */}
            <div
              className="flex items-center gap-2 text-[10px] tracking-[3px] uppercase mb-5 font-medium"
              style={{ color: "#D4A017" }}
            >
              <span className="w-4 h-px" style={{ background: "#D4A017" }} />
              What We Do
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-white">
                Open to collaborations
              </span>
            </div>

            {/* Service list */}
            <div className="flex flex-col gap-2.5">
              {[
                {
                  icon: "⚙️",
                  label: "Full-Stack Web Apps",
                  sub: "React · Next.js · Node.js",
                },
                {
                  icon: "📱",
                  label: "Mobile Applications",
                  sub: "React Native · Cross-platform",
                },
                {
                  icon: "🎨",
                  label: "UI / UX Design",
                  sub: "Figma · Pixel-perfect interfaces",
                },
                {
                  icon: "🛒",
                  label: "E-commerce Solutions",
                  sub: "Custom stores · Integrations",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-sm px-4 py-3 transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="text-base flex-shrink-0"
                    style={{ fontSize: 16 }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-tight text-white">
                      {s.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {s.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card footer CTA */}
            <div
              className="mt-6 pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Link
                href="/contact"
                className="block text-center text-xs font-medium tracking-widest uppercase py-3.5 rounded-sm text-black transition-all duration-200 hover:brightness-110"
                style={{ background: "#D4A017" }}
              >
                Start a Project →
              </Link>
            </div>
          </div>

          {/* Corner accent decorations */}
          <div
            className="absolute -bottom-3 -right-3 w-20 h-20 rounded-sm -z-10"
            style={{ background: "rgba(212,160,23,0.06)" }}
          />
          <div
            className="absolute -top-3 -left-3 w-14 h-14 rounded-sm -z-10"
            style={{ border: "1px solid rgba(212,160,23,0.16)" }}
          />
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[3px] uppercase"
          style={{ color: "rgba(255,255,255,0.30)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 animate-pulse"
          style={{ background: "rgba(212,160,23,0.45)" }}
        />
      </motion.div>
    </section>
  );
}
