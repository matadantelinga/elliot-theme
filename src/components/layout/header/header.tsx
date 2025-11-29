"use client";

import Image from "next/image";
import Container from "../container";
import { MainNav } from "./main-nav";

export const Header = () => {
  return (
    <>
      <Container>
        <header className="flex gap-2 items-center">
          <div className="logo-wrapper flex-1">
            <Image
              src={"/images/logo.svg"}
              width={153}
              height={38}
              alt="Logo"
            />
          </div>
          <div className="main-menu w-1/2 hidden md:block">
            <MainNav />
          </div>
        </header>
      </Container>
    </>
  );
};
