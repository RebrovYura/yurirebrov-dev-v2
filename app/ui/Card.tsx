import Image from "next/image";

import Converter from "@/public/works/converter.png";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";

type CardProps = {
  work_page: string;
};

export function Card({ work_page }: CardProps) {
  return (
    <div className="flex-wrap md:flex-nowrap flex max-w-80 md:max-h-244 md:max-h-80 md:max-w-full w-full gap-5 border-2 rounded-lg shadow-md">
      <Image
        src={Converter}
        width={320}
        height={100}
        alt="Project image"
        className="m rrounded-t-lg rounded-tr-lg"
      />
      <div className="flex flex-col gap-2 p-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <Title text="Converter App" />
          <div className="flex gap-1">
            <Tag>React</Tag>
            <Tag>React</Tag>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full overflow-auto">
          <p className="py-2">
            This application allows you to transfer from one currency to
            another. Build with ExchangeRate-API.
          </p>
          <LinkButton href={`/${work_page}`}>More details</LinkButton>
        </div>
      </div>
    </div>
  );
}
