"use client";

import Image from "next/image";
import Container from "../container";
import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="fixed w-full min-h-20">
        <Container>
          <div className="flex gap-2 items-center">
            <div className="logo-wrapper w-[200px]">
              <Link href={"/"}>
                <Image
                  src={"/images/logo.svg"}
                  width={153}
                  height={38}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu flex-1 hidden md:block">
              <MainNav />
            </div>
            <div className="buttons">
              <Button
                variant={"green"}
                className="uppercase min-w-40 text-white bg-linear-green"
              >
                Log in
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
