import BannerSlider from "@/components/layout/banner-slider";
import Container from "@/components/layout/container";
import FeatureSection from "@/components/layout/feature-section";
import GamesSection from "@/components/layout/games-section";
import PaginationSection from "@/components/layout/pagination-section";
import SearchSection from "@/components/layout/search-section";
import TitleSection from "@/components/layout/title-section";

const Main = () => {
  return (
    <>
      <Container>
        <BannerSlider />
        <FeatureSection />
        <TitleSection title="Most popular games" subTitle="ALL GAMES" />
        <SearchSection />
        <GamesSection />
        <PaginationSection />
      </Container>
    </>
  );
};

export default Main;
