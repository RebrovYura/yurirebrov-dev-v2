import { ILinks, ISocialLinks, IWorks } from "../lib/types";
import { FaGithub, FaTelegram, FaArtstation } from "react-icons/fa";

import converter from "@/public/thumbs/converter.png";
import chat from "@/public/thumbs/chat.png";
import expenseTracker from "@/public/thumbs/expense-tracker.png";
import modernWebsite from "@/public/thumbs/modern-website.png";

export const links: ILinks[] = [
    // { name: "Home", url: "/" },
  { name: "Works", url: "/works" },
  { name: "Posts", url: "/posts" },
  { name: "Source", url: "https://github.com/RebrovYura", target: "_blank" },
];

export const socialLinks: ILinks[] = [
  { name: "GitHub", url: "https://github.com/RebrovYura" },
  { name: "Telegram", url: "https://t.me/davenli" },
  {
    name: "ArtStation",
    url: "https://www.artstation.com/yurirebrov",
  },
];

export const works: IWorks[] = [
  {
    title: "Converter App",
    url: "converter",
    img: converter,
    tags: [{ name: "react" }, { name: "api" }],
  },
  {
    title: "Chat App",
    url: "chat",
    img: chat,
    tags: [{ name: "react" }, { name: "firebase" }],
  },
  {
    title: "Expense Tracker App",
    url: "expense-tracker",
    img: expenseTracker,
    tags: [{ name: "vue" }],
  },
  {
    title: "Modern Website",
    url: "modern-website",
    img: modernWebsite,
    tags: [{ name: "react" }],
  },
];
