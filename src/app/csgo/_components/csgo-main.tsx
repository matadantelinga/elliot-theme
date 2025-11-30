"use client";

import { LeaderBoardsContainer } from "@/components/layout/leader-boards-container";
import { LeaderBoardsNav } from "@/components/layout/leader-boards-nav";
import { MainBg } from "@/components/layout/main-bg";

export const CsgoMain = () => {
  return (
    <>
      <MainBg id="csgo-main">
        <h1 className="w-full">
          <div className="flex justify-center gap-2 items-center">
            <span className="text-white font-black italic text-4xl block uppercase text-center">
              $2,500
            </span>
            <div className="text-white font-black italic text-4xl block uppercase text-center">
              CS<span className="text-c-lightgreen">SITE</span>
            </div>
          </div>

          <span className="text-white font-black italic text-6xl block uppercase text-center">
            LEADERBOARDS
          </span>
        </h1>
        <div className="text text-white text-center max-w-md m-auto font-bold pt-6">
          Play under code <span className="text-c-lightgreen">Elliot</span> on
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
