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
import CartItemList from "components/_organisms/CartItemList"
import Header from "components/_organisms/Header"
import HelmetSEO from "components/_atoms/HelmetSEO"

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
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.cart")}
        description={t("HelmetSEO.description.cart")}
      />
      <Flex
        p={4}
        mt={8}
        direction="column"
        align="center"
        justify="center"
        w={setValueResponsiveMin1280("72.5%", "100%")}
      >
        <Header />
        <Flex
          w="100%"
          minH={setValueResponsiveMin1280("80vh", "100%")}
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
      </Flex>
    </>
  )
}

export default Cart
