import resolveConfig from "tailwindcss/resolveConfig"
import { TailwindConfig } from "tailwindcss/tailwind-config"

let finalTailwind: TailwindConfig

export const initializeTailwindTheme = (config: TailwindConfig) => {
  finalTailwind = resolveConfig(config)
}

const getTheme = () => finalTailwind

export type ThemeKeyType = keyof typeof finalTailwind.theme
export type ThemeSpacingKey = keyof typeof finalTailwind.theme.spacing
export default getTheme
