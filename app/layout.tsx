import type { Metadata } from "next";
import "./globals.css";
import { imb_plex_mono } from "./ui/fonts";
import { Header } from "./modules/Header";

export const metadata: Metadata = {
  title: "Homepage | Yuri Rebrov",
  description: "Yuri's personal space",
  authors: [{ name: "Yuri Rebrov", url: "https://github.com/RebrovYura" }],
  creator: "Yuri Rebrov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${imb_plex_mono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
