"use client";

import { motion } from "framer-motion";

type BlockTransitionProps = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function BlockTransition({ children }: BlockTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="enter"
      viewport={{ once: true }}
      exit="exit"
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
