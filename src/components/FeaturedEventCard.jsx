"use client";

import Image from "next/image";
import Link from "next/link";
import "@/app/gallery.css";

import { motion } from "framer-motion";

const FeaturedEventCard = ({ event }) => {

  const formattedDate =
    new Date(event.date)
      .toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
        }
      )
      .toUpperCase();

  return (
    <article>
    

      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
        width={event.asset.width}
        height={event.asset.height}
        alt={event.asset.alt}
        className="
          max-w-100
          object-cover
          image-hover
        "
      />

      <section className="bg-highlight-primary">

        <Link
          href={`/events/${event.slug}`}
          className="
            flex ml-4 justify-between mr-4 items-center
          "
        >

        <p className="">
          {event.title}
        </p>
        <p className="text-highlight-secondary">
          {formattedDate}
        </p>

          
        </Link>

      </section>
    </article>
  );
};

export default FeaturedEventCard;