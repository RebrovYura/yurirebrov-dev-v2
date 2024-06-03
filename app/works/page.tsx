import { works } from "../constants/constants";
import Breadcrumb from "../ui/Breadcrumb";
import { ItemCard } from "../ui/ItemCard";
import PageTransition from "../ui/Motion/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Breadcrumb />
      <div className="flex flex-col items-center sm:items-stretch gap-5 w-full">
        {works.map((item) => (
          <ItemCard
            key={item.title}
            img={item.img}
            title={item.title}
            tags={item.tags}
            url={item.url}
            text={item.text}
          />
        ))}
      </div>
    </PageTransition>
  );
}
