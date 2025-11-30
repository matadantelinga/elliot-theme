"use client";

import Image from "next/image";
import Container from "../container";
import { FooterNav } from "./footer-nav";
import { iNavItem } from "@/lib/interfaces/iNav";

export const Footer = () => {
  const exploreLinks: iNavItem[] = [
    { label: "Home", url: "#" },
    { label: "Leaderboard", url: "#" },
    { label: "Milestones", url: "#" },
  ];

  const legalLinks: iNavItem[] = [
    { label: "ToS", url: "#" },
    { label: "FAQ", url: "#" },
  ];

  const socialLinks: iNavItem[] = [
    { label: "Kick", url: "#" },
    { label: "Twitter", url: "#" },
    { label: "Discord", url: "#" },
  ];

  return (
    <>
      <footer>
        <Container>
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-12 md:col-span-4">
              <div className="logo-wrapper">
                <Image
                  src={"/images/footer-logo.svg"}
                  height={87}
                  width={247}
                  alt="footerlogo"
                  className="m-auto md:m-0"
                />
              </div>
              <div className="copy text-center md:text-left text-gray-400 text-sm py-4">
                © Copyright 2025 Elliotrewards.com
              </div>
              <div className="designedby text-gray-400 pb-6 md:pb-0 md:pt-2 text-center md:text-left">
                Designed <span className="text-white">by @LeonDesigns_</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-4">
                  <FooterNav title="Explore" links={exploreLinks} />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <FooterNav title="Legal" links={legalLinks} />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <FooterNav title="Social Media" links={socialLinks} />
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-14">
              <div className="py-6 px-4 flex flex-wrap gap-2 divide-y md:divide-y-0 md:divide-x md:divide-gray-400 w-full md:max-w-[80%] m-auto items-center">
                <div className="flex gap-2 text-gray-400 text-sm pr-2 pb-2 w-full md:w-fit">
                  <span className="text-c-lightgreen text-4xl font-black">
                    18+
                  </span>
                  <span>
                    {" "}
                    Responsible <br /> Gambling
                  </span>
                </div>
                <div className="w-full md:w-fit md:flex-1 text-gray-400 text-sm">
                  We do not take responsibility for any losses from gambling in
                  casinos and betting sites which are linked or promoted on our
                  website(s). As a player, you are responsible for your bets.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
