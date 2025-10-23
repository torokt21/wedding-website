"use client";

import Container from "../ui/container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import LinkButton from "../ui/linkButton";

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
			icon: "/img/about/1.svg",
		},
		{
			time: "17:00",
			title: "Szertartás",
			description: "A ceremónia, ahol hivatalossá válik a szerelmünk",
			icon: "/img/about/2.svg",
		},
		{
			time: "17:30",
			title: "Fotózás & Gratulációk",
			description: "A boldog pillanat közös megörökítése",
			icon: "/img/about/3.svg",
		},
		{
			time: "19:30",
			title: "Vacsora",
			description: "Finom falatok és italok, hogy erőt gyűjtsünk a tánci táncihoz",
			icon: "/img/about/4.svg",
		},
		{
			time: "21:00",
			title: "Nyitótánc",
			description: "Az első táncunk friss házasként",
			icon: "/img/about/5.svg",
		},
		{
			time: "21:30",
			title: "Buli",
			description: "Hajnalig tartó mulatozás, menyasszonytánccal és tortázással",
			icon: "/img/about/6.svg",
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
						Minden, amit tudnod kell a nagy napról
					</p>
				</div>

				{/* Quick Link to Venue */}
				<div className="mb-16 p-8 bg-primary-50 rounded-2xl border border-primary-200 text-center">
					<h2
						className={`${cormorant.className} text-2xl md:text-3xl text-primary-900 mb-4`}>
						Hol lesz mindez?
					</h2>
					<p className="text-primary-800 mb-6">
						Ha a helyszínről szeretnél többet megtudni, nézd meg a Helyszín oldalt!
					</p>
					<LinkButton href="/venue">Helyszín megtekintése</LinkButton>
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

				{/* Gifts Section - Humorous */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-8`}>
						Ajándék ötletek
					</h2>
					<div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border border-primary-200 shadow-lg">
						<div className="flex flex-col md:flex-row gap-8 items-center">
							<div className="flex-shrink-0 text-7xl md:text-8xl">💰</div>
							<div className="space-y-4 text-primary-800 text-lg">
								<p>
									Tudjuk, hogy a hagyományok fontosak, de őszintén szólva: van már
									otthon egy kenyérpirítónk, három robotgépünk (amiket sosem
									használunk), és annyi törülköző, hogy ki tudnánk nyitni egy kis
									wellness központot.
								</p>
								<p>
									Ezért, ha úgy érzed, hogy megajándékoznál minket, akkor a
									legőszintébben mondjuk: egy boríték minket boldogabbá tesz, mint
									bármi más. Azt meg tudjuk mondani, hogy már régóta álmodunk egy
									közös utazásról, és minden fillér közelebb visz minket ahhoz,
									hogy igazi kalandokban legyen részünk.
								</p>
								<p className="font-medium text-primary-900">
									Persze, ha mégis valami kreatívra vágynál: a pénz bármilyen
									formája örömmel fogadott – borítékban, kupában, süteménybe
									rejtve, vagy origami darvak formájában. 😊
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Dress Code Section */}
				<div className="mb-16">
					<h2
						className={`${cormorant.className} text-3xl md:text-4xl text-primary-900 text-center mb-8`}>
						Dress Code
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="text-center p-8 bg-primary-50 rounded-xl border border-primary-200">
							<div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-4xl">👔</span>
							</div>
							<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-3`}>
								Úriembereknek
							</h3>
							<p className="text-primary-700">
								Öltöny vagy elegáns nadrág-ing kombináció. Nyári hőség várható,
								szóval ne aggódj a zakó miatt!
							</p>
						</div>
						<div className="text-center p-8 bg-primary-50 rounded-xl border border-primary-200">
							<div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-4xl">👗</span>
							</div>
							<h3 className={`${cormorant.className} text-2xl text-primary-900 mb-3`}>
								Hölgyeknek
							</h3>
							<p className="text-primary-700">
								Koktélruha vagy elegáns ruha. Kérünk benneteket, kerüljétek a fehér
								színt - az a mi privilégiumunk ezen a napon! 😉
							</p>
						</div>
					</div>
				</div>

				{/* Important Notes */}
				<div className="bg-primary-800 text-white rounded-2xl p-8 md:p-12">
					<h2 className={`${cormorant.className} text-3xl md:text-4xl text-center mb-8`}>
						Fontos információk
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="text-4xl mb-3">🚗</div>
							<h3 className={`${cormorant.className} text-xl mb-2`}>Parkolás</h3>
							<p className="text-primary-100">
								A helyszínen ingyenes parkolási lehetőség áll rendelkezésre
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-3">🌤️</div>
							<h3 className={`${cormorant.className} text-xl mb-2`}>Időjárás</h3>
							<p className="text-primary-100">
								Augusztusi napsütésre számítunk, de fedett terület is van
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-3">📞</div>
							<h3 className={`${cormorant.className} text-xl mb-2`}>Elérhetőség</h3>
							<p className="text-primary-100">
								Bármilyen kérdés esetén keressetek minket a Kapcsolat oldalon
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
