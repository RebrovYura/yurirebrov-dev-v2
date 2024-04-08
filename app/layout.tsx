import type { Metadata } from "next";
import { imb_plex_mono } from "./ui/fonts";
import "./globals.css";
import { AnimatePresenceProvider, MotionDiv } from "./ui/Motion/MotionClient";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";

export const metadata: Metadata = {
  title: "Homepage | Yuri Rebrov",
  description: "Yuri's personal space",
  authors: [{ name: "Yuri Rebrov", url: "https://github.com/RebrovYura" }],
  creator: "Yuri Rebrov",
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -50 },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${imb_plex_mono.className} bg-slate-50 relative`}>
        <AnimatePresenceProvider mode="wait" initial={true}>
          <MotionDiv
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
            className="mt-0 md:mt-20 md:max-w-5xl mx-auto md:rounded-t-xl bg-primary min-h-screen shadow-xl flex flex-col relative"
          >
            <Header />
            <div className="py-9 px-8 grow relative">{children}</div>
            <Footer />
          </MotionDiv>
        </AnimatePresenceProvider>
      </body>
    </html>
  );
}
