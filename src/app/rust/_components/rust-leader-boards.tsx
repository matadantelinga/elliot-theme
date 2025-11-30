"use client";

import Container from "@/components/layout/container";
import { LeaderBoardsTable } from "@/components/layout/leader-boards-table";
import { iLeaderBoardItem } from "@/lib/interfaces/iLeaderBoard";

export const RustLeaderBoards = () => {
  const data: iLeaderBoardItem[] = [
    {
      prize: "20,000",
      position: 4,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "50,000",
      name: "Jamie",
    },
    {
      prize: "30,000",
      position: 5,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "50,000",
      name: "Leon Yoah",
    },
    {
      prize: "12,000",
      position: 6,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "20,000",
      name: "Jhony tan",
    },
    {
      prize: "12,000",
      position: 7,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "20,000",
      name: "Jhony tan",
    },
    {
      prize: "12,000",
      position: 8,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "20,000",
      name: "Jhony tan",
    },
    {
      prize: "12,000",
      position: 9,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "20,000",
      name: "Jhony tan",
    },
    {
      prize: "12,000",
      position: 10,
      avatar: "/images/avatar.svg",
      team: "Wagger",
      earning: "20,000",
      name: "Jhony tan",
    },
  ];

  return (
    <>
      <section className="star-bg">
        <Container>
          <div className="grid grid-cols-12 gap-4 py-10">
            <div className="col-span-12">
              <LeaderBoardsTable data={data} theme="blue" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
