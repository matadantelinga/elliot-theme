import Container from "@/components/ui/container";
import BannerSlider from "./_components/banner-slider";
import FeatureSection from "./_components/feature-section";
import TitleSection from "./_components/title-section";
import GamesSection from "./_components/games-section";
import SearchSection from "./_components/search-section";
import PaginationSection from "./_components/pagination-section";

export default function Main() {
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
