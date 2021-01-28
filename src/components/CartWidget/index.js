import React from "react"
import { MdShoppingCart } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import { Icon, IconButton } from "@chakra-ui/react"

/**
 * CartWidget Component
 * @component
 */
const CartWidget = ({ onClick = () => {} }) => (
  <IconButton
    variant="ghost"
    size="lg"
    onClick={onClick}
    icon={<Icon as={MdShoppingCart} boxSize="1.5rem" />}
  />
)

CartWidget.propTypes = {
  onClick: PropTypes.func,
}

export default CartWidget
