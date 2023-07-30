import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bebas } from "../fonts";

const page = () => {
  return (
    <main className="relative isolate">
      <Image
        src="/images/hot-shower.jpg"
        className=" aspect-[3/1] object-cover"
        width={1920}
        height={1080}
        alt="Background Image"
      />
      <div className="absolute inset-0">
        <div className="container pt-16 relative z-10">
          <h1
            className={cn(
              `text-white font-light text-3xl lg:text-5xl uppercase tracking-wider mb-2`,
              `${bebas.className}`
            )}
          >
            About <span className="font-bold">Us</span>
          </h1>

          <p className="text-sm max-w-[55ch] text-white pb-2">
            We are Hotwater24, the specialist to assist and advise you on the
            most cost-effective and efficient gas water heating solution for
            your household. We do not only offer the best geysers, we also offer
            you the installation and maintenance service.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            Basically a one-stop-shop for all your water heating solutions!
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            We can offer you the full service through our platform of
            independent and certified installers who ensure reliable and safe
            installations every day.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            With over 40years of experience in the Dutch gas installation
            business, we understand your need and can therefore help you make
            the best choice! And all that for a competitive price!
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            By clicking on the button below we instantly recommend you with the
            best gas water heating solution for your home
          </p>

          <Link href="/quote/start" passHref>
            <Button
              // onClick={start}
              className="bg-blue-600 text-white flex space-x-2 py-2 px-4 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit uppercase"
            >
              Choose Your Geyser
              <span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
