import Breadcrumb from "@/app/ui/Breadcrumb";
import {
  ContentImage,
  ContentLink,
  ContentList,
  ContentSubTitle,
  ContentTitle,
} from "@/app/ui/Content";
import { MotionDiv } from "@/app/ui/Motion/MotionClient";
import PageTransition from "@/app/ui/Motion/PageTransition";
import Link from "next/link";

import signup from "@/public/works/chatApp/signup.png";
import mainPage from "@/public/works/chatApp/main.png";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb>Chat App</Breadcrumb>
      <ContentTitle text="Welcome to the Chat App!" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentImage src={signup} alt="Sign Up page" />
        <ContentImage src={mainPage} alt="Main page" />
      </div>
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        exit="exit"
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <ContentSubTitle text="This project has the following features" />
        <ContentList>
          <li>Login/Register an account;</li>
          <li>Find friends using search;</li>
          <li>Write messages.</li>
        </ContentList>
      </MotionDiv>
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        exit="exit"
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <ContentSubTitle text="Stack" />
        <ContentList>
          <li>
            <ContentLink href="https://vitejs.dev/">Vite+React</ContentLink> -
            Vite is a build tool that aims to provide a faster and leaner
            development experience for modern web projects.
          </li>
          <li>
            <ContentLink href="https://tailwindcss.com/">
              Tailwindcss
            </ContentLink>{" "}
            - Tailwind CSS is an open source CSS framework.
          </li>
          <li>
            <ContentLink href="https://chakra-ui.com/">Chakra UI</ContentLink> -
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications.
          </li>
          <li>
            <ContentLink href="https://firebase.google.com/">
              Firebase
            </ContentLink>{" "}
            - Firebase is an app development platform that helps you build and
            grow apps and games users love. Backed by Google and trusted by
            millions of businesses around the world.
          </li>
        </ContentList>
      </MotionDiv>
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        exit="exit"
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <ContentSubTitle text="Source" />
        <ContentList>
          <li>
            <Link
              href="https://github.com/RebrovYura/chat-app"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </Link>
          </li>
        </ContentList>
      </MotionDiv>
    </PageTransition>
  );
}
