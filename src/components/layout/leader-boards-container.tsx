"use client";

import { useLeaderBoardStore } from "@/hooks/use-leaderboards";
import React from "react";
import { LeaderBoardCard } from "./leader-boards-card";

export const LeaderBoardsContainer = () => {
  const { leaderBoards } = useLeaderBoardStore();

  return (
    <>
      <div id="leader-boards-container" className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3 grid grid-cols-3 gap-4">
          {leaderBoards.map((lb, index) => (
            <div key={index} className="col-span-3 md:col-span-1">
              <LeaderBoardCard data={lb} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
