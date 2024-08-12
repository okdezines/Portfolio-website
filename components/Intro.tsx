"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="flex flex-col items-center sm:w-2/3 lg:w-9/11">
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
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Omphalus </span> and I'm excited
        to get back
        <span className="font-bold"> to web development.</span> I have had
        previous training and experience in{" "}
        <span className="font-bold">Frontend development</span> for webb{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 
      text-lg font-medium"
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          href=""
          className="bg-white px-7 py-3 
          flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a>
        <a
          href="bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full"
        >
          <BsLinkedin />
        </a>
        <a
          href="bg-white p-4 text-gray-700
          flex items-center gap-2 text-[1.35rem] rounded-full"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
