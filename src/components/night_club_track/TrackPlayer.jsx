import Image from "next/image";

import { FaRegPlayCircle, FaPause, FaFastForward, FaFastBackward } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";

const TrackPlayer = ({
	currentTrack,
	isPlaying,
	setIsPlaying,
	nextTrack,
	prevTrack,
	currentTime,
	duration,
	handleProgressChange,
	formatTime,
	volume,
	setVolume,
	shuffle,
	setShuffle,
}) => {
	return (
		<section className="flex gap-(--space-xl) items-center mt-(--space-xl) w-full max-w-5xl">
			<Image
				className="hidden md:block md:w-[350px] lg:w-[450px] h-auto"
				src={currentTrack.image}
				alt={currentTrack.title}
				width={300}
				height={300}
			/>

			<div className="flex flex-col gap-(--space-m) w-full">
				<h3 className="text-2xl font-bold">{currentTrack.title}</h3>

				<div className="w-full">
					<input
						type="range"
						min="0"
						max={duration || 0}
						value={currentTime}
						onChange={handleProgressChange}
						className="w-full cursor-pointer"
					/>
				</div>

				<div className=" flex flex-col gap-(--space-m) items-center md:gap-0 md:flex-row md:justify-between">
					<p className="mt-(--space-2xs) text-sm">
						{formatTime(currentTime)} / {formatTime(duration)}
					</p>

					<div className="flex gap-(--space-m) items-center">
						<button onClick={prevTrack} className="cursor-pointer">
							<FaFastBackward size={25} />
						</button>

						<button onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer">
							{isPlaying ? <FaPause size={52} /> : <FaRegPlayCircle size={52} />}
						</button>

						<button onClick={nextTrack} className="cursor-pointer">
							<FaFastForward size={25} />
						</button>
						<button
							onClick={() => setShuffle(!shuffle)}
							className={`transition cursor-pointer ${shuffle ? "text-(--highlight-secondary) scale-110" : "text-(--primary-foreground)"}`}
						>
							<FaShuffle size={25} />
						</button>
					</div>

					<div className="flex items-center gap-(--space-xs)">
						<FaVolumeHigh size={35} />

						<input
							type="range"
							min="0"
							max="1"
							step="0.01"
							value={volume}
							onChange={(e) => setVolume(Number(e.target.value))}
							className="w-40 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrackPlayer;
