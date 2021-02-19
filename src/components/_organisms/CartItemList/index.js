import React, { useEffect, useState, useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Divider, Flex } from "@chakra-ui/react"
// utils
import { handleItemCount } from "utils"
// context
import { CartContext } from "context"
// routes
import { ROUTES } from "routes"
// components
import ItemProduct from "components/_organisms/ItemProduct"
import TotalCart from "components/_molecules/TotalCart"
import ButtonLink from "components/_atoms/ButtonLink"
// styles
import { setValueResponsiveMax600 } from "styles/utils"

/**
 * CartItemList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que lista los items agregados al carrito en la Cart page
 */
const CartItemList = () => {
  const { cartItems, deleteItemsFromCart } = useContext(CartContext)
  const [t] = useTranslation("global")
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
        <Box key={index} w="100%" mb={8}>
          <ItemProduct
            design={2}
            item={item}
            onDelete={() => deleteItemsFromCart(item)}
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
      <Divider />
      <Flex
        align="center"
        justify="flex-end"
        w="100%"
        p={setValueResponsiveMax600(10, 5)}
      >
        <TotalCart
          title="Total: "
          fontSize={setValueResponsiveMax600("1.5rem", "2.5rem")}
          fontWeight="bold"
        />
      </Flex>
      <Divider />
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        align="center"
        justify="flex-end"
        w="100%"
        p={setValueResponsiveMax600(10, 5)}
      >
        <ButtonLink
          to={ROUTES.HOME}
          mr={setValueResponsiveMax600(0, 4)}
          mb={setValueResponsiveMax600(4, 0)}
        >
          {t("CartItemList.keepBuying")}
        </ButtonLink>
        <ButtonLink to={ROUTES.CHECKOUT} bgColor="brand.primary" color="white">
          {t("CartItemList.continueShopping")}
        </ButtonLink>
      </Flex>
    </Flex>
  )
}

export default CartItemList
