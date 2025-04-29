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
import type { Geyser } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useTransition } from "react";
import { Button } from "../ui/button";
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinFill, RiLinkedinLine, RiWhatsappLine } from "react-icons/ri";
import AreasSelector from "./AreasSelector";
import { AiFillRedEnvelope, AiOutlineRedEnvelope } from "react-icons/ai";
import { Mail, Phone, Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { semanticSearch } from "@/lib/queries/embedding";
import { set } from "date-fns";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  packages: Geyser[];
  cities: {
    id: number;
    name: string;
    slug: string;
    created_at: string;
  }[];
}

const Desktop = () => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 hidden pb-3 shadow-md lg:block bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-10 py-2 mb-2 lg:px-20 md:flex-row bg-brand">
        <div className="flex justify-between w-full max-w-7xl mx-auto">
          <span className="flex flex-row items-center">
            <Mail className="text-white" size={20} />
            <Link
              href="mailto:info@hotwater24.com"
              className="ml-2 text-sm font-medium text-white"
              prefetch={false}
            >
              info@hotwater24.com
            </Link>
            <span className="pl-3">|</span>
            <Phone className="ml-2 text-white" size={20} />
            <Link
              href="tel:+27793414075"
              className="ml-2 text-sm font-medium text-white"
              prefetch={false}
            >
              +27 79 341 4075
            </Link>
          </span>
          <span className="flex flex-row items-center">
            <Link
              href="https://www.facebook.com/HotW24"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <RiFacebookBoxFill className="text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/hot_water_24/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <RiInstagramFill className="text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/hotwater24/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <RiLinkedinFill className="text-2xl" />
            </Link>
            <p className="mx-3 text-white">|</p>
            <Link className="text-white" href="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
      <nav className="container max-w-7xl px-0 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-9 w-full">
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

              <NavigationMenuItem asChild>
                <Link href="/#packages" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Packages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Link href="/who-we-are" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Who We Are
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Link href="/why-us" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Why Choose Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Link href="/payment-plan" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Payment Plan
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Link href="/faq" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ's
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Link href="/news" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <SearchDialog />
          <AreasSelector />
          <Link
            href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button" className="bg-green-600 text-white rounded-full">
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




// create a search dialog component that will be used for semantic search 

const SearchDialog = () => {

  type ResultType = {
    id: number;
    item_id: string;
    title: string;
    content: string;
    type: 'article' | 'product' | 'content';
    similarity: number;
    slug: string;
  }

  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = React.useState<string>("");

  const [searchResults, setSearchResults] = React.useState<ResultType[] | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-fit">
          <Search className="mr-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Use this dialog to search for content.
          </DialogDescription>
          <div className="flex items-center justify-between w-full mt-4">
            <Input
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button  className="ml-2 bg-brand text-white" disabled={isPending}
              onClick={() => {
                startTransition(async () => {
                  // Call the search function here
                  console.log("Searching for:", query);
                  const results = await semanticSearch(query)
                  setSearchResults(results);
                });
              }}
            >
              Search
            </Button>
          </div>
          {/* Display Search Results if there are any */}
          {searchResults && searchResults.length > 0 && (
            <ScrollArea className="mt-4 max-h-[300px]">
              <h3 className="text-lg font-semibold">Search Results:</h3>
              <ul className="mt-2 space-y-2">
                {searchResults.map((result) => (
                  <li onClick={() => setIsOpen(false)} key={result.id} className="p-2 border rounded-md">
                    <Link href={result.type === "article" ? `/news/${result.slug}` : `/packages/${result.slug}`} className="flex flex-col ">
                      <h4 className="text-sm font-semibold underline text-brand">{result.type === 'product' && "Gas Geyser Package: "}{result.title}</h4>
                      <p className="text-xs text-gray-500">{result.content}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          )}
          {/* Display a message if no results found */}
          {searchResults && searchResults.length === 0 && (
            <div className="mt-4 text-gray-500">
              <p>No results found for "{query}".</p>
            </div>
          )}
          {/* Display a message if no query is entered */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
