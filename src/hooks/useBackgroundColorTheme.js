import { useColorMode } from "@chakra-ui/react"

const useBackgroundColorTheme = (darkColor, lightColor) => {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? darkColor : lightColor
}

export default useBackgroundColorTheme
