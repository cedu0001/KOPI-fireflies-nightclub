"use client";

import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

/* Anvendt AI, se beskrivelse under "NightClubTrack.jsx" */

const ArtistCard = ({ track, isActive, onClick }) => {
	return (
		<button
			aria-label={`Play ${track.title}`}
			onClick={onClick}
			className={`
				group
				relative
				w-[160px] md:w-[200px] lg:w-[220px]
				h-[160px] md:h-[200px] lg:h-[220px]
				flex-shrink-0
				overflow-hidden
				transition
				cursor-pointer
                ${isActive ? "scale-105" : "opacity-70"}
			`}
		>
			<Image
				src={track.image}
				alt={track.title}
				fill
				className="object-cover transition duration-300 group-hover:scale-110"
			/>

			<div className="absolute inset-0 bg-(--primary)/30 opacity-0 group-hover:opacity-100 transition">
				<div className="corner-triangles" />

				<div className="absolute inset-0 flex items-center justify-center z-20">
					<FaRegPlayCircle size={50} className="text-(--highlight-secondary)" />
				</div>

				<div className="absolute bottom-0 left-0 w-full bg-(--primary)/70 py-(--space-xs) px-(--space-2xs) z-10">
					<p className="text-(--primary-foreground) text-sm font-bold uppercase text-center truncate">
						{track.title}
					</p>
				</div>
			</div>
		</button>
	);
};

export default ArtistCard;
