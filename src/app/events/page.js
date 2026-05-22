import Banner from "@/components/Banner";
import EventMap from "@/components/events/EventMap";
import GlobalNav from "@/components/globalnavigation/GlobalNav";
import { Suspense } from "react";

const EventPage = () => {
    return ( 
        <main>
            <GlobalNav/>
            <Banner title="EVENTS"/>
            <Suspense fallback="Loading...">
            <EventMap/>
            </Suspense>
            
        </main>
     );
}
 
export default EventPage;