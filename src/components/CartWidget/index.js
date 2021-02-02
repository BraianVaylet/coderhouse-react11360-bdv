import React from "react"
import { MdShoppingCart } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import { Icon, IconButton, Flex, Text } from "@chakra-ui/react"

/**
 * CartWidget Component
 * @component
 */
const CartWidget = ({ onClick = () => {} }) => (
  <IconButton
    variant="ghost"
    size="lg"
    transitionDuration="0.75s"
    transitionProperty="transform"
    _hover={{
      transform: "scale(1.1)",
    }}
    _focus={{
      borderStyle: "none",
    }}
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
