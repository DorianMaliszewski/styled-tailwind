import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import isValidOpacity from "../validators/isValidOpacity";
import { TailwindPropertyType } from ".";

const effects: TailwindPropertyType[] = [
  [
    ["shadow", "boxShadow"],
    "shadow",
    [isKeyInThemeProperty("boxShadow", true)],
  ],
  ["opacity", "opacity", [isValidOpacity]],
  // TODO : These two properties
  ["mixBlend", "mix-blend", [() => true]],
  [["bgBlend", "backgroundBlend"], "bg-blend", [() => true]],
];

export default effects;
