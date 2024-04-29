"use client";

import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IChildren } from "../lib/types";

export default function Breadcrumb({ children }: IChildren) {
  const pathname = usePathname();
  return (
    <div className="font-light text-base my-5 flex items-center">
      <Link href="/" className="text-label hover:underline">
        Home
      </Link>
      <span className="inline-block">
        {" "}
        <MdKeyboardArrowRight size={20} className="text-label" />{" "}
      </span>
      {pathname.includes("works") ? (
        <Link href={`/works`} className="text-label hover:underline">
          Works
        </Link>
      ) : (
        <Link href={`/posts`} className="text-label hover:underline">
          Posts
        </Link>
      )}
      {children && (
        <>
          <span className="inline-block">
            {" "}
            <MdKeyboardArrowRight size={20} className="text-label" />{" "}
          </span>
          <span className="text-[18px] text-accent font-semibold">
            {children}
          </span>
        </>
      )}
    </div>
  );
}
