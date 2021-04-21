import getTheme from "../getTheme";

const isValidColor = (value: any) => {
  if (typeof value !== "string") {
    return false;
  }
  return Object.entries(getTheme().theme.colors).some(([key, color]) => {
    if (typeof color === "string") {
      return value === key;
    }
    return Object.keys(color).some(
      (shade: string) => `${key}-${shade}` === value
    );
  });
};

export default isValidColor;
