"use client";

import { Button } from "../ui/button";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import ArtistCard from "./ArtistCard";

const ArtistSlider = ({ tracks, currentTrackIndex, setCurrentTrackIndex, setIsPlaying, nextTrack, prevTrack }) => {
	return (
		<section className="w-full mt-10 mb-20">
			{/* til små skærme */}
			<div className="md:hidden flex flex-col items-center gap-5">
				<ArtistCard track={tracks[currentTrackIndex]} isActive onClick={() => setIsPlaying(true)} />

				<div className="flex gap-5">
					<Button onClick={prevTrack}>
						<BiSolidLeftArrow />
					</Button>

					<Button onClick={nextTrack}>
						<BiSolidRightArrow />
					</Button>
				</div>
			</div>

			{/* til medium skærme */}
			<div className="hidden md:flex lg:hidden items-center gap-3 overflow-hidden px-10">
				<Button onClick={prevTrack}>
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

				<Button onClick={nextTrack}>
					<BiSolidRightArrow />
				</Button>
			</div>

			{/* til større skærme */}
			<div className="hidden lg:flex justify-center gap-3 px-10">
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
