"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInVew } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInVew("Home", 0.5);

  // const { ref, inView } = useInView({
  //   threshold: 0.5,type SectionName = typeof links[number]["name"]

  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Home")
  //   }
  // }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section
      ref={ref}
      id="home"
      className=" flex flex-col items-center sm:w-2/3 lg:w-8/11 scroll-mt-[100rem]">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://storage.googleapis.com/image-gallery-2178c.appspot.com/logo.png"
              alt="Ricardo portrait"
              width="202"
              height="202"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.12,
              duration: 0.6,
            }}
          >
            👏
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Gunter. </span> I have experience and training in
        <span className="font-bold"> Fullstack development.</span> My
        <span className="italic ">- niche</span> is in the <span className="text-[#1e8dd7]">Frontend web development and Design</span>. My core stacks are
        <span className="underline"> React and (Next.js) </span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 
      text-lg font-medium"
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
          hover:text-gray-950  
          active:scale-[1.15] transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="bg-white p-4 text-gray-120
          flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
