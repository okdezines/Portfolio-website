'use client';

import { readFile } from 'fs';
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function About() {
	const { ref, inView } = useInView();

	console.log(inView)

	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
			ref={ref}
		>
			<SectionHeading> About me</SectionHeading>
			<p className="mb-3">
				After graduating with a degree in
				<span className="font-medium"> Creative Technologies</span>, I decided to pursue my passion for web
				technologies. I enrolled in a coding bootcamp and learned
				<span className="font-medium"> full-stack web development</span>.
				<span className="italic"> Originating from a graphic design background, </span> has landed my interest
				in the frontend aspect of development. I
				<span className="underline"> love</span> to create solutions that provide a positive outcome especially
				that must be visually stimulating. My more familiar core stacks are
				<span className="font-medium text-[#1e8dd7]"> React.js, Next.js, Node.js, MongoDB, CSS. </span>
				I am also familiar with TypeScript and Vanilla Js. I am currently looking for a
				<span className="font-medium"> full-time position</span> as a software developer.
			</p>
			<p>
				<span className="italic"> When I'm not coding</span>, I enjoy playing my guitar, video games and
				watching movies. I also enjoy
				<span className="font-medium"> learning new things</span>. I am currently learning about
				<span className="font-medium"> UX/UI design</span>.
			</p>
		</motion.section>
	);
}
