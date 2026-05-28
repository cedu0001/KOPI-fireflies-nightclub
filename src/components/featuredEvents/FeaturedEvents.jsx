import FeaturedEventsClient from "./FeaturedEventsClient";
import Headline from "../Headline";
import { cacheLife } from "next/cache";

export async function FeaturedEvents () {
	"use cache";
	cacheLife("hours");
	try {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_limit=6`);

	const data = await response.json();
	return (
		<section className="flex flex-col justify-center items-center gap-(--space-m) featured-events-bg full-width my-5">
			<Headline title="FEATURED EVENTS" />
			<FeaturedEventsClient events={data} />
		</section>
	);
	}
	catch (error) {
		console.error(error);

		return <p>Failed to load Featured Events...</p>;
	}
};
