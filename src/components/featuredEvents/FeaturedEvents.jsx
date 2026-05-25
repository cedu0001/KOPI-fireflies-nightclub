import FeaturedEventsClient from "./FeaturedEventsClient";
import Headline from "../Headline";
import { cacheLife } from "next/cache";

const FeaturedEvents = async () => {
	"use cache";
	cacheLife("hours");
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_limit=6`);

	const data = await response.json();

	return (
		<section className="flex flex-col justify-center items-center gap-6 featured-events-bg full-width my-5">
			<Headline title="FEATURED EVENTS" />
			<FeaturedEventsClient events={data} />
		</section>
	);
};

export default FeaturedEvents;
