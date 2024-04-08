import Link from "next/link";
import { Title } from "../ui/Title";
import { LinkButton } from "../ui/LinkButton";

export function About() {
  return (
    <>
      <div className="flex flex-col max-w-[480px] pb-6">
        <Title text="About me 👋" />
        <div className="border-l-2 border-secondary pl-5 text-justify">
          I&apos;m Yuri Rebrov and I&apos;m a digital creator from Belarus. I
          started learning programming after I entered college in 2016. It was a
          long adventure lasting 4 years. I have gained a huge amount of
          knowledge in a wide variety of areas of software development. I
          started learning with languages such as{" "}
          <span className="important-text">Assembler</span>,{" "}
          <span className="important-text">Pascal</span> and{" "}
          <span className="important-text">Delphi</span>. Then there was{" "}
          <span className="important-text">C#</span> and work with{" "}
          <span className="important-text">SQL</span>.<br /> For all the
          training, I managed to try myself in the development of{" "}
          <span className="important-text">Windows applications</span>,{" "}
          <span className="important-text">game development</span>,{" "}
          <span className="important-text">web development</span>,{" "}
          <span className="important-text">writing algorithms</span>, as well as
          working with <span className="important-text">AR</span>, which became
          the topic of my diploma.
          <br />I am currently studying programming at the university.
        </div>
      </div>
      <LinkButton href="/works">See my projects</LinkButton>
    </>
  );
}
