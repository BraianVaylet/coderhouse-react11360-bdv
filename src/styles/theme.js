import { theme as chakraTheme, extendTheme } from "@chakra-ui/react"
import { addOpacityToColor } from "./utils"

// my own breakpoints
export const MY_BREAKPOINTS = {
  BREAK_MAX_400: "(max-width: 400px)",
  BREAK_MIN_1280: "(min-width: 1280px)",
}

export const TOOLTIP_TIME = 250

// my chakra theme
const theme = extendTheme({
  ...chakraTheme,
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "2vh",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
        scrollBehavior: "smooth",
        minHeight: "100vh",
        minWidth: "100wh",
        backgroundImage: `radial-gradient(${addOpacityToColor(
          "#2564f7",
          0.5
        )} 1px, transparent 1px)`,
        backgroundPosition: "0 0 25px 25px",
        backgroundSize: "50px 50px",
        padding: "0",
        margin: "0",
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.200",
      },
      a: {
        color: props.colorMode === "dark" ? "blue.300" : "blue.500",
      },
    }),
  },
  fonts: {
    ...chakraTheme.fonts,
    body:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
  },
  size: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    l: "2.5rem",
    xl: "3rem",
  },
  colors: {
    withOpacity: {
      gray: {
        800: addOpacityToColor("#1A202C", 0.75),
      },
      white: addOpacityToColor("#FFFFFF", 0.75),
    },
    brand: {
      primary: "#2564f7",
      secundary: "#67a9f0",
    },
  },
})

export default theme
