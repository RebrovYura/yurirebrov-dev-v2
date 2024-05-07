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
import mainPage from "@/public/works/expense-tracker/expense-tracker.png";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb>Expense Tracker App</Breadcrumb>
      <ContentTitle text="Welcome to the Expense Tracker App!" />
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
          <li>You can track your your income and expenses;</li>
          <li>Convenient division into 2 columns of income and expenses;</li>
          <li>You can add and delete entries.</li>
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
            <ContentLink href="https://vuejs.org/">Vue.js</ContentLink> - An
            approachable, performant and versatile framework for building web
            user interfaces..
          </li>
          <li>
            <ContentLink href="https://tailwindcss.com/">
              Tailwindcss
            </ContentLink>{" "}
            - Tailwind CSS is an open source CSS framework.
          </li>
          <li>
            <ContentLink href="https://vue-toastification.maronato.dev/">
              Vue Toastification
            </ContentLink>{" "}
            - Light, easy and beautiful toasts.
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
            <ContentLink href="https://github.com/RebrovYura/vue3-expense-tracker">
              GitHub
            </ContentLink>
          </li>
        </ContentList>
        <ContentSubTitle text="Preview" />
        <div className="grid grid-cols-1 gap-2 place-items-center">
          <ContentImage src={mainPage} alt="Main page" />
        </div>
      </MotionDiv>
    </PageTransition>
  );
}
