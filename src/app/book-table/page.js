import Banner from "@/components/Banner";
import TableBookingForm from "@/components/TableBookingForm";

export default async function BookingPage({
  searchParams,
}) {
const resolvedSearchParams =
    await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    {
      cache: "no-store",
    }
  );

  const events = await response.json();

  const selectedEvent =
    resolvedSearchParams.event;

    return ( 
        <main>
            <Banner title="BOOK TABLE"/>
            <TableBookingForm
            events={events}
        selectedEvent={selectedEvent}/>
        </main>
     );
}
