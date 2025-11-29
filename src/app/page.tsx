import Container from "@/components/layout/container";
import BannerSlider from "../components/layout/banner-slider";
import FeatureSection from "../components/layout/feature-section";
import GamesSection from "../components/layout/games-section";
import PaginationSection from "../components/layout/pagination-section";
import SearchSection from "../components/layout/search-section";
import TitleSection from "../components/layout/title-section";

export default function Home() {
  return (
    <Container>
      <BannerSlider />
      <FeatureSection />
      <TitleSection title="Most popular games" subTitle="ALL GAMES" />
      <SearchSection />
      <GamesSection />
      <PaginationSection />
    </Container>
  );
}
