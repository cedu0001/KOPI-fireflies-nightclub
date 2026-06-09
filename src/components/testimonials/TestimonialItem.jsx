import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

import { Button } from "../ui/button";
import Image from "next/image";

const TestimonialItem = ({ imgsrc, alt, name, testiment, facebook, twitter }) => {
	return (
		<section className="justify-center z-1 flex flex-col items-center">
			{imgsrc && <Image src={imgsrc} alt={alt} width={200} height={200} />}

			<h3 className="uppercase !py-(--space-s)">{name}</h3>

			<p className="text-center max-w-180">{testiment}</p>

			<div className="flex gap-(--space-m) my-(--space-m)">
				{/* Anvendt AI, da facebook og twitter data drillede med at blive "vist" */}
				{facebook && (
					<Button aria-label="Facebook link" variant="square_btn">
						<FaFacebookF size={25} />
					</Button>
				)}

				{twitter && (
					<Button aria-label="Twitter link" variant="square_btn">
						<FaTwitter size={25} />
					</Button>
				)}
				<Button aria-label="Snapchat link" variant="square_btn">
					<FaSnapchatGhost size={25} />
				</Button>
			</div>
		</section>
	);
};

export default TestimonialItem;
