import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// styles
import { COLORS } from "styles/theme"

/**
 * ItemLink Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente link con texto
 */
const ItemLink = ({ to, text }) => {
  return (
    <Flex
      align="center"
      as={NavLink}
      activeStyle={{ color: COLORS.primary }}
      to={to}
    >
      <Text ml={2}>{text}</Text>
    </Flex>
  )
}

ItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ItemLink
