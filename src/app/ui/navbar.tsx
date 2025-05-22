import { Cormorant, Ephesis } from "next/font/google";

import Container from "./container";
import Link from "next/link";

const ephesis = Ephesis({
	subsets: ["latin"],
	weight: "400",
	style: "normal",
});

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
});

export default function Navbar() {
	return (
		<div className="p-4 bg-primary text-xl">
			<Container>
				<nav className="flex items-center justify-between">
					<Logo />
					<ul className={`${cormorant.className} flex space-x-4 uppercase`}>
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
						className="bg-primary-400 px-4 py-2 rounded-full text-lg hover:bg-primary-500">
						Visszajelzek
					</Link>
				</nav>
			</Container>
		</div>
	);
}

function Logo() {
	return (
		<div className={`${ephesis.className} antialiased text-4xl font-bold`}>
			<Link href="/">Dinnyesküvő</Link>
		</div>
	);
}
