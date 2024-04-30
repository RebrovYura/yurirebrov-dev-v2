import Breadcrumb from "@/app/ui/Breadcrumb";
import {
  ContentImage,
  ContentList,
  ContentSubTitle,
  ContentTitle,
  ContentWrapper,
} from "@/app/ui/Content";
import { MotionDiv } from "@/app/ui/Motion/MotionClient";
import PageTransition from "@/app/ui/Motion/PageTransition";

import mainPage from "@/public/works/converter.png";
import converterPage from "@/public/works/converter1.png";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb>Converter App</Breadcrumb>
      <ContentTitle text="Welcome to the Converter App!" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentImage src={mainPage} alt="Main page" />
        <ContentImage src={converterPage} alt="Converter page" />
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
          <li>You can convert from one currency to another;</li>
          <li>You can see exchanges rate for select currency;</li>
          <li>Supports light/dark themes.</li>
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
          <li>You can convert from one currency to another;</li>
          <li>You can see exchanges rate for select currency;</li>
          <li>Supports light/dark themes.</li>
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
              href="https://github.com/RebrovYura/currency-converter-app"
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
