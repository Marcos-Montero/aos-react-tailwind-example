"use client";

import {
  PropsWithChildren,
  useEffect,
} from 'react';

import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { inViewSensor } from 'tailwind-inview';

const Coin = ({ children }: PropsWithChildren) => (
  <div
    className={
      "p-8 rounded-full shadow-2xl flex items-center justify-center delay-500 duration-1000 bg-gradient-radial from-white to-black/50 ring-[12px] ring-orange-300 inview:animate-fade-up"
    }
  >
    {children}
  </div>
);

export default function Home() {
  useEffect(inViewSensor, []);
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="container h-screen snap-center flex flex-wrap items-center gap-16 justify-center flex-col"
          >
            <div
              className={
                "shadow-2xl rounded-xl p-4 bg-transparent bg-white h-0 overflow-hidden border-y-orange-300 duration-1000 items-center flex flex-col inview:animate-shake inview:border-y-[16px] blur-sm inview:blur-none inview:h-36"
              }
            >
              <h1 className="text-2xl font-bold text-white inview:text-black">
                className=&quot;inview:X&quot;
              </h1>
              <h3 className="italic text-white inview:text-gray-500 text-center text-lg">
                npm i tailwind-inview
              </h3>
              <Link href="https://github.com/Marcos-Montero/tailwind-inview">
                <Github
                  size={36}
                  className="hover:scale-105 inview:animate-wiggle-more "
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
              <Coin>
                <Image src="wand.svg" alt="wand" width={75} height={75} />
              </Coin>
              <Coin>
                <Image src="shield.svg" alt="shield" width={75} height={75} />
              </Coin>
              <Coin>
                <Image src="sword.svg" alt="sword" width={75} height={75} />
              </Coin>
              <Coin>
                <Image src="bow.svg" alt="bow" width={75} height={75} />
              </Coin>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
