import { PropsWithChildren, useEffect } from "react";

import { inViewSensor } from "tailwind-inview";

export const Coin = ({ children }: PropsWithChildren) => {
  useEffect(inViewSensor, []);
  return (
    <div
      className={
        "size-48 p-8 rounded-full shadow-2xl flex items-center justify-center delay-500 duration-1000 ring-none ring-white text-transparent inview:ring-[4px] inview:animate-coin inview:text-white"
      }
    >
      {children}
    </div>
  );
};
