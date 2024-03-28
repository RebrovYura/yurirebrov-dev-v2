import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/Logo.png";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={LogoImage} height={40} alt="Yuri Rebrov logo image" />
      <span className="text-2xl font-semibold text-secondary">Yuri Rebrov</span>
    </Link>
  );
}
