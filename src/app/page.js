import GlobalNav from "@/components/globalnavigation/GlobalNav";
import Newsletter from "@/components/newsletter/Newsletter";
import Testimonials from "@/components/testimonials/Testimonials";
import MobileBlog from "@/components/MobileBlog";
import HeroIndex from "@/components/HeroIndex";
import FeaturedEvents from "@/components/featuredEvents/FeaturedEvents";

import LatestVideo from "@/components/latest_video/LatestVideo";
import NightClubTrack from "@/components/night_club_track/NightClubTrack";
import WelcomeIndex from "@/components/WelcomeIndex";
import Gallery from "@/components/gallery/GalleryMap";

export default async function Home() {
	return (
		<main>
			<HeroIndex />
			<GlobalNav/>
			<WelcomeIndex />
			<FeaturedEvents />
			<Gallery />
			<NightClubTrack />
			<LatestVideo />
			<Testimonials />
			<MobileBlog />
			<Newsletter />
		</main>
	);
}
