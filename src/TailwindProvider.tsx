import React from "react"
import { TailwindConfig } from "tailwindcss/tailwind-config"
import resolveConfig from "tailwindcss/resolveConfig"

let finalTailwind: TailwindConfig

export const initializeTailwindTheme = (config: TailwindConfig) => {
  finalTailwind = resolveConfig(config)
}

export type ThemeKeyType = keyof typeof finalTailwind.theme
export type ThemeSpacingKey = keyof typeof finalTailwind.theme.spacing

const TailwindContext = React.createContext<TailwindConfig["theme"]>(
  {} as TailwindConfig["theme"]
)

interface TailwindProviderProps {
  config: TailwindConfig
  children: React.ReactNode
}
const TailwindProvider = ({ config, children }: TailwindProviderProps) => {
  const theme = React.useMemo(() => {
    return resolveConfig(config).theme
  }, [config])

  return (
    <TailwindContext.Provider value={theme}>
      {children}
    </TailwindContext.Provider>
  )
}

export default TailwindProvider
