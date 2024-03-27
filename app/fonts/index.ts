import { Cabin, Caveat, Inter } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export const fonts = {
  cabin,
  caveat,
  inter,
};
