import HomepageSection from "./homepageSection";
import Link from "next/link";

export default function Information() {
	return (
		<HomepageSection
			imageSide="right"
			subheaderText="Tudnivalók"
			title="Mikor? Hova? Meddig?"
			mainImageSrc="/img/home/information-1.jpg"
			secondaryImageSrc="/img/home/information-2.jpg">
			<p className="text-lg">
				Minden hasznos információt megtalálsz a rendezvényünkről, a helyszínről és a
				menetrendről. A legfontosabb tudnivalókat összegyűjtöttük, hogy majd utólag tudd,
				hogy minek kellett volna történnie.
			</p>
			<Link
				href="/venue"
				className="mt-8 inline-block rounded-full bg-background text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800">
				Tudj meg többet!
			</Link>
		</HomepageSection>
	);
}
