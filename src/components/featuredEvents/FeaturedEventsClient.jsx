"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FeaturedEventCard from "./FeaturedEventCard";

const FeaturedEventsClient = ({ events }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const chunkArray = (array, size) => {
		const result = [];

		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}

		return result;
	};

	const groupedEvents = isDesktop ? chunkArray(events, 2) : chunkArray(events, 1);

	const currentGroup = groupedEvents[activeIndex];

	useEffect(() => {
		if (activeIndex >= groupedEvents.length) {
			setActiveIndex(0);
		}
	}, [groupedEvents.length, activeIndex]);

	if (!events || events.length === 0) {
		return <p>No events found...</p>;
	}

	return (
		<section className="flex flex-col items-center justify-center w-full ">
			<div className="relative overflow-hidden w-full flex justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col md:flex-row gap-(--space-xl) items-center justify-center"
					>
						{currentGroup.map((event) => (
							<section key={event.id} className="max-w-[400px] w-full">
								<FeaturedEventCard event={event} />
							</section>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="flex gap-(--space-xs) mt-(--space-m)">
				{groupedEvents.map((_, index) => (
					<button key={index} onClick={() => setActiveIndex(index)} className="focus:outline-none">
						<div
							className={`w-[20px] h-[20px] transition-colors duration-300 cursor-pointer ${
								activeIndex === index ? "bg-(--highlight-secondary)" : "bg-(--primary-foreground)"
							}`}
						/>
					</button>
				))}
			</div>
		</section>
	);
};

export default FeaturedEventsClient;
