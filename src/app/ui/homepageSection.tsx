import AnimationOnScroll from "./animationOnScroll";
import Container from "./container";
import { Cormorant } from "next/font/google";
import Image from "next/image";
import clsx from "clsx";

const cormorant = Cormorant({
	subsets: ["latin"],
	style: "normal",
	weight: "600",
});

type HomepageSectionProps = {
	subheaderText?: string;
	title: React.ReactNode;
	children?: React.ReactNode;
	imageSide: "left" | "right";
	mainImageSrc: string;
	secondaryImageSrc?: string;
};

export default function HomepageSection(props: HomepageSectionProps) {
	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-15">
				<div className={clsx({ "order-1 xl:order-2": props.imageSide === "right" })}>
					<ImageColumn {...props} />
				</div>
				<div className={clsx({ "order-2 xl:order-1": props.imageSide === "right" })}>
					<ArticleColumn {...props} />
				</div>
			</div>
		</Container>
	);
}

function ImageColumn({ mainImageSrc, secondaryImageSrc, imageSide }: HomepageSectionProps) {
	return (
		<div className="relative xl:mb-20 ">
			<Image
				width={6000}
				height={6000}
				src={mainImageSrc}
				alt="Rendezvényterem"
				className={clsx(`z-[-1]`, {
					"rounded-br-[100px] md:rounded-br-[150px] xl:rounded-br-[200px]":
						imageSide === "left",
					"rounded-bl-[100px] md:rounded-bl-[150px] xl:rounded-bl-[200px]":
						imageSide === "right",
				})}
			/>
			{secondaryImageSrc && (
				<Image
					width={200}
					height={300}
					style={{ width: 200, height: 300 }}
					src={secondaryImageSrc}
					alt=""
					className={clsx(
						`z-10 absolute -bottom-30 hidden xl:block shadow-xl/30 object-cover`,
						{
							"right-40": imageSide === "left",
							"left-40": imageSide === "right",
						}
					)}
				/>
			)}

			<Image
				src="/img/motive-top-left.svg"
				alt="Motive"
				width={284}
				height={268}
				className={clsx("absolute -top-14 origin-[60px_55px] ", {
					"-left-15 scale-50 lg:scale-100": imageSide === "left",
					"-right-55 -scale-x-50 scale-y-50 lg:scale-y-100 lg:-scale-x-100":
						imageSide === "right",
				})}
			/>

			<Image
				src="/img/motive-bottom-right.svg"
				alt="Motive"
				width={200}
				height={188}
				className={clsx("absolute -bottom-10", {
					"-right-2": imageSide === "left",
					"-left-0 -scale-x-100": imageSide === "right",
				})}
			/>
		</div>
	);
}

function ArticleColumn({ subheaderText, title, children, imageSide }: HomepageSectionProps) {
	return (
		<div className="xl:mt-23">
			<div className="text-primary-500 text-sm font-bold uppercase tracking-[0.3em]">
				{subheaderText}
			</div>
			<AnimationOnScroll
				classNameInView={clsx(` animate-ease-out`, {
					[`animate-fade-right`]: imageSide === "left",
					[`animate-fade-left`]: imageSide === "right",
				})}
				classNameNotInView="opacity-0">
				<AnimationOnScroll
					classNameInView="animate-fade-up animate-duration-1000 animate-delay-500"
					classNameNotInView="opacity-0">
					<h1
						className={`text-3xl xl:text-5xl font-bold ${cormorant.className} antialiased uppercase my-4`}>
						{title}
					</h1>
				</AnimationOnScroll>

				<div className="my-4">{children}</div>
			</AnimationOnScroll>
		</div>
	);
}
