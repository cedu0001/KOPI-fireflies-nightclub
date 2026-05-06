import { cacheLife } from "next/cache";
import CardTest from "./TestCard";

const ListTest = () => {
  return (
    <section className="flex flex-wrap gap-4">
      <GetEvents />
    </section>
  );
};

export default ListTest;

export async function GetEvents() {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const FetchEvents = await response.json();

    return FetchEvents.map((event) => {
      return (
        <CardTest
          key={event.id}
          id={event.id}
          title={event.title}
          imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${event.asset?.url}`}
          alt={event.asset.alt}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load events.</p>;
  }
}
