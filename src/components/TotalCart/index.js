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
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total = total + cartItems[i].price
    }
    return total
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
