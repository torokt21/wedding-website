"use client";

import { useEffect, useState } from "react";

import { Ephesis } from "next/font/google";
import React from "react";

const ephesis = Ephesis({
	subsets: ["latin"],
	weight: "400",
	style: "normal",
});

export default function Countdown() {
	const targetDate = new Date(2026, 5, 26, 16, 0, 0).getTime();
	const [timeLeft, setTimeLeft] = useState<number>(targetDate - Date.now());

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = Date.now();
			const distance = targetDate - now;
			setTimeLeft(distance);
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	if (timeLeft < 0) {
		return <p className={`${ephesis.className} text-5xl`}>A Boldogító igen már elérkezett!</p>;
	}

	return (
		<div className="bg-[#e6f0e9] rounded-3xl p-8 max-w-xl mx-auto text-center relative">
			<p
				className={`${ephesis.className} absolute top-[-1.4rem] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl text-nowrap`}>
				A Boldogító igenre <span className="hidden md:inline">még</span> ennyit kell
				várnunk:
			</p>
			<div className="flex justify-center gap-8">
				<div className="bg-primary-400 rounded-3xl py-6 w-25 md:w-32 relative">
					<p className="text-4xl md:text-4xl font-serif">{days}</p>
					<p
						className={`${ephesis.className} text-4xl italic font-[cursive] absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2`}>
						Nap
					</p>
				</div>
				<div className="bg-[#bcd0c0] rounded-3xl px-8 py-6 w-25 md:w-32 relative">
					<p className="text-4xl md:text-4xl font-serif">{hours}</p>
					<p
						className={`${ephesis.className} text-4xl italic font-[cursive] absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2`}>
						Óra
					</p>
				</div>
				<div className="bg-[#bcd0c0] rounded-3xl px-8 py-6 w-25 md:w-32 relative">
					<p className="text-4xl md:text-4xl font-serif">{minutes}</p>
					<p
						className={`${ephesis.className} text-4xl italic font-[cursive] absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2`}>
						Perc
					</p>
				</div>
				<div className="bg-[#bcd0c0] rounded-3xl px-8 py-6 w-32 hidden md:block relative">
					<p className="text-4xl md:text-4xl font-serif">{seconds}</p>
					<p
						className={`${ephesis.className} text-4xl italic font-[cursive] absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2`}>
						Másodperc
					</p>
				</div>
			</div>
		</div>
	);
}
