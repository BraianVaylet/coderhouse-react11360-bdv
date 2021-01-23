import { theme as chakraTheme, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  ...chakraTheme,
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
        scrollBehavior: "smooth",
        minHeight: "100vh",
        minWidth: "100wh",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
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
})

export default theme
