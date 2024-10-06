import localFont from "next/font/local";
import { Source_Code_Pro } from "next/font/google";
import { Zen_Dots } from "next/font/google";

export const MinecraftFont = localFont({
  src: "../fonts/minecraft.ttf",
  weight: "100 900",
  display: "swap",
});

export const sourceCodeProFont = Source_Code_Pro({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const zenDotFont = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});