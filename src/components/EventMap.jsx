"use client";

import { useEffect, useState } from "react";
import EventCard from "./EventCard";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const EVENTS_PER_PAGE = 3;

const EventMap = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events`
        );

        const data = await response.json();

        setEvents(data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchEvents();
  }, []);

  // pagination math
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;

  const currentEvents = events.slice(startIndex, endIndex);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

  return (
    <article className="full-width">

        {currentEvents.map((event, index) => {

          // global index
          const actualIndex = startIndex + index;

          return (
            <div
              key={event.id}
              className={
                actualIndex % 2 === 0
                  ? "full-right"
                  : "full-left"
              }
            >
              <EventCard
                eventInfo={event}
                imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
                alt={event.heroAsset.alt}
              />
            </div>
          );
        })}


      <Pagination className="mt-20">

        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();

                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();

                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            />
          </PaginationItem>

        </PaginationContent>

      </Pagination>
    </article>
  );
};

export default EventMap;
/* "use client"
import { useEffect } from "react";
import EventCard from "./EventCard";

const EventMap = () => {
    useEffect(() => {
        async function GetEvents() {
            try {
                const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );
    const FetchEvents = await response.json();
    
            }
        }
    })
  return (
    <section className="flex flex-wrap gap-4">
      <GetEvents />
    </section>
  );
};

export default EventMap;

export async function GetEvents() {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const FetchEvents = await response.json();

    return FetchEvents.map((event) => {
      return (
        <EventCard
          eventInfo={event}
          key={event.id}
          id={event.id}
          imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
          alt={event.asset.alt}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load events.</p>;
  }
} */