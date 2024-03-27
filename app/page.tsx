"use client";

import { useEffect } from "react";

import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { inViewSensor } from "tailwind-inview";

import { cn } from "@/lib/utils";

import { Arrow } from "./components/arrow";
import { Coin } from "./components/coin";
import { GithubLogo } from "./components/github";
import { fonts } from "./fonts";

export default function Home() {
  useEffect(inViewSensor, []);
  const copyCommand = () => {
    navigator.clipboard.writeText("npm i tailwind-inview");
  };
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="container h-screen snap-center flex flex-wrap items-center gap-16 justify-center flex-col"
          >
            <p
              className={cn(
                "text-white text-[80px] p-0 m-0 text-center",
                fonts.cabin.className
              )}
            >
              As simple as:
            </p>
            <div
              className={
                "shadow-2xl rounded-xl bg-white/40 h-0 overflow-hidden border-y-white duration-1000 px-4 flex items-center justify-between inview:animate-shake inview:border-y-[16px] blur-sm inview:blur-none inview:h-24"
              }
            >
              <code className="text-lg font-bold bg-black rounded-lg text-white px-4 py-2">
                <span className="italic text-blue-200">className</span>=
                <span className="text-orange-400">&quot;inview:X&quot;</span>
              </code>
            </div>
            <button onClick={copyCommand} className="group">
              <h3 className=" text-white/80 text-center text-2xl bg-black/80 rounded-lg px-4 py-2 flex gap-2 items-center">
                npm i<span className=" text-white">tailwind-inview</span>{" "}
                <CopyIcon className="text-white/40 group-hover:text-white/90  duration-300 text-sm ml-4" />
              </h3>
            </button>

            <div className="flex flex-wrap gap-8 justify-center">
              <Coin>Apply styles</Coin>
              <Coin>only when</Coin>
              <Coin>your component</Coin>
              <Coin>is visible</Coin>
            </div>
            <div className="flex gap-4 items-center">
              <div className="overflow-hidden border-r-2 border-white w-0 inview:w-full delay-1000 inview:border-transparent duration-1000 flex gap-2 items-center">
                <p className="text-white text-sm">Docs</p>
                <Arrow size={40} className="text-white rotate-45" />
              </div>
              <Link href="https://github.com/Marcos-Montero/tailwind-inview">
                <GithubLogo
                  size={80}
                  className="p-4 hover:scale-105 inview:animate-wiggle-more"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
