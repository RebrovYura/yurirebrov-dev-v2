import Image from "next/image";
import avatar from "@/public/me.jpg";

export function Picture() {
  return (
    <Image
      src={avatar}
      width={200}
      height={200}
      alt="Yuri's photo"
      className="rounded-full border-2 border-secondary shadow-custom"
    />
  );
}
