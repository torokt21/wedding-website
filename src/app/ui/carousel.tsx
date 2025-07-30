"use client";

import React, { useState } from "react";

import Image from "next/image";
import LinkButton from "./linkButton";
import clsx from "clsx";
import { cormorant } from "./navbar";
import data from "../gallery/data";

const animationDurationMs = 400; // Animation duration in milliseconds

const Carousel: React.FC = () => {
	const [centerIndex, setCenterIndex] = useState(0);
	const [animatingDirection, setAnimatingDirection] = useState<"left" | "right" | null>(null);
	const isAnimating = animatingDirection !== null;
	const images = data;

	const prev = () => {
		if (isAnimating) return;
		setAnimatingDirection("right");
		setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
		setTimeout(() => setAnimatingDirection(null), animationDurationMs + 500);
	};

	const next = () => {
		if (isAnimating) return;
		setAnimatingDirection("left");
		setCenterIndex((prev) => (prev + 1) % images.length);
		setTimeout(() => setAnimatingDirection(null), animationDurationMs + 500);
	};

	// Get indices for left, center, right images
	const getIndices = () => {
		const left = (centerIndex - 1 + images.length) % images.length;
		const right = (centerIndex + 1) % images.length;
		return { left, center: centerIndex, right };
	};

	const animationClasses = clsx(`animate-duration-[${animationDurationMs}ms]`, {
		"animate-fade-right animate-once": animatingDirection === "right",
		"animate-fade-left animate-once": animatingDirection === "left",
	});
	//const animationClasses = "";

	const { left, center, right } = getIndices();

	return (
		<div className="w-full flex items-center justify-center relative overflow-hidden min-h-[600px] my-5 md:my-25">
			{/* Decorative background */}
			<div className="absolute w-full md:w-2/3 lg:w-1/2 left-0 top-0 h-full bg-primary-600 rounded-0 md:rounded-br-[30%] z-0" />
			{/* Gallery Title */}
			<div
				className={`text-right absolute left-[50%] top-8 z-2 ${cormorant.className} text-6xl translate-x-[-50%] md:translate-x-[-40%] lg:translate-x-[-110%]`}>
				Képeink
			</div>
			{/* Carousel Images */}
			<button
				onClick={prev}
				disabled={isAnimating}
				aria-label="Previous"
				className="duration-200 z-2 text-3xl text-primary-900 mx-3 hover:scale-110 scale-100">
				&#8592;
			</button>
			<div className="flex items-center gap-0 md:gap-10 z-2">
				{/* Left Image */}
				<div>
					<Image
						className="object-cover shadow-lg rounded-lg aspect-[14/10] h-auto w-[420px] hidden md:block"
						src={images[left].src}
						alt={images[left].description || ""}
						width={420}
						height={300}
						unoptimized
						priority
					/>
				</div>

				{/* Left Decorative Motive Image */}
				<Image
					src="/motive-bottom-right.svg"
					alt="Motive"
					width={320}
					height={200}
					className={"absolute bottom-30 left-20 rotate-90 -z-1 hidden lg:block"}
				/>

				{/* Center Image */}
				<div className={`${animationClasses} py-30`}>
					<Image
						src={images[center].src}
						alt={images[center].description || ""}
						width={500}
						height={500}
						className={`object-cover h-auto w-[800px] max-h-[500px] rounded-2xl z-3 shadow-2xl`}
						priority
						unoptimized
					/>
				</div>

				{/* Right Image */}
				<div>
					<Image
						src={images[right].src}
						alt={images[right].description || ""}
						width={420}
						height={300}
						className="object-cover shadow-lg rounded-lg aspect-[14/10] h-auto w-[420px] hidden md:block"
						unoptimized
						priority
					/>
				</div>

				{/* Right Decorative Motive Image */}
				<Image
					src="/motive-bottom-right.svg"
					alt="Motive"
					width={320}
					height={200}
					className={"absolute top-20 right-10 -rotate-90 -z-20 hidden md:block"}
				/>
			</div>

			<button
				onClick={next}
				disabled={!!animatingDirection}
				aria-label="Next"
				className={`transition-all duration-200 z-2 text-3xl text-primary-900 mx-3`}>
				&#8594;
			</button>
			{/* Explore Button */}
			<div className="absolute bottom-10 z-2 left-1/2 md:left-1/3 transform -translate-x-1/2">
				<LinkButton href={"/gallery"}>Nézd meg mindet!</LinkButton>
			</div>
		</div>
	);
};

export default Carousel;
