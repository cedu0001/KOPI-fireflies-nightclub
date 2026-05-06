import { Button } from "./ui/button";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
	return (
		<footer className="py-10 px-15">
			<article className="grid-footer pb-35">
				<section className="flex flex-col">
					<Image src="/assets/Logo.png" width={226} height={54} alt="Logo"></Image>
					<h5 className="text-style ">Location</h5>
					<p>Kompagnistræde 278 1265 Købehavn K</p>
					<h5 className="text-style">Opening Hours</h5>
					<p>WED - THU 10:30 PM TO 3 AM</p>
					<p>SAT - SUN: 11 PM TO 5 AM</p>
				</section>

				<section className="flex flex-row gap-4">
					<section>
						<h5 className="text-style">NEWS</h5>
						<div className="flex flex-row py-2 gap-5">
							<Image
								className="aspect-square"
								src="/assets/content-img/recent_post1.jpg"
								width={120}
								height={120}
								alt=""
							></Image>
							<div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
								<p className="text-style">April 17, 2026</p>
							</div>
						</div>
						<div className="flex flex-row py-2 gap-5">
							<Image
								className="aspect-square"
								src="/assets/content-img/recent_post2.jpg"
								width={120}
								height={120}
								alt=""
							/>
							<div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
								<p className="text-style">April 17, 2026</p>
							</div>
						</div>
					</section>

					<section>
						<h5 className="text-style">RECENT POSTS</h5>
						<div className="flex flex-row gap-4">
							<BsTwitterX size={24} color="var(--highlight-secondary)" />
							<div className="flex flex-col">
								<p className="py-0">
									It is a long established fact that a reader will be distracted by the readable...{" "}
								</p>
								<p className="text-style">5 hours ago</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<BsTwitterX size={24} color="var(--highlight-secondary)" />
							<div className="flex flex-col">
								<p className="py-0">
									It is a long established fact that a reader will be distracted by the readable...{" "}
								</p>
								<p className="text-style">5 hours ago</p>
							</div>
						</div>
					</section>
				</section>
			</article>

			<section className="flex justify-between items-center">
				<p>Night Club - All Rights Reserved</p>
				<div className="flex flex-col">
					<p>Stay Connected With Us</p>
					<div className="flex flex-row gap-6 justify-center mb-12">
						<Button variant="square_btn">
							<FaFacebookF />
						</Button>
						<Button variant="square_btn">
							<FaSnapchatGhost />
						</Button>
						<Button variant="square_btn">
							<FaInstagram />
						</Button>
					</div>
				</div>
				<p>Copyright © NightClub</p>
			</section>
		</footer>
	);
};

export default Footer;
