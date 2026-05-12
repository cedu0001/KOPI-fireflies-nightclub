"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

const DURATION = 0.3;
const STAGGER = 0.02;

const GlobalNavBtn = ({ href, label, active, hovered, onHover }) => {
	return (
		<motion.a
			href={href}
			onMouseEnter={onHover}
			className={`relative px-4 py-2 block cursor-pointer transition-colors ${
				active ? "text-[var(--highlight-secondary)]" : "text-white hover:text-[var(--highlight-secondary)]"
			}`}
			initial="initial"
			animate={hovered ? "hovered" : "initial"}
		>
			{(active || hovered) && (
				<MotionImage
					src="/assets/bottom_line_header.png"
					alt="border graphic"
					layoutId="nav-pill"
					width={100}
					height={5}
					className="absolute bottom-[-5px] left-0 w-full h-auto object-contain -z-10"
					transition={{ type: "spring", duration: 0.6 }}
				/>
			)}

			<div className="relative overflow-hidden">
				<div className="flex">
					{label.split("").map((l, i) => (
						<motion.span
							key={i}
							className="inline-block whitespace-pre"
							variants={{
								initial: { y: 0 },
								hovered: { y: "-100%" },
							}}
							transition={{
								duration: DURATION,
								ease: "easeInOut",
								delay: STAGGER * i,
							}}
						>
							{l}
						</motion.span>
					))}
				</div>
				<div className="absolute inset-0 flex">
					{label.split("").map((l, i) => (
						<motion.span
							key={i}
							className="inline-block whitespace-pre text-header-hover"
							variants={{
								initial: { y: "100%" },
								hovered: { y: 0 },
							}}
							transition={{
								duration: DURATION,
								ease: "easeInOut",
								delay: STAGGER * i,
							}}
						>
							{l}
						</motion.span>
					))}
				</div>
			</div>
		</motion.a>
	);
};

export default GlobalNavBtn;
