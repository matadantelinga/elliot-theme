"use client";

import Container from "../layout/container";
import { LeaderBoardsNav } from "../layout/leader-boards-nav";
import { SectionTitle } from "../layout/section-title";

export const LeaderBoards = () => {
  return (
    <>
      <section>
        <Container>
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-12">
              <SectionTitle title="LEADERBOARDS">
                Play under code{" "}
                <span className="text-c-lightgreen">Elliot</span> on partnered
                sites to compete against other players and climb the
                leaderboards!
              </SectionTitle>
            </div>
            <div className="col-span-12">
              <LeaderBoardsNav />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
