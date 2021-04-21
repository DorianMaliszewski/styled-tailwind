import React from "react"
import { possibleProperties } from "./properties"
import translateToTailwindCSS from "./translateToTailwindCSS"

const styledTailwind = (as: any = "div", styles: any) => {
  const Element = ({ className, children, ...props }: any) => {
    const finalProps = React.useMemo(
      () =>
        Object.entries(props).reduce(
          (acc, [propKey, propValue]) => {
            return possibleProperties.find(
              (possibleProperty) => possibleProperty === propKey
            )
              ? {
                  props: acc.props,
                  tailwindProps: {
                    ...acc.tailwindProps,
                    [propKey]: propValue,
                  },
                }
              : {
                  tailwindProps: acc.tailwindProps,
                  props: {
                    ...acc.props,
                    [propKey]: propValue,
                  },
                }
          },
          {
            props: {} as any,
            tailwindProps: {} as any,
          }
        ),
      [props]
    )
    return React.createElement(
      as,
      {
        className: `${className ?? ""} ${
          typeof styles === "object"
            ? translateToTailwindCSS(styles)
            : `${styles}`
        } ${translateToTailwindCSS(finalProps.tailwindProps)}`
          .trimLeft()
          .trimRight(),
        ...finalProps.props,
      },
      children
    )
  }
  Element.displayName = "StyledTailwind"
  return Element
}

export default styledTailwind
