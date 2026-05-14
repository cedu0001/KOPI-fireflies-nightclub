import Image from "next/image";
import { Button } from "@/components/ui/button";
import TesterList from "@/components/TesterList";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/testimonials/Testimonials";
import MobileBlog from "@/components/MobileBlog";
import HeroIndex from "@/components/HeroIndex";

import { getTestimonialsData } from "@/components/testimonials/TestimonialsData";

export default async function Home() {
	const data = await getTestimonialsData();
	return (
		<main>
			<HeroIndex />
			<h1 className="text-5xl font-bold">Welcome to Fireflies Nightclub</h1>
			<TesterList />
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Experience the best nightlife in town with us!</p>
			<section>
				<Button variant="default">Click me</Button>
				<Button variant="secondary" className="block mt-4">
					Click me too
				</Button>
				<Button variant="highlight" className="block mt-4 ">
					Highlight Button
				</Button>
			</section>
			<section className="full-right">
				<div>
					<h2>Vi tester lige en ny gang her med den højre side</h2>
					<p>
						Lorem Ipsum is placeholder dummy text used in printing, web design, and graphic design to demonstrate
						visual layout without relying on meaningful content. Derived from Cicero’s 45 BC text de Finibus
						Bonorum et Malorum, it has been the industry standard since the 1500s to avoid distractions while
						evaluating layouts.Key Facts About Lorem Ipsum:Origin: It is derived from sections 1.10.32 and
						1.10.33 of Cicero's "de Finibus Bonorum et Malorum" ("The Extremes of Good and Evil").
					</p>
				</div>
			</section>
			<h3 className="full-left">
				Tester venstre side, jeg håber du også virker! Men det for jeg jo heldigvis at se lige om lidt hihi
			</h3>
			<Testimonials data={data} />
			<MobileBlog></MobileBlog>
			<Newsletter></Newsletter>
		</main>
	);
}
