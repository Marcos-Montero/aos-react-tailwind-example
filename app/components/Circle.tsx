import { PropsWithChildren } from "react";

import Aos from "aos-react-tailwind";

export const Circle = ({ children }: PropsWithChildren) => (
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
