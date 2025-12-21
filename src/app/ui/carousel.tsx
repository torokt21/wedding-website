"use client";

import React, { useState } from "react";

import Image from "next/image";
import LinkButton from "./linkButton";
import { cormorant } from "./navbar";
import data from "../gallery/data";

const Carousel: React.FC = () => {
	const [centerIndex, setCenterIndex] = useState(0);
	const images = data.filter((img) => img.showOnHomepage);

	// Calculate indices
	const leftIndex = (centerIndex - 1 + images.length) % images.length;
	const rightIndex = (centerIndex + 1) % images.length;

	const handlePrev = () => {
		setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const handleNext = () => {
		setCenterIndex((prev) => (prev + 1) % images.length);
	};

	return (
		<div className="w-full flex items-center justify-center relative overflow-hidden min-h-[600px] my-5 md:my-25">
			{/* Decorative background */}
			<div className="absolute w-full md:w-2/3 lg:w-1/2 left-0 top-0 h-full bg-primary-600 rounded-0 md:rounded-br-[30%] z-0" />

			{/* Gallery Title */}
			<div
				className={`text-right absolute left-[50%] top-8 z-2 ${cormorant.className} text-6xl translate-x-[-50%] md:translate-x-[-40%] lg:translate-x-[-110%]`}>
				Képeink
			</div>

			{/* Navigation Button - Left */}
			<button
				onClick={handlePrev}
				aria-label="Previous"
				className="duration-200 z-10 text-3xl text-primary-900 mx-3 hover:scale-110 scale-100 cursor-pointer">
				&#8592;
			</button>

			{/* Images Container */}
			<div className="flex items-center gap-0 md:gap-10 z-2">
				{/* Left Image */}
				<div className="hidden md:block relative">
					<img
						src={images[leftIndex].src}
						alt={images[leftIndex].description || ""}
						className="object-cover shadow-lg rounded-lg aspect-[14/10] h-auto w-[420px]"
						loading="lazy"
					/>
					<div className="relative">
						<Image
							src="/img/motive-bottom-right.svg"
							alt="Motive"
							width={320}
							height={200}
							className="absolute -bottom-20 left-0 rotate-90 -z-1 hidden lg:block"
						/>
					</div>
				</div>

				{/* Center Image with fade transition */}
				<div className="py-30 relative">
					<img
						key={centerIndex}
						src={images[centerIndex].src}
						alt={images[centerIndex].description || ""}
						className="object-cover h-auto w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[800px] max-h-[500px] rounded-2xl shadow-2xl aspect-[14/10]"
					/>
				</div>

				{/* Right Image */}
				<div className="hidden md:block relative">
					<img
						src={images[rightIndex].src}
						alt={images[rightIndex].description || ""}
						className="object-cover shadow-lg rounded-lg aspect-[14/10] h-auto w-[420px]"
						loading="lazy"
					/>
					<div className="relative">
						<Image
							src="/img/motive-bottom-right.svg"
							alt="Motive"
							width={320}
							height={200}
							className="absolute bottom-30 right-10 -rotate-90 -z-20 hidden md:block"
						/>
					</div>
				</div>
			</div>

			{/* Navigation Button - Right */}
			{/* Navigation Button - Right */}
			<button
				onClick={handleNext}
				aria-label="Next"
				className="transition-all duration-200 z-10 text-3xl text-primary-900 mx-3 hover:scale-110 scale-100 cursor-pointer">
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
