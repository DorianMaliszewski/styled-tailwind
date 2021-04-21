import getTheme from "../getTheme";

const isValidOpacity = (value: number | string) =>
  Object.keys(getTheme().theme.opacity).some((key) => `${value}` === key);

export default isValidOpacity;
