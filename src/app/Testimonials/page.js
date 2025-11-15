import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
    title: "Customer Testimonials - ASIF BUFFING WORKS | Client Reviews & Success Stories",
    description: "Read testimonials from satisfied customers who trust ASIF BUFFING WORKS for their utensil buffing and polishing needs. Rated 4.9/5 stars by 200+ customers.",
    keywords: "ASIF BUFFING WORKS reviews, customer testimonials, utensil buffing ratings, polishing service reviews, buffing testimonials",
    alternates: {
        canonical: 'https://asifbuffingworks.com/Testimonials',
    },
};

const testimonials = [
    {
        name: "Mohammed Ali",
        business: "Ali's Fine Dining",
        testimonial: "ASIF BUFFING WORKS has been our go-to partner for over 6 years. Their precision buffing and mirror polishing services are exceptional. Every piece comes back looking brand new, and their attention to detail is remarkable.",
        rating: 5,
        date: "2024-11-05"
    },
    {
        name: "Fatima Khan",
        business: "Home Chef & Collector",
        testimonial: "I brought my family antique silverware collection to ASIF BUFFING WORKS, and the transformation was incredible! The mirror finish they achieved exceeded my expectations. Truly masterful craftsmanship.",
        rating: 5,
        date: "2024-10-22"
    },
    {
        name: "Rajesh Verma",
        business: "Verma Catering Services",
        testimonial: "For our commercial kitchen, ASIF BUFFING WORKS is indispensable. Their fast turnaround time and consistent quality keep our operations running smoothly. We trust them with all our cookware buffing needs.",
        rating: 5,
        date: "2024-09-28"
    },
    {
        name: "Sarah Ahmed",
        business: "Premium Kitchenware Retail",
        testimonial: "As a high-end kitchenware retailer, I recommend ASIF BUFFING WORKS to all my customers. Their restoration services are outstanding, and customer satisfaction is always 100%. They're the best in the business!",
        rating: 5,
        date: "2024-08-15"
    },
    {
        name: "Imran Sheikh",
        business: "Sheikh Hotel Group",
        testimonial: "We manage multiple hotel properties, and ASIF BUFFING WORKS handles all our bulk buffing orders flawlessly. Their capacity for large-scale projects and quick delivery makes them our trusted partner.",
        rating: 5,
        date: "2024-07-30"
    },
    {
        name: "Neha Kapoor",
        business: "Kapoor Wedding Services",
        testimonial: "For wedding events, presentation is everything. ASIF BUFFING WORKS ensures all our serving utensils have that perfect mirror shine. Their custom projects team is professional and reliable.",
        rating: 5,
        date: "2024-06-18"
    }
];

export default function Testimonials() {
    const breadcrumbItems = [
        { label: "Testimonials", href: null }
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Review Schema JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "ASIF BUFFING WORKS",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "200",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "review": testimonials.map(function (t) {
                                return {
                                    "@type": "Review",
                                    "author": {
                                        "@type": "Person",
                                        "name": t.name
                                    },
                                    "datePublished": t.date,
                                    "reviewBody": t.testimonial,
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": t.rating,
                                        "bestRating": "5",
                                        "worstRating": "1"
                                    }
                                };
                            })
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
                                    "name": "Testimonials",
                                    "item": "https://asifbuffing.vercel.app/Testimonials"
                                }
                            ]
                        })
                    }}
                />

                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold text-center mb-12 text-logo">
                    Customer Testimonials
                </h1>
                <p className="text-center text-dark mb-12 max-w-2xl mx-auto">
                    Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our professional buffing and polishing services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-neutral border border-accent rounded-lg shadow-lg p-6">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">★</span>
                                ))}
                            </div>
                            <blockquote className="text-light mb-4 italic">
                                &ldquo;{testimonial.testimonial}&rdquo;
                            </blockquote>
                            <div>
                                <cite className="font-semibold text-light">{testimonial.name}</cite>
                                <p className="text-accent text-sm">{testimonial.business}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
