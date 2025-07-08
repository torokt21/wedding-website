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
	const [timeLeft, setTimeLeft] = useState<number>(0);

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

		const now = Date.now();
		const distance = targetDate - now;
		setTimeLeft(distance);

		return () => clearInterval(interval);
	}, [targetDate]);

	if (timeLeft < 0) {
		return <></>;
	}

	return (
		<div className="bg-primary-300 mt-10 rounded-3xl px-2 pb-8 max-w-2xl w-full mx-auto text-center relative md:pt-8 animate-fade-down animate-duration-400 animate-delay-100 animate-ease-in">
			<p
				className={`${ephesis.className} md:absolute md:top-[-1.4rem] md:left-1/2 md:transform md:-translate-x-1/2 text-3xl md:text-4xl md:text-nowrap mb-5`}>
				A Boldogító igenre <span className="hidden md:inline">még</span> ennyit kell
				várnunk:
			</p>
			<div className="grid grid-cols-4 gap-2 md:gap-4">
				<DisplayField value={days} label="Nap" />
				<DisplayField value={hours} label="Óra" />
				<DisplayField value={minutes} label="Perc" />
				<DisplayField value={seconds} label="Másodperc" />
			</div>
		</div>
	);
}

function DisplayField({ value, label }: { value: number; label: string }) {
	return (
		<div className="bg-primary-500 rounded-3xl py-6 relative">
			<p className="text-2xl md:text-3xl lg:text-3xl font-serif">{value}</p>
			<p
				className={`${ephesis.className} text-2xl md:text-4xl absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2`}>
				{label}
			</p>
		</div>
	);
}
