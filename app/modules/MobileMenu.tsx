import { usePathname } from "next/navigation";
import { links } from "../constants/constants";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IconButton } from "../ui/IconButton";
import { MotionDiv } from "../ui/Motion/MotionClient";

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 },
};

export type MobileMenuProps = {
  toggleMenu: () => void;
};

export function MobileMenu({ toggleMenu }: MobileMenuProps) {
  const pathname = usePathname();
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, type: "easeInOut" }}
      className="absolute z-10 w-3/6 top-0 right-0 h-96 p-8 shadow-2xl rounded-lg bg-primary flex flex-col"
    >
      <div className="flex justify-end">
        <IconButton toggleMenu={toggleMenu}>
          <IoClose size={30} />
        </IconButton>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 h-full">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target={link?.target}
            className={`${pathname.includes(link.url) ? "underline" : "no-underline"}`}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="text-center text-slate-500">Yuri Rebrov</div>
    </MotionDiv>
  );
}
