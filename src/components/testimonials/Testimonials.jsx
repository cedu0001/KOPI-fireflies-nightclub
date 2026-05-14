"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialItem from "./TestimonialItem";

const Testimonials = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!data || data.length === 0) {
		return <p className="text-center my-10">Failed to load testimonials...</p>;
	}

	const currentItem = data[activeIndex];

	return (
		<section className="flex flex-col items-center justify-center my-10 relative bg-index full-width py-10">
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

			<div className="flex gap-3 mt-6 z-10">
				{data.map((item, index) => (
					<button
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
							className={`w-[20px] h-[20px] mb-[10px] transition-colors duration-300 ${
								activeIndex === index ? "bg-(--highlight-secondary)" : "bg-white"
							} hover:shadow-[0_2px_5px_#17171748] hover:cursor-pointer`}
						/>
					</button>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
