import Link from "next/link";
import { IChildren } from "../lib/types";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumb({ children }: IChildren) {
  return (
    <div className="font-light text-base my-5 flex items-center">
      <Link href="/" className="text-label hover:underline">
        Home
      </Link>
      <span className="inline-block">
        {" "}
        <MdKeyboardArrowRight size={20} className="text-label" />{" "}
      </span>
      <Link href="/works" className="text-label hover:underline">
        Works
      </Link>
      <span className="inline-block">
        {" "}
        <MdKeyboardArrowRight size={20} className="text-label" />{" "}
      </span>
      <span className="text-[18px] text-accent font-semibold">{children}</span>
    </div>
  );
}
