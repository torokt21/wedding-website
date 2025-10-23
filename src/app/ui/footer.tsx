import Container from "./container";
import { Cormorant } from "next/font/google";
import Link from "next/link";
import { menuItems } from "./menu-items";

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
				<div className="flex-1 flex gap-2">
					{menuItems.map((item, index) => (
						<div key={item.href} className="flex items-center gap-2">
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-gray-500 hover:underline">
								{item.label}
							</Link>
							{index < menuItems.length - 1 && (
								<span className="text-gray-500">|</span>
							)}
						</div>
					))}
				</div>
			</Container>
		</footer>
	);
}
