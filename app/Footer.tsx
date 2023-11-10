import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16 lg:py-8 text-white">
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-lg md:text-xl">Contact Details</h3>
            <p className="text-sm flex space-x-2 items-center">
              <Mail size={16} /> info@hotwater24.com
            </p>
            <p className="text-sm flex space-x-2 items-center">
              <Phone size={16} />
              +27 (0)79 341 4075
            </p>
            <a
              href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="text-sm flex space-x-2 items-center"
            >
              <RiWhatsappLine size={16} /> Whatsapp
            </a>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-lg md:text-xl">Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/who-we-are">Who We Are</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/our-approach">Our Approach</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="text-gray-400 mt-4 flex flex-col justify-start items-end">
              {/* <img
                className="w-5/6 object-cover"
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
