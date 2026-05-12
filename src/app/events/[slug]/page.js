import Image from "next/image";
import { GiMusicalNotes } from "react-icons/gi";
import { Button } from "@/components/ui/button";

export default async function EventSinglePage({ params }) {

  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  const event = data.find(
    (event) => event.slug === slug
  );

  if (!event) {
    return <h1>Event not found</h1>;
  }
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

const formattedEventstart = Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
}).format(new Date(event.date));

  return (
    <main>
        <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
        width={event.heroAsset.width}
        height={event.heroAsset.height}
        alt={event.heroAsset.alt}
        className="full-width w-screen relative"
      />
      <section className="flex justify-between">
        <div>
      <h1 className="inline-block !py-0">{event.title}</h1>
      <h2 className="inline-block !py-0 ml-4 !text-highlight-secondary">{formattedDate}</h2>
      <div>
    <p className="inline">Doors open: {formattedDoorsOpen}</p><p className="inline ml-4">Start: {formattedEventstart}</p><p className="inline ml-4">Location: {event.location}</p>
    </div>
      </div>
      <div>
        <h3 className="inline-block !text-highlight-secondary">{event.category}</h3>
        <h3 className="inline-block ml-4">{event.ageLimit}</h3>
      </div>
      </section>
      <article className="flex justify-between">
        <section className="max-w-200">
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
      <li key={index} className="flex gap-4">
        <GiMusicalNotes color="white"/>
        {artist}
      </li>
    ))}
  </ul>
</div>
       <div>
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
      <section className="flex justify-end my-4">
        <h3 className="!py-0 mr-4">{event.price}</h3>
        <Button variant="highlight">BOOK NOW</Button>
      </section>
    </main>
  );
}