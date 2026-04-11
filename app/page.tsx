/* eslint-disable react/no-unescaped-entities */
// app/page.tsx

import AnimatedSection from "@/components/AnimatedSection";
import FounderSection from "@/components/Foundersection";
import Hero from "@/components/Hero";
import MainHero from "@/components/MainHero";
import SelectedWorks from "@/components/SelectedWorks";
import Services from "@/components/Services";
//import Services from "@/components/Services";
//import SelectedWorks from "@/components/SelectedWorks";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ── HERO ── */}
      <MainHero />
      <FounderSection />
      {/*<Hero />*/}

      {/* ── SERVICES ── */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      {/* ── TOOLSET ── */}
      <AnimatedSection>
        <section className="py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-2">
                Core Stack
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
                The <em className="text-gold not-italic italic">Toolset</em>
              </h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                {
                  name: "React",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <circle cx="12" cy="12" r="2.05" fill="#D4A017" />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                        fill="none"
                        transform="rotate(60 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                        fill="none"
                        transform="rotate(120 12 12)"
                      />
                    </svg>
                  ),
                },
                {
                  name: "TypeScript",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="2"
                        fill="#D4A017"
                        opacity="0.15"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                      <text
                        x="4"
                        y="17"
                        fontSize="10"
                        fontWeight="bold"
                        fill="#D4A017"
                        fontFamily="monospace"
                      >
                        TS
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "Next.js",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 16.5V8l8 10V8"
                        stroke="#D4A017"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Tailwind",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <path
                        d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C13.29 10.53 14.21 11.5 16.5 11.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C15.21 6.97 14.29 6 12 6zM7.5 11.5C5.1 11.5 3.6 12.7 3 15.1c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C8.79 16.03 9.71 17 12 17c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C10.71 12.47 9.79 11.5 7.5 11.5z"
                        fill="#D4A017"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Node.js",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <path
                        d="M12 2L3 7v10l9 5 9-5V7L12 2z"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d="M12 2v20M3 7l9 5 9-5"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                        opacity="0.5"
                      />
                    </svg>
                  ),
                },
                {
                  name: "PostgreSQL",
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                      <ellipse
                        cx="12"
                        cy="7"
                        rx="8"
                        ry="3.5"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 7v5c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5V7"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 12v5c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5v-5"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-3 p-6 bg-white border border-stone-200 rounded-sm hover:border-gold/50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.svg}
                  </div>
                  <span className="text-xs font-medium tracking-widest text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── TOOLSET ── /}
      <AnimatedSection>
        <section className="py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-2">
                Core Stack
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
                The <em className="text-gold not-italic italic">Toolset</em>
              </h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind",
                "Node.js",
                "PostgreSQL",
              ].map((tech) => (
                <div
                  key={tech}
                  className="group flex flex-col items-center gap-3 p-6 bg-white border border-stone-200 rounded-sm hover:border-gold/50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <span className="material-symbols-outlined text-4xl text-gold group-hover:scale-110 transition-transform">
                    code
                  </span>
                  <span className="text-xs font-medium tracking-widest text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>*/}

      {/* ── SELECTED WORKS ── */}
      <AnimatedSection>
        <SelectedWorks />
      </AnimatedSection>

      {/* ── CTA ── */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        {/* Decorative gold lines */}
        <div className="absolute top-1/2 left-0 w-24 h-px bg-gold/20" />
        <div className="absolute top-1/2 right-0 w-24 h-px bg-gold/20" />

        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Let's collaborate
            <span className="w-6 h-px bg-gold" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to build something{" "}
            <em className="text-gold not-italic italic">exceptional?</em>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Let's discuss your next project and bring it to life with precision
            engineering and thoughtful design.
          </p>
          <a
            href="mailto:sinethmashenka@gmail.com"
            className="inline-block bg-gold text-white px-12 py-5 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-amber-600 transition-colors"
          >
            Get In Touch →
          </a>
        </div>
      </section>
    </main>
  );
}

/*"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION /}
      <section className="min-h-screen pt-28 pb-16 px-6 md:px-10 flex items-center max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-gold text-xs tracking-[4px] uppercase mb-6">
              <div className="w-10 h-px bg-gold" />
              SINETH MASHENKA
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter">
              The Craft of <span className="text-gold">Clean Code</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-lg">
              To me, software engineering is digital craftsmanship. I build with
              architectural precision, aesthetic elegance, and functional
              robustness.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#services"
                className="bg-gold text-white px-10 py-5 rounded-xl font-medium tracking-widest text-sm"
              >
                EXPLORE SERVICES
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/portfolio"
                className="border-2 border-gold text-gold px-10 py-5 rounded-xl font-medium tracking-widest text-sm hover:bg-gold hover:text-white transition"
              >
                VIEW PORTFOLIO
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image /}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPgw7FZYjrRTj-xMSwsF5uhOY9_R1xf94WYiruk1dmO2eo56tmQa0AIZNkzSFzIoN_ke7v8TRsRUQowIZ83vhUW2U5ox3B8tpO7zg20B63Foyoy6Lwa2FgSjhUYaM_heJ1nFRzNmLYgfkvfP9IHhxeUdoKnSh_iPztPzAwPl4q5UW1JdEoZerSdzj-Nawc3-EWXZcl0mv0eoQ2tReUw1doHT6RaewLi8V7SID2XNy6qXUwLDSu1QE0wx0UL5T8RviXLwrMkgDMQE"
              alt="Sineth Mashenka - Software Engineer"
              width={620}
              height={820}
              className="rounded-3xl shadow-2xl object-cover"
              priority
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION /}
      <AnimatedSection>
        <section id="services" className="py-24 bg-cream px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[3px] uppercase font-medium">
                Specializations
              </p>
              <h2 className="font-serif text-5xl font-bold mt-3">
                My Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon="web"
                title="Custom Web Development"
                desc="High-performance, scalable web applications using Next.js, React & TypeScript."
              />
              <ServiceCard
                icon="speed"
                title="Performance Optimization"
                desc="Auditing and refactoring codebases for lightning-fast load times and perfect Core Web Vitals."
              />
              <ServiceCard
                icon="architecture"
                title="Technical Consulting"
                desc="Strategic guidance on tech stack, system design, and scalable architecture."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TOOLSET SECTION /}
      <AnimatedSection>
        <section className="py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[3px] uppercase">
                Core Stack
              </p>
              <h2 className="font-serif text-5xl font-bold mt-3">
                The Toolset
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind",
                "Node.js",
                "PostgreSQL",
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, borderColor: "#d4af37" }}
                  className="flex flex-col items-center gap-4 p-10 bg-white border border-gl rounded-2xl hover:shadow-xl transition-all"
                >
                  <span className="material-symbols-outlined text-5xl text-gold">
                    code
                  </span>
                  <span className="font-medium tracking-widest text-sm">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SELECTED WORKS /}
      <AnimatedSection>
        <section id="works" className="py-24 px-6 md:px-10 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-gold text-xs tracking-[3px] uppercase">
                  Portfolio
                </p>
                <h2 className="font-serif text-5xl font-bold">
                  Selected Works
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-gold hover:underline flex items-center gap-2 text-sm font-medium"
              >
                View All Works <span>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <ProjectCard
                title="Lumina Capital Interface"
                category="Fintech • Next.js"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuABwac0GkIUbJEj1bOKHAsFsq5dPj1j0IPSjto7Voy4pzIeY9mAkKC7R-zWU-gcXrcmDZosuzxrVVgMVIjzveA051Ro-unORQzIIJqpEUnuQ4jEyjRNTimFU7DK-VdBzEgJzQtQB2uxIJij2goFWfPuzJ6MSeO2ePVckMQ0viZkMZwL6CdZCcMl_1COH3VeuPDri5QkCXE1kQsBrlSijpKVPDb_3VwRx69Jll0HsSJGW1aDxzF5B59I29Qkp5g8krY6h-1t3G-j8_A"
                link="/case-study"
              />
              <ProjectCard
                title="Vellum E-Store"
                category="E-commerce • React"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBiTmNPv2GVROyObls_sosrKIXRzO0Jd23BJO86w4XqOJBJp77BeaHSHAalUbYP3hoZThnie6RIUBg3N6zwFTcVB0vt2SFVMwq1Uf6AvwcuYCGYpzf2nozOkbCPv8hIrnKXMXcrvHJxYeP0NSCwwMKJivJqAa6A1RWYk2uhGtouMsCP05M4hzy9kWs1zbcXjepJFB_Wvnl8kVelkLK5AuJhBENC_zgFkbPevX-TkSA-yjL6pd2-_ulYbq1hn0n2Yqxj_tCHiYtwcAQ"
                link="/portfolio"
              />
              <ProjectCard
                title="Aura Mindfulness"
                category="Mobile • Next.js"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4LiKysWt-fz7rut4FYvHEIOD1557hbUTYjM0ziHUlP6cDChfABxXqrL-5LMT9y-Yz4bT47b0CfcyxSE0KXt3k-s2Tk71nfOKkV9aO1GqEc-NZ33ZyI3cLl8hrMlK4ADO-RYEjbh-uXYUhZkzvG9reMOJ7Yz0SPpN1452ww2PzWC88VWB8rM03bh5fiFvh0EMHhttED7uqAtLS-sZQmmcKNsOfRakBR8pH1v3nWECk1WdmLs2xKkcLxpJ_fvPeGuaOyyzGLKaLL0"
                link="/portfolio"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FINAL CTA /}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Ready to build something{" "}
            <span className="text-gold">exceptional?</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-md mx-auto">
            Let’s discuss your next project and elevate it with precision
            engineering.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:hello@pradha.com"
            className="mt-10 inline-block bg-gold text-black px-12 py-6 rounded-2xl font-medium text-lg tracking-widest"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </main>
  );
}*/
