import { TailwindConfig } from "tailwindcss/tailwind-config"
import { initializeTailwindTheme } from "../getTheme"
import {
  handleMinusLeading,
  handleReturnValue,
  handleTrueOrValue,
  isValidValue,
} from "../tailwindPropertiesHandlers"

describe("tailwindPropertiesHandlers", () => {
  test("should handleMinusLeading", async () => {
    const result = handleMinusLeading("test")(3)
    const minResult = handleMinusLeading("test")(-3)
    expect(result).toBe("test-3")
    expect(minResult).toBe("-test-3")
  })

  test("should handleReturnValue", async () => {
    const result = handleReturnValue("hidden")
    expect(result).toBe("hidden")
  })

  test("should handleTrueOrValue", async () => {
    const result = handleTrueOrValue("test")(true)
    expect(result).toBe("test")
    const result2 = handleTrueOrValue("test")(3)
    expect(result2).toBe("test-3")
    const result3 = handleTrueOrValue("test", "default")(false)
    expect(result3).toBe("default")
  })

  test("should handle valid value", async () => {
    const originalConsole = console.warn
    const warnFn = jest.fn()
    console.warn = warnFn
    const valid = isValidValue([1, 2, 3], 1, "test")
    expect(valid).toBe(true)
    const invalid = isValidValue([1, 2, 3], 4, "test")
    expect(invalid).toBe(false)
    const bad = isValidValue([{}], 4, "test")
    expect(bad).toBe(true)
    expect(warnFn).toBeCalledTimes(1)

    console.warn = originalConsole
  })
})
