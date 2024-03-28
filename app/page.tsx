"use client";

import { useEffect } from "react";
import { Hero } from "./modules/Hero";
import { About } from "./modules/About";
import { MotionDiv } from "./ui/Motion/MotionDiv";
import { useAnimation, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-32 flex flex-col gap-y-20 items-center">
      <Hero />
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        exit="exit"
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <About />
      </MotionDiv>
    </div>
  );
}
