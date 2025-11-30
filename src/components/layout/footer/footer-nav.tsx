"use client";
import { iNavItem } from "@/lib/interfaces/iNav";
import { link } from "fs";
import Link from "next/link";
import React from "react";

interface iFooterNavProps {
  title: string;
  links: iNavItem[];
}

export const FooterNav: React.FC<iFooterNavProps> = ({ title, links }) => {
  return (
    <>
      <div className="font-black text-white text-xl mb-4">{title}</div>
      <ul>
        {links.map((l, index) => (
          <React.Fragment key={index}>
            <li>
              <Link
                className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in text-xs py-2 block"
                href={l.url}
              >
                {l.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
