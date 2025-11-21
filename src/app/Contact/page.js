import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from "../components/Form";
import Breadcrumb from "../components/Breadcrumb";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
    title: "Contact Us - ASIF BUFFING WORKS | Get a Quote for Buffing Services",
    description: "Contact ASIF BUFFING WORKS for professional utensil buffing services. Phone: +91-XXXXXXXXXX, Email: rajabuffingworks02@gmail.com",
    keywords: "contact ASIF BUFFING WORKS, buffing services quote, utensil polishing contact",
    alternates: {
        canonical: 'https://asifbuffing.vercel.app/Contact',
    },
};

export default function Contact() {
    const breadcrumbItems = [
        { label: "Contact", href: null }
    ];

    return (
        <div className="pt-24 pb-16 bg-base">
            <ScrollReveal />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    "name": "Contact",
                                    "item": "https://asifbuffing.vercel.app/Contact"
                                }
                            ]
                        })
                    }}
                />

                {/* Organization with Contact Point Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "ASIF BUFFING WORKS",
                            "url": "https://asifbuffing.vercel.app",
                            "logo": "https://asifbuffing.vercel.app/logo.webp",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-9096769473",
                                "contactType": "Customer Service",
                                "email": "rajabuffingworks02@gmail.com",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Hindi", "Marathi"]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Vasai East",
                                "addressLocality": "Vasai",
                                "addressRegion": "Maharashtra",
                                "postalCode": "401208",
                                "addressCountry": "IN"
                            },
                            "sameAs": [
                                "https://www.facebook.com/asifbuffingworks",
                                "https://www.instagram.com/asifbuffingworks",
                                "https://www.linkedin.com/company/asifbuffingworks"
                            ]
                        })
                    }}
                />

                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold text-center mb-12 text-logo scroll-fade-down">
                    Contact Us
                </h1>
                <p className="text-center text-dark mb-12 max-w-2xl mx-auto scroll-fade-up">
                    Have questions or need a quote? Reach out to ASIF BUFFING WORKS for expert buffing and polishing services. We&apos;re here to help!
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Form />

                    {/* Map + Contact Info */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="h-64 bg-neutral rounded-lg overflow-hidden shadow-2xl border border-logo scroll-flip-left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.906425485513!2d72.86733587467342!3d19.416448641197597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a5e9d0774d%3A0xa0dfd7a9f517ca9f!2sRaja%20Buffing%20Works!5e0!3m2!1sen!2sin!4v1763190567161!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-neutral p-6 rounded-lg shadow-2xl border border-logo scroll-flip-left">
                            <h2 className="text-xl font-semibold mb-4 text-light">
                                Contact Information
                            </h2>

                            <div className="space-y-4">
                                <p className="flex items-center text-light">
                                    <FaPhone className="mr-2 text-light" size={18} />
                                    +91 9096769473, +91 9323269821
                                </p>

                                <p className="flex items-center text-light">
                                    <FaEnvelope className="mr-2 text-light" size={18} />
                                    rajabuffingworks02@gmail.com
                                </p>

                                <p className="flex items-start text-light">
                                    <FaMapMarkerAlt className="mr-2 text-light mt-1" size={20} />
                                    <span>
                                        Behind Bengali Chawl
                                        <br />
                                        Naikpada Vasai - 401208 Palghar
                                        <br />
                                        MAHARASHTRA
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
