"use client";
import Image from "next/image";
import Link from "next/link";

export const MainNav = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-6 justify-center">
          <li className="p-1 pr-2">
            <Link
              className="text-white flex items-center gap-2 font-bold uppercase hover:text-gray-300 ease-in"
              href={"/"}
            >
              <Image src={"icons/home.svg"} alt="home" width={16} height={16} />{" "}
              HOME
            </Link>
          </li>
          <li className="p-1 pr-2">
            <Link
              className="text-white flex items-center gap-2 font-bold uppercase hover:text-gray-300 ease-in"
              href={"/shuffle"}
            >
              <Image
                src={"icons/leader.svg"}
                alt="leader"
                width={16}
                height={16}
              />{" "}
              Leaderboard
            </Link>
          </li>
          <li className="p-1 pr-2">
            <Link
              className="text-white flex items-center gap-2 font-bold uppercase hover:text-gray-300 ease-in"
              href={"/milestones"}
            >
              <Image
                src={"icons/milestones.svg"}
                alt="leader"
                width={16}
                height={16}
              />{" "}
              MILESTONES
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
