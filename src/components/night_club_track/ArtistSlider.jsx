"use client";

import { Button } from "../ui/button";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import ArtistCard from "./ArtistCard";

/* Anvendt AI, se beskrivelse under "NightClubTrack.jsx" */

const ArtistSlider = ({ tracks, currentTrackIndex, setCurrentTrackIndex, setIsPlaying, nextTrack, prevTrack }) => {
	return (
		<section className="w-full mt-(--space-xl) mb-(--space-3xl)">
			<div className="md:hidden flex flex-col items-center gap-(--space-m)">
				<ArtistCard track={tracks[currentTrackIndex]} isActive onClick={() => setIsPlaying(true)} />

				<div className="flex gap-(--space-m)">
					<Button aria-label="Play previous track" onClick={prevTrack}>
						<BiSolidLeftArrow />
					</Button>

					<Button aria-label="Play next track" onClick={nextTrack}>
						<BiSolidRightArrow />
					</Button>
				</div>
			</div>

			<div className="hidden md:flex lg:hidden items-center gap-(--space-xs) overflow-hidden px-(--space-xl)">
				<Button aria-label="Play previous track" onClick={prevTrack}>
					<BiSolidLeftArrow />
				</Button>

				<div className="overflow-hidden w-[640px]">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							transform: `translateX(-${currentTrackIndex * 213}px)`,
						}}
					>
						{tracks.map((track, index) => (
							<ArtistCard
								key={track.id}
								track={track}
								isActive={index === currentTrackIndex}
								onClick={() => {
									setCurrentTrackIndex(index);
									setIsPlaying(true);
								}}
							/>
						))}
					</div>
				</div>

				<Button aria-label="Play next track" onClick={nextTrack}>
					<BiSolidRightArrow />
				</Button>
			</div>

			<div className="hidden lg:flex justify-center gap-(--space-xs) px-(--space-xl)">
				{tracks.map((track, index) => (
					<ArtistCard
						key={track.id}
						track={track}
						isActive={index === currentTrackIndex}
						onClick={() => {
							setCurrentTrackIndex(index);
							setIsPlaying(true);
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default ArtistSlider;
