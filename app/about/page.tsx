import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — PraDha Solutions",
  description:
    "We don't build websites. We engineer outcomes. A Sri Lankan software agency built for businesses that want results, not deliverables.",
};

// ── Design tokens ──────────────────────────────────────────────────────────────
// bg:       #ffffff  (pure white)
// surface:  #faf9f7  (off-white panels)
// border:   #ede9e2  (warm stone)
// gold:     #d4af37  (primary accent)
// gold-dim: rgba(212,175,55,0.12)
// text-1:   #111110  (headings)
// text-2:   #4a4845  (body)
// text-3:   #9a9490  (captions / mono labels)

const GOLD = "#d4af37";
const GOLD_DIM = "rgba(212,175,55,0.12)";
const BORDER = "#ede9e2";
const TEXT1 = "#111110";
const TEXT2 = "#4a4845";
const TEXT3 = "#9a9490";
const SURFACE = "#faf9f7";

const manifesto = [
  {
    code: "01",
    title: "WE DON'T BUILD WEBSITES.",
    body: "The internet is full of agencies that build pages. We build outcomes. PraDha Solutions exists at the intersection of engineering precision and business intent — where every component, every query, every animation is a deliberate decision toward a measurable result.",
  },
  {
    code: "02",
    title: "THE CODE IS THE VESSEL.",
    body: "Every PraDha project carries a purpose — a business goal, a user problem, a growth lever. When we ship your product, we're not closing a ticket. We're delivering the tool your business runs on. Clean architecture. Maintainable code. Zero technical debt left behind.",
  },
  {
    code: "03",
    title: "PRECISE. INTENTIONAL. BUILT TO LAST.",
    body: "Our aesthetic is surgical clarity meets crafted detail. No bloated frameworks. No boilerplate solutions. Just production-grade systems designed for the long run. When your users land on a PraDha-built product, they feel the difference immediately.",
  },
  {
    code: "04",
    title: "ENTER A DIFFERENT STANDARD.",
    body: "PraDha is not for everyone. It's for founders, operators, and decision-makers who understand that great software is a competitive advantage — not a checkbox. If you've made it this far, you already know the kind of partner you're looking for.",
  },
];

const values = [
  {
    icon: "◆",
    title: "OUTCOME OVER OUTPUT",
    body: "We measure success by what your product does — not by the lines of code we wrote. Every decision is evaluated against the result it produces for your business.",
  },
  {
    icon: "▲",
    title: "CLARITY IN EVERY BUILD",
    body: "We don't hide behind jargon. You get plain-English updates, live staging links, and documentation you can actually read. No black boxes.",
  },
  {
    icon: "◈",
    title: "BUILT FOR THE LONG GAME",
    body: "Quick launches that fall apart in six months aren't our thing. We architect for maintainability, scalability, and the next hire who'll read our code.",
  },
];

const stats = [
  { value: "2024", label: "FOUNDED" },
  { value: "12+", label: "PROJECTS" },
  { value: "4", label: "CORE SERVICES" },
  { value: "LK", label: "BASED IN SRI LANKA" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/pradha-solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pradha-solutions-65a819417/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/94760805884",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    href: "https://pradha.xyz",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
];

// ── Reusable style helpers ─────────────────────────────────────────────────────
const eyebrowStyle: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "9px",
  letterSpacing: "0.42em",
  color: GOLD,
  textTransform: "uppercase",
};

export default function AboutPage() {
  return (
    <main className="pt-0 mt-10 md:mt-30 bg-white">
      {/* ════════════════════════════════════════════════════════
          HERO — split: left text / right logo watermark panel
      ════════════════════════════════════════════════════════ /}
      <section
        className="relative min-h-[88vh] flex flex-col md:flex-row overflow-hidden border-b"
        style={{ borderColor: BORDER }}
      >
        {/* Right panel — tonal logo watermark /}
        <div
          className="hidden md:flex absolute right-0 top-0 bottom-0 items-center justify-center overflow-hidden"
          style={{ width: "50%", background: SURFACE }}
        >
          {/* Subtle grid /}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
              opacity: 0.6,
            }}
          />
          {/* Fade-left edge /}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #fff 0%, transparent 30%)",
            }}
          />
          <div className="relative w-full h-full">
            <Image
              src="/images/logo2.jpeg"
              alt="TYLON Logo"
              fill
              className="object-cover"
            />
          </div>
          {/* "P" watermark /}
          <span
            className="relative z-10 font-serif font-bold select-none"
            style={{
              fontSize: "clamp(180px, 28vw, 320px)",
              color: "rgba(212,175,55,0.08)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            P
          </span>
          {/* Corner tag /}
          <span
            className="absolute top-6 right-6 font-mono text-[8px] tracking-[0.35em] uppercase"
            style={{ color: "rgba(212,175,55,0.4)" }}
          >
            PRADHA / 2025
          </span>
        </div>

        {/* Left panel — content /}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <p style={eyebrowStyle} className="mb-6 flex items-center gap-3">
            <span
              className="inline-block"
              style={{ width: "20px", height: "1px", background: GOLD }}
            />
            The Mission
          </p>

          <h1
            className="font-serif font-bold uppercase leading-[0.9] mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              letterSpacing: "0.02em",
              color: TEXT1,
            }}
          >
            WE DON'T
            <br />
            BUILD WEBSITES.
            <br />
            <span style={{ color: GOLD }}>WE ENGINEER OUTCOMES.</span>
          </h1>

          <div
            className="mb-6"
            style={{ width: "40px", height: "2px", background: GOLD }}
          />

          <p
            className="text-base leading-relaxed mb-10 max-w-sm"
            style={{ color: TEXT2 }}
          >
            Founded in Sri Lanka. Built for founders, operators, and businesses
            that understand great software is a competitive advantage — not a
            checkbox.
          </p>

          {/* CTAs /}
          <div className="flex items-center gap-4 flex-wrap mb-12">
            <Link
              href="/contact"
              className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase px-8 py-4 text-white transition-all hover:brightness-90"
              style={{ background: GOLD, letterSpacing: "0.25em" }}
            >
              Start a project →
            </Link>
            <Link
              href="/portfolio"
              className="font-mono text-[9px] tracking-[0.22em] uppercase px-7 py-[15px] border transition-all hover:border-current"
              style={{
                borderColor: BORDER,
                color: TEXT3,
              }}
            >
              View our work ↗
            </Link>
          </div>

          {/* Social links row /}
          <div>
            <p
              className="font-mono text-[8px] tracking-[0.35em] uppercase mb-3"
              style={{ color: TEXT3 }}
            >
              — Find us online
            </p>
            <div className="flex flex-wrap gap-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 border-r border-y first:border-l font-mono text-[9px] tracking-[0.15em] uppercase transition-all hover:bg-amber-50"
                  style={{
                    borderColor: BORDER,
                    color: TEXT3,
                  }}
                >
                  <span
                    className="transition-colors group-hover:text-amber-600"
                    style={{ color: TEXT3 }}
                  >
                    {s.icon}
                  </span>
                  <span className="group-hover:text-amber-700 transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold bottom bar /}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(to right, ${GOLD}, rgba(212,175,55,0.2), transparent)`,
          }}
        />
      </section>*/}

      <section
        className="relative min-h-[88vh] flex flex-col md:flex-row overflow-hidden border-b"
        style={{ borderColor: BORDER }}
      >
        {/* ── Full-width background image ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/logo1.png"
            alt="PraDha background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* White wash — keeps it light/white feel */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(255,255,255,0.78)" }}
          />
          {/* Left stronger, right more transparent — text stays crisp */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.80) 45%, rgba(255,255,255,0.45) 100%)",
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
              opacity: 0.2,
            }}
          />
        </div>

        {/* Corner tag */}
        <span
          className="absolute top-6 right-6 z-10 font-mono text-[8px] tracking-[0.35em] uppercase hidden md:block"
          style={{ color: "rgba(212,175,55,0.55)" }}
        >
          PRADHA / 2025
        </span>

        {/* Left panel — content */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0"
          style={{ width: "100%", maxWidth: "620px" }}
        >
          <p style={eyebrowStyle} className="mb-6 flex items-center gap-3">
            <span
              className="inline-block"
              style={{ width: "20px", height: "1px", background: GOLD }}
            />
            The Mission
          </p>

          <h1
            className="font-serif font-bold uppercase leading-[0.9] mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              letterSpacing: "0.02em",
              color: TEXT1,
            }}
          >
            WE DON'T
            <br />
            BUILD WEBSITES.
            <br />
            <span style={{ color: GOLD }}>WE ENGINEER OUTCOMES.</span>
          </h1>

          <div
            className="mb-6"
            style={{ width: "40px", height: "2px", background: GOLD }}
          />

          <p
            className="text-base leading-relaxed mb-10 max-w-sm"
            style={{ color: TEXT2 }}
          >
            Founded in Sri Lanka. Built for founders, operators, and businesses
            that understand great software is a competitive advantage — not a
            checkbox.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap mb-12">
            <Link
              href="/contact"
              className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase px-8 py-4 text-white transition-all hover:brightness-90"
              style={{ background: GOLD, letterSpacing: "0.25em" }}
            >
              Start a project →
            </Link>
            <Link
              href="/portfolio"
              className="font-mono text-[9px] tracking-[0.22em] uppercase px-7 py-[15px] border transition-all hover:border-current"
              style={{
                borderColor: BORDER,
                color: TEXT3,
              }}
            >
              View our work ↗
            </Link>
          </div>

          {/* Social links row */}
          <div>
            <p
              className="font-mono text-[8px] tracking-[0.35em] uppercase mb-3"
              style={{ color: TEXT3 }}
            >
              — Find us online
            </p>
            <div className="flex flex-wrap gap-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 border-r border-y first:border-l font-mono text-[9px] tracking-[0.15em] uppercase transition-all hover:bg-amber-50"
                  style={{
                    borderColor: BORDER,
                    color: TEXT3,
                  }}
                >
                  <span
                    className="transition-colors group-hover:text-amber-600"
                    style={{ color: TEXT3 }}
                  >
                    {s.icon}
                  </span>
                  <span className="group-hover:text-amber-700 transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(to right, ${GOLD}, rgba(212,175,55,0.2), transparent)`,
          }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════════════════════ */}
      <section
        className="border-b"
        style={{ borderColor: BORDER, background: SURFACE }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
            style={
              {
                "--tw-divide-opacity": 1,
                borderColor: BORDER,
              } as React.CSSProperties
            }
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1.5 py-10 px-6 text-center group"
                style={{ borderColor: BORDER }}
              >
                <span
                  className="font-serif text-4xl md:text-5xl font-bold tracking-wider transition-colors duration-300"
                  style={{ color: TEXT1 }}
                >
                  {value}
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.35em] uppercase"
                  style={{ color: TEXT3 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BRAND IDENTITY — image + copy split
      ════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual panel */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, ${GOLD_DIM} 0%, transparent 70%)`,
              }}
            />
            <div
              className="relative border w-full aspect-square max-w-sm flex items-center justify-center overflow-hidden"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo2.jpeg"
                  alt="TYLON Logo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Corner accents */}
              {[
                "top-3 left-3 border-t border-l",
                "top-3 right-3 border-t border-r",
                "bottom-3 left-3 border-b border-l",
                "bottom-3 right-3 border-b border-r",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-5 h-5 ${cls}`}
                  style={{ borderColor: GOLD }}
                />
              ))}

              {/* "PD" logotype placeholder — replace with actual logo /}
              <div className="relative z-10 flex flex-col items-center gap-3 select-none">
                <span
                  className="font-serif font-bold"
                  style={{
                    fontSize: "96px",
                    lineHeight: 1,
                    color: "rgba(212,175,55,0.18)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  PD
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.4em] uppercase"
                  style={{ color: "rgba(212,175,55,0.35)" }}
                >
                  PraDha Solutions
                </span>
              </div>*/}
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-5">
            <p style={eyebrowStyle} className="flex items-center gap-3">
              <span
                style={{
                  display: "inline-block",
                  width: "16px",
                  height: "1px",
                  background: GOLD,
                }}
              />
              The Agency
            </p>
            <h2
              className="font-serif font-bold uppercase leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                letterSpacing: "0.03em",
                color: TEXT1,
              }}
            >
              A STUDIO BUILT
              <br />
              <span style={{ color: GOLD }}>IN THE DETAILS</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: TEXT2 }}>
              PraDha Solutions was founded on a simple belief: the software you
              ship should be something you're proud to put your name on. Not a
              minimum viable product cobbled together under deadline pressure —
              but a system built to grow with your business.
            </p>
            <p className="text-base leading-relaxed" style={{ color: TEXT2 }}>
              We are a Sri Lankan agency. We work remotely with clients
              worldwide. We believe in honest scoping, transparent pricing, and
              code that the next developer can actually read.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  background: GOLD,
                  display: "inline-block",
                }}
              />
              <span
                className="font-mono text-[9px] tracking-[0.38em] uppercase"
                style={{ color: GOLD }}
              >
                PRADHA / EST. 2024 / SRI LANKA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MANIFESTO
      ════════════════════════════════════════════════════════ */}
      <section
        id="manifesto"
        className="border-y"
        style={{ borderColor: BORDER, background: SURFACE }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-6 mb-14">
            <div style={{ width: "40px", height: "1px", background: GOLD }} />
            <p style={eyebrowStyle}>The Manifesto</p>
          </div>

          <div>
            {manifesto.map(({ code, title, body }) => (
              <div
                key={code}
                className="group border-b py-12 md:py-14 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-16 px-2 transition-colors duration-300"
                style={{
                  borderColor: BORDER,
                }}
              >
                <div className="flex md:flex-col items-center md:items-start gap-3 md:pt-1">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em]"
                    style={{ color: GOLD }}
                  >
                    {code}
                  </span>
                  <div
                    className="w-px h-4 hidden md:block"
                    style={{ background: BORDER }}
                  />
                </div>
                <div>
                  <h3
                    className="font-serif text-2xl md:text-3xl font-bold uppercase mb-4 leading-tight transition-colors duration-300 group-hover:text-amber-700"
                    style={{
                      letterSpacing: "0.04em",
                      color: TEXT1,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-2xl"
                    style={{ color: TEXT2 }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          VALUES / THE CODE
      ════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <p style={eyebrowStyle} className="mb-4">
            — What we stand for
          </p>
          <h2
            className="font-serif font-bold uppercase"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              letterSpacing: "0.04em",
              color: TEXT1,
            }}
          >
            THE CODE
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: BORDER }}
        >
          {values.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden p-8 transition-all duration-300 hover:bg-amber-50/60"
              style={{ background: "#fff" }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ borderColor: GOLD }}
              />
              <div className="text-2xl mb-5 font-mono" style={{ color: GOLD }}>
                {icon}
              </div>
              <h3
                className="font-serif text-lg font-bold uppercase mb-3 leading-tight transition-colors duration-300 group-hover:text-amber-700"
                style={{ letterSpacing: "0.05em", color: TEXT1 }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT2 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MARQUEE DIVIDER
      ════════════════════════════════════════════════════════ */}
      <section
        className="border-y overflow-hidden py-10"
        style={{ borderColor: BORDER, background: SURFACE }}
      >
        <div
          className="whitespace-nowrap"
          style={{ animation: "pradha-marquee 18s linear infinite" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 mr-10 font-serif font-bold uppercase"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                letterSpacing: "0.08em",
                color: BORDER,
              }}
            >
              ENGINEER YOUR OUTCOME
              <span style={{ color: GOLD, fontSize: "0.75em" }}>◆</span>
              BUILT IN SRI LANKA
              <span style={{ color: GOLD, fontSize: "0.75em" }}>◆</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes pradha-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 text-center overflow-hidden bg-white">
        {/* Subtle gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${GOLD_DIM} 0%, transparent 65%)`,
          }}
        />

        {/* Corner borders */}
        {[
          "top-8 left-8 border-t border-l",
          "top-8 right-8 border-t border-r",
          "bottom-8 left-8 border-b border-l",
          "bottom-8 right-8 border-b border-r",
        ].map((cls, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 ${cls}`}
            style={{ borderColor: "rgba(212,175,55,0.3)" }}
          />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto">
          <p style={eyebrowStyle} className="mb-6">
            — Claim your build
          </p>
          <h2
            className="font-serif font-bold uppercase leading-[0.9] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              letterSpacing: "0.04em",
              color: TEXT1,
            }}
          >
            START YOUR
            <br />
            <span style={{ color: GOLD }}>PROJECT TODAY</span>
          </h2>
          <p
            className="text-base max-w-md mx-auto mb-10 leading-relaxed"
            style={{ color: TEXT2 }}
          >
            Web apps, mobile builds, UI design, brand identity. Fixed pricing.
            No surprises. Free 30-minute consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase px-10 py-4 text-white transition-all hover:brightness-90"
              style={{ background: GOLD }}
            >
              Book a free call →
            </Link>
            <Link
              href="/services"
              className="font-mono text-[9px] tracking-[0.22em] uppercase px-10 py-[15px] border transition-all"
              style={{ borderColor: BORDER, color: TEXT3 }}
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
