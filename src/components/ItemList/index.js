import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"

/**
 * ItemList Component
 * @component
 */
const ItemList = ({ greeting }) => <Text>{greeting}</Text>

ItemList.propTypes = {
  /** greeting */
  greeting: PropTypes.string.isRequired,
}

export default ItemList
