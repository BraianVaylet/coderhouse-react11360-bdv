import React, { useContext } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Badge, Flex, Text } from "@chakra-ui/react"
// context
import { CartContext } from "context"
// utils
import { DISCOUNTS } from "utils/constants"

/**
 * TotalCart Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que te retorna el precio total de todos los productos del carrito.
 */
const TotalCart = ({ title, withDiscount, ...props }) => {
  const { cartItems, setTotal } = useContext(CartContext)

  /**
   * handleDiscount
   * @function
   * @description reotrna el valor con un descuento aplicado.
   * @param {number} total
   * @returns {array} total with discount
   */
  const handleDiscuount = (total) => {
    let totalDiscuount = total
    let discount = 0
    for (let i = 0; i < DISCOUNTS.length; i++) {
      totalDiscuount =
        total >= DISCOUNTS[i].limit ? total - total * DISCOUNTS[i].value : total
      discount = DISCOUNTS[i].value
    }
    setTotal(totalDiscuount)
    return [totalDiscuount, discount]
  }

  /**
   * handleTotalPrice
   * @function
   * @description Calculo el total del carrito
   * @returns {number} total
   */
  const handleTotalPrice = () => {
    const initialValue = 0
    return cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    )
  }

  return !withDiscount ? (
    <Text {...props}>
      {title} ${handleTotalPrice()}
    </Text>
  ) : (
    <Flex direction="column" align="flex-end" justify="flex-start">
      <Text {...props}>
        {title} ${handleDiscuount(handleTotalPrice())[0]}
      </Text>
      <Flex as={Flex} direction="row" align="center">
        <Text fontSize=".8rem" textDecoration="line-through">
          $({handleTotalPrice()}){" "}
        </Text>
        <Badge colorScheme="purple" ml={2} fontSize=".8rem">
          -{handleDiscuount(handleTotalPrice())[1] * 100}%
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
