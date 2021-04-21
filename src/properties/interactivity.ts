import { handleTrueOrValue } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const interactivity: TailwindPropertyType[] = [
  ["appearanceNone", () => `appearance-none`, [true]],
  ["cursor", "cursor", [isKeyInThemeProperty("cursor")]],
  ["outline", "outline", [isKeyInThemeProperty("outline")]],
  ["pointerEvents", "pointer-events", ["none", "auto"]],
  ["resize", handleTrueOrValue("resize"), [true, "y", "x", "none"]],
  [["userSelect", "select"], "select", ["none", "text", "all", "auto"]],
];

export default interactivity;
