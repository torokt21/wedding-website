import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function Welcome() {
	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-15">
				<LeftImage />
				<RightArticle />
			</div>
		</Container>
	);
}

function LeftImage() {
	return (
		<div className="relative xl:mb-20">
			<Image
				width={6000}
				height={6000}
				src="/img/home/welcome-1.jpg"
				alt="Rendezvényterem"
				className="rounded-br-[100px] md:rounded-br-[150px] xl:rounded-br-[200px] z-[-1]"
			/>
			<Image
				width={200}
				height={200}
				src="/img/home/welcome-2.jpg"
				alt="Levendulás folyosó"
				className="z-10 absolute -bottom-30 right-40 hidden xl:block shadow-xl/30"
			/>

			<Image
				src="/motive-top-left.svg"
				alt="Motive"
				width={200}
				height={200}
				className="absolute -top-10 -left-10.5 xl:-top-15 xl:-left-15"
			/>

			<Image
				src="/motive-bottom-right.svg"
				alt="Motive"
				width={200}
				height={200}
				className="absolute -bottom-10 -right-2 overflow-hidden"
			/>
		</div>
	);
}

function RightArticle() {
	return (
		<div className="xl:mt-23">
			<p className="text-primary-500 text-sm font-bold uppercase tracking-[0.3em]">
				Hili hali halihó
			</p>
			<h1
				className={`text-3xl xl:text-5xl font-bold ${cormorant.className} antialiased uppercase my-4`}>
				Üdvözlünk a Dinnyesküvő weboldalán!
			</h1>

			<p className="text-lg my-4">
				Mi is nagyon izgatottak vagyunk, hogy megoszthatjuk veletek ezt a különleges napot!
				Ezen a weboldalon megtaláljátok a legfontosabb tudnivalókat a nagy napról, és egy
				kis ízelítőt a helyszínről is, valamint választ kaphattok a legégetőbb kérdésekre,
				mint például, hogy hova kell menni, mikorra, és mégis mi az a Dinnyesküvő.
			</p>
		</div>
	);
}
