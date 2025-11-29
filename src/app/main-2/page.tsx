import Container from "@/components/layout/container";
import BannerSlider from "@/components/layout/banner-slider";
import FeatureSection from "@/components/layout/feature-section";
import GamesSection from "@/components/layout/games-section";
import PaginationSection from "@/components/layout/pagination-section";
import TitleSection from "@/components/layout/title-section";
import { UpcomingGames } from "@/components/home/upcoming-games";
import SearchSection from "./_components/search-section";

export default function Main() {
  return (
    <Container>
      <BannerSlider />
      <FeatureSection />
      <TitleSection
        title="ANNOUNCEMENTS"
        subTitle="UPCOMING GAMES"
        withDivider
      />
      <UpcomingGames />
      <TitleSection
        title="Most popular games"
        subTitle="ALL GAMES"
        withDivider
      />
      <SearchSection />
      <GamesSection />
      <PaginationSection />
    </Container>
  );
}
