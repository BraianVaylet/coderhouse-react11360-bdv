import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react"
// styles
import { CustomShadow, setValueResponsiveMin1280 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// components
import Header from "components/Header"
import PaymentMenu from "components/Checkout/PaymentMenu"
import PaymentForm from "components/Checkout/PaymentForm"
// routes
import { ROUTES } from "routes"

/**
 * Checkout Page
 * @component
 * @author Braian D. Vaylet
 * @description Pagina del checkout
 */
const Checkout = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 3 : mediaQueryMax600 ? 1 : 2)

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <Header backTo={ROUTES.CART} withHelp>
        <Flex direction="column" align="flex-start" justify="flex-start">
          <Text mb={4}>
            <b>1.</b> {t("Checkout.helpStage1")}
          </Text>
          <Text mb={4}>
            <b>2.</b> {t("Checkout.helpStage2")}
          </Text>
          <Text mb={4}>
            <b>3.</b> {t("Checkout.helpStage3")}
          </Text>
        </Flex>
      </Header>
      <Flex
        w="100%"
        minH={setValueResponsiveMin1280("80vh", "100%")}
        bgColor={backgroundColor}
        boxShadow={CustomShadow}
        p={4}
      >
        <Grid w="100%" templateColumns={`repeat(${handleRows()}, 1fr)`}>
          <GridItem colSpan={1} colStart={1} colEnd={3} p={6}>
            <PaymentForm />
          </GridItem>
          <GridItem colSpan={1} p={6}>
            <PaymentMenu />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Checkout
