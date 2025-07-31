"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
	src: string;
	alt: string;
	isOpen: boolean;
	onClose: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
}

export default function ImageModal({
	src,
	alt,
	isOpen,
	onClose,
	onNext,
	onPrevious,
}: ImageModalProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			} else if (e.key === "ArrowLeft" && onPrevious) {
				onPrevious();
			} else if (e.key === "ArrowRight" && onNext) {
				onNext();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose, onNext, onPrevious]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-500 flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
			{/* Close button */}
			<button
				onClick={onClose}
				className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-60 cursor-pointer"
				aria-label="Close modal">
				×
			</button>

			{/* Modal content */}
			<div className="relative max-h-screen w-full h-full flex items-center justify-center p-4">
				{/* Previous button */}
				<button
					onClick={onPrevious}
					className="absolute left-4 top-1/2 pb-1 pr-[2px] transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-20 bg-[rgba(0,0,0,0.5)] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
					aria-label="Previous image">
					‹
				</button>

				{/* Next button */}
				<button
					onClick={onNext}
					className="absolute right-4 top-1/2 pb-1 pl-[2px] transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-20 bg-[rgba(0,0,0,0.5)] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
					aria-label="Next image">
					›
				</button>

				{/* Left click area */}
				<div
					className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10 "
					onClick={onPrevious}
					aria-label="Previous image"
				/>

				{/* Right click area */}
				<div
					className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
					onClick={onNext}
					aria-label="Next image"
				/>

				<Image
					src={src}
					alt={alt}
					width={1200}
					height={800}
					className="max-w-full max-h-[90vh] object-contain rounded-lg"
					priority
				/>
			</div>
		</div>
	);
}
