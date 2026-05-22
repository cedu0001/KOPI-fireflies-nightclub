import EventPagination from "@/components/events/EventPagination";

const EventMap = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    {
      cache: "no-store",
    }
  );

  const events = await response.json();

  return (
    <EventPagination events={events} />
  );
};

export default EventMap;