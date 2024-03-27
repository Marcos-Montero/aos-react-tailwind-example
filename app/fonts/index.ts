import { Caveat, Inter } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

export const fonts = {
  caveat,
  inter,
};
