import Link from "next/link";
import { Title } from "../ui/Title";
import { socialLinks } from "../constants/constants";

export function Links() {
  return (
    <div className="flex flex-col max-w-[480px] pb-6 w-full">
      <Title text="Links 🔗" />
      <div className="border-l-2 border-secondary pl-5 text-justify flex flex-col gap-4">
        {socialLinks.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            target="_blank"
            className="hover:underline w-fit"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
