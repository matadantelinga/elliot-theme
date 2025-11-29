"use client";
import Link from "next/link";

export const FooterNav = () => {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center md:divide-x md:divide-gray-500 gap-2">
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            All Games
          </Link>
        </li>
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            About
          </Link>
        </li>
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            Affiliates
          </Link>
        </li>
        <hr className="block md:hidden w-full border border-gray-400 scale-y-[0.3] origin-center" />
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            Operator
          </Link>
        </li>
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            FAQ
          </Link>
        </li>
        <li className="pl-6 pr-6">
          <Link
            className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
            href={"#"}
          >
            Career
          </Link>
        </li>
      </ul>
    </>
  );
};
