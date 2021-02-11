import React from "react"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
import { LogoIconColor } from "assets/icons"

/**
 * Logo Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Logo de la plataforma
 */
const Logo = () => (
  <Flex justify="row" align="center" direction="row">
    <LogoIconColor boxSize="2rem" mr={2} />
    <Text
      fontSize="1.5rem"
      color="primary"
      fontWeight="extrabold"
      fontStyle="italic"
      letterSpacing="1px"
    >
      Aquila
    </Text>
  </Flex>
)

export default Logo
