import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import isValidColor from "../validators/isValidColor";
import isValidOpacity from "../validators/isValidOpacity";
import { TailwindPropertyType } from ".";

const background: TailwindPropertyType[] = [
  [
    ["bgAttachment", "backgroundAttachment"],
    "bg",
    ["fixed", "local", "scroll"],
  ],
  [
    ["bgClip", "backgroundClip"],
    "bg-clip",
    ["border", "padding", "content", "text"],
  ],
  [["bgColor", "backgroundColor"], "bg", [isValidColor]],
  [["bgOpacity", "backgroundOpacity"], "bg-opacity", [isValidOpacity]],
  [
    ["bgPosition", "backgroundPosition"],
    "bg",
    [isKeyInThemeProperty("backgroundPosition")],
  ],
  [
    ["bgRepeat", "backgroundRepeat"],
    (value: any) => {
      if (value === "no-repeat") {
        return `bg-no-repeat`;
      }
      if (!!value === true) {
        return `bg-repeat`;
      }
      return `bg-repeat-${value}`;
    },
    ["no-repeat", true, "x", "y", "round", "space"],
  ],
  [
    ["bgSize", "backgroundSize"],
    "bg",
    [isKeyInThemeProperty("backgroundSize")],
  ],
  [
    ["bgImage", "backgroundImage"],
    "bg",
    [isKeyInThemeProperty("backgroundImage")],
  ],

  ["from", "from", [isKeyInThemeProperty("gradientColorStops")]],
  ["via", "via", [isKeyInThemeProperty("gradientColorStops")]],
  ["to", "to", [isKeyInThemeProperty("gradientColorStops")]],
];

export default background;
