// react
import React from "react"
// import { WiHorizon, WiMoonrise } from "react-icons/wi"
import { CgSun, CgMoon } from "react-icons/cg"
// chakra-ui
import { useColorMode, Icon, IconButton } from "@chakra-ui/react"

/**
 * ChangeTheme Component
 * @component
 */
const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      size="lg"
      transitionDuration="0.75s"
      transitionProperty="transform"
      _hover={{
        transform: "rotate(360deg) scale(1.25)",
        cursor: "pointer",
      }}
      _focus={{
        borderStyle: "none",
      }}
      icon={
        colorMode === "light" ? (
          <Icon boxSize="1.5rem" as={CgMoon} />
        ) : (
          <Icon boxSize="1.5rem" as={CgSun} />
        )
      }
    />
  )
}

export default ChangeTheme
