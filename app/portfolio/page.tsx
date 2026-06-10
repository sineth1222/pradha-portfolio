import type { Metadata } from "next";
import PortfolioPagez from "@/components/section/PortfolioPagez";

export const metadata: Metadata = {
  title: "Portfolio — Our Work & Projects",
  description:
    "Explore PraDha's portfolio — 10+ delivered projects including POS systems, e-commerce platforms, SaaS apps, and tourism platforms built for Sri Lankan and global clients.",
  alternates: {
    canonical: "https://www.pradha.xyz/portfolio",
  },
  openGraph: {
    title: "Portfolio | PraDha Solutions",
    description:
      "10+ real-world projects. Pharmacy POS, e-commerce, SaaS, tourism platforms, and more.",
    url: "https://www.pradha.xyz/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  <PortfolioPagez />;
}
