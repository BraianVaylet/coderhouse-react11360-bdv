import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import NavBar from "../../components/NavBar"

/**
 * Layout Container
 * @component
 */
const Layout = ({ children }) => (
  <Flex direction="column" justify="flex-start" align="center">
    <NavBar />
    <Flex
      w="100%"
      h="100vh"
      mt="5rem"
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
  /** children component */
  children: PropTypes.element.isRequired,
}

export default Layout
