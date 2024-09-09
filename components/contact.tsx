"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInVew } from '@/lib/hooks';


export default function Contact() {
    const { ref } = useSectionInVew("Contact")
    return (
        <motion.section
            className='scroll-mt-28 W-[min(100%, 38rem)] text-center'
            id='contact'
            ref={ref}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >

            <SectionHeading>Contact</SectionHeading>
            <p className='text-gray-700 -mt-4'>Please contact me at <a className='underline' href="mailto:haluskua.one@gmail.com">haluskua.one@gmail.com</a> or through this form.</p>
            <form className='flex flex-col mt-10'>
                <input className='h-14 rounded-lg borderBlack '
                    type="email"
                    placeholder='   Your email' />
                <textarea className='h-52 my-3 rounded-lg borderBlack'
                    placeholder='    Your message' />
                <button className='group flex items-center justify-center gap-2 h-[3rem] 
                w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                focus:scale-110 hover:scale-11- hover:bg-gray-950 active:scale-105'
                    type="submit">Submit
                    <FaPaperPlane className='text-xs opacity-70 transition-all
                    group-hover:transition-all group-hover:-translate-y-1' />
                </button>
            </form>
        </motion.section>

    )
}