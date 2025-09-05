import { MetadataRoute } from "next";
import { DEFAULT_SEO } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
	const base = DEFAULT_SEO.canonical.replace(/\/$/, "");
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: `${base}/sitemap.xml`,
		host: base,
	};
}


