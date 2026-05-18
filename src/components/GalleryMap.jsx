import GalleryClient from "./GalleryClient";
import Headline from "./Headline";

const GalleryMap = async () => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=6`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  const formattedData = data.map((gallery) => ({
    ...gallery,
    imageUrl:
      `${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`,
  }));

  return (
    <article className="full-width">
      <Headline title="GALLERY" />

      <GalleryClient galleryData={formattedData} />
    </article>
  );
};

export default GalleryMap;