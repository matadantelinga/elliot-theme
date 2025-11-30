import { LeaderBoards } from "@/components/home/leader-boards";
import { MainSection } from "@/components/home/main-section";
import Container from "@/components/layout/container";
import { SectionTitle } from "@/components/layout/section-title";

export default function Home() {
  return (
    <>
      <MainSection />
      <LeaderBoards />
      <section>
        <Container>
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-12">
              <SectionTitle title="SOCIALS">
                Follow me on my socials to{" "}
                <span className="text-c-lightgreen">stay up to date</span> with
                streams, leaderboards, giveaways & more.
              </SectionTitle>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
