import React from "react"
// chakra-ui
import { Flex } from "@chakra-ui/react"
import SubFooter from "components/_molecules/SubFooter"
import TopFooter from "components/_molecules/TopFooter"

/**
 * Footer Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente footer de la aplicacion
 */
const Footer = () => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      w="100%"
      mt={4}
      boxShadow="lg"
    >
      <TopFooter />
      <SubFooter />
    </Flex>
  )
}

export default Footer
