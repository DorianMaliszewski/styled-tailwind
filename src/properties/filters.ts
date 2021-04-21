import {
  handleMinusLeading,
  handleTrueOrValue,
} from "../tailwindPropertiesHandlers";
import isValidSize from "../validators/isValidSize";
import { TailwindPropertyType } from ".";
import makeNegativeAndPositiveArray from "./values/makeNegativeAndPositiveArray";

const filters: TailwindPropertyType[] = [
  ["filter", handleTrueOrValue("filter", "none"), [true, false, "none"]],
  ["blur", handleTrueOrValue("blur"), [true, 0, isValidSize]],
  [
    "brightness",
    "brightness",
    [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200],
  ],
  ["contrast", "contrast", [0, 50, 75, 100, 125, 150, 200]],
  ["dropShadow", "drop-shadow", [true, isValidSize, "none"]],
  ["grayscale", handleTrueOrValue("grayscale", "0"), [true, false, 0]],
  [
    "hueRotate",
    handleMinusLeading("hue-rotate"),
    [0, ...makeNegativeAndPositiveArray(180, 90, 60, 30, 15)],
  ],
  ["invert", handleTrueOrValue("invert", "0"), [true, false, 0]],
  ["saturate", "saturate", [0, 50, 100, 150, 200]],
  ["sepia", handleTrueOrValue("sepia", "0"), [true, false, 0]],

  [
    "backdropFilter",
    handleTrueOrValue("backdrop-filter", "none"),
    [true, false, "none"],
  ],
  ["backdropBlur", handleTrueOrValue("backdrop-blur"), [0, true, isValidSize]],
  [
    "backdropBrightness",
    "backdrop-brightness",
    [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200],
  ],
  ["backdropContrast", "backdrop-contrast", [0, 50, 75, 100, 125, 150, 200]],
  [
    "backdropGrayscale",
    handleTrueOrValue("backdrop-grayscale", "0"),
    [true, false, 0],
  ],
  [
    "backdropHueRotate",
    handleMinusLeading("backdrop-hue-rotate"),
    [...makeNegativeAndPositiveArray(180, 90, 60, 30, 15), 0],
  ],
  [
    "backdropInvert",
    handleTrueOrValue("backdrop-invert", "0"),
    [true, false, 0],
  ],
  [
    "backdropOpacity",
    "backdrop-opacity",
    [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100],
  ],
  ["backdropSaturate", "backdrop-saturate", [0, 50, 100, 150, 200]],
  ["backdropSepia", handleTrueOrValue("backdrop-sepia", "0"), [true, false, 0]],
];

export default filters;
