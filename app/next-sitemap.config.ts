import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://his-lab.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: ["https://his-lab.vercel.app/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
