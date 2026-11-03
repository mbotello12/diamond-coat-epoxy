import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://diamondcoatss.com";

    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/about`,
        },
        {
            url: `${baseUrl}/services`,
        },
        {
            url: `${baseUrl}/contact`,
        },
        {
            url: `${baseUrl}/service-area/austin`,
        },
        {
            url: `${baseUrl}/service-area/round-rock`,
        },
        {
            url: `${baseUrl}/service-area/cedar-park`,
        },
        {
            url: `${baseUrl}/service-area/pflugerville`,
        },
    ]
}