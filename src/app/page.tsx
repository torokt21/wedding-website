import Countdown from "./ui/countdown";
import HomepageSection from "./ui/homepageSection";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pb-30">
				<Countdown />

				<HomepageSection
					imageSide="left"
					subheaderText="Hili hali halihó"
					title="Üdvözlünk a Dinnyesküvő weboldalán!"
					mainImageSrc="/img/home/welcome-1.jpg"
					secondaryImageSrc="/img/home/welcome-2.jpg">
					Mi is nagyon izgatottak vagyunk, hogy megoszthatjuk veletek ezt a különleges
					napot! Ezen a weboldalon megtaláljátok a legfontosabb tudnivalókat a nagy
					napról, és egy kis ízelítőt a helyszínről is, valamint választ kaphattok a
					legégetőbb kérdésekre, mint például, hogy hova kell menni, mikorra, és mégis mi
					az a Dinnyesküvő.
				</HomepageSection>

				<HomepageSection
					imageSide="right"
					subheaderText="Tudnivalók"
					title="Mikor? Hova? Meddig?"
					mainImageSrc="/img/home/information-1.jpg"
					secondaryImageSrc="/img/home/information-2.jpg">
					<p className="text-lg">
						Minden hasznos információt megtalálsz a rendezvényünkről, a helyszínről és a
						menetrendről. A legfontosabb tudnivalókat összegyűjtöttük, hogy majd utólag
						tudd, hogy minek kellett volna történnie.
					</p>
					<Link
						href="/venue"
						className="mt-8 inline-block rounded-full bg-background text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800">
						Tudj meg többet!
					</Link>
				</HomepageSection>

				<HomepageSection
					imageSide="left"
					subheaderText="A helyszín"
					title="Vár a Levendulás"
					mainImageSrc="/img/home/venue-1.jpg"
					secondaryImageSrc="/img/home/venue-2.jpg">
					<p className="text-lg my-4">
						Esküvőnk helyszíne a hangulatos Levendulás lesz Inárcson — egy
						természetközeli, varázslatos kert, ahol a szertartás és a lagzi is egy
						helyen lesz. A nyugalom, a levendulák és a nyári este tökéletes díszletet
						adnak a Dinnyesküvőnek.
					</p>

					<Link
						href="/venue"
						className="mt-8 inline-block rounded-full bg-background text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800">
						Tudj meg többet!
					</Link>
				</HomepageSection>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
