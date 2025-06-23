import HomepageSection from "./homepageSection";

export default function Welcome() {
	return (
		<HomepageSection
			imageSide="left"
			subheaderText="Hili hali halihó"
			title="Üdvözlünk a Dinnyesküvő weboldalán!"
			mainImageSrc="/img/home/welcome-1.jpg"
			secondaryImageSrc="/img/home/welcome-2.jpg">
			Mi is nagyon izgatottak vagyunk, hogy megoszthatjuk veletek ezt a különleges napot! Ezen
			a weboldalon megtaláljátok a legfontosabb tudnivalókat a nagy napról, és egy kis
			ízelítőt a helyszínről is, valamint választ kaphattok a legégetőbb kérdésekre, mint
			például, hogy hova kell menni, mikorra, és mégis mi az a Dinnyesküvő.
		</HomepageSection>
	);
}
