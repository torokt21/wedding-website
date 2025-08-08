"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import ImageModal from "../ui/imageModal";
import data from "./data";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

function GalleryContent() {
	const images = data;
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

	// Handle URL parameter on component mount
	useEffect(() => {
		const imageParam = searchParams.get("image");
		if (imageParam) {
			const imageIndex = parseInt(imageParam, 10);
			if (imageIndex >= 0 && imageIndex < images.length) {
				setSelectedImageIndex(imageIndex);
			}
		}
	}, [searchParams, images.length]);

	const openModal = (index: number) => {
		setSelectedImageIndex(index);
		router.push(`/gallery?image=${index}`, { scroll: false });
	};

	const closeModal = () => {
		setSelectedImageIndex(null);
		router.push("/gallery", { scroll: false });
	};

	const goToNext = () => {
		if (selectedImageIndex !== null) {
			const nextIndex = (selectedImageIndex + 1) % images.length;
			setSelectedImageIndex(nextIndex);
			router.push(`/gallery?image=${nextIndex}`, { scroll: false });
		}
	};

	const goToPrevious = () => {
		if (selectedImageIndex !== null) {
			const prevIndex = selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
			setSelectedImageIndex(prevIndex);
			router.push(`/gallery?image=${prevIndex}`, { scroll: false });
		}
	};

	return (
		<div>
			<Container className="py-16">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1
						className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-4`}>
						Galéria
					</h1>
					<p className="text-lg text-primary-800 max-w-2xl mx-auto">
						Itt találod a kedvenc közös képeinket. Kattints a képekre a nagyításhoz!
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-10">
					{images.map((image, index) => (
						<div key={index} className="aspect-square">
							<Image
								src={image.src}
								width={500}
								height={500}
								alt={image.description}
								className="object-cover rounded-lg shadow-lg aspect-square cursor-pointer"
								onClick={() => openModal(index)}
							/>
						</div>
					))}
				</div>
			</Container>

			{/* Image Modal */}
			{selectedImageIndex !== null && (
				<ImageModal
					src={images[selectedImageIndex].src}
					alt={images[selectedImageIndex].description}
					isOpen={selectedImageIndex !== null}
					onClose={closeModal}
					onNext={goToNext}
					onPrevious={goToPrevious}
				/>
			)}
		</div>
	);
}

export default function GalleryPage() {
	return (
		<Suspense fallback={<div className="text-center py-10">Töltés...</div>}>
			<GalleryContent />
		</Suspense>
	);
}
