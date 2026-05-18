"use client";

import { useRef, useState, useEffect } from "react";

import Headline from "../Headline";
import TrackPlayer from "./TrackPlayer";
import ArtistSlider from "./ArtistSlider";

const tracks = [
	{
		id: 1,
		title: "Black Box Funky",
		audio: "/assets/media/black-box-funky.mp3",
		image: "/assets/content-img/track1.jpg",
	},
	{
		id: 2,
		title: "Euphoria",
		audio: "/assets/media/euphoria.mp3",
		image: "/assets/content-img/track2.jpg",
	},
	{
		id: 3,
		title: "Fashion Red Tape",
		audio: "/assets/media/fashion-red-tape.mp3",
		image: "/assets/content-img/track4.jpg",
	},
	{
		id: 4,
		title: "You Belong With Me 2",
		audio: "/assets/media/fashion-red-tape.mp3",
		image: "/assets/content-img/track5.jpg",
	},
];

const NightClubTrack = () => {
	const audioRef = useRef(null);

	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const [volume, setVolume] = useState(1);
	const [shuffle, setShuffle] = useState(false);

	const currentTrack = tracks[currentTrackIndex];

	/* play/pause funktion */
	useEffect(() => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.play().catch(() => {});
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	/* når sangen ændrer sig: reset til start*/
	useEffect(() => {
		if (!audioRef.current) return;

		audioRef.current.currentTime = 0;

		if (isPlaying) {
			audioRef.current.play().catch(() => {});
		}
	}, [currentTrackIndex]);

	/* tid og længde */
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);
		const updateDuration = () => setDuration(audio.duration);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateDuration);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", updateDuration);
		};
	}, []);

	/* lyd */
	useEffect(() => {
		if (!audioRef.current) return;
		audioRef.current.volume = volume;
	}, [volume]);

	/* næste track og shuffle */
	const nextTrack = () => {
		if (shuffle) {
			let randomIndex;

			do {
				randomIndex = Math.floor(Math.random() * tracks.length);
			} while (randomIndex === currentTrackIndex);

			setCurrentTrackIndex(randomIndex);
			return;
		}

		setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
	};

	/* tidligere track */
	const prevTrack = () => {
		setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
	};

	/* progress baren */
	const handleProgressChange = (e) => {
		const value = Number(e.target.value);

		audioRef.current.currentTime = value;
		setCurrentTime(value);
	};

	/* tiden */
	const formatTime = (time) => {
		if (!time) return "0:00";

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");

		return `${minutes}:${seconds}`;
	};

	return (
		<section className="flex flex-col items-center justify-center">
			<Headline title="NIGHT CLUB TRACK" />

			<audio key={currentTrack.id} ref={audioRef} src={currentTrack.audio} onEnded={nextTrack} />

			<TrackPlayer
				currentTrack={currentTrack}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				nextTrack={nextTrack}
				prevTrack={prevTrack}
				currentTime={currentTime}
				duration={duration}
				handleProgressChange={handleProgressChange}
				formatTime={formatTime}
				volume={volume}
				setVolume={setVolume}
				shuffle={shuffle}
				setShuffle={setShuffle}
			/>

			<ArtistSlider
				tracks={tracks}
				setCurrentTrackIndex={setCurrentTrackIndex}
				setIsPlaying={setIsPlaying}
				currentTrackIndex={currentTrackIndex}
				nextTrack={nextTrack}
				prevTrack={prevTrack}
			/>
		</section>
	);
};

export default NightClubTrack;
