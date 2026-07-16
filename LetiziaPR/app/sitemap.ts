import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pr.letiziaagency.com/",
      lastModified: new Date("2026-07-16"),
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://pr.letiziaagency.com/letizia-social-share.png"],
    },
  ];
}
