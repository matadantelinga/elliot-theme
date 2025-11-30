"use client";

import { MainBg } from "@/components/layout/main-bg";
import { MilestonesOverview } from "./milestones-overview";
import { MilestonesContainer } from "./milestones-container";

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
        <div className="grid grid-cols-12 gap-2 py-10">
          <div className="col-span-12">
            <MilestonesOverview />
          </div>
          <div className="col-span-12">
            <MilestonesContainer />
          </div>
        </div>
      </MainBg>
    </>
  );
};
