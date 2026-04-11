"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 md:px-10 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-gold text-xs tracking-[4px] uppercase mb-6">
            <div className="w-8 h-px bg-gold" />
            Software Engineer · Sri Lanka
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter mb-6">
            PraDha
            <br />
            <em className="text-gold not-italic">Solutions</em>
          </h1>

          <p className="text-base md:text-lg text-gray-500 font-light max-w-md leading-relaxed mb-10">
            I craft elegant digital experiences — from scalable full-stack web
            apps to pixel-perfect interfaces. Three years of building and
            shipping at PraDha Solutions and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="bg-gold text-white px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-amber-600 transition-colors"
            >
              View Our Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/assets/Sineth Mashenka CV.pdf"
              download
              className="border border-gold text-gold px-9 py-4 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gold hover:text-white transition-all"
            >
              Download CV
            </motion.a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-8 border-t border-stone-200">
            {[
              { num: "3+", label: "Years experience" },
              { num: "10+", label: "Projects shipped" },
              { num: "500+", label: "Code commits" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold leading-none">
                  {s.num.replace("+", "")}
                  <span className="text-gold text-2xl">+</span>
                </p>
                <p className="text-xs text-gray-400 mt-2 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image + Status Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Status Card */}
          <div className="bg-white border border-stone-200 rounded-sm p-7 shadow-sm">
            <div className="flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-gold mb-5">
              <span className="w-4 h-px bg-gold" />
              Current Status
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium">
                Available for freelance
              </span>
            </div>

            {/* Experience mini list */}
            <div className="flex flex-col gap-3">
              {[
                {
                  role: "Back-End Dev Intern",
                  co: "Gravity Plus Pvt Ltd · 2025",
                },
                {
                  role: "Front-End Dev Intern",
                  co: "Silicon Radon Network · 2024",
                },
                {
                  role: "Freelance Web Developer",
                  co: "PraDha Solution Startup · 2023",
                },
              ].map((e) => (
                <div
                  key={e.role}
                  className="flex items-start gap-3 bg-stone-50 border border-stone-100 rounded-sm px-4 py-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      {e.role}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{e.co}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative gold accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/8 rounded-sm -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/20 rounded-sm -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
