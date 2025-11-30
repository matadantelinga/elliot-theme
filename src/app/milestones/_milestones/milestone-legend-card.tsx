"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { iMilestone } from "@/lib/interfaces/iMilestones";
import Image from "next/image";
import React from "react";

interface iMilestoneCardProps {
  data: iMilestone;
}
export const MilestoneLegendCard: React.FC<iMilestoneCardProps> = ({
  data,
}) => {
  return (
    <>
      <Card className={`milestone-card p-6 ${data.isLegend && "legend-card"}`}>
        <CardHeader>
          <div className="flex gap-2 justify-center items-center title text-2xl">
            <div className="name font-extrabold text-center">
              <span className="text-c-gold">VIP</span> {data.name}
            </div>
          </div>
        </CardHeader>
        <CardContent className="details flex flex-wrap justify-center gap-4 md:gap-0 py-10 text-center">
          <div className="wager w-full md:w-1/2">
            <div className="text-gray-400 font-bold text-xl mb-2">
              Required Wager
            </div>
            <div className="text-6xl font-extrabold">${data.requiredWager}</div>
          </div>
          <div className="reward w-full md:w-1/2">
            <div className="text-gray-400 font-bold text-xl mb-2">
              Cash Reward
            </div>
            <div className={`text-6xl -skew-3 font-extrabold text-c-gold`}>
              ${data.requiredWager}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className={`font-extrabold w-full md:w-[250px] m-auto py-6 bg-linear-gold text-black`}
            disabled={data.locked}
          >
            <Image
              src={`${data.locked ? "/icons/lock.svg" : "/icons/gift.svg"}`}
              alt="icon"
              width={20}
              height={20}
            />{" "}
            Claim Reward
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
