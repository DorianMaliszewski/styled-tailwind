import { TailwindConfig } from "tailwindcss/tailwind-config"
import { initializeTailwindTheme } from "../getTheme"
import translateToTailwindCSS from "../translateToTailwindCSS"

describe("translateToTailwindCSS", () => {
  test("should translate to tailwind classes", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    const classes = translateToTailwindCSS({
      display: "hidden",
      textColor: "red-500",
      flex: true,
      flexWrap: true,
      flexDirection: "column",
      gridColumn: 3,
      fill: "current",
      stroke: "current",
      container: true,
      appearanceNone: true,
      sr: true,
      screenReaders: "not-sr-only",
    })
    expect(classes).toBe(
      "hidden text-red-500 fill-current stroke-current container appearance-none sr-only not-sr-only"
    )
    const classes2 = translateToTailwindCSS({
      sr: false,
      gridColSpan: "auto",
      gridRowSpan: "auto",
      screenReaders: 2,
      mixBlend: "2",
      bgBlend: "2",
      bgRepeat: "x",
    })
    expect(classes2).toBe(
      "not-sr-only col-span-auto row-span-auto mix-blend-2 bg-blend-2 bg-repeat-x"
    )
  })

  test("should translate to tailwind classes bg", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    let classes = translateToTailwindCSS({
      bgRepeat: "no-repeat",
    })
    expect(classes).toBe("bg-no-repeat")
    classes = translateToTailwindCSS({
      bgRepeat: true,
    })
    expect(classes).toBe("bg-repeat")
  })

  test("should not translate to tailwind classes", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    const classes = translateToTailwindCSS({
      badProperty: "test",
    })
    expect(classes).toBe("")
  })

  test("should not translate to tailwind classes too", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    const classes = translateToTailwindCSS(undefined)
    expect(classes).toBe("")
  })

  test("should compute property classname", async () => {
    initializeTailwindTheme({} as TailwindConfig)
  })
})
