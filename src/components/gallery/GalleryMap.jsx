import GalleryClient from "./GalleryClient";
import Headline from "@/components/Headline";
import { cacheLife } from "next/cache";

const GalleryMap = async () => {
  "use cache";
  cacheLife("hours");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=6`,
  );

  const data = await response.json();

  const formattedData = data.map((gallery) => ({
    ...gallery,
    imageUrl:
      `${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`,
  }));

  return (
    <article className="full-width mt-22">
      <Headline title="GALLERY" />

      <GalleryClient galleryData={formattedData} />
    </article>
  );
};

export default GalleryMap;