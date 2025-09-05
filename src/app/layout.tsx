import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的技术博客",
  description: "一个关于技术和极简主义的博客。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">{children}</main>
          <footer className="p-4 border-t text-center text-sm">
            © 2024 我的技术博客
          </footer>
        </div>
      </body>
    </html>
  );
}
