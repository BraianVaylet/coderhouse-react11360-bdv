import { theme as chakraTheme, extendTheme } from "@chakra-ui/react"

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
    brand: {
      primary: "#2564f7",
      secundary: "#67a9f0",
    },
  },
})

export default theme
