import Link from "next/link";

export default function LinkButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="mt-8 inline-block rounded-full bg-transparent text-black px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-800 hover:bg-primary-800 hover:text-background">
			{children}
		</Link>
	);
}
