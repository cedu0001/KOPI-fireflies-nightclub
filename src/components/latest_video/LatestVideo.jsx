import Headline from "../Headline";
import VideoList from "./VideoList";

const LatestVideo = () => {
	return (
		<section className="flex flex-col items-center my-22 justify-center h-[800px]">
			<Headline title="LATEST VIDEO" />
				<VideoList />
		</section>
	);
};

export default LatestVideo;
