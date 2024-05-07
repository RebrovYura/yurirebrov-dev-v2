import Breadcrumb from "../ui/Breadcrumb";
import { ContentTitle } from "../ui/Content";
import PageTransition from "../ui/Motion/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb />
      <ContentTitle text="Posts coming soon 🏃" />
    </PageTransition>
  );
}
