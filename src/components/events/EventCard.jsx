import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EventCard = ({ eventInfo, imageUrl, alt }) => {
	const formattedDate = new Date(eventInfo.date)
		.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
		})
		.toUpperCase();
	return (
		<article>
			<Image
				src={imageUrl}
				width={eventInfo.heroAsset.width}
				height={eventInfo.heroAsset.height}
				alt={alt}
				className="max-h-100 w-auto object-cover"
			/>
			<section>
				<h3 className="!py-0 mt-(--space-2xs)">{eventInfo.title}</h3>
				<div className="flex">
					<h5 className="inline-block !pt-0 !text-highlight-secondary">{formattedDate}</h5>
					<h5 className="inline-block !pt-0 ml-(--space-2xs)">| {eventInfo.location}</h5>
				</div>
				<p>{eventInfo.description}</p>
				<div className="flex justify-end mt-(--space-s) mb-(--space-s)">
					<Link href={`/events/${eventInfo.slug}`}>
						<Button variant="secondary">READ MORE</Button>
					</Link>
				</div>
			</section>
		</article>
	);
};

export default EventCard;
