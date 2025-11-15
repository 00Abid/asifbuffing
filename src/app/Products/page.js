import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
    title: "Our Products - ASIF BUFFING WORKS | Utensil Types We Service",
    description: "Explore the range of utensils we buff and polish: sauce pots, milk pots, wok pans, silverware collections, and commercial cookware. Premium mirror finishing services.",
    keywords: "sauce pot buffing, milk pot polishing, wok buffing, silverware restoration, commercial utensils polishing",
    alternates: {
        canonical: 'https://asifbuffing.vercel.app/Products',
    },
};

const products = [
    {
        id: 1,
        name: "Sauce Pot",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/saucepot.webp",
        alt: "Stainless steel sauce pot with professional mirror buffing and polishing finish by ASIF BUFFING WORKS in Vasai",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 2,
        name: "Milk Pot",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/milkpot.webp",
        alt: "Polished milk pot with expert buffing service showing mirror-like shine from ASIF BUFFING WORKS",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 3,
        name: "Wok / Deep Frying Pan",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/kadhai.webp",
        alt: "Commercial wok and kadhai deep frying pan professional buffing and polishing service in Maharashtra",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 4,
        name: "Silverware Collection",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/silverware.webp",
        alt: "Antique silverware restoration and buffing service with mirror polish finish for utensils and cookware",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 5,
        name: "Commercial Utensils",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/commercial.webp",
        alt: "Bulk commercial kitchen utensils buffing and polishing service for restaurants and hotels in Vasai",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 6,
        name: "Specialty Items",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/special.webp",
        alt: "Custom specialty cookware and unique utensil buffing with precision polishing by expert craftsmen",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
];

export default function Products() {
    const breadcrumbItems = [
        { label: "Products", href: null }
    ];

    return (
        <div className="pt-24 pb-16 bg-base">
            {/* Product Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": products.map((product, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": product.name,
                                "description": product.description,
                                "image": `https://asifbuffing.vercel.app${product.image}`,
                                "offers": {
                                    "@type": "Offer",
                                    "availability": "https://schema.org/InStock",
                                    "priceCurrency": "INR",
                                    "priceValidUntil": "2025-12-31",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "ASIF BUFFING WORKS"
                                    }
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "50"
                                }
                            }
                        }))
                    })
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://asifbuffing.vercel.app/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Products",
                                "item": "https://asifbuffing.vercel.app/Products"
                            }
                        ]
                    })
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold text-center mb-12 text-logo">
                    Our Products
                </h1>
                <p className="text-center text-dark mb-12 max-w-2xl mx-auto">
                    Discover the variety of utensils expertly buffed and polished by ASIF BUFFING WORKS. From everyday sauce pots to intricate silverware collections, we handle it all with precision and care.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-neutral rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition-shadow border border-logo"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={product.image}
                                    alt={product.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-light">
                                    {product.name}
                                </h2>

                                <p className="text-light mb-4">{product.description}</p>

                                <div className="space-y-2">
                                    {product.features.map((feature, i) => (
                                        <p
                                            key={i}
                                            className="text-sm text-light flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                            {feature}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
