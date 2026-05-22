import SingleEvent from "@/components/events/single-event"
import CommentForm from "@/components/comments/CommentForm";
import EventComments from "@/components/comments/EventComments";
import Banner from "@/components/Banner";

export default async function SingleEventSite ({ params,}) {
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

  const commentsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${event.id}`,
    {
      cache: "no-store",
    }
  );

  if (!event) {
  return <h1>Event not found</h1>;
}

  const comments =
    await commentsResponse.json();

    return ( 
        <main>
            <Banner title={event.title}/>
            <SingleEvent event={event}/>
            <EventComments comments={comments}/>
            <CommentForm eventId={event.id}/>
        </main>
     );
}
 