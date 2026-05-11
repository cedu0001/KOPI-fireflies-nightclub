import Image from "next/image";
import { Button } from "@/components/ui/button";

const EventCard = ({eventInfo, imageUrl, alt}) => {
    return ( 
        <article>
            <Image
            src={imageUrl}
            width={eventInfo.heroAsset.width}
            height={eventInfo.heroAsset.height}
            alt={alt}
            className="max-h-100 w-auto object-cover"/>
            <section>
                <h3 className="!py-0 mt-2">{eventInfo.title}</h3>
                <div className="flex"><h5 className="inline-block !pt-0 !text-highlight-secondary">{eventInfo.date}</h5><h5 className="inline-block !pt-0 ml-2">| {eventInfo.location}</h5></div>
                <p>{eventInfo.description}</p>
                <div className="flex justify-end mt-4">
                <Button variant="secondary" >READ MORE</Button>
                </div>
            </section>
        </article>
     );
}
 
export default EventCard;