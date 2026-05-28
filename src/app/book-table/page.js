import Banner from "@/components/Banner";
import BookingSystem from "@/components/TableBooking/TableBookingServer";
import { Suspense } from "react";
import TableStatus from "@/components/TableBooking/TableBookingAvailability";
import GlobalNav from "@/components/globalnavigation/GlobalNav";
import Loading from "@/components/Loading";

export const metadata = {
	title: "NightClub | Book Table",
	description: "Book a table for our events!",
};

export default async function BookingPage({ searchParams }) {
	return (
		<main>
			<GlobalNav />
			<Banner title="BOOK TABLE" />
			<TableStatus />
			<Suspense fallback={<Loading />}>
				<BookingSystem searchParams={searchParams} />
			</Suspense>
		</main>
	);
}
