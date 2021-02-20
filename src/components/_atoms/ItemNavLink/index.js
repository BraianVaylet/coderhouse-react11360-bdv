import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// styles
import { COLORS } from "styles/theme"

/**
 * ItemNavLink Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente link con texto
 */
const ItemNavLink = ({ to, text }) => (
  <Flex
    align="center"
    as={NavLink}
    activeStyle={{ color: COLORS.primary }}
    to={to}
  >
    <Text ml={2}>{text}</Text>
  </Flex>
)

ItemNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ItemNavLink
