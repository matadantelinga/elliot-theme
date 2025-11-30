import React, { ReactNode } from "react";
import Container from "./container";
interface iMainBgProps {
  id: string;
  children: ReactNode;
}
export const MainBg: React.FC<iMainBgProps> = ({ id, children }) => {
  return (
    <section id={id}>
      <Container>
        <div className="grid grid-cols-12 gap-4 py-4 md:py-16 items-center">
          <div className="col-span-12">{children}</div>
        </div>
      </Container>
    </section>
  );
};
