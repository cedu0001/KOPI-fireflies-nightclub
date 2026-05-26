import SingleEventServer from "@/components/events/SingleEventServer";
import { Suspense } from "react";

export const metadata = {
	title: "NightClub",
};

export default async function SingleEventSite({ params }) {
	return (
		<Suspense fallback="Loading event...">
			<SingleEventServer params={params} />
		</Suspense>
	);
}
