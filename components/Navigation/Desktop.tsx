"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiLinkedinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import AreasSelector from "./AreasSelector";
import { Mail, Phone, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { semanticSearch } from "@/lib/queries/embeddings";
import { ScrollArea } from "../ui/scroll-area";
import { TOP_NAVIGATION_QUERYResult } from "@/sanity/types";

interface DesktopProps {
  landingPages: TOP_NAVIGATION_QUERYResult;
}

const Desktop = ({ landingPages }: DesktopProps) => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 hidden pb-3 shadow-md lg:block bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-10 py-2 mb-2 lg:px-20 md:flex-row bg-brand">
        <div className="flex justify-between w-full mx-auto max-w-7xl">
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
          <span className="flex flex-row items-center mx-3">
            <SearchDialog />
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
      <nav className="container flex items-center justify-between px-0 mx-auto max-w-7xl">
        <div className="flex items-center w-full gap-x-9">
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
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/#packages" passHref>
                    Our Packages
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/who-we-are" passHref>
                    Who We Are
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Why Choose Us</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link
                      href="/why-us"
                      className="flex flex-col justify-start p-3 space-y-1 no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Why Choose Us
                      </div>
                    </Link>
                    {landingPages.map((page) => (
                      <Link
                        key={page.slug?.current}
                        href={`/why-us/${page.slug?.current}`}
                        className="flex flex-col justify-start p-3 space-y-1 no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {page.navigationText || page.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/payment-plan" passHref>
                    Payment Plan
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/faq" passHref>
                    FAQ's
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/news" passHref>
                    News
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <AreasSelector />
          <Link
            href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              type="button"
              className="text-white bg-green-600 rounded-full"
            >
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
    type: "article" | "product" | "content";
    similarity: number;
    slug: string;
  };

  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = React.useState<string>("");

  const [searchResults, setSearchResults] = React.useState<ResultType[] | null>(
    null
  );

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start flex-1 h-8 gap-2 bg-white border rounded-full min-w-lg border-slate-200 text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:ring-offset-slate-800"
        >
          <Search className="w-4 h-4" />
          <span className="text-xs text-slate-500">Search</span>
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
            <Button
              className="ml-2 text-white bg-brand"
              disabled={isPending}
              onClick={() => {
                startTransition(async () => {
                  // Call the search function here
                  console.log("Searching for:", query);
                  const results = await semanticSearch(query);
                  console.log("Search results:", results);
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
                  <li
                    onClick={() => setIsOpen(false)}
                    key={result.id}
                    className="p-2 border rounded-md"
                  >
                    <Link
                      href={
                        result.type === "article"
                          ? `/news/${result.slug}`
                          : result.type === "product"
                          ? `/packages/${result.slug}`
                          : `/${result.slug}`
                      }
                      className="flex flex-col "
                    >
                      <h4 className="text-sm font-semibold underline text-brand">
                        {result.type === "product" && "Gas Geyser Package: "}
                        {result.title}
                      </h4>
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
