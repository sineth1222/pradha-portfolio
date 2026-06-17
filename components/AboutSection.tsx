// components/AboutSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
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

      {/* Content — centered, on top of watermark */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "3.5px",
            textTransform: "uppercase",
            color: "#d4af37",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              width: 24,
              height: 1,
              background: "#d4af37",
              flexShrink: 0,
            }}
          />
          About us
          <span
            style={{
              width: 24,
              height: 1,
              background: "#d4af37",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#111111",
            marginBottom: 20,
          }}
        >
          We build digital products{" "}
          <em style={{ color: "#d4af37", fontStyle: "italic" }}>that work.</em>
        </h2>

        {/* Body */}
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "rgba(0,0,0,0.5)",
            marginBottom: 28,
          }}
        >
          We're a small, focused studio based in Sri Lanka — designing and
          developing websites, web apps, and digital experiences for clients
          locally and worldwide.
        </p>

        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.08)",
            marginBottom: 28,
          }}
        />

        {/* Social label */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#d4af37",
            marginBottom: 14,
          }}
        >
          Find us here
        </p>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a
            href="https://www.facebook.com/profile.php?id=61589883841358"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              border: "1px solid rgba(0,0,0,0.1)",
              textDecoration: "none",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1877F2"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111111" }}>
                Facebook
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "monospace",
                }}
              >
                View our portfolio &amp; updates
              </div>
            </div>
            <span style={{ color: "rgba(0,0,0,0.3)", fontSize: 16 }}>→</span>
          </a>

          <a
            href="https://wa.me/94760805884"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              border: "1px solid rgba(0,0,0,0.1)",
              textDecoration: "none",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#25D366"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111111" }}>
                WhatsApp
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "monospace",
                }}
              >
                +94 76 080 5884 · Chat with us
              </div>
            </div>
            <span style={{ color: "rgba(0,0,0,0.3)", fontSize: 16 }}>→</span>
          </a>

          <Link
            href="/portfolio"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              border: "1px solid rgba(0,0,0,0.1)",
              textDecoration: "none",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111111" }}>
                Portfolio
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "monospace",
                }}
              >
                See our past work
              </div>
            </div>
            <span style={{ color: "rgba(0,0,0,0.3)", fontSize: 16 }}>→</span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}
