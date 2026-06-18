/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHeroPage = pathname === "/";

  /* ── scroll detection ── */
  useEffect(() => {
    if (!isHeroPage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroPage]);

  /* ── body scroll lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── close menu on route change ── */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHeroPage && !scrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-study", label: "Case Study" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ═══════════════════════════════════ NAV BAR ═══════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: transparent ? "transparent" : "#000000",
          borderBottom: transparent ? "none" : "1px solid #0d0d0d",
          backdropFilter: transparent ? "none" : "blur(16px)",
          boxShadow: transparent ? "none" : "0 1px 24px rgba(0,0,0,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-[62px]">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="font-serif text-2xl md:text-[26px] font-bold tracking-tight transition-colors duration-300"
              style={{ color: transparent ? "#ffffff" : "#ffffff" }}
            >
              PraDha
              <span style={{ color: "#b8922a" }}> .</span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-9">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-[11px] font-medium tracking-[1.5px] uppercase transition-colors duration-200 group pb-0.5"
                  style={{
                    color: isActive(l.href)
                      ? "#b8922a"
                      : transparent
                        ? "rgba(255,255,255,0.78)"
                        : "#6b6b6b",
                  }}
                >
                  {l.label}
                  {/* underline */}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      background: "#b8922a",
                      width: isActive(l.href) ? "100%" : "0%",
                    }}
                  />
                  <style>{`
                    a:hover > span { width: 100% !important; }
                  `}</style>
                </Link>
              ))}
            </div>

            {/* ── Right side ── */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA — rounded-full pill */}
              <Link
                href="/contact"
                className="hidden md:block text-[11px] font-medium tracking-[1.5px] uppercase px-6 py-2.5 rounded-full transition-all duration-200"
                style={
                  transparent
                    ? {
                        color: "#ffffff",
                        border: "1.5px solid rgba(255,255,255,0.45)",
                        background: "transparent",
                      }
                    : {
                        color: "#ffffff",
                        background: "#b8922a",
                        border: "1.5px solid #b8922a",
                      }
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  if (transparent) {
                    el.style.borderColor = "rgba(255,255,255,0.9)";
                    el.style.background = "rgba(255,255,255,0.1)";
                  } else {
                    el.style.background = "#d4a843";
                    el.style.borderColor = "#d4a843";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  if (transparent) {
                    el.style.borderColor = "rgba(255,255,255,0.45)";
                    el.style.background = "transparent";
                  } else {
                    el.style.background = "#b8922a";
                    el.style.borderColor = "#b8922a";
                  }
                }}
              >
                Hire Us
              </Link>

              {/* Mobile hamburger — always visible circle button */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="md:hidden flex flex-col items-center justify-center gap-[5px] transition-all duration-200"
                style={{
                  width: 40,
                  height: 40,

                  flexShrink: 0,
                }}
              >
                {mobileOpen ? (
                  /* X icon */
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke={transparent ? "#ffffff" : "#b8922a"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="3" y1="3" x2="13" y2="13" />
                    <line x1="13" y1="3" x2="3" y2="13" />
                  </svg>
                ) : (
                  /* Hamburger lines */
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    stroke={transparent ? "#ffffff" : "#b8922a"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="0" y1="1" x2="18" y2="1" />
                    <line x1="0" y1="6" x2="18" y2="6" />
                    <line x1="0" y1="11" x2="18" y2="11" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════ MOBILE MENU ═══════════════════════════════ */}
      {mobileOpen && (
        <div
          className="md:hidden fixed left-0 right-0 bottom-0 z-40 overflow-y-auto"
          style={{
            top: "72px",
            background: "#ffffff",
          }}
        >
          {/* Watermark logo — absolute center, behind everything */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <Image
              src="/images/logo1.png"
              alt=""
              width={420}
              height={420}
              style={{
                objectFit: "contain",
                opacity: 0.06,
              }}
            />
          </div>
          {/* Logo mark */}
          <div className="flex flex-col items-center pt-8 pb-5">
            <p
              className="font-serif text-3xl font-bold tracking-tight"
              style={{ color: "#0d0d0d" }}
            >
              PraDha<span style={{ color: "#b8922a" }}>.</span>
            </p>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#aaa",
                marginTop: 4,
              }}
            >
              Software Solutions
            </p>
          </div>

          {/* Gold divider */}
          <div
            className="mx-8 mb-2"
            style={{
              height: "0.5px",
              background:
                "linear-gradient(to right, transparent, #b8922a80, transparent)",
            }}
          />

          {/* Nav links */}
          <div className="px-8 pb-4">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between transition-colors duration-200"
                style={{
                  paddingTop: 16,
                  paddingBottom: 16,
                  borderBottom:
                    i < navLinks.length - 1 ? "0.5px solid #f0ede8" : "none",
                  color: isActive(l.href) ? "#b8922a" : "#1a1a1a",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {l.label}
                </span>
                <span style={{ color: "#b8922a", fontSize: 18, lineHeight: 1 }}>
                  ›
                </span>
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="px-8 py-5">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-4 text-[11px] font-medium tracking-[2px] uppercase transition-colors duration-200"
              style={{
                background: "#b8922a",
                color: "#ffffff",
                borderRadius: "9999px",
              }}
            >
              Hire Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
