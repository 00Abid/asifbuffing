import Image from "next/image";
import { MdCheckCircle, MdDownload } from "react-icons/md";
import { FaAward, FaUsers, FaClock, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { IoMdSpeedometer } from "react-icons/io";
import { GiCookingPot, GiSparkles, GiDiamondTrophy } from "react-icons/gi";
import { MdRestaurant, MdDesignServices } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  title: "ASIF BUFFING WORKS - Expert Utensil Buffing & Polishing Services | Premium Quality",
  description: "Leading utensil buffing and polishing company with years of experience in mirror finishing for kitchen utensils, silverware, and commercial cookware.",
  keywords: "utensil buffing, polishing services, mirror finish utensils, silverware restoration, commercial cookware buffing",
  alternates: {
    canonical: 'https://asifbuffing.vercel.app',
  },
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "ASIF BUFFING WORKS - Professional Utensil Buffing Process",
            "description": "Watch our expert utensil buffing process that brings mirror-like shine to all types of cookware and silverware. Professional buffing services in Vasai.",
            "contentUrl": "https://asifbuffing.vercel.app/home.mp4",
            "thumbnailUrl": "https://asifbuffing.vercel.app/home.mp4",
            "uploadDate": "2024-01-01",
            "duration": "PT30S",
            "publisher": {
              "@type": "Organization",
              "name": "ASIF BUFFING WORKS",
              "logo": {
                "@type": "ImageObject",
                "url": "https://asifbuffing.vercel.app/logo.webp"
              }
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ASIF BUFFING WORKS",
            "image": "https://asifbuffing.vercel.app/logo.webp",
            "@id": "https://asifbuffing.vercel.app",
            "url": "https://asifbuffing.vercel.app",
            "telephone": "+91-XXXXXXXXXX",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vasai East",
              "addressLocality": "Vasai",
              "addressRegion": "Maharashtra",
              "postalCode": "401208",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.4668,
              "longitude": 72.8258
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/asifbuffingworks",
              "https://www.instagram.com/asifbuffingworks",
              "https://www.linkedin.com/company/asifbuffingworks"
            ],
            "description": "Leading utensil buffing and polishing company specializing in mirror finish for kitchen utensils, silverware restoration, and commercial cookware.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 19.4668,
                "longitude": 72.8258
              },
              "geoRadius": "50000"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why Is Buffing Important for Stainless Steel Utensils?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Buffing is essential because it removes microscopic scratches, burrs, and imperfections from the stainless steel surface. These tiny crevices can trap bacteria, debris, and contaminants, which compromise both hygiene and appearance. Additionally, buffing restores the protective chromium oxide layer on stainless steel, which is the primary defense against corrosion and rust."
                }
              },
              {
                "@type": "Question",
                "name": "How Often Should You Buff Your Stainless Steel Utensils?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For optimal maintenance, polish and buff your stainless steel utensils every 2-3 months for everyday kitchen use. Professional kitchens and restaurants typically buff utensils weekly or as part of their nightly closing routine to maintain hygiene standards."
                }
              },
              {
                "@type": "Question",
                "name": "What Are the Best Tools for Buffing Stainless Steel Utensils?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For professional-quality results, invest in a rotary or dual-action buffer with replaceable buffing wheels. Essential tools include coarse sisal or felt buffing wheels for initial work, fine wool or cotton buffing wheels for finishing, microfiber cloths, sanding blocks, and food-safe polishing compounds."
                }
              },
              {
                "@type": "Question",
                "name": "What services does ASIF BUFFING WORKS provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide professional utensil buffing, mirror polishing, silverware restoration, commercial cookware buffing, custom projects, and bulk orders. Our state-of-the-art machinery delivers precision and perfection with every buff."
                }
              }
            ]
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Utensil Buffing and Polishing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ASIF BUFFING WORKS",
              "image": "https://asifbuffing.vercel.app/logo.webp",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vasai East",
                "addressLocality": "Vasai",
                "addressRegion": "Maharashtra",
                "postalCode": "401208",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": "Maharashtra"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Buffing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Utensil Buffing",
                    "description": "Professional buffing services for all types of kitchen utensils"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mirror Polishing",
                    "description": "Achieve a perfect mirror finish on your metalware"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Silverware Restoration",
                    "description": "Restore the original shine to your precious silverware"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Cookware Buffing",
                    "description": "Specialized services for restaurants and hotels"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Projects",
                    "description": "Tailored solutions for unique buffing requirements"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Orders",
                    "description": "Efficient handling of large volume orders"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen">
        <ScrollReveal />
        <div className="absolute inset-0">
          <video
            src="/home.mp4"
            alt="Professional utensil buffing process demonstration - ASIF BUFFING WORKS"
            className="w-full h-full object-cover"
            autoPlay muted loop
          />
          <div className="absolute inset-0 bg-neutral opacity-60" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center scroll-fade-up">
          <div className="px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              ASIF BUFFING WORKS
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white">
              Bringing the Shine Back <br />
              Matte Specialist in Vasai
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-logo scroll-fade-down">
            About Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl scroll-fade-left">
                <Image
                  src="/about.webp"
                  alt="ASIF BUFFING WORKS factory worker operating professional buffing equipment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 scroll-fade-right">
              <p className="text-logo">
                With years of expertise, ASIF BUFFING WORKS leads the
                way in cutting-edge utensil buffing technology. Our advanced
                machinery and skilled craftsmen deliver unmatched mirror
                finishes that make your utensils look brand new.
              </p>
              <p className="text-logo">
                Powered by a vast array of state-of-the-art machines, we offer
                precision and perfection with every buff and press truly
                Bringing the Shine Back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-accent scroll-fade-down">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaAward className="h-10 w-10 text-logo mb-4" />,
                title: "Quality Assurance",
                description: "Premium quality guaranteed on every project.",
              },
              {
                icon: <FaUsers className="h-10 w-10 text-logo mb-4" />,
                title: "Expert Team",
                description: "Skilled craftsmen with years of experience.",
              },
              {
                icon: <FaClock className="h-10 w-10 text-logo mb-4" />,
                title: "Fast Service",
                description: "Quick turnaround without compromising quality.",
              },
              {
                icon: <FaStar className="h-10 w-10 text-logo mb-4" />,
                title: "Customer Satisfaction",
                description: "Trusted by businesses across the region.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-base p-6 rounded-lg shadow-lg scroll-zoom-in"
              >
                <div className="flex">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-logo">
                  {item.title}
                </h3>
                <p className="text-logo">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-logo scroll-fade-down">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdCheckCircle className="h-8 w-8 text-accent mb-4" />,
                title: "High Volume Processing",
                description:
                  "Capacity to handle large-scale buffing requirements.",
              },
              {
                icon: <HiSparkles className="h-8 w-8 text-accent mb-4" />,
                title: "Premium Finish",
                description: "Advanced techniques for mirror-like shine.",
              },
              {
                icon: <IoMdSpeedometer className="h-8 w-8 text-accent mb-4" />,
                title: "Quick Turnaround",
                description: "24–48 hour processing for standard orders.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-neutral border border-logo p-6 rounded-lg shadow-2xl scroll-zoom-in"
              >
                {capability.icon}
                <h3 className="text-xl font-semibold mb-2 text-accent">
                  {capability.title}
                </h3>
                <p className="text-light">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-accent scroll-fade-down">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GiCookingPot className="h-8 w-8 text-logo mb-4" />,
                title: "Utensil Buffing",
                description: "Professional buffing services for all types of kitchen utensils.",
              },
              {
                icon: <GiSparkles className="h-8 w-8 text-logo mb-4" />,
                title: "Mirror Polishing",
                description: "Achieve a perfect mirror finish on your metalware.",
              },
              {
                icon: <GiDiamondTrophy className="h-8 w-8 text-logo mb-4" />,
                title: "Silverware Restoration",
                description: "Restore the original shine to your precious silverware.",
              },
              {
                icon: <MdRestaurant className="h-8 w-8 text-logo mb-4" />,
                title: "Commercial Cookware",
                description: "Specialized services for restaurants and hotels.",
              },
              {
                icon: <MdDesignServices className="h-8 w-8 text-logo mb-4" />,
                title: "Custom Projects",
                description: "Tailored solutions for unique buffing requirements.",
              },
              {
                icon: <FaBoxes className="h-8 w-8 text-logo mb-4" />,
                title: "Bulk Orders",
                description: "Efficient handling of large volume orders.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-base p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow scroll-zoom-in"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-logo">
                  {service.title}
                </h3>
                <p className="text-logo">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Download Section */}
      <section className="h-[50vh] bg-neutral flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-base rounded-lg shadow-2xl p-8 scroll-zoom-out">
            <h2 className="text-2xl font-bold mb-4 text-logo">Download Our Catalogue</h2>
            <p className="text-l mb-8 text-logo">
              Get detailed information about our services
            </p>

            <a
              href="/catalogue.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-logo text-light font-semibold rounded-lg shadow-2xl hover:bg-neutral transition-all"
            >
              <MdDownload className="mr-2" />
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
