"use client";

import { iSocialNav } from "@/lib/interfaces/iNav";
import Image from "next/image";
import React from "react";

interface iSocialCardProps {
  data: iSocialNav;
}

export const SocialCard: React.FC<iSocialCardProps> = ({ data }) => {
  return (
    <>
      <div
        className={`card-${data.type} social-card flex items-center gap-2 rounded-md p-4`}
      >
        <div className="icon rounded-full p-4 bg-black">
          <Image src={data.icon} width={38} height={38} alt="social" />
        </div>
        <div className="details">
          <div className="font-extrabold text-4xl text-white title">
            {data.label}
          </div>
        </div>
      </div>
    </>
  );
};
