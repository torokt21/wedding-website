import Countdown from "./ui/countdown";
import Venue from "./ui/venue";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Countdown />

				<Venue />
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
