import type { Metadata } from "next";
import ContactPagez from "@/components/section/ContactPagez";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project",
  description:
    "Get in touch with PraDha Solutions. We respond within 24 hours. Free consultation, NDA available. Based in Sri Lanka, available for remote projects worldwide.",
  alternates: {
    canonical: "https://www.pradha.xyz/contact",
  },
  openGraph: {
    title: "Contact PraDha Solutions",
    description:
      "Start your project with PraDha. Free consultation. 24h response. Sri Lanka-based, remote-friendly.",
    url: "https://www.pradha.xyz/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// ── Main component ────────────────────────────────────────────────────
export default function ContactPage() {
  <ContactPagez />;
}
