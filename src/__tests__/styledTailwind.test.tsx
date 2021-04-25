import React from "react"
import { render } from "@testing-library/react"
import styledTailwind from "../styledTailwind"
import { initializeTailwindTheme } from "../getTheme"
import { TailwindConfig } from "tailwindcss/tailwind-config"

describe("styledTailwind", () => {
  test("should render correctly", async () => {
    const StyledDiv = styledTailwind("div", "text-sm hidden text-black")

    render(<StyledDiv />)
  })

  test("should render correctly with props", async () => {
    const StyledDiv = styledTailwind("div", "text-sm hidden text-black")

    render(<StyledDiv display="block" border />)
  })

  test("should render correctly with props", async () => {
    initializeTailwindTheme({} as TailwindConfig)
    const StyledDiv = styledTailwind("div", {
      textSize: "sm",
      display: "hidden",
      textColor: "black",
      flexWrap: true,
      flexDirection: "column",
    })

    render(
      <StyledDiv display="block" border>
        Test
      </StyledDiv>
    )
  })
})
