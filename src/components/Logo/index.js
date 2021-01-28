import React from "react"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
import { LogoIcon } from "assets/icons"

/**
 * Logo Component
 * @component
 */
const Logo = () => (
  <Flex justify="row" align="center" direction="row">
    <LogoIcon boxSize="2rem" mr={2} />
    <Text fontSize="lg" color="primary">
      Aquila
    </Text>
  </Flex>
)

export default Logo
