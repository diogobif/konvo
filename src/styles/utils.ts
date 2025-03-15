import { FONT_BASE_SIZE_PX } from "./constants";

export const pxToRem = (valueInPx: number): number => {
  return valueInPx / FONT_BASE_SIZE_PX;
};
