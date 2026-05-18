"use client";

import FeaturedEventCard from "./FeaturedEventCard";

const FeaturedEventsClient = ({ events }) => {

  return (
    <section className="gap-4 mr-auto ml-auto">

      {events.map((event) => (
        <section className=" max-w-[400px]">
        <FeaturedEventCard
          key={event.id}
          event={event}
        />
        </section>
      ))}

    </section>
  );
};

export default FeaturedEventsClient;