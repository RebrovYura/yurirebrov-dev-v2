"use client";

import { motion, AnimatePresence } from "framer-motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -50 },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
