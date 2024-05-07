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
    img: "/thumbs/converter.png",
    tags: [{ name: "react" }, { name: "api" }],
    text: "This application allows you to transfer from one currency to another. Build with React and ExchangeRate-API."
  },
  {
    title: "Chat App",
    url: "chat",
    img: "/thumbs/chat.png",
    tags: [{ name: "react" }, { name: "firebase" }],
    text: "This application allows you register/login and to chat with other users. Build with React and Firebase.",
  },
  {
    title: "Expense Tracker",
    url: "expense-tracker",
    img: "/thumbs/expense-tracker.png",
    tags: [{ name: "vue" }],
    text: "Easy to use, convenient tracker for income and expenses. Build with Vue3.",
  },
  {
    title: "Modern Website",
    url: "modern-website",
    img: "/thumbs/modern-website.png",
    tags: [{ name: "react" }],
    text: "Adaptive and modern website for a bank. Build with React.",
  },
];
