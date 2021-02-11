import React, { useEffect, useState, useContext } from "react"
// chakra-ui
import { Box, Flex } from "@chakra-ui/react"
// utils
import { handleItemCount } from "utils"
// context
import { CartContext } from "context"
// components
import MenuItemProduct from "components/MenuItemProduct"

/**
 * CartItemList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que lista los items agregados al carrito en la Cart page
 */
const CartItemList = () => {
  const {
    cartItems,
    // cleanCart,
    deleteItemFromCart,
  } = useContext(CartContext)
  const [items, setItems] = useState([])

  useEffect(() => setItems(handleItemCount(cartItems)), [cartItems])

  /**
   * renderItemsCart
   * @function
   * @description render listado de items agregados al carrito bajo con design=2
   */
  const renderItemsCart = () => {
    return items.map((item, index) => {
      return (
        <Box key={index} w="50%">
          <MenuItemProduct
            design={2}
            item={item}
            onDelete={() => deleteItemFromCart(item)}
          />
        </Box>
      )
    })
  }

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="flex-start"
      wrap="nowrap"
      w="100%"
    >
      {renderItemsCart()}
    </Flex>
  )
}

export default CartItemList
