import SingleEventServer from "@/components/events/SingleEventServer";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
	const { slug } = await params;

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
	const data = await response.json();

	const event = data.find((event) => event.slug === slug);
	return {
		title: `NightClub | ${event.title}`,
	};
}

export default async function SingleEventSite({ params }) {
	return (
		<Suspense fallback="Loading event...">
			<SingleEventServer params={params} />
		</Suspense>
	);
}
