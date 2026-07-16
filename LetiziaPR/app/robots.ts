import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "Google-Extended",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://pr.letiziaagency.com/sitemap.xml",
    host: "https://pr.letiziaagency.com",
  };
}
