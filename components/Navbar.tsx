"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-study", label: "Case Study" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-sm border-b border-gl"
            : "bg-white/95 backdrop-blur-xl border-b border-gl"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-serif tracking-tighter font-bold"
        >
          PraDha<span className="text-gold text-2xl md:text-3xl">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-500 hover:text-black transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:sinethmashenka@gmail.com"
          className="hidden md:block bg-gold text-white px-7 py-3 text-xs font-medium tracking-widest rounded-sm hover:bg-amber-600 transition-colors"
        >
          HIRE US
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-sm hover:bg-stone-100 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-black origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-black origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[73px] left-0 right-0 z-50 bg-white border-b border-gl shadow-xl md:hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-stone-100 text-sm font-medium tracking-widest uppercase text-gray-700 hover:text-gold transition-colors group"
                    >
                      {l.label}
                      <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.25 }}
                  href="mailto:sinethmashenka@gmail.com"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 bg-gold text-white text-center py-4 text-xs font-medium tracking-widest rounded-sm hover:bg-amber-600 transition-colors"
                >
                  HIRE US
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
