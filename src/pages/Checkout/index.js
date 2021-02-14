import React, { useContext, useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
// styles
import { CustomShadow, setValueResponsiveMin1280 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { CartContext } from "context"
// utils
import { handleItemCount } from "utils"
// components
import Header from "components/Header"
import MenuItemProduct from "components/MenuItemProduct"
import TotalCart from "components/TotalCart"

/**
 * Checkout Page
 * @component
 * @author Braian D. Vaylet
 * @description Pagina del checkout
 */
const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const backgroundColorItems = useSetColorTheme("gray.600", "gray.300")
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)
  const [items, setItems] = useState([])

  console.log("t", t)

  useEffect(() => setItems(handleItemCount(cartItems)), [cartItems])

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 3 : mediaQueryMax600 ? 1 : 2)

  /**
   * handleCartItems
   * @function
   * @returns {undefined} return MenuItemProduct component
   */
  const handleCartItems = () => {
    return (
      cartItems &&
      items.map((item, index) => {
        return (
          <Box key={index}>
            <MenuItemProduct item={item} />
          </Box>
        )
      })
    )
  }

  return (
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
        <Grid w="100%" templateColumns={`repeat(${handleRows()}, 1fr)`}>
          <GridItem colSpan={1} colStart={1} colEnd={3} bgColor="tomato">
            S!1
          </GridItem>
          <GridItem
            as={Flex}
            direction="column"
            align="flex-start"
            justify="flex-start"
            colSpan={1}
            bgColor="cyan"
            p={6}
          >
            <Text fontWeight="bold" fontSize="1.25rem">
              Resumen de compra
            </Text>
            <Divider m="10px 0" />
            <Flex align="center" justify="space-between" w="100%">
              <Text>Productos({cartItems.length})</Text>
              <Text>
                <TotalCart />
              </Text>
            </Flex>
            <Flex align="center" justify="space-between" w="100%">
              <Text>Envio</Text>
              <Text color="green.200">Gratis</Text>
            </Flex>
            <Divider m="10px 0" />
            <Flex align="center" justify="space-between" w="100%">
              <Text>Total</Text>
              <Text>$Total</Text>
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
              {handleCartItems()}
            </Flex>

            <Center w="100%" mt={10}>
              <Button>Pagar con MercadoPago</Button>
            </Center>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Checkout
