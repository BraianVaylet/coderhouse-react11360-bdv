import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import NavBar from "../../components/NavBar"

/**
 * Layout Container
 * @component
 * @author Braian D. Vaylet
 * @description Contenedor Layout, incluye la NavBar y contiene al router
 */
const Layout = ({ children }) => (
  <Flex direction="column" justify="flex-start" align="center">
    <NavBar />
    <Flex
      w="100%"
      minH="100vh"
      mt="3.5rem"
      p="1rem"
      zIndex="10"
      align="center"
      direction="column"
      justify="center"
    >
      {children}
    </Flex>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
