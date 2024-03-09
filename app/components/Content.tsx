import Image from "next/image";

import { Circle } from "./Circle";

export const Content = () => (
  <>
    <div className="flex flex-wrap gap-8 justify-center">
      <Circle>
        <Image src="wand.svg" alt="wand" width={75} height={75} />
      </Circle>
      <Circle>
        <Image src="shield.svg" alt="shield" width={75} height={75} />
      </Circle>
      <Circle>
        <Image src="sword.svg" alt="sword" width={75} height={75} />
      </Circle>
      <Circle>
        <Image src="bow.svg" alt="bow" width={75} height={75} />
      </Circle>
    </div>
  </>
);
