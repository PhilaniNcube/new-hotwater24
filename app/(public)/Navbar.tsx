
import Link from "next/link";
import Image from "next/image";
import { RiWhatsappLine } from "react-icons/ri";
import { User } from "lucide-react";
import MobileNav from "./MobileNav";
import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/server";

const Navbar = async () => {



    const supabase = await createClient();

    const {data, error} = await supabase.rpc("is_admin").single();

    const {data: {session}} = await supabase.auth.getSession()

  


 


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
            <Link
              href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2 space-x-6 font-bold text-amber-50 bg-green-600 rounded-full hover:bg-green-700"
            >
              Get in touch <RiWhatsappLine className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-800">
        {/* Desktop Nav */}

     
        {/* Mobile Nav Starts */}
        <div className="container flex items-center justify-between lg:hidden">
          <MobileNav is_admin={data!} />
        </div>
        {/* Mobile Nav Ends */}
      </div>
    </header>
  );
};
export default Navbar;
