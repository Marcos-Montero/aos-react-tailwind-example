"use client";

import Aos from "aos-react-tailwind";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Row } from "./components/Row";

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
        {[1, 2, 3].map((n) => (
          <Row key={n}>
            <Aos
              className={(inView) => [
                "shadow-2xl rounded-xl p-4 bg-transparent duration-1000 bg-white",
                inView &&
                  "animate-shake repeat-1 border-y-[16px] border-y-orange-300",
              ]}
            >
              <Header />
            </Aos>
            <Content />
          </Row>
        ))}
      </div>
    </>
  );
}
