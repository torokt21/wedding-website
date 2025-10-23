"use client";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function AboutPage() {
	const schedule = [
		{
			time: "16:00",
			title: "Vendégvárás",
			description: "Gyülekezzünk, ismerkedjünk, készüljünk a nagy eseményre",
			icon: "/img/about/welcome.svg",
		},
		{
			time: "17:00",
			title: "Szertartás",
			description: "A boldogító igen kimondása előttetek",
			icon: "/img/about/ceremony.svg",
		},
		{
			time: "17:30",
			title: "Fotózás & Gratulációk",
			description: "A boldog pillanat közös megörökítése",
			icon: "/img/about/photo.svg",
		},
		{
			time: "19:30",
			title: "Vacsora",
			description: "Finom falatok és italok, hogy erőt gyűjtsünk a tánci táncihoz",
			icon: "/img/about/dinner.svg",
		},
		{
			time: "21:00",
			title: "Nyitótánc",
			description: "Az első táncunk friss házasként",
			icon: "/img/about/dance.svg",
		},
		{
			time: "21:30",
			title: "Buli",
			description: "Hajnalig (04:00) tartó mulatozás, menyasszonytánccal és tortázással",
			icon: "/img/about/party.svg",
		},
	];

	return (
		<Container className="py-16">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1
						className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl text-primary-900 mb-4`}>
						Tudnivalók
					</h1>
					<p className="text-xl text-primary-700 mb-2">
						Minden, amit a nagy napról tudnod kell.
					</p>
				</div>

				{/* Schedule Section - Timeline */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-12`}>
						A nap menete
					</h2>
					<div className="max-w-3xl mx-auto">
						<div className="relative">
							{/* Timeline vertical line - positioned through the center of icons */}
							<div className="absolute left-[32px] md:left-[40px] top-0 bottom-0 w-0.5 bg-primary-300"></div>

							{schedule.map((item, index) => (
								<div
									key={index}
									className="relative flex gap-6 md:gap-8 mb-8 last:mb-0">
									{/* Timeline dot and icon */}
									<div className="flex-shrink-0 relative z-10">
										<div className="w-16 h-16 md:w-20 md:h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
											<Image
												src={item.icon}
												alt={item.title}
												width={80}
												height={80}
												className="w-full h-full object-contain rounded-full"
											/>
										</div>
									</div>

									{/* Content */}
									<div className="flex-1 pb-8">
										<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
											<h3
												className={`${cormorant.className} text-2xl md:text-3xl text-primary-900`}>
												{item.title}
											</h3>
											<span className="text-base md:text-lg font-bold text-primary-600 bg-primary-100 px-0 md:px-4 py-1 rounded-full w-fit">
												{item.time}
											</span>
										</div>
										<p className="text-primary-700 text-base md:text-lg">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Quick Link to Venue */}
				<div className="mb-16 p-8 bg-primary-50 rounded-2xl border border-primary-200 text-center">
					<h2
						className={`${cormorant.className} text-2xl md:text-3xl text-primary-900 mb-4`}>
						Hol lesz mindez?
					</h2>
					<p className="text-primary-800 mb-1">
						Ha a helyszínről szeretnél többet megtudni, nézd meg a{" "}
						<Link className="underline" href="/venue">
							Helyszín oldalt
						</Link>
						!
					</p>
				</div>

				{/* Gifts Section - Humorous */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-8`}>
						Ajándék ötletek
					</h2>
					<div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border border-primary-200">
						<div className="flex flex-col md:flex-row gap-8 items-center">
							<div className="flex-shrink-0 text-7xl md:text-8xl">
								<Image
									className="rounded-full bg-primary-600"
									src="/img/about/envelope.svg"
									alt="Envelope"
									width={80}
									height={80}
								/>
							</div>
							<div className="space-y-4 text-primary-800 text-lg text-center md:text-left">
								<p>
									Tudjuk, hogy a hagyományok fontosak, de őszintén szólva: van már
									otthon kenyérpirítónk, sószórónk és tányérkészletünk is.
								</p>

								<p className="font-medium text-primary-900">
									Ezért, ha úgy érzed, hogy megajándékoznál minket, akkor a
									legőszintébben mondjuk: mi nagyon szeretjük a borítékokat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
