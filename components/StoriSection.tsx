"use client";

import { useEffect, useRef, useState } from "react";

// ── Services data (adapted from PraDha services) ───────────────────────────
const SERVICES = [
  {
    id: "01",
    name: "Web Development",
    sub: "NEXT.JS · REACT · NODE.JS",
    hex: "#C9A84C",
    bg: "#0a0804",
    chipColor: "rgba(201,168,76,0.35)",
    storyLine: "#3a2e10",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Browser window */}
        <rect
          x="4"
          y="10"
          width="56"
          height="44"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
        />
        <line
          x1="4"
          y1="22"
          x2="60"
          y2="22"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="16" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="28" cy="16" r="2" fill="currentColor" opacity="0.5" />
        {/* Code lines */}
        <line
          x1="14"
          y1="32"
          x2="30"
          y2="32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="14"
          y1="39"
          x2="42"
          y2="39"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <line
          x1="14"
          y1="46"
          x2="36"
          y2="46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Accent slash */}
        <line
          x1="46"
          y1="28"
          x2="52"
          y2="50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    ),
    story:
      "Every pixel is a decision. Every line of code is a commitment. We architect digital experiences that don't just load fast — they think fast. From a five-page portfolio to a full-stack SaaS platform, we build what others only design.",
    plans: [
      "Starter — Rs. 25,000",
      "Professional — Rs. 55,000",
      "Enterprise — Custom",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "02",
    name: "UI / UX Design",
    sub: "FIGMA · FRAMER · MOTION",
    hex: "#8B6FD4",
    bg: "#06040f",
    chipColor: "rgba(139,111,212,0.35)",
    storyLine: "#2a1f4a",
    icon: (
      <svg
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Monitor shell */}
        <rect
          x="0"
          y="0"
          width="240"
          height="158"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
          opacity="0.55"
        />
        <rect
          x="8"
          y="8"
          width="224"
          height="128"
          rx="3"
          fill="currentColor"
          fillOpacity="0.06"
        />
        {/* Title bar */}
        <rect
          x="8"
          y="8"
          width="224"
          height="18"
          rx="3"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <circle cx="18" cy="17" r="3" fill="currentColor" opacity="0.35" />
        <circle cx="28" cy="17" r="3" fill="currentColor" opacity="0.25" />
        <circle cx="38" cy="17" r="3" fill="currentColor" opacity="0.18" />
        <rect
          x="52"
          y="13"
          width="28"
          height="8"
          rx="2"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="84"
          y="13"
          width="20"
          height="8"
          rx="2"
          fill="currentColor"
          fillOpacity="0.15"
        />
        {/* Left panel */}
        <rect
          x="8"
          y="26"
          width="42"
          height="110"
          rx="0"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <rect
          x="12"
          y="32"
          width="30"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <rect
          x="16"
          y="41"
          width="22"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.22"
        />
        <rect
          x="16"
          y="49"
          width="26"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.28"
        />
        <rect
          x="16"
          y="57"
          width="18"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="16"
          y="65"
          width="24"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.22"
        />
        <rect
          x="12"
          y="76"
          width="30"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="16"
          y="85"
          width="22"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <rect
          x="16"
          y="93"
          width="26"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.16"
        />
        {/* Grid dots */}
        <g opacity="0.12" fill="currentColor">
          <circle cx="60" cy="35" r="1" />
          <circle cx="74" cy="35" r="1" />
          <circle cx="88" cy="35" r="1" />
          <circle cx="102" cy="35" r="1" />
          <circle cx="116" cy="35" r="1" />
          <circle cx="60" cy="49" r="1" />
          <circle cx="74" cy="49" r="1" />
          <circle cx="88" cy="49" r="1" />
          <circle cx="102" cy="49" r="1" />
          <circle cx="60" cy="63" r="1" />
          <circle cx="74" cy="63" r="1" />
        </g>
        {/* Mobile artboard */}
        <rect
          x="56"
          y="30"
          width="60"
          height="104"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <rect
          x="56"
          y="30"
          width="60"
          height="104"
          rx="4"
          fill="currentColor"
          fillOpacity="0.04"
        />
        <rect
          x="62"
          y="38"
          width="48"
          height="8"
          rx="2"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="62"
          y="50"
          width="48"
          height="28"
          rx="2"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <line
          x1="62"
          y1="50"
          x2="110"
          y2="78"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <line
          x1="110"
          y1="50"
          x2="62"
          y2="78"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <rect
          x="62"
          y="82"
          width="48"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.25"
        />
        <rect
          x="62"
          y="90"
          width="36"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="62"
          y="100"
          width="30"
          height="8"
          rx="4"
          fill="currentColor"
          fillOpacity="0.45"
        />
        {/* Selection handles */}
        <rect
          x="54"
          y="28"
          width="4"
          height="4"
          rx="0.5"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="113"
          y="28"
          width="4"
          height="4"
          rx="0.5"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="54"
          y="131"
          width="4"
          height="4"
          rx="0.5"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="113"
          y="131"
          width="4"
          height="4"
          rx="0.5"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="54"
          y="28"
          width="64"
          height="108"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          opacity="0.6"
        />
        {/* Desktop artboard */}
        <rect
          x="126"
          y="38"
          width="96"
          height="62"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
        <rect
          x="126"
          y="38"
          width="96"
          height="18"
          rx="3"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <rect
          x="130"
          y="43"
          width="18"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <rect
          x="178"
          y="43"
          width="10"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.22"
        />
        <rect
          x="192"
          y="43"
          width="10"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="130"
          y="60"
          width="42"
          height="34"
          rx="2"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <rect
          x="132"
          y="63"
          width="30"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <rect
          x="132"
          y="72"
          width="36"
          height="3"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <rect
          x="132"
          y="79"
          width="22"
          height="6"
          rx="3"
          fill="currentColor"
          fillOpacity="0.45"
        />
        <rect
          x="178"
          y="60"
          width="40"
          height="34"
          rx="2"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <line
          x1="178"
          y1="60"
          x2="218"
          y2="94"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.15"
        />
        <line
          x1="218"
          y1="60"
          x2="178"
          y2="94"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.15"
        />
        {/* Right properties panel */}
        <rect
          x="190"
          y="26"
          width="42"
          height="110"
          rx="0"
          fill="currentColor"
          fillOpacity="0.07"
        />
        <rect
          x="194"
          y="32"
          width="20"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <rect
          x="194"
          y="40"
          width="16"
          height="8"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="212"
          y="40"
          width="16"
          height="8"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="194"
          y="53"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="204"
          y="53"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          opacity="0.35"
        />
        <rect
          x="214"
          y="53"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="194"
          y="66"
          width="30"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.22"
        />
        <rect
          x="194"
          y="75"
          width="22"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.16"
        />
        <rect
          x="194"
          y="84"
          width="28"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <line
          x1="194"
          y1="94"
          x2="226"
          y2="94"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.3"
        />
        <rect
          x="194"
          y="98"
          width="20"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.28"
        />
        <rect
          x="194"
          y="106"
          width="28"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        {/* Cursor */}
        <g transform="translate(118,68)" opacity="0.9">
          <path
            d="M0 0 L0 16 L4 12 L7 18 L9 17 L6 11 L11 11 Z"
            fill="currentColor"
            opacity="0.7"
          />
        </g>
        {/* Stand */}
        <rect
          x="105"
          y="158"
          width="30"
          height="6"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <rect
          x="95"
          y="164"
          width="50"
          height="4"
          rx="2"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    ),
    story:
      "Design is not decoration — it is strategy made visible. We don't create pretty screens. We engineer the exact emotional response your users should feel at every touchpoint. Conversion is the proof. Beauty is the method.",
    plans: [
      "Landing Page — Rs. 15,000",
      "Full Product — Rs. 40,000",
      "Brand + UI — Custom",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "CSS Animations"],
  },
  {
    id: "03",
    name: "Mobile App Dev",
    sub: "REACT NATIVE · EXPO · FIREBASE",
    hex: "#2EB87A",
    bg: "#020f08",
    chipColor: "rgba(46,184,122,0.3)",
    storyLine: "#0d3320",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Phone */}
        <rect
          x="16"
          y="4"
          width="32"
          height="56"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
        />
        <line
          x1="16"
          y1="12"
          x2="48"
          y2="12"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <line
          x1="16"
          y1="52"
          x2="48"
          y2="52"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="32" cy="57" r="2" fill="currentColor" opacity="0.5" />
        {/* App grid */}
        <rect
          x="22"
          y="18"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.8"
        />
        <rect
          x="34"
          y="18"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.6"
        />
        <rect
          x="22"
          y="30"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.6"
        />
        <rect
          x="34"
          y="30"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.9"
        />
      </svg>
    ),
    story:
      "Your idea lives in someone's pocket. One codebase. Two platforms. Zero compromise. We build cross-platform apps with React Native that feel native — because the details are what separate products people use from apps people delete.",
    plans: [
      "MVP — Rs. 60,000",
      "Full App — Rs. 120,000",
      "Enterprise — Custom",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Firebase"],
  },
  {
    id: "04",
    name: "Logo & Branding",
    sub: "ILLUSTRATOR · FIGMA · IDENTITY",
    hex: "#E05C5C",
    bg: "#0f0404",
    chipColor: "rgba(224,92,92,0.35)",
    storyLine: "#3d1010",
    icon: (
      <svg
        viewBox="0 0 230 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer aura rings */}
        <circle
          cx="115"
          cy="115"
          r="108"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.1"
        />
        <circle
          cx="115"
          cy="115"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.14"
        />
        <circle
          cx="115"
          cy="115"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.1"
          strokeDasharray="3 5"
        />
        {/* Main diamond outline */}
        <polygon
          points="115,22 196,88 115,200 34,88"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          opacity="0.75"
        />
        {/* Crown facet top */}
        <polygon
          points="115,22 196,88 115,96 34,88"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.5"
        />
        {/* Crown radial lines */}
        <line
          x1="115"
          y1="22"
          x2="155"
          y2="88"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.3"
        />
        <line
          x1="115"
          y1="22"
          x2="75"
          y2="88"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.3"
        />
        {/* Girdle */}
        <line
          x1="34"
          y1="88"
          x2="196"
          y2="88"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
        {/* Pavilion facets */}
        <line
          x1="115"
          y1="96"
          x2="115"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.25"
        />
        <line
          x1="34"
          y1="88"
          x2="115"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="196"
          y1="88"
          x2="115"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="75"
          y1="88"
          x2="115"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.18"
        />
        <line
          x1="155"
          y1="88"
          x2="115"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.18"
        />
        {/* Inner culet star */}
        <polygon
          points="115,96 155,88 115,126 75,88"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
        {/* Subtle fills */}
        <polygon
          points="115,22 155,88 115,96 75,88"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <polygon
          points="115,96 155,88 115,126 75,88"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Tick marks */}
        <line
          x1="34"
          y1="83"
          x2="34"
          y2="93"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
        <line
          x1="196"
          y1="83"
          x2="196"
          y2="93"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
        <line
          x1="110"
          y1="22"
          x2="120"
          y2="22"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
        <line
          x1="110"
          y1="200"
          x2="120"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
        {/* Color palette chips */}
        <rect
          x="12"
          y="218"
          width="18"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="34"
          y="218"
          width="18"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="56"
          y="218"
          width="18"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.35"
        />
        <rect
          x="78"
          y="218"
          width="18"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.22"
        />
        <rect
          x="100"
          y="218"
          width="18"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        />
        {/* Typography specimen line */}
        <line
          x1="12"
          y1="248"
          x2="180"
          y2="248"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.15"
        />
        <line
          x1="12"
          y1="258"
          x2="140"
          y2="258"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <line
          x1="12"
          y1="266"
          x2="160"
          y2="266"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
      </svg>
    ),
    story:
      "A logo is not a brand. A brand is the sum of every impression you leave. We build identities that communicate before a word is spoken — in the curve of a letter, the weight of a colour, the silence between shapes. Recognisable. Irreplaceable.",
    plans: [
      "Logo Only — Rs. 8,000",
      "Brand Kit — Rs. 22,000",
      "Full Identity — Custom",
    ],
    tech: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function ServicesStoriesSection() {
  const [active, setActive] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight);
      if (idx !== active) {
        setActive(idx);
        setTextKey((k) => k + 1);
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [active]);

  const scrollTo = (i: number) => {
    trackRef.current?.scrollTo({
      top: i * (trackRef.current?.clientHeight ?? 580),
      behavior: "smooth",
    });
  };

  const c = SERVICES[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "580px",
        background: c.bg,
        transition: "background 0.9s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* ── Background logo watermark ── */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          style={{
            width: "380px",
            height: "380px",
            opacity: 0.035,
            filter: "blur(0.5px)",
            color: c.hex,
            transition: "color 0.9s ease",
          }}
        >
          {c.icon}
        </div>
      </div>

      {/* ── Color tint vignette ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${c.hex}14 0%, transparent 65%)`,
          transition: "background 0.9s ease",
        }}
      />

      {/* ── Scanlines ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.018) 3px,rgba(0,0,0,0.018) 4px)",
        }}
      />

      {/* ── Moving scan line ── */}
      <div
        className="absolute left-0 right-0 h-px z-[3] pointer-events-none"
        style={{
          background: `${c.hex}25`,
          animation: "pradha-scan 8s linear infinite",
          transition: "background 0.9s ease",
        }}
      />

      {/* ── Scroll track ── */}
      <div
        ref={trackRef}
        className="absolute inset-0 z-[4] overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory", scrollbarWidth: "none" }}
      >
        {SERVICES.map((svc, i) => (
          <div
            key={svc.id}
            style={{ height: "580px", scrollSnapAlign: "start" }}
          >
            {/* ── DESKTOP: icon left, text right ── */}
            <div className="hidden sm:flex items-center w-full h-full">
              {/* Icon col */}
              <div
                className="shrink-0 flex items-center justify-center"
                style={{ width: "42%", height: "100%" }}
              >
                <div
                  style={{
                    width: "260px",
                    height: "260px",
                    color: svc.hex,
                    opacity: 0.18,
                    animation:
                      active === i
                        ? "pradha-icon-in 0.75s cubic-bezier(.34,1.3,.64,1) forwards"
                        : "none",
                    transform:
                      active === i
                        ? undefined
                        : "translateX(-40px) scale(0.88)",
                  }}
                >
                  {svc.icon}
                </div>
              </div>

              {/* Text col */}
              <div
                className="flex-1 flex flex-col justify-center gap-5"
                style={{ paddingRight: "60px", paddingLeft: "4px" }}
              >
                {active === i && <TextContent key={`d-${textKey}`} svc={svc} />}
              </div>
            </div>

            {/* ── MOBILE: icon top, text bottom ── */}
            <div className="flex sm:hidden flex-col w-full h-full">
              <div
                className="flex items-end justify-center pt-8 pb-2"
                style={{ flex: "0 0 46%" }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    color: svc.hex,
                    opacity: 0.22,
                    animation:
                      active === i
                        ? "pradha-icon-in 0.75s cubic-bezier(.34,1.3,.64,1) forwards"
                        : "none",
                    transform:
                      active === i
                        ? undefined
                        : "translateX(-30px) scale(0.88)",
                  }}
                >
                  {svc.icon}
                </div>
              </div>
              <div
                className="flex flex-col justify-center gap-3 px-6 pb-4"
                style={{ flex: 1, overflow: "hidden" }}
              >
                {active === i && (
                  <TextContent key={`m-${textKey}`} svc={svc} mobile />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Dot nav ── */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {SERVICES.map((svc, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={svc.name}
            style={{
              width: "5px",
              height: active === i ? "18px" : "5px",
              background:
                active === i
                  ? "rgba(240,237,230,0.85)"
                  : "rgba(240,237,230,0.2)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.35s ease",
              borderRadius: "2px",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div
        className="absolute bottom-0 left-0 h-0.5 z-10"
        style={{
          width: `${((active + 1) / SERVICES.length) * 100}%`,
          background: c.hex,
          opacity: 0.55,
          transition: "width 0.5s ease, background 0.9s ease",
        }}
      />

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes pradha-scan {
          from { top: -1px; }
          to   { top: 100%; }
        }
        @keyframes pradha-icon-in {
          from { transform: translateX(-55px) scale(0.85); opacity: 0; }
          to   { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes pradha-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes pradha-fade-up {
          from { transform: translateY(14px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes pradha-fade-right {
          from { transform: translateX(-16px); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

// ── Text block ────────────────────────────────────────────────────────────────
function TextContent({
  svc,
  mobile = false,
}: {
  svc: (typeof SERVICES)[0];
  mobile?: boolean;
}) {
  return (
    <>
      {/* Index label */}
      <p
        className="font-mono uppercase"
        style={{
          fontSize: "9px",
          letterSpacing: "0.4em",
          color: "rgba(240,237,230,0.28)",
          animation: "pradha-fade-up 0.5s 0.04s both",
        }}
      >
        — SERVICE {svc.id}
      </p>

      {/* Service name */}
      <div className="overflow-hidden">
        <h3
          className="font-serif font-bold leading-none"
          style={{
            fontSize: mobile
              ? "clamp(26px,7vw,36px)"
              : "clamp(30px,4.5vw,52px)",
            color: "rgba(240,237,230,0.62)",
            letterSpacing: "0.02em",
            animation:
              "pradha-slide-up 0.65s cubic-bezier(.16,1,.3,1) 0.08s both",
          }}
        >
          {svc.name}
        </h3>
      </div>

      {/* Sub chip */}
      <div
        className="inline-flex items-center gap-2 w-fit font-mono uppercase"
        style={{
          fontSize: "9px",
          letterSpacing: "0.22em",
          padding: "5px 12px",
          border: `1px solid ${svc.chipColor}`,
          color: "rgba(240,237,230,0.38)",
          animation: "pradha-fade-right 0.5s 0.16s both",
        }}
      >
        ◆ {svc.sub}
      </div>

      {/* Story paragraph */}
      {!mobile ? (
        <div
          className="relative pl-4"
          style={{
            maxWidth: "400px",
            animation: "pradha-fade-up 0.6s 0.26s both",
          }}
        >
          <div
            className="absolute left-0 top-1 bottom-1 w-0.5"
            style={{ background: svc.storyLine }}
          />
          <p
            className="text-sm italic leading-relaxed"
            style={{ color: "rgba(240,237,230,0.44)" }}
          >
            {svc.story}
          </p>
        </div>
      ) : (
        <p
          className="italic leading-relaxed"
          style={{
            fontSize: "12px",
            color: "rgba(240,237,230,0.42)",
            animation: "pradha-fade-up 0.6s 0.22s both",
            WebkitLineClamp: 4,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {svc.story}
        </p>
      )}

      {/* Plans list */}
      {!mobile && (
        <div
          style={{ animation: "pradha-fade-up 0.55s 0.32s both" }}
          className="flex flex-col gap-1.5"
        >
          {svc.plans.map((p, idx) => (
            <div
              key={p}
              className="flex items-center gap-3"
              style={{
                animation: `pradha-fade-up 0.4s ${0.34 + idx * 0.06}s both`,
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: svc.hex, opacity: 0.7 }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "rgba(240,237,230,0.28)",
                }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tech tags */}
      <div
        className="flex flex-wrap gap-1.5"
        style={{ animation: "pradha-fade-up 0.5s 0.42s both" }}
      >
        {svc.tech.map((t) => (
          <span
            key={t}
            className="font-mono"
            style={{
              fontSize: "9px",
              letterSpacing: "0.15em",
              padding: "3px 8px",
              border: `1px solid ${svc.chipColor}`,
              color: "rgba(240,237,230,0.22)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom hex / id label */}
      <p
        className="font-mono"
        style={{
          fontSize: "9px",
          letterSpacing: "0.28em",
          color: "rgba(240,237,230,0.1)",
          animation: "pradha-fade-up 0.5s 0.48s both",
        }}
      >
        {svc.name.toUpperCase().replace(/ /g, "_")} / {svc.hex}
      </p>
    </>
  );
}
