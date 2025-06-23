import HomepageSection from "./homepageSection";
import Link from "next/link";

export default function Venue() {
	return (
		<HomepageSection
			imageSide="left"
			subheaderText="A helyszín"
			title="Vár a Levendulás"
			mainImageSrc="/img/home/venue-1.jpg"
			secondaryImageSrc="/img/home/venue-2.jpg">
			<p className="text-lg my-4">
				Esküvőnk helyszíne a hangulatos Levendulás lesz Inárcson — egy természetközeli,
				varázslatos kert, ahol a szertartás és a lagzi is egy helyen lesz. A nyugalom, a
				levendulák és a nyári este tökéletes díszletet adnak a Dinnyesküvőnek.
			</p>

			<Link
				href="/venue"
				className="mt-8 inline-block rounded-full bg-background text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800">
				Tudj meg többet!
			</Link>
		</HomepageSection>
	);
}
