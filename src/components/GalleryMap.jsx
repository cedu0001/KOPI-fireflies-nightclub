import { article } from "motion/react-client";
import Gallery from "./Gallery";
import Headline from "./Headline";

const Gallerymap = () => {
  return (
    <article className="full-width ">
      <Headline title="GALLERY" />
      <section className="flex flex-wrap justify-center ml-auto mr-auto mt-24">
        <GetGallery />
      </section>
    </article>
  );
};

export async function GetGallery() {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery`,
    );

    const FetchGallery = await response.json();

    return FetchGallery.map((gallery) => {
      return (
        <Gallery
          key={gallery.id}
          id={gallery.id}
          alt={gallery.asset.alt}
          imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`}
          height={gallery.asset.height}
          width={gallery.asset.width}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load gallery images.</p>;
  }
}

export default Gallerymap;
