import Countdown from "./ui/countdown";
import Information from "./ui/information";
import Venue from "./ui/venue";
import Welcome from "./ui/welcome";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pb-30">
				<Countdown />

				<Welcome />

				<Information />

				<Venue />
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
