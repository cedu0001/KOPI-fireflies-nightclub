import { cacheLife } from "next/cache";
import CardTest from "./TestCard";

const ListTest = () => {
  return (
    <section>
      <GetEvents />
    </section>
  );
};

export default ListTest;

export async function GetEvents() {
  "use server";

  try {
    const response = await fetch(
      "https://nightclub-api.onrender.com/events",
    );
    const FetchEvents = await response.json();

    return FetchEvents.map((event) => {
      return (
        <CardTest
          key={event.id}
          id={event.id}
          title={event.title}
          imageUrl={event.assets.url}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load events.</p>;
  }
}
