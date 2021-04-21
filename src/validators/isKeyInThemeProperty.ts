import getTheme, { ThemeKeyType } from "../getTheme";

const isKeyInThemeProperty = (
  themeKey: ThemeKeyType,
  isSize: boolean = false
) => (value: string | number | boolean) => {
  const themeObject = getTheme().theme[themeKey] as any;
  if (!themeObject) {
    return false;
  }
  if (typeof themeObject === "object") {
    if (value === true) {
      return !!themeObject.DEFAULT;
    }
    return Object.entries(themeObject).some(([key, themeValue]) => {
      if (!themeValue) {
        return false;
      }
      if (typeof themeValue === "string") {
        return `${key}` === `${value}`;
      }
      if (typeof themeValue === "object") {
        return Object.keys(themeValue!).some((subValue) =>
          isSize
            ? `${subValue}` === `${value}`
            : `${key}-${subValue}` === `${value}`
        );
      }
      return false;
    });
  }
  if (typeof themeObject === "function") {
    return Object.keys(themeObject(getTheme())).some(
      (key) => key === `${value}`
    );
  }
  return false;
};

export default isKeyInThemeProperty;
