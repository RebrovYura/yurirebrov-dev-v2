import Link from "next/link";
import { ContentBox, ContentTitle, ContentWrapper } from "../ui/Content";
import { socialLinks } from "../constants/constants";

export function Links() {
  return (
    <ContentBox>
      <ContentTitle text="Links 🔗" />
      <ContentWrapper>
        <div className="flex flex-col gap-4">
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
      </ContentWrapper>
    </ContentBox>
  );
}
