import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
// Context
import { CartContext } from "context"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// utils
import { handleItemCount } from "utils"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import CartItemList from "components/_organisms/CartItemList"
import ItemProductList from "components/_organisms/ItemProductList"
// routes
import { ROUTES } from "routes"

/**
 * CartTemplate component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Cart Template
 */
const CartTemplate = () => {
  const [t] = useTranslation("global")
  const { cartItems, deleteItemsFromCart } = useContext(CartContext)
  const [items, setItems] = useState([])

  useEffect(() => setItems(handleItemCount(cartItems)), [cartItems])

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="center"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("CartTemplate.title")}
        backTo={ROUTES.HOME}
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <Tabs w="100%">
          <TabList>
            <Tab>
              {t("Cart.cart")} ({cartItems.length})
            </Tab>
            <Tab>{t("Cart.saves")}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel w="100%">
              <CartItemList>
                <ItemProductList
                  data={items}
                  onDelete={deleteItemsFromCart}
                  asComponent={Box}
                  w="100%"
                  mb={8}
                  design={2}
                />
              </CartItemList>
            </TabPanel>
            <TabPanel>
              <p>Proximamente!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Flex>
  )
}

export default CartTemplate
