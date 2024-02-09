"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Geyser } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { RiWhatsappLine } from "react-icons/ri";
import AreasSelector from "./AreasSelector";

type Props = {
  packages: Geyser[];
  cities: {
    id: number;
    name: string;
    slug: string;
    created_at: string;
  }[];
}

const Desktop = ({ packages, cities }: Props) => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 hidden py-3 shadow-md lg:block bg-white/80 backdrop-blur-sm">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-x-9">
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Packages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid  gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.70fr_1fr]">
                    <li className="row-span-5">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                          href="/payment-plan"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Payment Plan
                          </div>
                          <p className="text-xs leading-tight text-muted-foreground">
                            Enjoy flexible purchasing with our payment plan
                            options! We allow installment payments on all our
                            packages.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {packages.map((item) => (
                      <li key={item._id}>
                        <NavigationMenuItem>
                          <Link
                            href={`/packages/${item.slug}`}
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {item.maxFlowRate.split("l")[0]}L {item.title}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/who-we-are" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Who We Are
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/why-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Why Choose Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ's
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <AreasSelector cities={cities} />
          <Link
            href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button" className="bg-green-500 rounded-full">
              <RiWhatsappLine className="mr-1 text-2xl" />
              Get In Touch
            </Button>
          </Link>
        </div>
      </nav>
    </section>
  );
};
export default Desktop;


const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
