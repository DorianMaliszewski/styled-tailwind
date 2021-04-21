import { handleTrueOrValue } from "../tailwindPropertiesHandlers";
import isKeyInThemeProperty from "../validators/isKeyInThemeProperty";
import isNumber from "../validators/isNumber";
import { TailwindPropertyType } from ".";

const flex: TailwindPropertyType[] = [
  ["flexDirection", "flex", ["row", "row-reverse", "col", "col-reverse"]],
  ["flexWrap", "flex", ["wrap", "wrap-reverse", "nowrap"]],
  ["flex", "flex", [1, "auto", "initial", "none"]],
  ["flexGrow", handleTrueOrValue(`flex-grow`, "0"), [true, false, isNumber]],
  [
    "flexShrink",
    handleTrueOrValue(`flex-shrink`, "0"),
    [true, false, isNumber],
  ],
  ["order", "order", [isKeyInThemeProperty("order")]],
];

export default flex;
