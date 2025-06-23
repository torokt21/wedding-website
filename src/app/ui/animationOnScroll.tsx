"use client";

import { InView } from "react-intersection-observer";

export default function AnimationOnScroll({
	children,
	classNameInView,
	classNameNotInView,
}: {
	children: React.ReactNode;
	classNameInView: string;
	classNameNotInView: string;
}) {
	return (
		<InView triggerOnce threshold={1}>
			{({ inView, ref }) => (
				<div ref={ref} className={inView ? classNameInView : classNameNotInView}>
					{children}
				</div>
			)}
		</InView>
	);
}
