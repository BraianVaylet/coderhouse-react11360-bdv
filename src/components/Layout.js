import React from 'react'
import PropTypes from 'prop-types'
// chakra-ui
import { Flex } from '@chakra-ui/react'
// components
import NavBar from './NavBar'

/**
 * Layout Component
 * @component
 */
const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
    >
      <NavBar />
      {children}
    </Flex>
  )
}

Layout.propTypes = {
  /** children component */
  children: PropTypes.element.isRequired
}

export default Layout
