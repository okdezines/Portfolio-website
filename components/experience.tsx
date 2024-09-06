
'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Experience() {
    return (

        <section id="experience" className='scroll-mt-28'>
            <SectionHeading>My Experience</SectionHeading>

            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                                border: "1px solid rgba(94, 96, 99, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h2 className="font-semibold capitalize">{item.title}</h2>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-750'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}