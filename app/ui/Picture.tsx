import Image from "next/image";

export function Picture() {
  return (
    <Image
      src="/me.jpg"
      width={200}
      height={200}
      alt="Yuri's photo"
      className="rounded-full border-2 border-secondary shadow-custom"
    />
  );
}
