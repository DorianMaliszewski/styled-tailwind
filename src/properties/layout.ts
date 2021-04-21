import {
  handleMinusLeading,
  handleReturnValue,
} from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const layout: TailwindPropertyType[] = [
  ["container", () => `container`, [true, false]],
  ["decoration", "decoration", ["slice", "clone"]],
  ["boxSizing", "box", ["border", "content"]],
  ["display", handleReturnValue, [() => true]],
  ["float", "float", ["right", "left", "none"]],
  ["clear", "clear", ["left", "right", "both", "none"]],
  ["isolation", handleReturnValue, ["isolate", "isolation-auto"]],
  ["objectFit", "object", ["contain", "cover", "fill", "none", "scale-down"]],
  [
    "objectPosition",
    "object",
    [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
  ],

  [
    "overflow",
    "overflow",
    [
      "auto",
      "hidden",
      "visible",
      "scroll",
      "x-auto",
      "y-auto",
      "x-hidden",
      "y-visible",
      "x-scroll",
      "y-scroll",
    ],
  ],
  ["overflowX", "overflow-x", ["auto", "hidden", "visible", "scroll"]],
  ["overflowY", "overflow-y", ["auto", "hidden", "visible", "scroll"]],

  ["overscroll", "overscroll", ["auto", "contain", "none"]],
  ["overscrollX", "overscroll-x", ["auto", "contain", "none"]],
  ["overscrollY", "overscroll-y", ["auto", "contain", "none"]],

  [
    "position",
    handleReturnValue,
    ["static", "fixed", "absolute", "relative", "sticky"],
  ],
  ["visibility", handleReturnValue, ["visible", "invisible"]],

  ["inset", handleMinusLeading("inset"), [isKeyInThemeProperty("inset")]],
  ["top", handleMinusLeading("top"), [isKeyInThemeProperty("inset")]],
  ["right", handleMinusLeading("right"), [isKeyInThemeProperty("inset")]],
  ["bottom", handleMinusLeading("bottom"), [isKeyInThemeProperty("inset")]],
  ["left", handleMinusLeading("left"), [isKeyInThemeProperty("inset")]],

  ["zIndex", "z", [isKeyInThemeProperty("zIndex")]],
];

export default layout;
