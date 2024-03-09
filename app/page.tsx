"use client";

import { PropsWithChildren } from 'react';

import Aos from 'aos-react-tailwind';
import Image from 'next/image';

const Coin = ({ children }: PropsWithChildren) => (
  <Aos
    className={(inView) => [
      "p-8 rounded-full shadow-2xl opacity-0 flex items-center justify-center duration-[3000ms] bg-gradient-radial from-white to-black/50",
      inView &&
        `animate-coin repeat-1  duration-1000 opacity-1  ring-[12px] ring-orange-300`,
    ]}
    delay={200}
  >
    {children}
  </Aos>
);

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="container h-screen snap-center flex flex-wrap items-center gap-16 justify-center flex-col"
          >
            <Aos
              className={(inView) => [
                "shadow-2xl rounded-xl p-4 bg-transparent duration-1000 bg-white",
                inView &&
                  "animate-shake repeat-1 border-y-[16px] border-y-orange-300",
              ]}
            >
              <h1 className="text-2xl font-bold text-black">
                Animation On Scroll Demo
              </h1>
              <h3 className="italic text-gray-500 text-center text-lg">
                npm i aos-tailwind-react
              </h3>
            </Aos>
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
