"use client"

import { Geyser } from "@/sanity/types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Mobile = ({ packages }: { packages: Geyser[] }) => {

   const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex shadow sticky top-0 left-0 right-0 lg:hidden bg-white">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/">
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
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button type="button" variant="ghost" className="text-white">
                <MenuIcon className="text-slate-900" size="lg" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="px-4 py-2 flex flex-col items-start space-y-4">
                <Link href="/" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Home
                  </Button>
                </Link>
                <Link href="/packages" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Packages
                  </Button>
                </Link>
                <Link href="/who-we-are" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Who we are
                  </Button>
                </Link>
                <Link href="/why-us" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Why choose us
                  </Button>
                </Link>
                <Link href="/our-approach" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Our approach
                  </Button>
                </Link>
                <Link href="/blog/faq" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    FAQs
                  </Button>
                </Link>
                <Link href="/news" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    News
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Mobile;
