"use client";

import { useState } from "react";
import EventCard from "@/components/events/EventCard";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const EVENTS_PER_PAGE = 3;

const EventPagination = ({ events }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;

	const endIndex = startIndex + EVENTS_PER_PAGE;

	const currentEvents = events.slice(startIndex, endIndex);

	const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

	return (
		<article className="full-width">
			{currentEvents.map((event, index) => {
				const actualIndex = startIndex + index;

				return (
					<div key={event.id} className={actualIndex % 2 === 0 ? "full-right" : "full-left"}>
						<EventCard
							eventInfo={event}
							imageUrl={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
							alt={event.heroAsset.alt}
						/>
					</div>
				);
			})}

			<Pagination className="mt-(--space-3xl)">
				<PaginationContent>
					{currentPage > 1 && (
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
					)}

					{Array.from({
						length: totalPages,
					}).map((_, index) => (
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
					{currentPage < totalPages && (
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
					)}
				</PaginationContent>
			</Pagination>
		</article>
	);
};

export default EventPagination;
