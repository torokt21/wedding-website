"use client";

import React, { useState } from "react";

type CarouselProps = {
	images: { src: string; alt?: string }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
	const [centerIndex, setCenterIndex] = useState(0);

	const prev = () => {
		setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const next = () => {
		setCenterIndex((prev) => (prev + 1) % images.length);
	};

	// Get indices for left, center, right images
	const getIndices = () => {
		const left = (centerIndex - 1 + images.length) % images.length;
		const right = (centerIndex + 1) % images.length;
		return { left, center: centerIndex, right };
	};

	const { left, center, right } = getIndices();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "#f8fcf7",
				minHeight: 500,
				position: "relative",
				overflow: "hidden",
			}}>
			{/* Decorative background */}
			<div
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					width: "60%",
					height: "100%",
					background: "#a8cbb3",
					borderBottomRightRadius: "40%",
					zIndex: 0,
				}}
			/>
			{/* Gallery Title */}
			<div
				style={{
					position: "absolute",
					left: 80,
					top: 60,
					zIndex: 2,
					color: "#7d8b7b",
				}}>
				<div style={{ letterSpacing: 2, fontSize: 14, marginBottom: 10 }}>
					THE WEDDING PARTY
				</div>
				<div style={{ fontSize: 48, fontFamily: "serif", fontWeight: 300 }}>
					OUR GALLERY
				</div>
			</div>
			{/* Carousel Images */}
			<button
				onClick={prev}
				aria-label="Previous"
				style={{
					zIndex: 2,
					background: "none",
					border: "none",
					fontSize: 32,
					cursor: "pointer",
					marginRight: 20,
					color: "#7d8b7b",
				}}>
				&#8592;
			</button>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 40,
					zIndex: 2,
				}}>
				{/* Left Image */}
				<img
					src={images[left].src}
					alt={images[left].alt || ""}
					style={{
						width: 320,
						height: 220,
						objectFit: "cover",
						borderRadius: 8,
						boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
						opacity: 0.7,
						transform: "scale(0.92)",
						transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
					}}
				/>
				{/* Center Image */}
				<img
					src={images[center].src}
					alt={images[center].alt || ""}
					style={{
						width: 420,
						height: 300,
						objectFit: "cover",
						borderRadius: 12,
						boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
						zIndex: 3,
						transform: "scale(1.05)",
						transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
					}}
				/>
				{/* Right Image */}
				<img
					src={images[right].src}
					alt={images[right].alt || ""}
					style={{
						width: 320,
						height: 220,
						objectFit: "cover",
						borderRadius: 8,
						boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
						opacity: 0.7,
						transform: "scale(0.92)",
						transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
					}}
				/>
			</div>
			<button
				onClick={next}
				aria-label="Next"
				style={{
					zIndex: 2,
					background: "none",
					border: "none",
					fontSize: 32,
					cursor: "pointer",
					marginLeft: 20,
					color: "#7d8b7b",
				}}>
				&#8594;
			</button>
			{/* Explore Button */}
			<button
				style={{
					position: "absolute",
					left: 120,
					bottom: 80,
					background: "none",
					border: "1px solid #7d8b7b",
					borderRadius: 24,
					padding: "10px 36px",
					color: "#7d8b7b",
					fontSize: 14,
					letterSpacing: 1,
					cursor: "pointer",
					zIndex: 2,
				}}>
				EXPLORE
			</button>
		</div>
	);
};

export default Carousel;
