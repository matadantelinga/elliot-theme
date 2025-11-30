"use client";

import { iLeaderBoardItem } from "@/lib/interfaces/iLeaderBoard";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

interface iLeaderBoardCardProps {
  data: iLeaderBoardItem;
}

export const LeaderBoardCard: React.FC<iLeaderBoardCardProps> = ({ data }) => {
  return (
    <>
      <div className="w-full leader-boards-card py-6 md:py-14">
        <Card
          className={`card-${data.position} ${data.position === 1 && "-mt-9"}`}
        >
          <CardHeader>
            <div className="avatar relative">
              <Image
                src={data.avatar}
                width={150}
                height={150}
                alt="avatar"
                className="m-auto rounded-full"
              />
              <div className="position rounded-lg font-extrabold">
                {data.position}
                {data.position === 1 ? "st" : data.position === 2 ? "nd" : "rd"}
              </div>
            </div>
          </CardHeader>
          <CardContent className="py-6 text-center">
            <div className="name font-extrabold text-2xl text-white mb-2">
              {data.name.length > 3
                ? data.name.slice(0, 3) + "******"
                : data.name}
            </div>
            <div className="text-gray-400 text-sm md:text-xs">Wagered</div>
            <div className="text-white font-extrabold text-xl">
              ${data.earning}
            </div>
            <div className="text-gray-400 pt-4 text-sm md:text-xs">Prize</div>
            <div className="prize text-white text-4xl font-extrabold pt-0 -skew-y-6 w-fit m-auto">
              ${data.prize}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
