import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex gap-(--space-m)">
			<p>Loading</p>
			<Image src="/assets/loader/madbars.gif" alt="Loading" width={30} height={30} />
		</div>
	);
};

export default Loading;
