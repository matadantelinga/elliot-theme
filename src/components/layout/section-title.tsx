"use client";

import React, { ReactNode } from "react";

interface iSectionTitleProps {
  title: string;
  children: ReactNode;
}
export const SectionTitle: React.FC<iSectionTitleProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="text-center text-white">
        <h2 className="font-black italic uppercase text-6xl mb-4">{title}</h2>
        <div className="max-w-md m-auto">
          <p className="text-center font-bold">{children}</p>
        </div>
      </div>
    </>
  );
};
