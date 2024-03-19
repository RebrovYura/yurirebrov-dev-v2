import Link from "next/link";

const links = [
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Posts",
    url: "/posts",
  },
  {
    name: "Source",
    url: "https://github.com/RebrovYura",
  },
];

export function Header() {
  return (
    <div className="flex justify-between">
      {/* Logo */}
      <Link href="/">Logo</Link>
      <div></div>
    </div>
  );
}
