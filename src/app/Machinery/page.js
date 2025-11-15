import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
    title: "Our Machinery - ASIF BUFFING WORKS | Advanced Buffing Equipment",
    description: "State-of-the-art buffing machinery including industrial buffing systems, precision polishers, hydraulic presses, lathe machines, and laser engravers.",
    keywords: "industrial buffing machines, precision polishing equipment, hydraulic presses, lathe machines, laser engraving",
    alternates: {
        canonical: 'https://asifbuffing.vercel.app/Machinery',
    },
};

const machines = [
    {
        id: 1,
        name: "Industrial Buffing System",
        description: "High-capacity buffing machine for commercial utensils.",
        image: "/buff.mp4",
        alt: "Industrial buffing system machinery with 20 motors processing 500 pieces per hour at ASIF BUFFING WORKS",
        specs: [
            "Processing speed: 500 pieces/hour",
            "Multiple buffing stages",
            "20 Buffing Motors",
        ],
    },
    {
        id: 2,
        name: "Precision Polisher",
        description: "Specialized equipment for delicate and intricate items.",
        image: "/matte.mp4",
        alt: "Precision matte polishing machine with variable speed control for delicate silverware and intricate utensils",
        specs: [
            "Variable speed control",
            "Custom buffing patterns",
            "8 Matte Machines",
        ],
    },
    {
        id: 3,
        name: "Hydraulic Press",
        description: "Advanced machinery for premium press of utensils.",
        image: "/press.mp4",
        alt: "Hydraulic press machinery for utensil shaping and precision pressing in professional buffing workshop",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "2 Hydraulic Press",
        ],
    },
    {
        id: 4,
        name: "Bidding Lathe Machine",
        description: "Advanced machinery for premium bidding.",
        image: "/lathe.mp4",
        alt: "Bidding lathe machine for precision utensil edge work and specialized buffing operations",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "2 Bidding Lathe Machine",
        ],
    },
    {
        id: 5,
        name: "Laser Engraving Machine",
        description: "Advanced machinery for premium engraving.",
        image: "/laser.mp4",
        alt: "Laser engraving machine for custom branding and designs on buffed utensils and cookware",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "1 Laser Engraving Machine",
        ],
    },
];

export default function Machinery() {
    const breadcrumbItems = [
        { label: "Machinery", href: null }
    ];

    return (
        <div className="pt-24 pb-16 bg-base">
            {/* Video Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": machines.map((machine, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "VideoObject",
                                "name": machine.name,
                                "description": machine.description,
                                "contentUrl": `https://asifbuffing.vercel.app${machine.image}`,
                                "thumbnailUrl": `https://asifbuffing.vercel.app${machine.image}`,
                                "uploadDate": "2024-01-01",
                                "duration": "PT30S"
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
                                "name": "Machinery",
                                "item": "https://asifbuffing.vercel.app/Machinery"
                            }
                        ]
                    })
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold text-center mb-12 text-logo">
                    Our Machinery
                </h1>
                <p className="text-center text-dark mb-12 max-w-2xl mx-auto">
                    Explore the cutting-edge machinery that powers ASIF BUFFING WORKS&apos; exceptional buffing and polishing services. Our state-of-the-art equipment ensures precision, efficiency, and superior results for every project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machines.map((machine) => (
                        <div
                            key={machine.id}
                            className="bg-neutral rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition-shadow border border-logo"
                        >
                            {/* Video */}
                            <div className="relative w-full">
                                <video
                                    src={machine.image}
                                    title={machine.alt}
                                    className="object-cover"
                                    autoPlay loop muted
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl font-semibold text-light">
                                        {machine.name}
                                    </h2>
                                </div>

                                <p className="text-light">{machine.description}</p>

                                <div className="bg-base p-4 rounded-lg border border-logo">
                                    <h3 className="font-semibold mb-2 text-logo">
                                        Specifications:
                                    </h3>
                                    <ul className="space-y-2">
                                        {machine.specs.map((spec, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-logo flex items-center"
                                            >
                                                <span className="w-2 h-2 bg-logo rounded-full mr-2"></span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
