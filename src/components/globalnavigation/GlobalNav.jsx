"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalNavBtn from "./GlobalNavBtn";
import { usePathname } from "next/navigation";

const GlobalNav = () => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);
	const [hoveredPath, setHoveredPath] = useState(null);

	return (
		<header className="w-full full-width nav-style">
			<div className="flex items-center justify-between py-4 mx-6 lg:mx-20">
				<Link href="/">
					<Image src="/assets/Logo.png" width={200} height={54} alt="Logo" className="cursor-pointer" />
				</Link>

				<nav className="hidden md:flex gap-5" onMouseLeave={() => setHoveredPath(null)}>
					<GlobalNavBtn
						href="/"
						label="HOME"
						active={pathname === "/"}
						hovered={hoveredPath === "HOME"}
						onHover={() => setHoveredPath("HOME")}
					/>
					<GlobalNavBtn
						href="/events"
						label="EVENTS"
						active={pathname === "/events"}
						hovered={hoveredPath === "EVENTS"}
						onHover={() => setHoveredPath("EVENTS")}
					/>
					<GlobalNavBtn
						href="/book-table"
						label="BOOK TABLE"
						active={pathname === "/book-table"}
						hovered={hoveredPath === "BOOK TABLE"}
						onHover={() => setHoveredPath("BOOK TABLE")}
					/>

					<GlobalNavBtn
						href="/contact"
						label="CONTACT US"
						active={pathname === "/contact"}
						hovered={hoveredPath === "CONTACT US"}
						onHover={() => setHoveredPath("CONTACT US")}
					/>
				</nav>

				<button
					popoverTarget="mobile-menu"
					onClick={() => setIsOpen(!isOpen)}
					className=" md:hidden z-1000 text-white text-3xl"
				>
					{isOpen ? "✕" : "☰"}
				</button>

				{/* brugermenu til mobilen vvv */}
				<ul
					popover="auto"
					id="mobile-menu"
					className=" h-dvh w-dvw hidden md:hidden [&:popover-open]:flex flex-col gap-4 bg-black text-white border p-6 text-center justify-center [&:popover-open]:md:hidden "
				>
					<button
						popoverTarget="mobile-menu"
						onClick={() => setIsOpen(!isOpen)}
						className="absolute top-0 right-2 md:hidden z-1000 text-white text-3xl"
					>
						{isOpen ? "✕" : "☰"}
					</button>
					<li>
						<Link href="/">HOME</Link>
					</li>

					<li>
						<Link href="/">EVENTS</Link>
					</li>

					<li>
						<Link href="/">BOOK TABLE</Link>
					</li>

					<li>
						<Link href="/">CONTACT US</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default GlobalNav;
