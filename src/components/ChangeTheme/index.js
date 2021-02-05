// react
import React from "react"
// chakra-ui
import { useColorMode, IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

/**
 * ChangeTheme Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón para cambiar el theme del proyecto Dark-Light
 */
const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      data-testid="ChangeTheme"
      variant="none"
      onClick={toggleColorMode}
      size="lg"
      transitionDuration="0.75s"
      transitionProperty="transform"
      borderRadius="9999px"
      _hover={{
        transform: "rotate(360deg) scale(1.25)",
        cursor: "pointer",
      }}
      _focus={{
        borderStyle: "none",
        backgroundColor: "transparent",
      }}
      icon={
        colorMode === "light" ? (
          <MoonIcon boxSize="1.5rem" />
        ) : (
          <SunIcon boxSize="1.5rem" />
        )
      }
    />
  )
}

export default ChangeTheme
