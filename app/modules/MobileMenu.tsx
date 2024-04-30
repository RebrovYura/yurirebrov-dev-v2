import { usePathname } from "next/navigation";
import { links } from "../constants/constants";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IconButton } from "../ui/IconButton";

export type MobileMenuProps = {
  toggleMenu: () => void;
};

export function MobileMenu({ toggleMenu }: MobileMenuProps) {
  const pathname = usePathname();
  return (
    <div className="absolute z-10 w-3/6 top-0 right-0 h-screen p-8 shadow-2xl bg-primary flex flex-col">
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
    </div>
  );
}
