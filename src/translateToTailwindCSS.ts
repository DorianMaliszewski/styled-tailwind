import tailwindProperties from "./properties"
import { isValidValue } from "./tailwindPropertiesHandlers"

export const getComputedPropertyClassName = (key: string, value: any) => {
  const property = tailwindProperties.find(([propName]) => {
    if (typeof propName === "string") {
      if (key === propName) {
        return true
      }
    } else if (Array.isArray(propName)) {
      if (propName.includes(key)) {
        return true
      }
    }
    return undefined
  })
  if (property && isValidValue(property[2], value, key)) {
    const [, compute] = property
    if (typeof compute === "string") {
      return typeof value === "boolean" ? `${compute}` : `${compute}-${value}`
    }
    if (typeof compute === "function") {
      return `${compute(value)}`
    }
  }
  return ""
}

const translateToTailwindCSS = (styles: any) => {
  if (!styles) {
    return ""
  }
  return Object.entries(styles).reduce((className, [key, value]: any) => {
    if (!className.endsWith(" ")) {
      className += " "
    }
    className += getComputedPropertyClassName(key, value)
    return className
  }, "")
}
export default translateToTailwindCSS
