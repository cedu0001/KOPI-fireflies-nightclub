"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const HeroIndex = () => {
	return (
		<section className="hero-index full-width flex flex-col gap-3 items-center p-(--space-3xl) sm:py-50  ">
			<div className="mt-auto mb-auto">
				<MotionImage
					src="/assets/icon/Logo.svg"
					alt="Logo"
					width={563}
					height={63}
					initial={{ rotateX: 90, opacity: 0 }}
					animate={{ rotateX: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					style={{ transformPerspective: 1000 }}
				/>
				<MotionImage
					src="/assets/bottom_line2.png"
					alt="Logo"
					width={563}
					height={63}
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 2.8,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="flex justify-center gap-5"
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 2.8,
						ease: "easeInOut",
					}}
				>
					<button className="bg-black/50 min-w-[160px] block mt-4 relative to-highlight-accent p-4 pr-6 pl-6 border-(--sidebar-ring) border-2 cursor-pointer after:absolute after:top-0 after:right-0 after:w-5 after:h-5 after:border-t-2 after:border-r-2 after:border-primary-foreground/50 after:opacity-100 after:blur-[1px]">
						VIEW EVENTS
					</button>
					<Button variant="highlight" className="min-w-[160px] block mt-4">
						BOOK TABLE
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroIndex;
