"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ListFilter, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FilterNav = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
  const [showPanel, setShowPanel] = React.useState<boolean>(false);

  const navbar = [
    {
      title: "all",
      href: "/",
      active: false,
    },
    {
      title: "popular",
      href: "/",
      active: true,
    },
    {
      title: "max bet",
      href: "/",
      active: false,
    },
    {
      title: "max payout",
      href: "/",
      active: false,
    },
    {
      title: "hit frequency",
      href: "/",
      active: false,
    },
    {
      title: "newest",
      href: "/",
      active: false,
    },
    {
      title: "oldest",
      href: "/",
      active: false,
    },
    {
      title: "volatility",
      href: "/",
      active: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
      <NavigationMenu className="filter-nav bg-c-gray font-anton-sc corner-shape-bevel text-white/50 max-w-sm md:max-w-full overflow-x-auto scrollbar-hide flex-1">
        <NavigationMenuList className="flex px-5">
          {navbar.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={`${item.active && "active"} `}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size={"lg"}
              className="button-bg font-anton-sc m-auto cursor-pointer border-0 target:border-0 flex items-center gap-"
            >
              Filters <ListFilter />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-c-gray mx-10 rounded-none border-none p-5 text-white md:w-md">
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Newest
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
              disabled
            >
              Oldest
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Popular
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          size={"lg"}
          className="button-search-bg font-anton-sc cursor-pointer border-0 target:border-0"
        >
          <span>
            <Search />
          </span>
        </Button>
      </div>
    </div>
  );
};
