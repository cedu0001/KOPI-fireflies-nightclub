"use client";

import { useState } from "react";

import Gallery from "./Gallery";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

const GalleryClient = ({ galleryData }) => {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  return (
    <>
      <section className="mt-24 flex flex-wrap justify-center">
        {galleryData.map((gallery, index) => (
          <Gallery
            key={gallery.id}
            gallery={gallery}
            width={gallery.asset.width}
            height={gallery.asset.height}
            alt={gallery.asset.alt}
            imageUrl={gallery.imageUrl}
            clicked={() =>
              setSelectedIndex(index)
            }
          />
        ))}
      </section>
      {/* AI har assisteret med at skrive denne kode. Især i forhold til at det billede man klikker på er startpunktet for det billede der vises i dialogen. */}
      {selectedIndex !== null && (
        <Dialog
          open={selectedIndex !== null}
          onOpenChange={() =>
            setSelectedIndex(null)
          }
        >
          <DialogContent className="bg-primary h-fit w-fit !max-w-[95vw] border-none">
            <Button
              variant="square_btn"
              className="absolute top-1/2 left-[-20px] -translate-y-1/2"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0
                    ? galleryData.length - 1
                    : prev - 1,
                )
              }
            >
              <BiSolidLeftArrow color="white" />
            </Button>

            <Button
              variant="square_btn"
              className="absolute top-1/2 right-[-20px] -translate-y-1/2"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === galleryData.length - 1
                    ? 0
                    : prev + 1,
                )
              }
            >
              <BiSolidRightArrow color="white" />
            </Button>

            <section className="flex flex-col">
              <Image
                src={
                  galleryData[selectedIndex]
                    .imageUrl
                }
                width={
                  galleryData[selectedIndex].asset
                    .width
                }
                height={
                  galleryData[selectedIndex].asset
                    .height
                }
                alt={
                  galleryData[selectedIndex].asset
                    .alt
                }
                className="h-auto max-h-[75vh] w-auto object-contain"
              />

              <div>
                <h4 className="!py-0">
                  {
                    galleryData[selectedIndex]
                      .title
                  }
                </h4>

                <p className="max-w-prose">
                  {
                    galleryData[selectedIndex]
                      .description
                  }
                </p>
              </div>
            </section>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default GalleryClient;
