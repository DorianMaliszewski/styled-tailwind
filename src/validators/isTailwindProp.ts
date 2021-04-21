import { possibleProperties } from "../properties";

const isTailwindProp = (prop: string) => {
  return possibleProperties.find(
    (possibleProperty) => possibleProperty === prop
  )
    ? true
    : false;
};

export default isTailwindProp;
