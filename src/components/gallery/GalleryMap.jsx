import GalleryClient from "./GalleryClient";
import Headline from "@/components/Headline";
import { cacheLife } from "next/cache";

async function GalleryMap () {

	"use cache";
	cacheLife("hours");
	try {

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=6`);

	const data = await response.json();

	const formattedData = data.map((gallery) => ({
		...gallery,
		imageUrl: `${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`,
	}));

	return (
		<article className="full-width my-22">
			<Headline title="NIGHT CLUB GALLERY" />

			<GalleryClient galleryData={formattedData} />
		</article>
	);
	} catch (error) {
		console.error(error);

		return <p>Failed to load Gallery...</p>;
	}
};

export default GalleryMap;
