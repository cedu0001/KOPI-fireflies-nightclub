import FeaturedEventsClient from "./FeaturedEventsClient";
import Headline from "./Headline";

const FeaturedEvents = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_limit=4`, {
		cache: "no-store",
	});

	const data = await response.json();

	return (
		<section className="flex flex-col gap-6">
			<Headline title="FEATURED EVENTS" />
			<FeaturedEventsClient events={data} />
		</section>
	);
};

export default FeaturedEvents;
