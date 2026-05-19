import Banner from "@/components/Banner";
import BookingClient from "@/components/TableBookingClient";

export default async function BookingPage({
  searchParams,
}) {

  const resolvedSearchParams =
    await searchParams;

  const eventsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    {
      cache: "no-store",
    }
  );

  const events =
    await eventsResponse.json();

  const tablesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tables`,
    {
      cache: "no-store",
    }
  );

  const tables =
    await tablesResponse.json();

  const reservationsResponse =
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
      {
        cache: "no-store",
      }
    );

  const reservations =
    await reservationsResponse.json();

  return (
    <main>

      <Banner title="BOOK TABLE" />

      <BookingClient
        tables={tables}
        reservations={reservations}
        events={events}
        selectedEvent={
          resolvedSearchParams.event
        }
      />

    </main>
  );
}