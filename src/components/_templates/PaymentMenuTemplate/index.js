import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
// chakra-ui
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// utils
import { handleItemCount } from "utils"
// context
import { CartContext, CheckoutContext, NotificationContext } from "context"
// components
import TotalCart from "components/_molecules/TotalCart"
import ItemProductList from "components/_organisms/ItemProductList"
// routes
import { ROUTES } from "routes"

/**
 * PaymentMenuTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con acceso al btn de pago e info de la compra
 */
const PaymentMenuTemplate = () => {
  const { activePayment } = useContext(CheckoutContext)
  const { addNotification } = useContext(NotificationContext)
  const [t] = useTranslation("global")
  const { cartItems, total } = useContext(CartContext)
  const backgroundColorItems = useSetColorTheme("gray.600", "gray.300")
  const [items, setItems] = useState([])

  useEffect(() => setItems(handleItemCount(cartItems)), [cartItems])

  /**
   * renderCartItems
   * @function
   * @description acción del btn comprar
   * @returns {undefined} return ItemProduct component
   */
  const handlePayment = () => {
    const newNotification = {
      items: items,
      date: Date.now(),
      count: cartItems.length,
      total,
    }
    addNotification(newNotification)
  }

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Text fontWeight="bold" fontSize="1.25rem">
        {t("PaymentMenu.resumen")}
      </Text>
      <Divider m="10px 0" />
      <Flex align="center" justify="space-between" w="100%">
        <Text>
          {t("PaymentMenu.products")}({cartItems.length})
        </Text>
        <Text>
          <TotalCart />
        </Text>
      </Flex>
      <Flex align="center" justify="space-between" w="100%">
        <Text>{t("PaymentMenu.shipping")}</Text>
        <Text color="green.200">{t("PaymentMenu.free")}</Text>
      </Flex>
      <Divider m="10px 0" />
      <Flex align="center" justify="space-between" w="100%">
        <Text fontWeight="bold">Total</Text>
        <TotalCart withDiscount />
      </Flex>

      <Flex
        justify="flex-start"
        align="flex-start"
        direction="column"
        bgColor={backgroundColorItems}
        p={4}
        borderRadius="5px"
        w="100%"
        mt={10}
      >
        <ItemProductList data={items} asComponent={Box} />
      </Flex>

      <Flex direction="column" align="center" justify="center" w="100%" mt={10}>
        <Button
          as={Link}
          to={ROUTES.HOME}
          disabled={!activePayment}
          w="100%"
          onClick={handlePayment}
        >
          {t("PaymentMenu.pay")}
        </Button>
        <Box maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px">
          <Text fontSize=".75rem" color="gray.400">
            {t("PaymentMenu.confirmForm")}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default PaymentMenuTemplate
