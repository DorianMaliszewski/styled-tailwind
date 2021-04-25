import { TailwindConfig } from "tailwindcss/tailwind-config"
import getTheme, { initializeTailwindTheme } from "../getTheme"
import testConfig from "./mock/tailwind.config"

describe("getTheme", () => {
  test("should have good default value", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    const theme = getTheme()
    expect(theme.theme.colors).toBeDefined()
    expect((theme.theme.colors as any).primary).toBeUndefined()
  })

  test("should have good default value", async () => {
    initializeTailwindTheme((testConfig as unknown) as TailwindConfig)
    const theme = getTheme()
    expect(theme.theme.colors).toBeDefined()
    expect((theme.theme.colors as any).primary).toBeDefined()
  })
})
