import { LeaderBoards } from "@/components/home/leader-boards";
import { MainSection } from "@/components/home/main-section";
import { SocialButtons } from "@/components/home/social-buttons";

export default function Home() {
  return (
    <>
      <MainSection />
      <LeaderBoards />
      <SocialButtons />
    </>
  );
}
