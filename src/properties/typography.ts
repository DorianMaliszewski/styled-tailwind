import { handleReturnValue } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import isValidColor from "../validators/isValidColor";
import isValidOpacity from "../validators/isValidOpacity";
import { TailwindPropertyType } from ".";

const typography: TailwindPropertyType[] = [
  ["fontFamilty", "font", ["sans", "serif", "mono"]],
  ["fontSize", "text", [isKeyInThemeProperty("fontSize")]],
  ["fontSmoothing", handleReturnValue, ["antialiased", "subpixel-antialised"]],
  ["fontStyle", handleReturnValue, ["italic", "not-italic"]],
  ["fontWeight", "font", [isKeyInThemeProperty("fontWeight")]],
  [
    ["fontNumeric", "fontVariantNumeric"],
    handleReturnValue,
    [
      "normal-nums",
      "ordinal",
      "slashed-zero",
      "lining-nums",
      "oldstyle-nums",
      "proportional-nums",
      "tabular-nums",
      "diagonal-fractions",
      "stacked-fractions",
    ],
  ],
  ["letterSpacing", "tracking", [isKeyInThemeProperty("letterSpacing")]],
  [["lineHeight", "leading"], "leading", [isKeyInThemeProperty("lineHeight")]],

  ["listStyle", "list", ["none", "disc", "decimal"]],
  ["listStylePosition", "list", ["inside", "outside"]],

  ["placeholderColor", "placeholder", [isValidColor]],
  ["placeholderOpacity", "placeholder-opacity", [isValidOpacity]],

  ["textAlign", "text", ["left", "right", "center", "justify"]],
  [["textColor", "color"], "text", [isValidColor]],
  ["textOpacity", "text-opacity", [isValidOpacity]],
  [
    "textDecoration",
    handleReturnValue,
    ["underline", "line-through", "no-underline"],
  ],
  [
    "textTransform",
    handleReturnValue,
    ["uppercase", "lowercase", "capitalize", "normal-case"],
  ],
  [
    "textOverflow",
    handleReturnValue,
    ["truncate", "overflow-ellipsis", "overflow-clip"],
  ],
  [
    "verticalAlign",
    "align",
    ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"],
  ],
  [
    "whitespace",
    "whitespace",
    ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
  ],
  ["wordBreak", "break", ["normal", "words", "all"]],
];

export default typography;
