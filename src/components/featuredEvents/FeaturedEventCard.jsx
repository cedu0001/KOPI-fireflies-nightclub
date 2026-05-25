"use client";

import Image from "next/image";
import Link from "next/link";
import "@/app/gallery.css";
import { Button } from "../ui/button";

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
    
      <Link href={`/book-table?event=${event.id}`}>
    <motion.section
  className="image-hover relative"
  initial="rest"
  whileHover="hover"
  animate="rest"
>

  <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
    width={event.asset.width}
    height={event.asset.height}
    alt={event.asset.alt}
    className="
      max-w-100
      object-cover
    "
  />

  <motion.div
    variants={{
      rest: {
        opacity: 0,
      },
      hover: {
        opacity: 1,
      },
    }}
    transition={{
      duration: 0.3,
    }}
    className="
      absolute inset-0
      flex flex-col justify-between
    "
  >

    <div className="flex flex-1 items-center justify-center">


        <Button variant="highlight">
          BOOK NOW
        </Button>


    </div>

    <motion.div
      variants={{
        rest: {
          y: 30,
          opacity: 0,
        },
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      bg-primary/70
      "
      >

      <p>
        {event.excerpt}
      </p>

    </motion.div>

  </motion.div>

</motion.section>
      </Link>

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