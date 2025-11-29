import Container from "@/components/ui/container";
import UpcomingGamesSection from "./_components/upcoming-games-section";
import BannerSlider from "../main/_components/banner-slider";
import FeatureSection from "../main/_components/feature-section";
import TitleSection from "../main/_components/title-section";
import PaginationSection from "../main/_components/pagination-section";
import GamesSection from "../main/_components/games-section";
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
            <UpcomingGamesSection />
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
