'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInVew } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionInVew("Projects", 0.5);


	return (
		<section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
