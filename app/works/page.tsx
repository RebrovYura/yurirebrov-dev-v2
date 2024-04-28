import { works } from "../constants/constants";
import { Card } from "../ui/Card";
import BlockTransition from "../ui/Motion/BlockTransition";
import PageTransition from "../ui/Motion/PageTransition";

// import converter from "@/public/thumbs/converter.png";
// import chat from "@/public/thumbs/chat.png";
// import expenseTracker from "@/public/thumbs/expense-tracker.png";
// import modernWebsite from "@/public/thumbs/modern-website.png";

export default function Page() {
  // const works = [
  //   {
  //     title: "Converter App",
  //     url: "converter",
  //     img: converter,
  //     tags: [{ name: "react" }, { name: "api" }],
  //   },
  //   {
  //     title: "Chat App",
  //     url: "chat",
  //     img: chat,
  //     tags: [{ name: "react" }, { name: "firebase" }],
  //   },
  //   {
  //     title: "Expense Tracker App",
  //     url: "expense-tracker",
  //     img: expenseTracker,
  //     tags: [{ name: "vue" }],
  //   },
  //   {
  //     title: "Modern Website",
  //     url: "modern-website",
  //     img: modernWebsite,
  //     tags: [{ name: "react" }],
  //   },
  // ];

  return (
    <PageTransition>
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
