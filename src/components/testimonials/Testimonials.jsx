import { cacheLife } from "next/cache";
import TestimonialsClient from "./TestimonialsClient";

/* Til Testimonials, TestimonialsClient og TestimonialItem er der blevet anvendt AI hjælp,
til bedre funktionalitet og struktur, da der var problemer med slider funktionaliteten og 
opsætningen af data under TestimonialsClient.jsx */

export default async function Testimonials () {
	"use cache";
	cacheLife("hours");
	
	

		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);

		const data = await response.json();

		return <TestimonialsClient data={data} />;
	
};