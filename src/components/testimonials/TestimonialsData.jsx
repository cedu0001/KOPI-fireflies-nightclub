import { cacheLife } from "next/cache";

export async function getTestimonialsData() {
	"use cache";
	cacheLife("hours");
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
