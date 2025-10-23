"use client";

import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menu-items";
import { useState } from "react";

export const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-primary-400 text-xl font-medium sticky top-0 right-0 left-0 z-100">
			<Container>
				<nav className="flex items-center justify-between">
					<Logo />
					<ul
						className={`${cormorant.className} space-x-4 uppercase hidden md:flex py-5`}>
						{menuItems.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className="hover:text-gray-400">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					{/* Desktop RSVP button */}
					<Link
						href="/rsvp"
						className={`${cormorant.className} antialiased rounded-full my-2 border border-primary-800 font-bold text-primary-800 border-solid transition-colors duration-300 items-center bg-primary-500 hover:bg-primary-800 hover:text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto uppercase animate-jump animate-duration-1000 animate-delay-[5000ms] animate-thrice hidden md:flex`}>
						Visszajelzek
					</Link>
					{/* Mobile hamburger menu */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
						aria-label="Toggle menu">
						<span
							className={`block w-6 h-0.5 bg-primary-800 transition-all duration-300 ${
								mobileMenuOpen ? "rotate-45 translate-y-2" : ""
							}`}></span>
						<span
							className={`block w-6 h-0.5 bg-primary-800 transition-all duration-300 ${
								mobileMenuOpen ? "opacity-0" : ""
							}`}></span>
						<span
							className={`block w-6 h-0.5 bg-primary-800 transition-all duration-300 ${
								mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
							}`}></span>
					</button>
				</nav>
				{/* Mobile menu dropdown */}
				{mobileMenuOpen && (
					<div className="md:hidden pb-4 text-center">
						<ul className={`${cormorant.className} space-y-3 uppercase mt-5`}>
							{menuItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="block hover:text-gray-400"
										onClick={() => setMobileMenuOpen(false)}>
										{item.label}
									</Link>
								</li>
							))}

							<li>
								<Link
									href="/rsvp"
									className={`${cormorant.className} antialiased rounded-full border border-primary-800 font-bold text-primary-800 border-solid transition-colors duration-300 inline-flex items-center justify-center bg-primary-500 hover:bg-primary-800 hover:text-white text-sm h-10 px-4 uppercase`}
									onClick={() => setMobileMenuOpen(false)}>
									Visszajelzek
								</Link>
							</li>
						</ul>
					</div>
				)}
			</Container>
		</div>
	);
}

function Logo() {
	return (
		<Link href="/">
			<Image
				src="/img/dinnyeskuvo.png"
				className="h-[45px] w-[268px] my-2"
				alt="Dinnyesküvő"
				width={268}
				height={45}
			/>
		</Link>
	);
}
