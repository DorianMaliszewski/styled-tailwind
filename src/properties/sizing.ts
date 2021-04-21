import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const sizing: TailwindPropertyType[] = [
  [["width", "w"], "w", [isKeyInThemeProperty("spacing")]],
  [["minW", "minWidth"], "min-w", [isKeyInThemeProperty("minWidth")]],
  [["maxW", "maxWidth"], "max-w", [isKeyInThemeProperty("maxWidth")]],
  [["height", "h"], "h", [isKeyInThemeProperty("spacing")]],
  [["minH", "minHeight"], "min-h", [isKeyInThemeProperty("minHeight")]],
  [["maxH", "maxHeight"], "max-h", [isKeyInThemeProperty("maxHeight")]],
];

export default sizing;
