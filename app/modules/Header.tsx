"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "../ui/Logo";
import { links } from "../constants/constants";
import { MobileMenu } from "./MobileMenu";
import { IoMenuOutline } from "react-icons/io5";

export function Header() {
  const pathname = usePathname();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(true);

  const toggleMenu = () => {
    setToggleMobileMenu((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center py-8 border-b relative">
      <Logo />
      <nav className="hidden md:flex gap-5">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className={`${pathname === link.url ? "underline" : "no-underline"}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button className="block md:hidden square-btn" onClick={toggleMenu}>
        <IoMenuOutline size={30} />
      </button>
      {toggleMobileMenu && <MobileMenu toggleMenu={toggleMenu} />}
    </div>
  );
}
