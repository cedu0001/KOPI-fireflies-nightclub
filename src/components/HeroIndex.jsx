"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import Link from "next/link";

const MotionImage = motion(Image);

const HeroIndex = () => {
	return (
		<section className="hero-index full-width flex flex-col gap-(--space-xs) items-center p-(--space-3xl) sm:py-50 ">
			<div className="mt-auto mb-auto">
				<motion.div
					className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-(--color-secondary-foreground)"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0, visibility: "hidden" }}
					transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
				>
					<Image src="/assets/loader/madbars.gif" alt="Loading" width={30} height={30} />
				</motion.div>
				<MotionImage
					src="/assets/icon/Logo.svg"
					alt="Logo, NightClub"
					width={563}
					height={63}
					initial={{ rotateX: 90, opacity: 0 }}
					animate={{ rotateX: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 2.5 }}
					style={{ transformPerspective: 1000 }}
				/>
				<MotionImage
					src="/assets/bottom_line2.png"
					alt="Bottom line, graphic asset"
					width={563}
					height={63}
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.2, delay: 2.7, ease: "easeInOut" }}
				/>
				<motion.div
					className="flex justify-center gap-(--space-m)"
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 3, ease: "easeOut" }}
				>
					<Link href="/events">
						<Button variant="grey" className="min-w-[160px] z-52 block mt-(--space-s)">
							VIEW EVENTS
						</Button>
					</Link>
					<Link href="/book-table">
						<Button variant="highlight" className="min-w-[160px] z-52 block mt-(--space-s)">
							BOOK TABLE
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroIndex;
