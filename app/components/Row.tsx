import { PropsWithChildren } from "react";

import Aos from "aos-react-tailwind";

export const Row = ({ children }: PropsWithChildren) => (
  <Aos
    className={(inView) => [
      "container h-screen snap-center flex flex-wrap items-center gap-16 justify-center opacity-0 flex-col",
      inView && "opacity-1",
    ]}
  >
    {children}
  </Aos>
);
