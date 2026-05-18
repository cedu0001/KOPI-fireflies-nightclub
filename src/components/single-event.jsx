import Image from "next/image";
import { GiMusicalNotes } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import "@/app/gallery.css";

export default function EventSinglePage({ event }) {

  const formattedDate = new Date(event.date).toLocaleDateString(
  "en-GB",
  {
    day: "2-digit",
    month: "short",
  })

  const formattedDoorsOpen = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
}).format(new Date(event.doorsOpen));

const formattedEventstart = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
}).format(new Date(event.date));

  return (
    <article>
        <section className="relative full-width">
        <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
        width={event.heroAsset.width}
        height={event.heroAsset.height}
        alt={event.heroAsset.alt}
        className="full-width w-screen relative z-0"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/20 to-primary"/>
      </section>
      <section className="flex relative justify-between z-20 -mt-28 mb-12 col-2">
        <div>
      <h1 className="inline-block z-30 !py-0 mr-4">{event.title}</h1>
      <h2 className="inline-block z-30 !py-0  !text-highlight-secondary">{formattedDate}</h2>
      <div>
    <p className="inline">Doors open: {formattedDoorsOpen}</p><p className="inline ml-4">Start: {formattedEventstart}</p><p className="inline ml-4">Location: {event.location}</p>
    </div>
      </div>
      <div>
        <h3 className="inline-block !text-highlight-secondary">{event.category}</h3>
        <h3 className="inline-block ml-4">{event.ageLimit}</h3>
      </div>
      </section>
      <article className="event-layout">
        <section className="max-w-170">
        <div>
            <p className="font-medium">{event.excerpt}</p>
      <p>{event.content}</p>
      </div>
      </section>
      <section>
      <div className="flex flex-col">
        <div>
  <p>This evenings lineup consists of:</p>

  <ul className="mt-2 flex flex-col gap-2">
    {event.lineup.map((artist, index) => (
      <li key={index} className="flex gap-4 items-center">
        <GiMusicalNotes color="white"/>
        {artist}
      </li>
    ))}
  </ul>
</div>
       <div className="mb-12 mt-6">
  <p>The schedule:</p>

  <ul className="mt-2 flex flex-col gap-2">
    {event.schedule.map((item, index) => (
      <li
        key={index}
        className="flex gap-4"
      >
        <span className="text-highlight-secondary">
          {item.time}
        </span>

        <span>
          {item.label}
        </span>
      </li>
    ))}
  </ul>
</div>
      </div>
      </section>
      </article>
      <section className="flex justify-end my-4 items-center">
        <h3 className="!py-0 mr-4">{event.price}</h3>
        <Button variant="highlight">BOOK NOW</Button>
      </section>
    </article>
  );
}