import Banner from "@/components/Banner";
import EventMap from "@/components/events/EventMap";
import GlobalNav from "@/components/globalnavigation/GlobalNav";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export const metadata = {
	title: "NightClub | Events",
	description: "See upcoming events",
};

const EventPage = () => {
	return (
		<main>
			<GlobalNav />
			<Banner title="EVENTS" />
			<Suspense fallback={<Loading />}>
				<EventMap />
			</Suspense>
		</main>
	);
};

export default EventPage;
