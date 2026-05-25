import Image from "next/image";
import { GiMusicalNotes } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/app/gallery.css";

export default function EventSinglePage({ event }) {
	const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
	});

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
		<article className="full-width">
			<section className="relative">
				<Image
					src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
					width={event.heroAsset.width}
					height={event.heroAsset.height}
					alt={event.heroAsset.alt}
					className="w-full relative z-0 object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/20 to-primary" />
			</section>
			<div className="max-w-[1200px] mx-auto px-(--space-s)">
				<section className="flex relative justify-between z-20 -mt-28 mb-(--space-xl)">
					<div>
						<h1 className="inline-block z-30 !py-0 mr-(--space-s)">{event.title}</h1>
						<h2 className="inline-block z-30 !py-0  !text-highlight-secondary">{formattedDate}</h2>
						<div>
							<p className="inline">Doors open: {formattedDoorsOpen}</p>
							<p className="inline ml-(--space-s)">Start: {formattedEventstart}</p>
							<p className="inline ml-(--space-s)">Location: {event.location}</p>
						</div>
					</div>
					<div>
						<h3 className="inline-block !text-highlight-secondary">{event.category}</h3>
						<h3 className="inline-block ml-(--space-s)">{event.ageLimit}</h3>
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

								<ul className="mt-(--space-2xs) flex flex-col gap-2">
									{event.lineup.map((artist, index) => (
										<li key={index} className="flex gap-(--space-s) items-center">
											<GiMusicalNotes color="white" />
											{artist}
										</li>
									))}
								</ul>
							</div>
							<div className="mb-(--space-xl) mt-(--space-m)">
								<p>The schedule:</p>

								<ul className="mt-(--space-2xs) flex flex-col gap-(--space-2xs)">
									{event.schedule.map((item, index) => (
										<li key={index} className="flex gap-(--space-s)">
											<span className="text-highlight-secondary">{item.time}</span>

											<span>{item.label}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>
				</article>
				<section className="flex justify-end my-(--space-s) items-center">
					<h3 className="!py-0 mr-(--space-s)">{event.price}</h3>
					<Link href={`/book-table?event=${event.id}`}>
						<Button variant="highlight">BOOK NOW</Button>
					</Link>
				</section>
			</div>
		</article>
	);
}
