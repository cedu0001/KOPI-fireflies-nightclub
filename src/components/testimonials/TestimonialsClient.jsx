"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialItem from "./TestimonialItem";

/* Anvendt AI, se beskrivelse under "Testimonials.jsx" */

const TestimonialsClient = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!data || data.length === 0) {
		return <p className="text-center my-(--space-m)">Failed to load testimonials...</p>;
	}

	const currentItem = data[activeIndex];

	return (
		<section className="flex flex-col items-center justify-center my-(--space-xl) relative bg-index full-width py-(--space-xl)">
			<div className="relative w-full overflow-hidden min-h-[400px] flex items-center justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentItem.id}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.3 }}
						className="w-full flex justify-center"
					>
						<TestimonialItem
							name={currentItem.name}
							facebook={currentItem.facebook}
							twitter={currentItem.twitter}
							testiment={currentItem.content}
							imgsrc={
								currentItem.asset?.url ? `${process.env.NEXT_PUBLIC_API_URL}${currentItem.asset.url}` : null
							}
							alt={currentItem.asset?.alt || currentItem.name}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="flex gap-(--space-xs) mt-(--space-m) z-10">
				{data.map((item, index) => (
					<button
						aria-label={`Show testimonial from ${item.name}`}
						key={`dot-${item.id}`}
						onClick={() => setActiveIndex(index)}
						className="relative focus:outline-none"
					>
						{activeIndex === index && (
							<motion.div
								layoutId="activeDotHighlight"
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
							/>
						)}

						<div
							className={`w-[20px] h-[20px] mb-(--space-xs) transition-colors duration-300 ${
								activeIndex === index ? "bg-(--highlight-secondary)" : "bg-(--primary-foreground)"
							} hover:cursor-pointer`}
						/>
					</button>
				))}
			</div>
		</section>
	);
};

export default TestimonialsClient;
