import Image from "next/image";
import { Button } from "@/components/ui/button";
import TesterList from "@/components/TesterList";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/testimonials/Testimonials";
import MobileBlog from "@/components/MobileBlog";
import HeroIndex from "@/components/HeroIndex";
import FeaturedEvents from "@/components/FeaturedEvents";

import LatestVideo from "@/components/latest_video/LatestVideo";
import NightClubTrack from "@/components/night_club_track/NightClubTrack";
import WelcomeIndex from "@/components/WelcomeIndex";
import Gallery from "@/components/GalleryMap";

import { Suspense } from "react";

export default async function Home() {
	return (
		<main>
			<HeroIndex />
			<WelcomeIndex />
			<FeaturedEvents />
			<Gallery/>
			<NightClubTrack />
			<LatestVideo/>
			<Suspense fallback={<p>Loading testimonials...</p>}>
				<Testimonials />
			</Suspense>
			<MobileBlog/>
			<Newsletter/>
		</main>
	);
}
