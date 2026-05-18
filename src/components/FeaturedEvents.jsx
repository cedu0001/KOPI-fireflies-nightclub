import FeaturedEventsClient from "./FeaturedEventsClient";

const FeaturedEvents = async () => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events?_limit=4`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  const featuredEvents = data.filter(
    (event) => event.isFeatured
  );

  return (
    <FeaturedEventsClient
      events={featuredEvents}
    />
  );
};

export default FeaturedEvents;