import { ILinks, ISocialLinks } from "../lib/types";
import { FaGithub, FaTelegram, FaArtstation } from "react-icons/fa";

export const links: ILinks[] = [
  //   { name: "Home", url: "/" },
  { name: "Works", url: "/works" },
  { name: "Posts", url: "/posts" },
  { name: "Source", url: "https://github.com/RebrovYura", target: "_blank" },
];

export const socialLinks: ILinks[] = [
  { name: "GitHub", url: "https://github.com/RebrovYura" },
  { name: "Telegram", url: "https://t.me/davenli" },
  {
    name: "ArtStation",
    url: "ghttps://www.artstation.com/yurirebrov",
  },
];
