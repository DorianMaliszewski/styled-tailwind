import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const grid: TailwindPropertyType[] = [
  ["gridCols", "grid-cols", [isKeyInThemeProperty("gridTemplateColumns")]],
  ["gridRows", "grid-rows", [isKeyInThemeProperty("gridTemplateRows")]],
  [
    "gridColSpan",
    "col-span",
    [
      (value: any) =>
        isKeyInThemeProperty("gridColumn")(
          value === "auto" ? "auto" : `span-${value}`
        ),
    ],
  ],
  [
    "gridRowSpan",
    "row-span",
    [
      (value: any) =>
        isKeyInThemeProperty("gridRow")(
          value === "auto" ? "auto" : `span-${value}`
        ),
    ],
  ],
  ["gridColStart", "col-start", [isKeyInThemeProperty("gridColumnStart")]],
  ["gridRowStart", "row-start", [isKeyInThemeProperty("gridRowStart")]],
  ["gridColEnd", "col-end", [isKeyInThemeProperty("gridColumnEnd")]],
  ["gridRowEnd", "row-end", [isKeyInThemeProperty("gridRowEnd")]],
  ["gridFlow", "grid-flow", ["row", "col", "row-dense", "col-dense"]],
  ["gridAutoCols", "auto-cols", [isKeyInThemeProperty("gridAutoColumns")]],
  ["gridAutoRows", "auto-rows", [isKeyInThemeProperty("gridAutoRows")]],
  ["gap", "gap", [isKeyInThemeProperty("gap")]],
];

export default grid;
