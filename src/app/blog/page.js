import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
    title: "Expert Guide - ASIF BUFFING WORKS | Complete Utensil Care Knowledge Base",
    description: "A comprehensive guide to utensil buffing, polishing, restoration, and maintenance. Read our expert articles on keeping your stainless steel cookware in perfect condition.",
    alternates: {
        canonical: 'https://asifbuffing.vercel.app/blog',
    },
};

export default function Blog() {
    // Schema for the Blog Collection (Single Page)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ASIF BUFFING WORKS Knowledge Base",
        "description": "Complete guide to utensil buffing and polishing",
        "url": "https://asifbuffing.vercel.app/blog",
        "publisher": {
            "@type": "Organization",
            "name": "ASIF BUFFING WORKS",
            "logo": {
                "@type": "ImageObject",
                "url": "https://asifbuffing.vercel.app/logo.webp"
            }
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "author": {
                "@type": "Person",
                "name": post.author
            },
            "url": `https://asifbuffing.vercel.app/blog#${post.id}`, // Pointing to anchors
        }))
    };

    return (
        <div className="pt-24 pb-16 bg-base">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ScrollReveal />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16 scroll-fade-down">
                    <h1 className="text-4xl font-bold mb-6 text-logo">Expert Knowledge Base</h1>
                    <p className="text-xl text-dark max-w-2xl mx-auto">
                        Everything you need to know about utensil maintenance, buffing techniques, and restoration in one place.
                    </p>
                </header>

                {/* Table of Contents / Quick Nav */}
                <nav className="bg-neutral p-8 rounded-lg border border-logo mb-16 scroll-fade-up shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-light border-b border-gray-700 pb-2">Quick Navigation</h2>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {blogPosts.map((post) => (
                            <li key={post.id}>
                                <a href={`#${post.id}`} className="text-accent hover:text-light transition-colors flex items-start">
                                    <span className="mr-2">→</span>
                                    <span className="text-sm md:text-base">{post.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Full Articles List */}
                <div className="space-y-20">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            id={post.id}
                            className="scroll-fade-up bg-white/5 rounded-2xl p-8 md:p-10 border border-gray-800 shadow-sm"
                        >
                            {/* Article Header */}
                            <header className="mb-8 border-b border-gray-200 pb-6">
                                <div className="flex flex-wrap items-center gap-3 text-sm text-accent mb-4">
                                    <span className="bg-neutral px-3 py-1 rounded-full border border-logo font-medium">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400">•</span>
                                    <time dateTime={post.date} className="text-gray-500">
                                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-logo mb-4 leading-tight">
                                    {post.title}
                                </h2>
                                <div className="flex items-center text-gray-500 font-medium">
                                    <span>By {post.author}</span>
                                </div>
                            </header>

                            {/* Article Content */}
                            <div className="prose prose-lg text-dark max-w-none prose-headings:text-logo prose-a:text-accent prose-strong:text-logo">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>

                            {/* Article Footer / Call to Action */}
                            <div className="mt-10 pt-6 border-t border-gray-200">
                                <div className="bg-neutral p-6 rounded-lg border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h4 className="text-light font-semibold mb-1">Need help with this?</h4>
                                        <p className="text-sm text-gray-400">Contact us for professional advice on {post.category.toLowerCase()}.</p>
                                    </div>
                                    <Link href="/Contact" className="px-6 py-2 bg-accent text-white rounded hover:bg-opacity-90 transition-colors whitespace-nowrap">
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
