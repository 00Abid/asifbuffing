import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-secondary border-t border-accent">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Logo + About */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="ASIF BUFFING WORKS - Professional Utensil Buffing Services Logo"
                  className="object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <p className="text-dark">
              Bringing the Shine Back <br /> 
              Matte Specialist in Vasai
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-logo">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-dark hover:text-logo">Home</Link></li>
              <li><Link href="/Products" className="text-dark hover:text-logo">Products</Link></li>
              <li><Link href="/Machinery" className="text-dark hover:text-logo">Machinery</Link></li>
              <li><Link href="/blog" className="text-dark hover:text-logo">Blog</Link></li>
              <li><Link href="/Testimonials" className="text-dark hover:text-logo">Testimonials</Link></li>
              <li><Link href="/Contact" className="text-dark hover:text-logo">Contact</Link></li>
            </ul>
          </div>


          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-logo">Hours</h3>
            <div className="space-y-2 text-dark">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-accent">
          <p className="text-center text-logo">
            © {new Date().getFullYear()} ASIF BUFFING WORKS.
          </p>
        </div>
      </div>
    </footer>
  );
}
