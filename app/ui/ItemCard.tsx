import Image from "next/image";
import { ContentTitle } from "./Content";
import { Tag } from "./Tag";
import { StyledButton } from "./StyledButton";

import { IWorks } from "../lib/types";

export function ItemCard({ title, url, tags, img, text }: IWorks) {
  return (
    <div className="flex flex-col sm:flex-row rounded-lg border border-secondary">
      <ItemCardImage img={img} alt={`${title} project image`} />
      <div className="p-3 flex flex-col grow-1">
        <div>
          <ContentTitle text={title} />
          <div className="flex gap-1">
            {tags.map((tag) => (
              <Tag key={tag.name}>{tag.name}</Tag>
            ))}
          </div>
          <p className="py-2">{text}</p>
        </div>
        <StyledButton href={`works/${url}`}>More details</StyledButton>
      </div>
    </div>
  );
}

interface IImage {
  img: string;
  alt: string;
}

export function ItemCardImage({ img, alt }: IImage) {
  return (
    <Image
      src={img}
      alt={alt}
      width={325}
      height={200}
      className="rounded-tl-lg rounded-bl-lg object-cover hidden md:block"
    />
  );
}
