import { handleMinusLeading } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const transform: TailwindPropertyType[] = [
  [["transform"], "transform", [true, "gpu", "none"]],
  [
    ["transformOrigin", "origin"],
    "origin",
    [isKeyInThemeProperty("transformOrigin")],
  ],
  [["transformScale", "scale"], "scale", [isKeyInThemeProperty("scale")]],
  [["transformScaleX", "scaleX"], "scale-x", [isKeyInThemeProperty("scale")]],
  [["transformScaleY", "scaleY"], "scale-y", [isKeyInThemeProperty("scale")]],
  [
    ["transformRotate", "rotate"],
    handleMinusLeading("rotate"),
    [isKeyInThemeProperty("rotate")],
  ],
  [
    ["transformTranslateX", "translateX"],
    handleMinusLeading("translate-x"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["transformTranslateY", "translateY"],
    handleMinusLeading("translate-y"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["transformSkewX", "skewX"],
    handleMinusLeading("skew-x"),
    [isKeyInThemeProperty("skew")],
  ],
  [
    ["transformSkewY", "skewY"],
    handleMinusLeading("skew-y"),
    [isKeyInThemeProperty("skew")],
  ],
];

export default transform;
