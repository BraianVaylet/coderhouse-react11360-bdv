// chakra-ui
import { useMediaQuery } from "@chakra-ui/react"
// styles
import { MY_BREAKPOINTS } from "./theme"

export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHex}`
}

export const titleSizeResponsiveMin1280 = (value) => {
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  return mediaQueryMin1280
    ? value.toString() + "rem"
    : (value * 0.5).toString() + "rem"
}

export const setValueResponsiveMin1280 = (value1, value2) => {
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  return mediaQueryMin1280 ? value1 : value2
}
