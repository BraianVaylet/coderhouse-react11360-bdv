import React, { useContext } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Badge, Flex, Text } from "@chakra-ui/react"
// context
import { CartContext } from "context"
// utils
import { handleDiscuount, handleTotalPrice } from "utils"

/**
 * TotalCart Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que te retorna el precio total de todos los productos del carrito.
 */
const TotalCart = ({ title, withDiscount, ...props }) => {
  const { cartItems } = useContext(CartContext)

  return !withDiscount ? (
    <Text {...props}>
      {title} ${handleTotalPrice(cartItems)}
    </Text>
  ) : (
    <Flex direction="column" align="flex-end" justify="flex-start">
      <Text {...props}>
        {title} ${handleDiscuount(handleTotalPrice(cartItems))[0]}
      </Text>
      <Flex as={Flex} direction="row" align="center">
        <Text fontSize=".8rem" textDecoration="line-through">
          $({handleTotalPrice(cartItems)}){" "}
        </Text>
        <Badge colorScheme="purple" ml={2} fontSize=".8rem">
          -{handleDiscuount(handleTotalPrice(cartItems))[1] * 100}%
        </Badge>
      </Flex>
    </Flex>
  )
}

TotalCart.defaultProps = {
  title: "",
  withDiscount: false,
}

TotalCart.propTypes = {
  title: PropTypes.string,
  withDiscount: PropTypes.bool,
}

export default TotalCart
