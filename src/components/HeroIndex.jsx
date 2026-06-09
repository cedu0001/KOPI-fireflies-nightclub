"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Link from "next/link";

const MotionImage = motion.create(Image);

/* Der er blevet brugt AI hjælp til at få billeder til at skiftevis ændrer sig, linje 13-31 */

const heroImages = [
	{
		image: "hero-img1",
		link: "/assets/bg/header_bg_1.jpg",
	},
	{
		image: "hero-img2",
		link: "/assets/bg/header_bg_2.jpg",
	},
];

const HeroIndex = () => {
	const [randomImage, setRandomImage] = useState(heroImages[0].link);

	useEffect(() => {
		const random = heroImages[Math.floor(Math.random() * heroImages.length)].link;

		setRandomImage(random);
	}, []);

	return (
		<section className="hero-index full-width flex flex-col gap-(--space-xs) items-center p-(--space-3xl) sm:py-50 ">
			<Image
				alt="Hero images, the first photo is a lady with headphones, the second photo is a Dj"
				src={randomImage}
				fill
				className="object-cover opacity-70"
			></Image>

			<div className="mt-auto mb-auto">
				<MotionImage
					src="/assets/icon/Logo.svg"
					alt="Logo, NightClub"
					width={563}
					height={63}
					initial={{ rotateX: 90, opacity: 0 }}
					animate={{ rotateX: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.7 }}
					style={{ transformPerspective: 1000 }}
				/>

				<MotionImage
					src="/assets/quote.png"
					alt="Text saying: Have a good time"
					width={563}
					height={63}
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
				/>
				<MotionImage
					src="/assets/bottom_line2.png"
					alt="Bottom line, graphic asset"
					width={563}
					height={63}
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
				/>
				<motion.div
					className="flex justify-center gap-(--space-m)"
					initial={{ y: "-100%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
				>
					<Link href="/events">
						<Button
							aria-label="View events that the NightClub offers"
							variant="grey"
							className="min-w-[160px] z-52 block mt-(--space-s)"
						>
							VIEW EVENTS
						</Button>
					</Link>
					<Link href="/book-table">
						<Button
							aria-label="Book a table"
							variant="highlight"
							className="min-w-[160px] z-52 block mt-(--space-s)"
						>
							BOOK TABLE
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroIndex;
