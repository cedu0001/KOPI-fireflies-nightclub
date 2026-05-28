const VideoComponent = ({ src }) => {
	return (
		<div className="w-full video-wrapper">
			<video key={src} src={src} controls preload="metadata" className="block w-full h-full object-cover" />
		</div>
	);
};

export default VideoComponent;
