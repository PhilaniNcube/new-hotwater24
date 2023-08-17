import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { RiWhatsappLine } from "react-icons/ri";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Navbar = async () => {

    const supabase = createServerComponentClient<Database>({ cookies });

    const {data, error} = await supabase.rpc("is_admin").single();

    const {data: {session}} = await supabase.auth.getSession()

    const {data: admin, error:adminsError} = await supabase.from('admins').select('*').eq('user_id', session?.user.id).single()

    console.log(data);

  return (
    <header className="">
      {/** Top Nav **/}
      <div className="bg-white py-4 w-full">
        <div className="container flex justify-between">
          <Link href="/" passHref>
            <div className="flex space-x-2 items-center cursor-pointer">
              <Image
                className="w-36 sm:w-44 object-cover"
                src="/images/hw24-logo.svg"
                width={358}
                height={73}
                alt="hotwater24"
                aria-label="Logo"
              />
            </div>
          </Link>
          <div className="flex items-center gap-x-5 space-x-4">
            <a
              href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-between px-4 py-2 space-x-6 rounded-full font-bold"
            >
              Get in touch <RiWhatsappLine className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        {/* Desktop Nav */}
        <div className="hidden container md:flex items-center justify-between">
          <nav className="flex space-x-8 items-center text-white">
            <Link
              href="/"
              className="text-sm md:text-md focus:text-sky-600 pr-6"
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="text-sm md:text-md focus:text-sky-600 px-6"
            >
              Who We Are
            </Link>
            <Link
              href="/why-us"
              className="text-sm md:text-md focus:text-sky-600 px-6"
            >
              Why Choose Us
            </Link>
            <Link
              href="/our-approach"
              className="text-sm md:text-md focus:text-sky-600 px-6"
            >
              Our Approach
            </Link>

            <Link
              href="/blog/faq"
              className="text-sm md:text-md focus:text-sky-600 px-6"
            >
              FAQs
            </Link>
            <Link
              href="/news"
              className="text-sm md:text-md focus:text-sky-600 px-6"
            >
              News
            </Link>
          </nav>
          {session && (
            <div className="flex items-center space-x-4">
              <Link href="/admin" passHref className="flex space-x-2">
                <User size={20} />
                <span>Admin</span>
              </Link>
            </div>
          )}
        </div>
        {/* Desktop Nav Ends */}
        {/* Mobile Nav Starts */}
        <div className="flex md:hidden justify-between items-center container">
          <MobileNav is_admin={data!} />
        </div>
        {/* Mobile Nav Ends */}
      </div>
    </header>
  );
};
export default Navbar;
