"use client";

import Image from "next/image";
import Container from "./container";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <>
      <Container>
        <header className="flex gap-2 items-center">
          <div className="logo-wrapper">
            <Image
              src={"/images/logo.svg"}
              width={153}
              height={38}
              alt="Logo"
            />
          </div>
          <div className="burger-menu cursor-pointer">
            <div className="polygon-border h-[42px] w-[42px] flex justify-center items-center">
              <Menu className="text-c-red-light" />
            </div>
          </div>
          <div className="main-menu w-1/4">
            <nav>
              <ul className="flex items-center divide-x divide-gray-500 gap-2">
                <li className="p-1 pr-2">
                  <Link
                    className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
                    href={"#"}
                  >
                    All Games
                  </Link>
                </li>
                <li className="p-1 pr-2">
                  <Link
                    className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
                    href={"#"}
                  >
                    Tournaments
                  </Link>
                </li>
                <li className="p-1 pr-2">
                  <Link
                    className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
                    href={"#"}
                  >
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="searchbar w-1/2">
            <div className="flex items-center gap-2 border-[0.5px] border-[#1A1A1A] p-1">
              <div className="text-center">
                <Search className="text-gray-500" />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search"
                  className="hidden rounded-none! flex-1 border-none border-white/10 p-1 text-white md:block focus-visible:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="socials">
            <ul className="flex gap-2 items-center">
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/icons/ig.svg"}
                    width={16}
                    height={16}
                    alt="ig"
                  />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/icons/dc.svg"}
                    width={16}
                    height={16}
                    alt="dc"
                  />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/icons/fb.svg"}
                    width={16}
                    height={16}
                    alt="fb"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Container>
    </>
  );
};
