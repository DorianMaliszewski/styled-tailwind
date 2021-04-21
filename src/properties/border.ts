import { handleTrueOrValue } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import isValidOpacity from "../validators/isValidOpacity";
import { TailwindPropertyType } from ".";

const border: TailwindPropertyType[] = [
  [
    "border",
    handleTrueOrValue("border"),
    [true, isKeyInThemeProperty("borderWidth")],
  ],
  [
    "borderTop",
    handleTrueOrValue("border-t"),
    [true, isKeyInThemeProperty("borderWidth")],
  ],
  [
    "borderRight",
    handleTrueOrValue("border-r"),
    [true, isKeyInThemeProperty("borderWidth")],
  ],
  [
    "borderBottom",
    handleTrueOrValue("border-b"),
    [true, isKeyInThemeProperty("borderWidth")],
  ],
  [
    "borderLeft",
    handleTrueOrValue("border-l"),
    [true, isKeyInThemeProperty("borderWidth")],
  ],
  ["borderColor", "border", [isKeyInThemeProperty("borderColor")]],
  ["borderOpacity", "border-opacity", [isValidOpacity]],
  ["borderStyle", "border", ["solid", "dashed", "dotted", "double", "none"]],

  [
    ["rounded", "borderRadius"],
    "rounded",
    [isKeyInThemeProperty("borderRadius")],
  ],

  ["divideX", "divide-x", [true, isKeyInThemeProperty("divideWidth")]],
  ["divideY", "divide-y", [true, isKeyInThemeProperty("divideWidth")]],
  ["divideColor", "divide", [isKeyInThemeProperty("divideColor")]],
  ["divideOpacity", "divide-opacity", [isValidOpacity]],
  ["divideStyle", "divide", ["solid", "dashed", "dotted", "double", "none"]],

  [["ringW", "ringWidth"], "ring", [isKeyInThemeProperty("ringWidth")]],
  ["ringColor", "ring", [isKeyInThemeProperty("ringColor")]],
  ["ringOpacity", "ring-opacity", [isKeyInThemeProperty("ringOpacity")]],
  [
    ["ringOffsetWidth", "ringOffsetW"],
    "ring-offset",
    [isKeyInThemeProperty("ringOffsetWidth")],
  ],
  ["ringOffsetColor", "ring-offset", [isKeyInThemeProperty("ringOffsetColor")]],
];

export default border;
