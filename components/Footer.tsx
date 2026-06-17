import Link from "next/link";
import { Instagram, Facebook, ShieldCheck, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141412] border-t border-[#d4af37] mt-0">
      {/* Marquee /}
      <div className="bg-[#d4af37] py-2.5 overflow-hidden">
        <div className="marquee-container">
          <div className="inline-block animate-marquee whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-6 mr-12 text-white text-[10px] font-mono tracking-[0.25em] uppercase">
                WEAR YOUR MISSION <span className="text-white/40">✦</span>
                ISLAND-WIDE DELIVERY <span className="text-white/40">✦</span>
                CASH ON DELIVERY <span className="text-white/40">✦</span>
                ENTER A DIFFERENT EMPIRE <span className="text-white/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>*/}

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-4xl font-bold tracking-[0.2em] text-white/40 mb-2">
              PRADHA
            </div>
            <p className="font-mono text-[9px] tracking-[0.35em] text-[#d4af37] uppercase mb-5">
              SOLUTIONS
            </p>
            <p className="text-[#6B6B60] text-sm leading-relaxed mb-6">
              We build digital products that solve real business problems — from
              scalable web applications to pixel-perfect interfaces. Delivering
              since 2023.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://instagram.com", Icon: Instagram, label: "IG" },
                { href: "https://facebook.com", Icon: Facebook, label: "FB" },
                {
                  href: "https://wa.me/94771234567",
                  Icon: MessageCircle,
                  label: "WA",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#d4af37] flex items-center justify-center text-[#6B6B60] hover:border-[#d4af37] hover:text-[#d4af37]-light transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* The Arsenal */}
          <div>
            <h4 className="font-mono text-[9px] font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              THE ARSENAL
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-study", label: "Case Study" },
                { href: "/contact", label: "Contact" },
                /*{ href: "/collections", label: "Women's — Coming Soon" },*/
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] tracking-widest text-[#6B6B60] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Mission */}
          <div>
            <h4 className="font-mono text-[9px] font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              THE MISSION
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/about#manifesto", label: "The Manifesto" },
                { href: "/privacy", label: "Terms & Privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] tracking-widest text-[#6B6B60] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Deploy */}
          <div>
            <h4 className="font-mono text-[9px] font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              DEPLOY
            </h4>
            <ul className="space-y-4 text-[#6B6B60]">
              <li className="font-mono text-[11px] tracking-wide leading-relaxed">
                Colombo, Sri Lanka
              </li>
              <li>
                <a
                  href="mailto:pradhainfo@gmail.com"
                  className="font-mono text-[11px] tracking-wide hover:text-white transition-colors"
                >
                  pradhainfo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94760805884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-wide hover:text-[#d4af37]-light transition-colors"
                >
                  +94 76 080 5884
                </a>
              </li>
              <li>
                <p className="font-mono text-[10px] tracking-wide text-[#6B6B60]/50">
                  24h response
                  <br />
                  On all weekday enquiries
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#d4af37] mt-12 mb-4 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#6B6B60] tracking-widest text-center uppercase">
            © 2026 PRADHA. ALL RIGHTS RESERVED. Engineered with Precision.
          </p>
          <div className="flex items-center gap-5">
            {["PRIVACY", "TERMS"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="font-mono text-[10px] text-[#6B6B60] hover:text-white tracking-widest transition-colors"
              >
                {label}
              </Link>
            ))}
            {/*<Link
              href="/admin/login"
              className="flex items-center gap-1.5 font-mono text-[10px] text-[#6B6B60]/40 hover:text-[#6B6B60] tracking-widest transition-colors"
            >
              <ShieldCheck size={10} /> ADMIN
            </Link>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
