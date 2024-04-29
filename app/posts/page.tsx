import Breadcrumb from "../ui/Breadcrumb";
import PageTransition from "../ui/Motion/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb />
      <div>
        <p>Blog</p>
      </div>
    </PageTransition>
  );
}
