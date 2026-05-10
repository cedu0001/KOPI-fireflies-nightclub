"use client"
import Gallery from "./Gallery";
import Headline from "./Headline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Dialog, DialogContent } from "./ui/dialog";


const Gallerymap = () => {
useEffect(() => {
  async function fetchGallery() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=6`
      );

      const data = await response.json();

      const formattedData = data.map((gallery) => ({
        ...gallery,
        imageUrl:
          `${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`,
      }));

      setGalleryData(formattedData);

    } catch (error) {
      console.error(error);
    }
  }

  fetchGallery();
}, []);

  const [galleryData, setGalleryData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  return (
    <article className="full-width ">
      <Headline title="GALLERY" />
      <section className="flex flex-wrap justify-center ml-auto mr-auto mt-24">
        

  {galleryData.map((gallery, index) => (
    <Gallery
      key={gallery.id}
      gallery={gallery}
      width={gallery.asset.width}
      height={gallery.asset.height}
      alt={gallery.asset.alt}
imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`}
      clicked={() => setSelectedIndex(index)}
    />
  ))}
      </section>

      {selectedIndex !== null && (
  <Dialog
    open={selectedIndex !== null}
    onOpenChange={() => setSelectedIndex(null)}
  >
    <DialogContent className="bg-primary w-fit h-fit !max-w-[95vw] border-none">

      <Button
  variant="square_btn"
  className="absolute left-[-20px] top-1/2 -translate-y-1/2"
  onClick={() =>
    setSelectedIndex((prev) =>
      prev === 0
        ? galleryData.length - 1
        : prev - 1
    )
  }
>
  <BiSolidLeftArrow color="white" />
</Button>

      <Button
  variant="square_btn"
  className="absolute right-[-20px] top-1/2 -translate-y-1/2"
  onClick={() =>
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1
        ? 0
        : prev + 1
    )
  }
>
  <BiSolidRightArrow color="white" />
</Button>

      <section className="flex flex-col">

        <Image
          src={galleryData[selectedIndex].imageUrl}
          width={galleryData[selectedIndex].asset.width}
          height={galleryData[selectedIndex].asset.height}
          alt={galleryData[selectedIndex].asset.alt}
          className="h-auto max-h-[75vh] w-auto object-contain"
        />

        <div>
          <h4 className="!py-0">
            {galleryData[selectedIndex].title}
          </h4>

          <p className="max-w-prose">
            {galleryData[selectedIndex].description}
          </p>
        </div>

      </section>
    </DialogContent>
  </Dialog>
)}
    </article>
  );
};

export default Gallerymap;

