import { iLeaderBoardsNav } from "@/lib/interfaces/iNav";
import Image from "next/image";
import React, { useState } from "react";

export const LeaderBoardsNav = () => {
  const [tabNavs, setTabNavs] = useState<iLeaderBoardsNav[]>([
    {
      image: "/images/magic.png",
      type: "rust",
      active: false,
    },
    {
      image: "/images/shuffle.png",
      type: "shuffle",
      active: true,
    },
    {
      image: "/images/csgo.png",
      type: "csgo",
      active: false,
    },
  ]);

  const onNavClick = (type: "csgo" | "rust" | "shuffle") => {
    console.log(type);

    setTabNavs((prev) =>
      prev.map((item) => ({
        ...item,
        active: item.type === type,
      }))
    );
  };
  return (
    <>
      <div className="leaderboard-nav flex gap-2 items-center justify-center">
        {tabNavs.map((nav, index) => (
          <React.Fragment key={index}>
            <div
              className={`col w-[250px] text-center cursor-pointer ${nav.active ? "active opacity-100" : "opacity-25"}`}
              onClick={() => onNavClick(nav.type)}
            >
              <Image
                src={nav.image}
                alt="logo"
                width={160}
                height={70}
                className="m-auto"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
