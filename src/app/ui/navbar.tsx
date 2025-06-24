import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "variable",
});

export default function Navbar() {
	return (
		<div className="bg-primary-400 text-xl font-medium sticky top-0 right-0 left-0 z-100">
			<Container>
				<nav className="flex items-center justify-between">
					<Logo />
					<ul
						className={`${cormorant.className} space-x-4 uppercase hidden md:flex py-5`}>
						<li>
							<Link href="/venue" className="hover:text-gray-400">
								Helyszín
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="hover:text-gray-400">
								Galéria
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-gray-400">
								Elérhetőség
							</Link>
						</li>
					</ul>
					<Link
						href="/rsvp"
						className={`${cormorant.className} antialiased rounded-full my-2 border border-primary-800 font-bold text-primary-800 border-solid transition-colors flex items-center bg-primary-500 hover:bg-primary-800 hover:text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto uppercase animate-jump animate-once animate-duration-1000 animate-delay-[5000ms] animate-thrice`}>
						Visszajelzek
					</Link>
				</nav>
			</Container>
		</div>
	);
}

function Logo() {
	return (
		<Link href="/">
			<Image
				src="/dinnyeskuvo.svg"
				className="h-[45px] w-[150px]"
				alt="Dinnyesküvő"
				width={150}
				height={45}
			/>
		</Link>
	);
}
