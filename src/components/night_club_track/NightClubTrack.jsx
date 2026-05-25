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

	useEffect(() => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.play().catch(() => {});
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		setCurrentTime(0);
		setDuration(0);

		audio.load();

		audio.currentTime = 0;

		if (isPlaying) {
			audio.play().catch(() => {});
		}
	}, [currentTrackIndex]);

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const updateTime = () => {
			setCurrentTime(audio.currentTime);
		};

		const updateDuration = () => {
			if (!isNaN(audio.duration)) {
				setDuration(audio.duration);
			}
		};

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateDuration);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", updateDuration);
		};
	}, [currentTrackIndex]);

	useEffect(() => {
		if (!audioRef.current) return;
		audioRef.current.volume = volume;
	}, [volume]);

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

	const prevTrack = () => {
		setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
	};

	const handleProgressChange = (e) => {
		const audio = audioRef.current;

		if (!audio) return;

		const value = Number(e.target.value);

		audio.currentTime = value;
		setCurrentTime(value);
	};

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

			<audio ref={audioRef} src={currentTrack.audio} onEnded={nextTrack} />

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
