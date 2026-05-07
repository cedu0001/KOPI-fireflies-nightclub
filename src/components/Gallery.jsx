import Headline from "./Headline";
import Image from "next/image";

const Gallery = () => {
  return (
    <article className="full-width ">
      <Headline title="GALLERY" />
      <section className="flex flex-wrap justify-center ml-auto mr-auto mt-24">
        <Image
          src="/assets/content-img/gallery1_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 1"
          className="w-auto object-cover h-[300px]"
        />
        <Image
          src="/assets/content-img/gallery2_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 2"
          className="w-auto object-cover h-[300px]"
        />
        {/* <Image
          src="/assets/content-img/gallery3_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 3"
          className="w-auto object-cover h-[300px]"
        /> */}

        <Image
          src="/assets/content-img/gallery5_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 5"
          className="w-auto object-cover h-[300px]"
        />
        <Image
          src="/assets/content-img/gallery6_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 6"
          className="w-auto object-cover h-[300px]"
        />
        <Image
          src="/assets/content-img/gallery7_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 7"
          className="w-auto object-cover h-[300px]"
        />
        <Image
          src="/assets/content-img/gallery9_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 9"
          className="w-auto object-cover h-[300px]"
        />
        {/* <Image
          src="/assets/content-img/gallery10_big.jpg"
          width="400"
          height="400"
          alt="Gallery image 10"
          className="w-auto object-cover h-[250px]"
        /> */}
      </section>
    </article>
  );
};

export default Gallery;
