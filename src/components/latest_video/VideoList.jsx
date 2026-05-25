"use client";

import { useState } from "react";
import { Button } from "../ui/button";

import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

import VideoComponent from "./VideoComponent";

const videos = ["/assets/media/video-crowd.mp4", "/assets/media/video-dj-crowd1.mp4", "/assets/media/video-dj-crowd-2.mp4"];

const VideoList = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<section className="flex flex-col items-center w-full my-(--space-m) mt-(--space-xl)">
			<VideoComponent src={videos[currentIndex]} />
			<div className="flex my-(--space-m) justify-center gap-(--space-m)">
				<Button
					variant="square_btn"
					onClick={() => setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))}
				>
					<BiSolidLeftArrow />
				</Button>

				<Button variant="square_btn" onClick={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}>
					<BiSolidRightArrow />
				</Button>
			</div>
		</section>
	);
};

export default VideoList;
