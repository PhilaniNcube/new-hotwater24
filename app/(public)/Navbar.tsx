import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { RiWhatsappLine } from "react-icons/ri";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import LogoutButton from "@/components/LogoutButton";
import { createServerClient } from "@supabase/ssr";

const Navbar = async () => {

      const cookieStore = cookies();

      const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value;
            },
          },
        }
      );

    const {data, error} = await supabase.rpc("is_admin").single();

    const {data: {session}} = await supabase.auth.getSession()

    console.log(session?.user)


    const logout = async () => {
      await supabase.auth.signOut()
    }



  return (
    <header className="">
      {/** Top Nav **/}
      <div className="w-full py-4 bg-white">
        <div className="container flex justify-between">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                className="object-cover w-36 sm:w-44"
                src="/images/hw24-logo.svg"
                width={358}
                height={73}
                alt="hotwater24"
                aria-label="Logo"
              />
            </div>
          </Link>
          <div className="flex items-center space-x-4 gap-x-5">
            <a
              href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2 space-x-6 font-bold text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Get in touch <RiWhatsappLine className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-800">
        {/* Desktop Nav */}
        <div className="container items-center justify-between hidden md:flex">
          <nav className="flex items-center space-x-8 text-white">
            <Link
              href="/"
              className="pr-6 text-sm md:text-md focus:text-sky-600"
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="px-6 text-sm md:text-md focus:text-sky-600"
            >
              Who We Are
            </Link>
            <Link
              href="/why-us"
              className="px-6 text-sm md:text-md focus:text-sky-600"
            >
              Why Choose Us
            </Link>
            <Link
              href="/our-approach"
              className="px-6 text-sm md:text-md focus:text-sky-600"
            >
              Our Approach
            </Link>

            <Link
              href="/blog/faq"
              className="px-6 text-sm md:text-md focus:text-sky-600"
            >
              FAQs
            </Link>
            <Link
              href="/news"
              className="px-6 text-sm md:text-md focus:text-sky-600"
            >
              News
            </Link>
          </nav>
          {session ? (
            <div className="flex items-center space-x-4 ">
              <Link
                href="/admin"
                passHref
                className="flex px-3 py-2 space-x-2 bg-blue-800 rounded"
              >
                <User size={20} className="text-white" />
                <span className="text-white">Admin</span>
              </Link>
              <LogoutButton />
            </div>
          ) : (
            null
            )}
            </div>
        {/* Desktop Nav Ends */}
        {/* Mobile Nav Starts */}
        <div className="container flex items-center justify-between md:hidden">
          <MobileNav is_admin={data!} />
        </div>
        {/* Mobile Nav Ends */}
      </div>
    </header>
  );
};
export default Navbar;
