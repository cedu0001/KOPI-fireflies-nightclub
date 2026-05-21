"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import Headline from "./Headline";

import { BiDrink } from "react-icons/bi";
import { BiDish } from "react-icons/bi";

const images = [
	{
		src: "/assets/content-img/thumb2-new.png",
		title: "NIGHT CLUB",
		description:
			"There are many variantions of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
		icon: "/assets/icon/Favicon 1.svg",
	},
	{
		src: "/assets/content-img/Restuarant-AI.png",
		title: "RESTUARANT",
		description:
			"It is a long established fact that a reader with be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
		icon: BiDish,
	},
	{
		src: "/assets/content-img/Bar-AI.png",
		title: "BAR",
		description:
			"Contrary to popular belief, Lorem Ipsum is not simply random text. It haas roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
		icon: BiDrink,
	},
];

const WelcomeIndex = () => {
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
		<section className="flex flex-col items-center justify-center my-10 py-10 gap-8">
			<Headline title="WELCOME IN NIGHTCLUB" />

			<div className="flex flex-row items-center justify-center gap-4 flex-wrap">
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
								className="absolute inset-0 bg-black border-t-2 border-b-2 border-(--highlight-secondary)"
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

							<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
								<motion.div
									className="object-contain text-5xl border-2 border-(--highlight-secondary) rounded-[5px] p-2"
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
										<Image
											src={Icon}
											alt={img.title}
											width={48}
											height={48}
											className="object-contain"
										/>
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
									className="text-white text-3xl font-bold tracking-widest text-center"
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
									className="text-white/80 text-center"
								>
									{img.description}
								</motion.p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default WelcomeIndex;
