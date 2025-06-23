import "./globals.css";

import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./ui/navbar";

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "👰🍉🤵 - Dinnyesküvő",
	description: "Enikő és Tamás eskövőjének hivatalos weboldala",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta
					name={"viewport"}
					content={
						"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
					}
				/>
			</Head>
			<body className={`${montserrat.className} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
