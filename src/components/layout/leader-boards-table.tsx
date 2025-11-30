"use client";

import { iLeaderBoardItem } from "@/lib/interfaces/iLeaderBoard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface iLeaderBoardProps {
  data: iLeaderBoardItem[];
  theme: "purple" | "lightgreen" | "blue" | "white";
}

export const LeaderBoardsTable: React.FC<iLeaderBoardProps> = ({
  data,
  theme,
}) => {
  return (
    <>
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="rounded-lg custom-table-row">
              <TableHead className="w-[50px] font-extrabold text-gray-400">
                Place
              </TableHead>
              <TableHead className="text-gray-400 font-extrabold">
                User
              </TableHead>
              <TableHead className="w-[100px] text-gray-400 font-extrabold">
                Wagered
              </TableHead>
              <TableHead className="text-gray-400 font-extrabold w-[150px]">
                Reward
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="space-y-2">
            {data.map((lb, index) => (
              <TableRow
                key={lb.position}
                className={cn(
                  "border-[0.5px] rounded-lg custom-table-row w-[50px]",
                  "hover:bg-gray-800 transition-colors duration-200",
                  index % 2 === 0 ? "bg-[#0E0E0E]" : "bg-[#121212]",
                  "mb-2 last:mb-0"
                )}
              >
                <TableCell className="text-gray-400 font-medium">
                  #{lb.position}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={lb.avatar}
                      width={24}
                      height={24}
                      alt={`${lb.name}'s avatar`}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{lb.name}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-400 font-medium w-[100px]">
                  ${lb.earning.toLocaleString()}
                </TableCell>
                <TableCell className={`text-c-${theme} font-medium w-[150px]`}>
                  ${lb.prize.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
