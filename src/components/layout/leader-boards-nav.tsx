"use client";
import {
  initialLeaderBoards,
  useLeaderBoardStore,
} from "@/hooks/use-leaderboards";
import { iLeaderBoardsNav } from "@/lib/interfaces/iNav";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

export const LeaderBoardsNav = () => {
  const { setLeaderBoards } = useLeaderBoardStore();
  const pathname = usePathname();
  
  const tabNavs = useMemo<iLeaderBoardsNav[]>(
    () => [
      {
        image: "/images/magic.png",
        type: "rust",
        active: pathname === "/rust",
      },
      {
        image: "/images/shuffle.png",
        type: "shuffle",
        active: pathname === "/shuffle",
      },
      {
        image: "/images/csgo.png",
        type: "csgo",
        active: pathname === "/csgo",
      },
    ],
    [pathname]
  );

  useEffect(() => {
    setLeaderBoards(initialLeaderBoards);
  }, []);

  const getHref = (type: "csgo" | "rust" | "shuffle") => {
    return `/${type}`;
  };

  return (
    <>
      <div className="leaderboard-nav mt-10 flex flex-wrap gap-2 items-center justify-center mb-4 md:mb-14">
        {tabNavs.map((nav, index) => (
          <React.Fragment key={index}>
            <Link
              href={getHref(nav.type)}
              className={`col w-1/4 md:w-[250px] text-center cursor-pointer ${nav.active ? "active opacity-100" : "opacity-25"}`}
            >
              <Image
                src={nav.image}
                alt="logo"
                width={160}
                height={70}
                className="m-auto"
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
