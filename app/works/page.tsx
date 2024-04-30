import { works } from "../constants/constants";
import Breadcrumb from "../ui/Breadcrumb";
import { Card } from "../ui/Card";
import PageTransition from "../ui/Motion/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 place-items-center">
        {works.map((item) => (
          <Card
            key={item.title}
            img={item.img}
            title={item.title}
            tags={item.tags}
            url={item.url}
          />
        ))}
      </div>
    </PageTransition>
  );
}
