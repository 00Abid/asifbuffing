export default async function sitemap() {
    const baseUrl = 'https://asifbuffing.vercel.app';

    // Blog posts from the data
    const blogPosts = [
        "Why Is Buffing Important for Stainless Steel Utensils?",
        "What Is the Difference Between Buffing and Polishing?",
        "How Often Should You Buff Your Stainless Steel Utensils?",
        "Can You Buff Stainless Steel Utensils Without a Machine?",
        "What Are the Best Tools for Buffing Stainless Steel Utensils?",
        "Which Polishing Compounds Are Food-Safe for Utensil Buffing?",
        "How Do You Remove Deep Scratches from Stainless Steel Utensils?",
        "What's the Best Speed Setting for Machine Buffing Stainless Steel?",
        "How Do You Prevent Water Marks After Buffing Utensils?",
        "Can Vinegar Be Used for Polishing Stainless Steel Utensils?",
    ];

    // Static pages
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/Products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Machinery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Testimonials`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];

    // Add blog post routes (they currently link externally, but including for future)
    const blogRoutes = blogPosts.map((post, index) => ({
        url: `${baseUrl}/blog/${index + 1}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
