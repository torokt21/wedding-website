import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function Venue() {
	return (
		<Container>
			<div className="flex flex-col md:flex-row gap-6 flex-wrap">
				<LeftImage />
				<RightArticle />
			</div>
		</Container>
	);
}

function LeftImage() {
	return (
		<div className="relative w-full xl:w-1/2">
			<Image
				width={6000}
				height={6000}
				src="/venue-dining.jpg"
				alt="Rendezvényterem"
				className="rounded-br-[200px] z-[-1]"
			/>
			<Image
				width={200}
				height={200}
				src="/venue-cozy.jpg"
				alt="Rendezvényterem"
				className="z-10 absolute -bottom-40 right-40 hidden xl:block"
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
		<div>
			<h1 className={`text-3xl font-bold ${cormorant.className} antialiased uppercase`}>
				Várunk a Levendulásban
			</h1>

			<p className="text-lg mt-4">
				A Boldogító Igenre 2026. június 26-án kerül sor Inárcson.
			</p>
		</div>
	);
}
