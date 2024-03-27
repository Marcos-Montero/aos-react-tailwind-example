import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import { Scroll } from "./components/scroll";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "tailwind-inview | example",
  description: "tailwind-inview package example by Marcos Montero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.inter.className}>
      <body className="relative w-screen overflow-x-hidden">
        {children}
        <div className="bg" />
        <div className="w-60 h-20 blur-xl bg-purple-500/70 fixed bottom-12 -left-10 rounded-full animate-pulse -rotate-12" />
        <div className="fixed bottom-10 left-0 flex gap-2">
          <h2
            className={cn(
              "text-white text-[60px] -rotate-12",
              fonts.caveat.className
            )}
          >
            Scroll!
          </h2>
          <Scroll size={48} className="animate-pulse duration-1000" />
        </div>
        <div className="w-60 h-20 blur-xl  fixed bottom-12 -right-10 rounded-full rotate-12" />
        <div className="fixed bottom-4 right-10 flex gap-2">
          <h2 className={cn("text-white text-lg ", fonts.caveat.className)}>
            By Marcos Montero{" "}
          </h2>
        </div>
      </body>
    </html>
  );
}
