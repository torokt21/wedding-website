"use client";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function VenuePage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	// Placeholder venue images - you can replace these with actual Levendulás photos
	const venueImages = [
		{
			src: "/img/venue/venue.jpg",
			alt: "Levendulás bálterem",
			title: "Bálterem",
		},
		{
			src: "/img/venue/levander.jpg",
			alt: "Levendulás kert",
			title: "Levendulamező",
		},
		{
			src: "/img/venue/ceremony.jpg",
			alt: "Ceremónia helyszín",
			title: "Ceremónia",
		},
		{
			src: "/img/venue/welcome.jpg",
			alt: "Állófogadás",
			title: "Fogadás",
		},
	];

	return (
		<Container className="py-16">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1
						className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-4`}>
						Levendulás
					</h1>
					<p className="text-xl text-primary-700 mb-2">Inárcs</p>
					<p className="text-lg text-primary-800 max-w-3xl mx-auto">
						Egy varázslatos helyszín, ahol a levendula illata és a természet szépsége
						körülveszi szerelmünk ünnepét
					</p>
				</div>

				{/* Venue Images Gallery */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-8`}>
						A helyszín
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{venueImages.map((image, index) => (
							<div
								key={index}
								className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
								onClick={() => setSelectedImage(image.src)}>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
									<div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<p className="font-medium">{image.title}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Description Section */}
				<div className="mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2
								className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 mb-6`}>
								Miért választottuk a Levendulást?
							</h2>
							<div className="space-y-4 text-primary-800">
								<p>
									Fú, nem gondoltuk, hogy ezt meg fogjátok kérdezni... Számtalan
									helyszínt megnéztünk, de egyik sem volt az igazi. A Levendulás
									viszont első látásra belopta magát a szívünkbe.
								</p>

								<p>
									Először egy nyílt napon jártunk itt, és már az elejétől kezdve
									szavak nélkül a másikat fürkésztük, hogy vajon a másik is
									ugyanúgy beleszeretett-e. És hát ja.
								</p>
							</div>
						</div>
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
							<Image
								src="/img/home/venue-1.jpg"
								alt="Levendulás esküvői helyszín"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Venue Features */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-12`}>
						A helyszín adottságai
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
							<div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌿</span>
							</div>
							<h3 className={`${cormorant.className} text-xl text-primary-900 mb-2`}>
								Levendulamező
							</h3>
							<p className="text-primary-700">
								Gyönyörű levendulaültetvény, amely természetes díszletként szolgál
							</p>
						</div>
						<div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
							<div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🏛️</span>
							</div>
							<h3 className={`${cormorant.className} text-xl text-primary-900 mb-2`}>
								Elegáns terek
							</h3>
							<p className="text-primary-700">
								De a földön csúszásra is kiválóan alkalmas
							</p>
						</div>
						<div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
							<div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🍽️</span>
							</div>
							<h3 className={`${cormorant.className} text-xl text-primary-900 mb-2`}>
								Kiváló gasztronómia
							</h3>
							<p className="text-primary-700">Brutál jó csülökre készüljetek!</p>
						</div>
					</div>
				</div>

				{/* Map Section */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-8`}>
						Hogyan juthatsz oda?
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="space-y-6">
							<div>
								<h3
									className={`${cormorant.className} text-2xl text-primary-900 mb-4`}>
									Cím és elérhetőség
								</h3>
								<div className="space-y-3 text-primary-800">
									<p>
										<strong>Levendulás Rendezvényhelyszín</strong>
										<br />
										2365 Inárcs
										<br />
										Levendula Major 1-4
									</p>
									<p>
										<strong>Távolság:</strong>
										<br />
										Budapest központjától: ~40 km
										<br />
										Autóval: ~40 perc
										<br />
										<strong>⚠️ Figyelem:</strong> Az M5-ös autópályáról
										lekanyarodva ne fordulj le a földesútra mint a Google Maps
										ajánlja, hanem balra a Bagolyvár irányába!
									</p>
									<div className="text-primary-600">
										Kanadából: ~7918 km
										<br />
										Ausztáliából: ~14875 km
									</div>
								</div>
							</div>
							<div>
								<h3
									className={`${cormorant.className} text-2xl text-primary-900 mb-4`}>
									Parkolás
								</h3>
								<p className="text-primary-800">
									A helyszínen ingyenes parkolási lehetőség áll rendelkezésre
									minden vendég számára. A parkoló közvetlenül a bálterem és a
									ceremónia helyszín mellett található.
								</p>
							</div>
							<div>
								<h3
									className={`${cormorant.className} text-2xl text-primary-900 mb-4`}>
									Tömegközlekedés
								</h3>
								<p className="text-primary-800">
									Inárcs busszal is elérhető Budapestről. A buszmegállótól valaki
									autóval segít majd az odajutásban, kérjük, jelezd erre az igényt
									a visszajelzés során!
								</p>
							</div>
						</div>
						<div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.1663803122833!2d19.302466875895753!3d47.27200201102399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474193b4d5edeccd%3A0x9d68fb5dc92c200b!2zTGV2ZW5kdWzDoXMgLSBFc2vDvHbFkS3DqXMgcmVuZGV6dsOpbnloZWx5c3rDrW4!5e0!3m2!1sen!2shu!4v1757964850153!5m2!1sen!2shu"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Levendulás helyszín térképe"></iframe>
						</div>
					</div>
				</div>

				{/* Contact Info */}
				<div className="text-center bg-primary-100 rounded-2xl p-8 border border-primary-200 text-primary-800 ">
					<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-4`}>
						További információk
					</h3>
					<p className="mb-4">
						Ha kérdésed van a helyszínnel kapcsolatban, vagy segítségre van szükséged az
						odajutásban, ne habozz kapcsolatba lépni velünk!
					</p>
					<p>
						Minden részletet szívesen megbeszélünk a{" "}
						<Link className="underline" href="/contact">
							Kapcsolat oldalon
						</Link>{" "}
						keresztül.
					</p>
				</div>

				{/* Image Modal */}
				{selectedImage && (
					<div
						className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
						onClick={() => setSelectedImage(null)}>
						<div className="relative max-w-4xl max-h-full">
							<Image
								src={selectedImage}
								alt="Venue photo"
								width={800}
								height={600}
								className="object-contain rounded-lg"
							/>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors">
								✕
							</button>
						</div>
					</div>
				)}
			</div>
		</Container>
	);
}
