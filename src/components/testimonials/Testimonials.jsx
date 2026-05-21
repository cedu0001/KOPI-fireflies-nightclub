import TestimonialsClient from "./TestimonialsClient";

const Testimonials = async () => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);

		const data = await response.json();

		return <TestimonialsClient data={data} />;
	} catch (error) {
		console.error(error);

		return <p>Failed to load testimonials...</p>;
	}
};

export default Testimonials;
