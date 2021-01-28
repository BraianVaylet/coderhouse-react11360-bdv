// react
import React from "react"
import { WiHorizon, WiMoonrise } from "react-icons/wi"
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
      icon={
        colorMode === "light" ? (
          <Icon boxSize="2rem" as={WiMoonrise} />
        ) : (
          <Icon boxSize="2rem" as={WiHorizon} />
        )
      }
    />
  )
}

export default ChangeTheme
