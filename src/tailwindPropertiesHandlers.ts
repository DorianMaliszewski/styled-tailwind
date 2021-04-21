export const handleMinusLeading = (prefix: string) => (
  value: string | number
) => {
  return `${value}`.startsWith("-")
    ? `-${prefix}-${`${value}`.substr(1)}`
    : `${prefix}-${value}`
}
export const handleReturnValue = (value: string | number) => {
  return `${value}`
}

export const handleTrueOrValue = (
  prefix: string,
  defaultValue: string = ""
) => (value: boolean | string | number) => {
  if (typeof value === "boolean" && value) {
    return prefix
  } else if (!!value) {
    return `${prefix}-${value}`
  } else {
    return value ? `${prefix}-${value}` : `${defaultValue}`
  }
}

export const isValidValue = (
  possibleValues: any[],
  value: string | number,
  key: string
) => {
  return possibleValues.length
    ? possibleValues.some((possibleValue) => {
        if (
          typeof possibleValue === "string" ||
          typeof possibleValue === "boolean"
        ) {
          return possibleValue === value
        }
        if (typeof possibleValue === "number") {
          return `${possibleValue}` === value
        }
        if (typeof possibleValue === "function") {
          return possibleValue(value)
        }
        console.warn(`${value} is not a valid value for ${key} prop.`)
        return true
      })
    : true
}
