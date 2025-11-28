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
import { Search } from "lucide-react";
import React from "react";

export default function SearchSection() {
    const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
    const [showActivityBar, setShowActivityBar] =
        React.useState<boolean>(false);
    const [showPanel, setShowPanel] = React.useState<boolean>(false);
    return (
        <div className="flex items-center gap-5">
            <input
                type="text"
                placeholder="Search"
                className="hidden flex-1 border border-white/10 p-2 text-white md:block"
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size={"lg"}
                        className="button-bg font-anton-sc m-auto cursor-pointer border-0 target:border-0"
                    >
                        <span className="m-10">Sort By</span>
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
                className="button-search-bg font-anton-sc block cursor-pointer border-0 target:border-0 md:hidden"
            >
                <span>
                    <Search />
                </span>
            </Button>
        </div>
    );
}
