import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="py-16 text-white bg-gray-800 lg:py-8">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-bold md:text-xl">Contact Details</h3>
            <Link
              href="mailto:info@hotwater.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <Mail size={16} /> info@hotwater24.com
            </Link>
            <p className="flex items-center space-x-2 text-sm">
              <Phone size={16} />
              +27 (0)79 341 4075
            </p>
            <Link
              href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <RiWhatsappLine size={16} /> Whatsapp
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-bold md:text-xl">Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/#packages">Our Packages</Link>
            <Link href="/who-we-are">Who We Are</Link>
            <Link href="/why-us">Why Choose Us</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/news">News</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-end justify-start gap-3 mt-4 text-gray-100">
              <Link
                href="https://www.linkedin.com/company/hotwater24"
                target="_blank"
                className="hover:text-blue-500"
              >
                <Linkedin />
              </Link>
              <Link
                className="hover:text-blue-500"
                href="https://www.facebook.com/HotW24"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                className="hover:text-blue-500"
                href="https://www.instagram.com/hot_water_24/"
                target="_blank"
              >
                <Instagram />
              </Link>
              {/* <img
                className="object-cover w-5/6"
                src="/images/footer.png"
                alt="paygate logos"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
