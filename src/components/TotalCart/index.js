import React, { useContext } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"
// context
import { CartContext } from "context"

/**
 * TotalCart Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que te retorna el precio total de todos los productos del carrito.
 */
const TotalCart = ({ title, ...props }) => {
  const { cartItems } = useContext(CartContext)

  console.log("props", props)

  /**
   * handleTotalPrice
   * @function
   * @description Calculo el total del carrito
   */
  const handleTotalPrice = () => {
    const initialValue = 0
    return cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    )
  }

  return (
    <Text {...props}>
      {title} ${handleTotalPrice()}
    </Text>
  )
}

TotalCart.propTypes = {
  title: PropTypes.string,
  props: PropTypes.any,
}

export default TotalCart
