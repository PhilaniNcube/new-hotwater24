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

type Props = {
  packages: Geyser[];
  cities: {
    id: number;
    name: string;
    slug: string;
    created_at: string;
  }[];
};

const Mobile = ({ packages, cities }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 flex bg-white shadow lg:hidden">
      <div className="container flex items-center justify-between py-3">
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
              <div className="flex flex-col items-start px-4 py-2 space-y-4">
                <Link href="/" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Home
                  </Button>
                </Link>
                <Link href="/#packages" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Packages
                  </Button>
                </Link>
                <Link href="/who-we-are" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Who we are
                  </Button>
                </Link>
                <Link href="/payment-plan" passHref>
                  <Button onClick={() => setIsOpen(false)} variant="link">
                    Payment Plan
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
