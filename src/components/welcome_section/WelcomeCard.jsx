"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import { BiDrink } from "react-icons/bi";
import { BiDish } from "react-icons/bi";

/* Der er blevet brugt AI hjælp til lidt animation, at finde ud af hvordan man koder, så når en bruger på mindre skærme
scroller forbi kortene så vil animationen aktivere, samt også hvordan man kan strukturere koden så
hvert kort viser noget forskelligt */

const images = [
	{
		src: "/assets/content-img/thumb2-new.png",
		title: "NIGHT CLUB",
		description:
			"Step into the energy of Fireflies Nightclub, where music, lights, and atmosphere come together for unforgettable nights. From live performances and DJ sets to themed events and late-night parties, the club is designed for guests who want a vibrant nightlife experience in the heart of the city.",
		icon: "/assets/icon/Favicon 1.svg",
	},
	{
		src: "/assets/content-img/Restuarant-AI.png",
		title: "RESTUARANT",
		description:
			"Guests can enjoy a carefully selected menu inspired by modern international cuisine, combining quality ingredients with bold flavours. Whether you are sharing dinner with friends or preparing for an evening of music and events, the restaurant creates the perfect setting.",
		icon: BiDish,
	},
	{
		src: "/assets/content-img/Bar-AI.png",
		title: "BAR",
		description:
			"The bar at Fireflies Nightclub serves a wide selection of cocktails, premium spirits, wines, and refreshing beverages throughout the evening. With experienced bartenders and an energetic atmosphere, the bar becomes a natural meeting point where guests can relax, socialize, and enjoy the nightlife experience.",
		icon: BiDrink,
	},
];

const WelcomeCard = () => {
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		const checkDevice = () => {
			const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth < 1024;

			setIsTouchDevice(isTouch);
		};

		checkDevice();

		window.addEventListener("resize", checkDevice);

		return () => {
			window.removeEventListener("resize", checkDevice);
		};
	}, []);
	return (
		<>
			{images.map((img, index) => {
				const Icon = img.icon;

				return (
					<motion.div
						key={index}
						className="relative overflow-hidden cursor-pointer group"
						initial="rest"
						whileHover={!isTouchDevice ? "hover" : undefined}
						whileInView={isTouchDevice ? "hover" : undefined}
						viewport={{
							once: true,
							amount: 0.2,
						}}
					>
						<motion.div
							variants={{
								rest: { scale: 1 },
								hover: { scale: 1.08 },
							}}
							transition={{ duration: 0.5 }}
						>
							<Image
								src={img.src}
								width={350}
								height={500}
								alt={img.title}
								className="max-h-[470px] object-cover"
							/>
						</motion.div>

						<motion.div
							variants={{
								rest: { opacity: 0 },
								hover: { opacity: 0.9 },
							}}
							transition={{ duration: 0.3 }}
							className="absolute inset-0 bg-(--primary) border-t-2 border-b-2 border-(--highlight-secondary)"
						/>

						<motion.div className="hidden corner-triangles origin-center absolute inset-0 z-20" />

						<motion.div
							variants={{
								rest: {
									x: -50,
									y: -50,
									opacity: 0,
								},
								hover: {
									x: 0,
									y: 0,
									opacity: 1,
								},
							}}
							transition={{
								duration: 0.4,
								ease: "easeOut",
							}}
							className=" absolute top-0 left-0 w-16 h-16 bg-(--highlight-primary) clip-triangle-tl z-20"
						/>

						<motion.div
							variants={{
								rest: {
									x: 50,
									y: 50,
									opacity: 0,
								},
								hover: {
									x: 0,
									y: 0,
									opacity: 1,
								},
							}}
							transition={{
								duration: 0.4,
								ease: "easeOut",
								delay: 0.05,
							}}
							className="absolute bottom-0 right-0 w-16 h-16 bg-(--highlight-primary) clip-triangle-br z-20"
						/>

						<div className="absolute inset-0 flex flex-col items-center justify-center gap-(--space-s) px-(--space-m)">
							<motion.div
								className="object-contain text-5xl border-2 border-(--highlight-secondary) rounded-[5px] p-(--space-2xs)"
								variants={{
									rest: {
										scale: 0.7,
										opacity: 0,
									},
									hover: {
										scale: 1,
										opacity: 1,
									},
								}}
								transition={{
									duration: 0.2,
									ease: "easeOut",
								}}
							>
								{typeof Icon === "string" ? (
									<Image src={Icon} alt={img.title} width={48} height={48} className="object-contain" />
								) : (
									<Icon className="text-(--highlight-secondary) text-5xl" />
								)}
							</motion.div>

							<motion.h4
								variants={{
									rest: {
										scale: 0.7,
										opacity: 0,
									},
									hover: {
										scale: 1,
										opacity: 1,
									},
								}}
								transition={{
									duration: 0.6,
									ease: "easeOut",
								}}
								className="text-(--primary-foreground) text-3xl font-bold tracking-widest text-center"
							>
								{img.title}
							</motion.h4>

							<motion.p
								variants={{
									rest: {
										x: 100,
										opacity: 0,
									},
									hover: {
										x: 0,
										opacity: 1,
									},
								}}
								transition={{
									duration: 0.5,
									delay: 0.15,
									ease: "easeOut",
								}}
								className="text-(--primary-foreground)/80 text-center"
							>
								{img.description}
							</motion.p>
						</div>
					</motion.div>
				);
			})}
		</>
	);
};

export default WelcomeCard;
