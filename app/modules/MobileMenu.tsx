import { usePathname } from "next/navigation";
import { links } from "../constants/constants";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export function MobileMenu({ toggleMenu }) {
  const pathname = usePathname();
  return (
    <div className="absolute w-3/6 top-0 right-0 h-screen p-5 shadow-2xl bg-primary flex flex-col">
      <div className="flex justify-end">
        <button className="square-btn" onClick={toggleMenu}>
          <IoClose size={30} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 h-full">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className={`${pathname === link.url ? "underline" : "no-underline"}`}
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
