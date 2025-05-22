import Countdown from "./ui/countdown";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Countdown />
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
