import Image from "next/image";

import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { Button } from "../ui/button";
import Dot from "./Dot";

const Testimonials = () => {
	return (
		<article className="flex flex-col gap-3 items-center my-(--space-xl) p-(--space-2xl) bg-index full-width">
			<section>
				<Image src="/assets/content-img/testimonial_3.jpg" height={210} width={210} alt="dude"></Image>
				<h5 className="text-center">ALEX</h5>
			</section>
			<p className="text-center lg:w-[1000px]">
				There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
				some form, by injected humour, or randomised words which don’t look even slightly believable. If you are
				going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the
				middle of the text.
			</p>
			<div className="flex flex-row gap-6 justify-center mb-12">
				<Button variant="square_btn">
					<FaFacebookF />
				</Button>
				<Button variant="square_btn">
					<FaTwitter />
				</Button>
				<Button variant="square_btn">
					<FaSnapchatGhost />
				</Button>
			</div>
			<div className="flex flex-row gap-2 justify-center mb-12">
				<Dot></Dot>
				<Dot></Dot>
				<Dot></Dot>
			</div>
		</article>
	);
};

export default Testimonials;
