import { Button } from "./ui/button";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Image from "next/image";

import "../app/style.css";

const Footer = () => {
	return (
		<footer className="py-(--space-3xl) px-(--space-2xl) full-width mt-(--space-xl)">
			<article className="grid-footer pb-(--space-xl)">
				<section className="flex flex-col mr-auto ml-auto">
					<Image
						src="/assets/Logo.png"
						width={226}
						height={54}
						alt="Company logo: NightClub, have a good time"
						className="mr-auto ml-auto lg:mr-0 lg:ml-0"
					></Image>
					<h5 className="text-style ">Location</h5>
					<p>Kompagnistræde 278 1265 Købehavn K</p>
					<h5 className="text-style">Opening Hours</h5>
					<p>WED - THU 10:30 PM TO 3 AM</p>
					<p>SAT - SUN: 11 PM TO 5 AM</p>
				</section>

				<section className="flex flex-row gap-(--space-s)">
					<section className="hidden lg:block">
						<h5 className="text-style ">NEWS</h5>
						<div className="flex flex-row py-(--space-s) gap-(--space-m)">
							<Image
								className="object-cover max-h-[120px] min-w-[120px]"
								src="/assets/content-img/recent_post1.jpg"
								width={120}
								height={120}
								alt="Photo of a DJ looking at a crowd"
							></Image>
							<div>
								<p className="!pt-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
								<p className="text-style">April 17, 2026</p>
							</div>
						</div>
						<div className="flex flex-row py-(--space-s) gap-(--space-m)">
							<Image
								className="object-cover max-h-[120px] min-w-[120px]"
								src="/assets/content-img/recent_post2.jpg"
								width={120}
								height={120}
								alt="Photo from a crowd looking towards a scene, there's a band playing"
							/>
							<div>
								<p className="!pt-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
								<p className="text-style">April 17, 2026</p>
							</div>
						</div>
					</section>

					<section className="hidden lg:block">
						<h5 className="text-style">RECENT POSTS</h5>
						<div className="flex flex-row gap-(--space-s)">
							<BsTwitterX size={24} color="var(--highlight-secondary)" />
							<div className="flex flex-col">
								<p className="!py-0">
									It is a long established fact that a reader will be distracted by the readable...{" "}
								</p>
								<p className="text-style">5 hours ago</p>
							</div>
						</div>
						<div className="flex flex-row gap-(--space-s)">
							<BsTwitterX size={24} color="var(--highlight-secondary)" />
							<div className="flex flex-col">
								<p className="!py-0">
									It is a long established fact that a reader will be distracted by the readable...{" "}
								</p>
								<p className="text-style">5 hours ago</p>
							</div>
						</div>
					</section>
				</section>
			</article>

			<section className="flex flex-col lg:flex-row justify-between items-center flex-wrap">
				<p className="order-2 lg:order-1">Night Club - All Rights Reserved</p>
				<div className="flex flex-col order-1 lg:order-2">
					<p>Stay Connected With Us</p>
					<div className="flex flex-row gap-(--space-m) justify-center mb-(--space-xl)">
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
				<p className="order-3">Copyright © NightClub</p>
			</section>
		</footer>
	);
};

export default Footer;
