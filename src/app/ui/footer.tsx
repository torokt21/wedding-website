import Container from "./container";
import { Cormorant } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

export default function Footer() {
	return (
		<footer className="bg-primary-600 py-20">
			<Container className="flex items-center gap-2 row-start-3 flex-wrap text-primary-900">
				<div className="w-32 flex-1">
					<p className={`text-xl ${cormorant.className} font-semibold`}>
						Itt lent már nincs semmi, ha maradt kérdésed{" "}
						<Link href="/contact" className="text-primary-700 hover:underline">
							keress minket
						</Link>
						!
					</p>
				</div>
				<div className="flex-1">
					<Link href="/gallery" className="text-sm text-gray-500 hover:underline ">
						Galéria
					</Link>
				</div>
			</Container>
		</footer>
	);
}
