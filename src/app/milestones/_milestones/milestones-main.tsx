"use client";

import { LeaderBoardsContainer } from "@/components/layout/leader-boards-container";
import { LeaderBoardsNav } from "@/components/layout/leader-boards-nav";
import { MainBg } from "@/components/layout/main-bg";

export const MilestonesMain = () => {
  return (
    <>
      <MainBg id="milestones-main">
        <h1 className="w-full">
          <span className="text-white font-black italic text-6xl block uppercase text-center">
            Milestones
          </span>
        </h1>
        <div className="text text-white text-center max-w-md m-auto font-bold pt-6">
          While playing under code{" "}
          <span className="text-c-lightgreen">Elliot</span> pass milestones to
          receive extra rewards!
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
           
          </div>
        </div>
      </MainBg>
    </>
  );
};
