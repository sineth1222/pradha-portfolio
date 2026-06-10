import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.pradha.xyz/sitemap.xml",
    host: "https://www.pradha.xyz",
  };
}
