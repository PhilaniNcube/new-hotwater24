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
        <DropdownMenuTrigger>
          <Button className="bg-brand text-white">Areas</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {cities.map((city) => (
            <Link key={city.id} href={`/areas/${city.slug}`} passHref>
              <DropdownMenuItem>{city.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default AreasSelector;
