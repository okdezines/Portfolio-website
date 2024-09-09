"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from "@/lib/data"
import { useSectionInVew } from '@/lib/hooks'
import { motion } from 'framer-motion'


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 100,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),

};

export default function Skills() {
    const { ref } = useSectionInVew("Skills")

    return (
        <section ref={ref} id="skills" className=" mb-28 scroll-mt-28 max-w-[53rem] scroll=mt-28 text-center sm:mb-40">
            <SectionHeading>My skills</SectionHeading>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        className="bg-white borderBlack rounded-xl px-5 py-2"
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
