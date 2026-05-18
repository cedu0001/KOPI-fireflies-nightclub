import FeaturedEventsClient from "./FeaturedEventsClient";

const FeaturedEvents = async () => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events?_limit=4`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();


  return (
    <FeaturedEventsClient
      events={data}
    />
  );
};

export default FeaturedEvents;