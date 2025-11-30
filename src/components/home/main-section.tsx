"use client";

import { MainBg } from "../layout/main-bg";
import { Button } from "../ui/button";

export const MainSection = () => {
  return (
    <>
      <MainBg id="home-main">
        <h1 className="w-full">
          <span className="text-white font-black italic text-[80px] block uppercase text-center">
            ELLIOT
          </span>
          <span className="text-c-lightgreen font-black italic text-6xl block uppercase text-center">
            REWARDS
          </span>
        </h1>
        <div className="text text-white text-center max-w-sm m-auto font-bold">
          Explore <span className="text-c-lightgreen">VIP Rewards</span>, Swing
          to the Top of the Leaderboards, & Stay Alert for Wild Giveaways and
          More.
        </div>
        <div className="buttons flex py-10 items-center flex-wrap gap-6 justify-center">
          <Button variant={"green"} className="uppercase min-w-[200px]">
            Leaderboard
          </Button>
          <Button variant={"linegreen"} className="uppercase min-w-[200px]">
            MILESTONES
          </Button>
        </div>
      </MainBg>
    </>
  );
};
