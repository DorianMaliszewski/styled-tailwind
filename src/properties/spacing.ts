import { handleMinusLeading } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import { TailwindPropertyType } from ".";

const spacing: TailwindPropertyType[] = [
  [
    ["padding", "p"],
    handleMinusLeading("p"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingTop", "pt"],
    handleMinusLeading("pt"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingRight", "pr"],
    handleMinusLeading("pr"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingBottom", "pb"],
    handleMinusLeading("pb"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingLeft", "pl"],
    handleMinusLeading("pl"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingY", "py"],
    handleMinusLeading("py"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["paddingX", "px"],
    handleMinusLeading("px"),
    [isKeyInThemeProperty("spacing")],
  ],

  [["margin", "m"], handleMinusLeading("m"), [isKeyInThemeProperty("spacing")]],
  [
    ["marginTop", "mt"],
    handleMinusLeading("mt"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["marginRight", "mr"],
    handleMinusLeading("mr"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["marginBottom", "mb"],
    handleMinusLeading("mb"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["marginLeft", "ml"],
    handleMinusLeading("ml"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["marginY", "my"],
    handleMinusLeading("my"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["marginX", "mx"],
    handleMinusLeading("mx"),
    [isKeyInThemeProperty("spacing")],
  ],

  [
    ["spaceY", "sy"],
    handleMinusLeading("space-y"),
    [isKeyInThemeProperty("spacing")],
  ],
  [
    ["spaceX", "sx"],
    handleMinusLeading("space-x"),
    [isKeyInThemeProperty("spacing")],
  ],
];

export default spacing;
