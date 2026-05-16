import Headline from "../Headline";
import VideoList from "./VideoList";

import { Suspense } from "react";

const LatestVideo = () => {
	return (
		<section className="flex flex-col items-center justify-center h-[800px]">
			{" "}
			<Headline title="LATEST VIDEO" />
			<Suspense fallback={<p>Loading videos..</p>}>
				<VideoList />
			</Suspense>
		</section>
	);
};

export default LatestVideo;
