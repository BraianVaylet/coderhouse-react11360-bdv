import React from "react"
// chakra-ui
import { Flex, Text, Box } from "@chakra-ui/react"
import { LogoIconColor } from "assets/icons"

/**
 * Logo Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Logo de la plataforma
 */
const Logo = () => (
  <Flex justify="row" align="center" direction="row">
    <Box
      transitionDuration="0.5s"
      transitionProperty="transform"
      transform="scale(1)"
      _hover={{
        transform: "scale(1.25) rotate(10deg)",
      }}
    >
      <LogoIconColor boxSize="2rem" mr={2} />
    </Box>
    <Text fontSize="lg" color="primary">
      Aquila
    </Text>
  </Flex>
)

export default Logo
