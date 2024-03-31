import { Josefin_Sans, Gothic_A1 } from "next/font/google";

const CustomJosefinSans = Josefin_Sans({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

const CustomGotchicA1 = Gothic_A1({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

export const Font = {
  CustomJosefinSans,
  CustomGotchicA1,
};
