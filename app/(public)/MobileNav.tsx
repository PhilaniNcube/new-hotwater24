"use client"
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
import Link from "next/link";

import { useState } from "react";

const MobileNav = ({is_admin}:{is_admin:boolean}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} >
      <SheetTrigger asChild className="">
        <Button type="button" variant="ghost" className="text-white">
          <MenuIcon size="lg" />
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
  );
};
export default MobileNav;
