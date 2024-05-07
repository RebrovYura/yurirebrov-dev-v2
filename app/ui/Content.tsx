import Image from "next/image";
import { IChildren } from "../lib/types";
import Link from "next/link";

type ContentTitleProps = {
  text: string;
};

interface IContentImage {
  src: any;
  alt: string;
}

interface IContentLink {
  href: string;
  children: React.ReactNode;
}

export function ContentWrapper({ children }: IChildren) {
  return (
    <div className="border-l-2 border-secondary pl-5 text-justify">
      {children}
    </div>
  );
}

export function ContentTitle({ text }: ContentTitleProps) {
  return (
    <div className="font-semibold text-3xl pb-3">
      <p>{text}</p>
    </div>
  );
}

export function ContentSubTitle({ text }: ContentTitleProps) {
  return (
    <div className="my-6">
      <p className="text-xl font-semibold border-b-2 text-tertiary">{text}</p>
    </div>
  );
}

export function ContentBox({ children }: IChildren) {
  return (
    <div className="flex flex-col max-w-[480px] pb-6 w-full">{children}</div>
  );
}

export function ContentImage({ src, alt }: IContentImage) {
  return (
    <Image
      src={src}
      alt={alt}
      className="rounded-[10px] max-w-[720px] w-full"
    />
  );
}

export function ContentList({ children }: IChildren) {
  return <ul className="list-disc flex flex-col gap-y-3 pl-8">{children}</ul>;
}

export function ContentLink({ href, children }: IContentLink) {
  return (
    <Link href={href} className="font-bold hover:underline">
      {children}
    </Link>
  );
}
