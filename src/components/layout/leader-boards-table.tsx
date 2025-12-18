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
        <div className="[&_table]:border-separate [&_table]:border-spacing-y-2">
          <Table>
            <TableHeader>
              <TableRow className="rounded-[10px] overflow-hidden bg-[#121212] hover:bg-black py-3 border-0">
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
            <TableBody className="[&_tr]:border-0">
              {data.map((lb, index) => (
                <TableRow
                  key={lb.position}
                  className={cn(
                    "border border-[#151C20] rounded-[10px] py-4 bg-amber-100 ",
                    "hover:opacity-90 transition-opacity duration-200"
                  )}
                  style={{
                    background: index % 2 === 0 
                      ? "linear-gradient(135deg, #0E0E0E 0%, #121C21 100%)" 
                      : "linear-gradient(135deg, #121212 0%, #141718 100%)",
                  }}
                >
                  <TableCell 
                    className="text-gray-400 font-medium rounded-l-lg"
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                  >
                    #{lb.position}
                  </TableCell>
                  <TableCell 
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                  >
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
                  <TableCell 
                    className="text-gray-400 font-medium w-[100px]"
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                  >
                    ${lb.earning.toLocaleString()}
                  </TableCell>
                  <TableCell 
                    className={`text-c-${theme} font-medium w-[150px] rounded-r-lg`}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                  >
                    ${lb.prize.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};
