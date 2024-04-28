import Image, { ImageProps } from "next/image";

import Converter from "@/public/works/converter.png";
import { ContentTitle } from "./Content";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";

type CardProps = {
  title: string;
  url: string;
  img: any;
  tags: (string | { name: string })[];
};

export function Card({ title, url, tags, img }: CardProps) {
  return (
    <div className="flex-wrap md:flex-nowrap flex max-w-80 md:max-h-244 md:max-h-80 md:max-w-full w-full gap-5 border-2 rounded-lg shadow-md">
      <Image
        src={img}
        width={320}
        height={100}
        alt={`${title} project image`}
        className="md:rounded-t-lg rounded-tr-lg"
      />
      <div className="flex flex-col gap-2 p-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <ContentTitle text={title} />
          <div className="flex gap-1">
            {tags.map((item) => (
              <Tag key={item.name}>{item.name}</Tag>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between h-full overflow-auto">
          <p className="py-2">
            This application allows you to transfer from one currency to
            another. Build with ExchangeRate-API.
          </p>
          <LinkButton href={`works/${url}`}>More details</LinkButton>
        </div>
      </div>
    </div>
  );
}
