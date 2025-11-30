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
export const MilestoneCard: React.FC<iMilestoneCardProps> = ({ data }) => {
  return (
    <>
      <Card className={`milestone-card p-6 ${data.isVip && "vip-card"}`}>
        <CardHeader>
          <div className="flex gap-2 justify-between items-center title text-2xl">
            <div className="decorator text-center">
              <Image
                src={data.isVip ? "/icons/crown.svg" : "/icons/star.svg"}
                alt="icon"
                width={17}
                height={17}
                className="m-auto"
              />
            </div>
            <div className="name font-extrabold text-center">
              {data.isVip ? (
                <>
                  <span className="text-c-gold">VIP</span> {data.name}
                </>
              ) : (
                <>{data.name}</>
              )}
            </div>
            <div className="decorator text-center">
              <Image
                src={data.isVip ? "/icons/crown.svg" : "/icons/star.svg"}
                alt="icon"
                width={17}
                height={17}
                className="m-auto"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="details py-10 text-center">
          <div className="text-gray-400 font-bold text-sm mb-2">
            Required Wager
          </div>
          <div className="text-2xl font-extrabold">${data.requiredWager}</div>
          <div className="reward pt-10">
            <div className="text-gray-400 font-bold text-sm mb-2">
              Cash Reward
            </div>
            <div
              className={`text-4xl -skew-3 font-extrabold ${data.isVip ? "text-c-gold" : "text-c-lightgreen"}`}
            >
              ${data.requiredWager}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className={`font-extrabold w-full py-6 ${data.isVip ? "bg-linear-gold text-black" : "bg-linear-green text-white"}`}
            disabled={data.locked}
          >
            <Image
              src={`${data.locked ? "/icons/lock.svg" : data.isVip ? "/icons/gift.svg" : "/icons/gift-white.svg"}`}
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
