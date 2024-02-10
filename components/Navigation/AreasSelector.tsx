"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";
import { areas } from "@/utils/areas";

type AreasProps = {
  cities: {
     id:number
      name:string
      slug:string
      created_at:string
  }[]
};



const AreasSelector = ({ cities }: AreasProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-white bg-brand">Areas Of Operation</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ScrollArea className="w-44">
            {areas.map((city) => (
              <Link key={city.id} href={`/areas/${city.slug}`} passHref>
                <DropdownMenuItem>{city.name}</DropdownMenuItem>
              </Link>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default AreasSelector;
