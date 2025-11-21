import { blogPosts } from "@/lib/blogData";

export default async function sitemap() {
    const baseUrl = 'https://asifbuffing.vercel.app';

    const routes = [
        '',
        '/Products',
        '/Machinery',
        '/blog',
        '/Testimonials',
        '/Contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    return routes;
}
