"use client";

import { LeaderBoardsContainer } from "@/components/layout/leader-boards-container";
import { LeaderBoardsNav } from "@/components/layout/leader-boards-nav";
import { MainBg } from "@/components/layout/main-bg";

export const RustMain = () => {
  return (
    <>
      <MainBg id="rust-main">
        <h1 className="w-full">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-white font-black italic text-4xl block uppercase text-center">
              $2,500
            </span>
            <div className="text-white font-black italic text-3xl md:text-4xl block uppercase text-center">
              RUST<span className="text-c-blue">SITE</span>
            </div>
          </div>

          <span className="text-white font-black italic text-4xl md:text-6xl block uppercase text-center">
            LEADERBOARDS
          </span>
        </h1>
        <div className="text text-white text-center max-w-md m-auto font-bold pt-6">
          Play under code <span className="text-c-blue">Elliot</span> on
          partnered sites to compete against other players and climb the
          leaderboards!
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <LeaderBoardsNav />
          </div>
          <div className="col-span-12">
            <LeaderBoardsContainer />
          </div>
        </div>
      </MainBg>
    </>
  );
};
