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

import heroSection from "@/public/works/modern-website/1.png";
import featuresSection from "@/public/works/modern-website/2.png";
import clientsSection from "@/public/works/modern-website/3.png";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb>Expense Tracker App</Breadcrumb>
      <ContentTitle text="Welcome to the Modern Website Lending!" />
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
          <li>The project has a beautiful and modern design;</li>
          <li>All blocks on the page are conveniently structured;</li>
          <li>Created using modern technology.</li>
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
            <ContentLink href="https://github.com/RebrovYura/modern-website">
              GitHub
            </ContentLink>
          </li>
        </ContentList>
        <ContentSubTitle text="Preview" />
        <div className="grid grid-cols-1 gap-2 place-items-center">
          <ContentImage src={heroSection} alt="Hero section" />
          <ContentImage src={featuresSection} alt="Features Section" />
          <ContentImage src={clientsSection} alt="Clients section" />
        </div>
      </MotionDiv>
    </PageTransition>
  );
}
