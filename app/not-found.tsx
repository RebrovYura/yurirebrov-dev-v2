import { ContentBox, ContentTitle, ContentWrapper } from "./ui/Content";
import PageTransition from "./ui/Motion/PageTransition";
import { StyledButton } from "./ui/StyledButton";

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
        <StyledButton href="/">Return to home</StyledButton>
      </div>
    </PageTransition>
  );
}
