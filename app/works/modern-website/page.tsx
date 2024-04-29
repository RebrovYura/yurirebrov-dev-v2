import Breadcrumb from "@/app/ui/Breadcrumb";
import { ContentTitle } from "@/app/ui/Content";
import PageTransition from "@/app/ui/Motion/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb>Modern Website</Breadcrumb>
      <ContentTitle text="Welcome to the Modern Website Lending!" />
    </PageTransition>
  );
}
