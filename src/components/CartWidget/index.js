import React from "react"
import { MdShoppingCart } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import { Icon, IconButton, Flex, Text } from "@chakra-ui/react"

/**
 * CartWidget Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente carrito con contador
 */
const CartWidget = ({ onClick = () => {} }) => (
  <IconButton
    variant="ghost"
    size="lg"
    p="0 5px"
    onClick={onClick}
    icon={
      <Flex direction="row" align="center">
        <Icon as={MdShoppingCart} boxSize="1.5rem" />
        <Text>(0)</Text>
      </Flex>
    }
  />
)

CartWidget.propTypes = {
  onClick: PropTypes.func,
}

export default CartWidget
