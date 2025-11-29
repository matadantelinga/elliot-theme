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
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SearchSection() {
    const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
    const [showActivityBar, setShowActivityBar] =
        React.useState<boolean>(false);
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
        <div className="flex items-center justify-between">
            <NavigationMenu className="bg-c-gray font-anton-sc corner-shape-bevel text-white/50">
                <NavigationMenuList className="flex px-5">
                    {navbar.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                asChild
                                className={` ${
                                    item.active &&
                                    "border-b-2 border-red-600 bg-gradient-to-r from-transparent via-red-800 to-transparent"
                                } block px-10 py-3 text-white shadow transition hover:bg-gradient-to-r hover:from-transparent hover:via-red-600 hover:to-transparent`}
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
                            className="button-bg font-anton-sc m-auto cursor-pointer border-0 target:border-0"
                        >
                            <span className="m-10">Filters</span>
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
}
