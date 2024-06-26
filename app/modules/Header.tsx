"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "../ui/Logo";
import { links } from "../constants/constants";
import { MobileMenu } from "./MobileMenu";
import { IoMenuOutline } from "react-icons/io5";
import { IconButton } from "../ui/IconButton";
import PageTransition from "../ui/Motion/PageTransition";
import { MotionDiv } from "../ui/Motion/MotionClient";

export function Header() {
  const pathname = usePathname();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const toggleMenu = () => {
    setToggleMobileMenu((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center py-9 px-8 border-b relative">
      <Logo />
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target={link?.target}
            className={`hover:underline ${pathname.includes(link.url) ? "underline" : "no-underline"}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <IconButton toggleMenu={toggleMenu}>
        <IoMenuOutline size={30} />
      </IconButton>
      {toggleMobileMenu && <MobileMenu toggleMenu={toggleMenu} />}
    </div>
  );
}
