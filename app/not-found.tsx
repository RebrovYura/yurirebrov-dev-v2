import { ContentBox, ContentTitle, ContentWrapper } from "./ui/Content";
import { LinkButton } from "./ui/LinkButton";
import PageTransition from "./ui/Motion/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center mt-6">
        <ContentBox>
          <ContentTitle text="Page Not Found" />
          <ContentWrapper>
            Page you&apos;re looking for was not found.
          </ContentWrapper>
        </ContentBox>
        <LinkButton href="/">Return to home</LinkButton>
      </div>
    </PageTransition>
  );
}
