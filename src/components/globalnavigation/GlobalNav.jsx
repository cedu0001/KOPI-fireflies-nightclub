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
		<header className="w-full full-width nav-style bg-(--primary)">
			<div className="flex items-center justify-between py-(--space-s) bg-(--primary)">
				<Link href="/">
					<Image src="/assets/Logo.png" width={200} height={54} alt="Company logo" className="cursor-pointer mx-(--space-m)" />
				</Link>

				<nav className="hidden md:flex gap-(--space-m) mx-(--space-m)" onMouseLeave={() => setHoveredPath(null)}>
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
						href="/contact-us"
						label="CONTACT US"
						active={pathname === "/contact-us"}
						hovered={hoveredPath === "CONTACT US"}
						onHover={() => setHoveredPath("CONTACT US")}
					/>
				</nav>

				<button
					popoverTarget="mobile-menu"
					onClick={() => setIsOpen(!isOpen)}
					className=" md:hidden z-1000 text-(--primary-foreground) text-3xl (--space-m)"
				>
					{isOpen ? "✕" : "☰"}
				</button>

				<ul
					popover="auto"
					id="mobile-menu"
					className=" h-dvh w-dvw hidden md:hidden [&:popover-open]:flex flex-col gap-(--space-s) bg-(--primary) [&:popover-open]:bg-opacity-60 text-(--primary-foreground) border p-(--space-m) text-center justify-center [&:popover-open]:md:hidden "
				>
					<button
						popoverTarget="mobile-menu"
						onClick={() => setIsOpen(!isOpen)}
						className="absolute top-0 right-2 p-(--space-m) md:hidden z-1000 text-(--primary-foreground) text-3xl"
					>
						{isOpen ? "✕" : "☰"}
					</button>
					<li>
						<Link href="/">HOME</Link>
					</li>

					<li>
						<Link href="/events">EVENTS</Link>
					</li>

					<li>
						<Link href="/book-table">BOOK TABLE</Link>
					</li>

					<li>
						<Link href="/contact-us">CONTACT US</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default GlobalNav;
