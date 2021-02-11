import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// Context
import { CartContext } from "context"
// styles
import { CustomShadow, setValueResponsiveMin1280 } from "styles/utils"
// components
import CartItemList from "components/CartItemList"

/**
 * Cart page
 * @component
 * @author Braian D. Vaylet
 * @description Componente Page para el carrito.
 */
const Cart = () => {
  const { cartItems } = useContext(CartContext)
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      w={setValueResponsiveMin1280("72.5%", "100%")}
      minH={setValueResponsiveMin1280("80vh", "100%")}
      h={setValueResponsiveMin1280("80vh", "100%")}
      bgColor={backgroundColor}
      boxShadow={CustomShadow}
      p={4}
    >
      <Tabs w="100%">
        <TabList>
          <Tab>
            {t("Cart.cart")} ({cartItems.length})
          </Tab>
          <Tab>{t("Cart.saves")}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <CartItemList />
          </TabPanel>
          <TabPanel>
            <p>Proximamente!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Cart
