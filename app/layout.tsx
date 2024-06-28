import type { Metadata } from "next";
import { imb_plex_mono } from "./ui/fonts";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuri Rebrov | Front-end Developer",
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
      <body className={`${imb_plex_mono.className} bg-slate-50`}>
        <div className="flex flex-col mt-0 md:mt-20 mx-auto md:max-w-5xl min-h-screen bg-primary shadow-xl rounded-lg">
          <Header />
          <div className="py-9 px-8 grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
