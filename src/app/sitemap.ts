import { MetadataRoute } from "next";
import { DEFAULT_SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = DEFAULT_SEO.canonical.replace(/\/$/, "");
	const lastModified = new Date();

	const routes = ["", "/pricing", "/contact", "/privacy", "/terms", "/faq"].map((p) => ({
		url: `${base}${p || "/"}`,
		lastModified,
		changeFrequency: "weekly" as const,
		priority: p === "" ? 1 : 0.7,
	}));

	return routes;
}


