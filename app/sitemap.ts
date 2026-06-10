import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pradha.xyz";

  const portfolioSlugs = [
    "medistore-pos",
    "ceylon-trails",
    "siena-clothing",
    "vesak-wishes",
    "spice-sea",
    "lacascade-hotel",
    "sagea",
    "raptorcv",
    "rentzy",
    "pradha-rental",
    "pos-system",
    "newspaper-portal",
  ];

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "monthly" as const },
    {
      url: `${baseUrl}/portfolio`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/case-study`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: "yearly" as const,
    },
  ];

  const portfolioPages = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(),
  }));

  return [...staticPages, ...portfolioPages];
}
