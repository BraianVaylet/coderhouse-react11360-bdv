import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Badge } from "@chakra-ui/react"
// context
import { CartContext } from "context"

/**
 * CartCount Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente contador de elementos en el carrito
 */
const CartCount = ({ item }) => {
  const { cartItems } = useContext(CartContext)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => handleItemCount(), [cartItems])

  /**
   * handleItemCount
   * @function
   * @description cuento cuantos elemntos como item hay en el carrito
   */
  const handleItemCount = () => {
    const counts = {}
    const idArr = cartItems.map((item) => item.id)
    for (let i = 0; i < idArr.length; i++) {
      if (idArr[i] === item.id) {
        const num = idArr[i]
        counts[num] = counts[num] ? counts[num] + 1 : 1
        setCartCount(counts[num])
      }
    }
    if (!idArr.includes(item.id)) setCartCount(0)
  }

  return (
    <Badge
      variant="subtle"
      colorScheme="green"
      fontSize="xl"
      fontWeight="bold"
      boxShadow="0.25rem 0.25rem"
    >
      🛒 ({cartCount || 0})
    </Badge>
  )
}

CartCount.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default CartCount
