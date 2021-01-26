import React from "react"
import { MdShoppingCart } from "react-icons/md"
// chakra-ui
import { Button, Icon } from "@chakra-ui/react"

/**
 * CartWidget Component
 * @component
 */
const CartWidget = () => (
  <Button size="lg" variant="ghost">
    <Icon as={MdShoppingCart} boxSize="20px" />
  </Button>
)

export default CartWidget
