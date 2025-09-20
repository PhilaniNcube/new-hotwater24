"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, ChevronDown, ChevronRight } from "lucide-react";
import { TOP_NAVIGATION_QUERYResult } from "@/sanity/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MobileProps {
  landingPages: TOP_NAVIGATION_QUERYResult;
}

const Mobile = ({ landingPages }: MobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhyChooseUsOpen, setIsWhyChooseUsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 flex bg-white shadow-sm lg:hidden">
      <div className="container flex items-center justify-between px-4 py-3">
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
              <Button type="button" variant="ghost" className="">
                <MenuIcon className="text-slate-900" size="lg" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
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
                <Collapsible
                  open={isWhyChooseUsOpen}
                  onOpenChange={setIsWhyChooseUsOpen}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="link"
                      className="flex items-center justify-between w-full p-0"
                    >
                      <span>Why choose us</span>
                      {isWhyChooseUsOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-2">
                    <Link href="/why-us" passHref>
                      <Button
                        onClick={() => setIsOpen(false)}
                        variant="link"
                        className="block w-full text-sm text-left"
                      >
                        Why Choose Us
                      </Button>
                    </Link>
                    {landingPages.map((page) => (
                      <Link
                        key={page.slug?.current}
                        href={`/why-us/${page.slug?.current}`}
                        passHref
                      >
                        <Button
                          onClick={() => setIsOpen(false)}
                          variant="link"
                          className="block w-full text-sm text-left"
                        >
                          {page.navigationText || page.title}
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
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
