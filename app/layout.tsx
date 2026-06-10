import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BASIC
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  metadataBase: new URL("https://www.pradha.xyz"),
  title: {
    default: "PraDha | Software Agency Sri Lanka",
    template: "%s | PraDha Solutions",
  },
  description:
    "PraDha is a Sri Lanka-based software agency building scalable web apps, mobile apps, and digital products. React · Next.js · Node.js · UI/UX Design.",
  keywords: [
    "PraDha",
    "PraDha Solutions",
    "software agency Sri Lanka",
    "web development Sri Lanka",
    "Next.js developer Sri Lanka",
    "React developer Colombo",
    "mobile app development Sri Lanka",
    "UI UX design Sri Lanka",
    "hire web developer Sri Lanka",
    "custom web application Sri Lanka",
    "e-commerce development Sri Lanka",
    "full stack developer Sri Lanka",
  ],
  authors: [{ name: "PraDha Solutions", url: "https://www.pradha.xyz" }],
  creator: "PraDha Solutions",
  publisher: "PraDha Solutions",

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // OPEN GRAPH (Facebook, LinkedIn, WhatsApp preview)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pradha.xyz",
    siteName: "PraDha Solutions",
    title: "PraDha | Software Agency Sri Lanka",
    description:
      "We build scalable web apps, mobile apps, and digital products. Sri Lanka-based. Remote-friendly.",
    images: [
      {
        url: "/og-image.png", // ← 1200×630px create කරන්න (below explain කරන්නම්)
        width: 1200,
        height: 630,
        alt: "PraDha Solutions - Software Agency Sri Lanka",
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TWITTER / X CARD
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  twitter: {
    card: "summary_large_image",
    title: "PraDha | Software Agency Sri Lanka",
    description:
      "Scalable web apps, mobile apps & digital products. Sri Lanka-based software agency.",
    images: ["/og-image.png"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ROBOTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CANONICAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  alternates: {
    canonical: "https://www.pradha.xyz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Ed94a9RCOiYU6ZaZ4tvQ_dMfea-ya-D-fM9h0mNR3h0"
        />
      </head>
      <body className="bg-white text-black">
        {/* JSON-LD — Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PraDha Solutions",
              url: "https://www.pradha.xyz",
              logo: "https://www.pradha.xyz/logo.png",
              description:
                "Sri Lanka-based software agency building scalable web apps, mobile apps, and digital products.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
                addressLocality: "Colombo",
                addressRegion: "Western Province",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "pradhainfo@gmail.com",
                telephone: "+94760805884",
                availableLanguage: ["English", "Sinhala"],
              },
              sameAs: [
                "https://github.com/sineth1222",
                "https://www.linkedin.com/in/sineth-mashenka-113122241/",
              ],
              founder: {
                "@type": "Person",
                name: "Mashenka Badanage",
                url: "https://www.pradha.xyz",
              },
              foundingDate: "2023",
              areaServed: "Worldwide",
              knowsAbout: [
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "React",
                "Next.js",
                "Node.js",
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/*import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PraDha | Solutions with Purpose",
  description: "Engineering Digital Solutions with Intent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}*/
