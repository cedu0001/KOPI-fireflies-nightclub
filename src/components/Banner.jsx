import Image from "next/image";

const Banner = ({ title }) => {
	return (
		<article className="relative full-width">
			<div className="relative">
				<Image
					src="/assets/bg/footerbg.jpg"
					width={1600}
					height={270}
					alt="hans in the air, like you don't care"
					className="object-cover max-h-35"
				/>

				<div className="absolute inset-0 bg-(--primary)/80 z-10" />
			</div>

			<section className="absolute inset-0 grid place-items-center z-20">
				<div className="flex flex-col items-center gap-0">
					<h2 className="!py-0 leading-none">{title}</h2>

					<Image src="/assets/bottom_line.png" width={240} height={2} alt="Underlining text above" />
				</div>
			</section>
		</article>
	);
};

export default Banner;
