import Banner from "@/components/Banner";
import EventMap from "@/components/events/EventMap";
import { Suspense } from "react";

const EventPage = () => {
    return ( 
        <main>
            <Banner title="EVENTS"/>
            <Suspense fallback="Loading...">
            <EventMap/>
            </Suspense>
            
        </main>
     );
}
 
export default EventPage;