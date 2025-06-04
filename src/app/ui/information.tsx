import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function Information() {
	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-15">
				<div className="order-2 xl:order-1">
					<RightArticle />
				</div>
				<div className="order-1 xl:order-2">
					<LeftImage />
				</div>
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
				src="/img/home/information-1.jpg"
				alt="Rendezvényterem"
				className="rounded-bl-[100px] md:rounded-bl-[150px] xl:rounded-bl-[200px] z-[-1]"
			/>

			<Image
				width={200}
				height={200}
				src="/img/home/information-2.jpg"
				alt="Levendulás folyosó"
				className="z-10 absolute -bottom-30 left-40 hidden xl:block shadow-xl/30"
			/>

			<Image
				src="/motive-top-left.svg"
				alt="Motive"
				width={200}
				height={200}
				className="absolute -top-10 -right-10.5 xl:-top-15 xl:-right-15 -scale-x-100"
			/>

			<Image
				src="/motive-bottom-right.svg"
				alt="Motive"
				width={200}
				height={200}
				className="absolute -bottom-10 left-0 overflow-hidden -scale-x-100"
			/>
		</div>
	);
}

function RightArticle() {
	return (
		<div className="xl:mt-23">
			<p className="text-primary-500 text-sm font-bold uppercase tracking-[0.3em]">
				Tudnivalók
			</p>
			<h1
				className={`text-3xl xl:text-5xl font-bold ${cormorant.className} antialiased uppercase my-4`}>
				Mikor? Hova? Meddig?<span className="text-sm">(Mennyit?)</span>
			</h1>

			<p className="text-lg my-4">
				Minden hasznos információt megtalálsz a rendezvényünkről, a helyszínről és a
				menetrendről. A legfontosabb tudnivalókat összegyűjtöttük, hogy majd utólag tudd,
				hogy minek kellett volna történnie.
			</p>

			<Link
				href="/venue"
				className="mt-8 inline-block rounded-full bg-background text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800">
				Tudj meg többet!
			</Link>
		</div>
	);
}
