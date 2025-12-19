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
import { usePathname } from "next/navigation";

interface iLeaderBoardProps {
  data: iLeaderBoardItem[];
  theme: "purple" | "lightgreen" | "blue" | "white";
}

export const LeaderBoardsTable: React.FC<iLeaderBoardProps> = ({
  data,
  theme,
}) => {
  const pathname = usePathname();

  const getHeaderBg = () => {
    if (pathname === "/shuffle")
      return "bg-gradient-to-r from-purple-900/20 to-purple-800/30";
    if (pathname === "/rust")
      return "bg-gradient-to-r from-blue-900/20 to-blue-800/30";
    if (pathname === "/csgo")
      return "bg-gradient-to-r from-green-900/20 to-green-800/30";
    return "bg-[#121212]";
  };

  const getRowBackground = (index: number) => {
    if (pathname === "/shuffle") {
      return index % 2 === 0
        ? "linear-gradient(135deg, rgba(18, 18, 18, 0.5) 0%, rgba(133, 112, 246, 0.06) 100%)"
        : "linear-gradient(135deg, #121212 0%, rgba(20, 23, 24, 0.3) 100%)";
    }
    if (pathname === "/rust") {
      return index % 2 === 0
        ? "linear-gradient(135deg, rgba(18, 18, 18, 0.5) 0%, rgba(63, 191, 255, 0.06) 100%)"
        : "linear-gradient(135deg, #121212 0%, rgba(20, 23, 24, 0.3) 100%)";
    }
    if (pathname === "/csgo") {
      return index % 2 === 0
        ? "linear-gradient(135deg, rgba(18, 18, 18, 0.5) 0%, rgba(65, 214, 63, 0.06) 100%)"
        : "linear-gradient(135deg, #121212 0%, rgba(20, 23, 24, 0.3) 100%)";
    }
    return index % 2 === 0
      ? "linear-gradient(135deg, #0E0E0E 0%, #121C21 100%)"
      : "linear-gradient(135deg, #121212 0%, rgba(20, 23, 24, 0.3) 100%)";
  };

  return (
    <>
      <div className="w-full">
        <div className="[&_table]:border-separate [&_table]:border-spacing-y-2">
          <Table>
            <TableHeader>
              <TableRow className="rounded-[10px] overflow-hidden bg-[#121212] hover:bg-black py-3 border-0">
                <TableHead className="w-[50px] font-extrabold text-gray-400 py-4 px-4 rounded-l-[10px]">
                  Place
                </TableHead>
                <TableHead className="text-gray-400 font-extrabold py-4 px-4">
                  User
                </TableHead>
                <TableHead className="w-[100px] text-gray-400 font-extrabold py-4 px-4">
                  Wagered
                </TableHead>
                <TableHead className="text-gray-400 font-extrabold w-[150px] py-4 px-4 rounded-r-[10px]">
                  Reward
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr]:border-0">
              {data.map((lb, index) => (
                <TableRow
                  key={lb.position}
                  className={cn(
                    "border border-white rounded-[10px] py-4 bg-amber-100 ",
                    "hover:opacity-90 transition-opacity duration-200"
                  )}
                  style={{
                    background: getRowBackground(index),
                  }}
                >
                  <TableCell className="text-gray-400 font-medium rounded-l-lg text-center py-5 px-4">
                    #{lb.position}
                  </TableCell>
                  <TableCell className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={lb.avatar}
                        width={24}
                        height={24}
                        alt={`${lb.name}'s avatar`}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {lb.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-400 font-medium w-[100px] py-5 px-4">
                    ${lb.earning.toLocaleString()}
                  </TableCell>
                  <TableCell
                    className={`text-c-${theme} font-medium w-[150px] rounded-r-lg py-5 px-4`}
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
