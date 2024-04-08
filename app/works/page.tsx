import { Card } from "../ui/Card";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 place-items-center">
      <Card work_page="/converter" />
      <Card work_page="/converter" />
      <Card work_page="/converter" />
    </div>
  );
}
