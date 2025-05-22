import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
});

export default function Navbar() {
	return (
		<div className="bg-primary text-xl">
			<Container>
				<nav className="flex items-center justify-between">
					<Logo />
					<ul
						className={`${cormorant.className} flex space-x-4 uppercase hidden md:flex py-5`}>
						<li>
							<Link href="/" className="hover:text-gray-400">
								Helyszín
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-gray-400">
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
						className="rounded-full my-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto uppercase">
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
			<Image src="/dinnyeskuvo.svg" alt="Dinnyesküvő" width={150} height={200} />
		</Link>
	);
}
