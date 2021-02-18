import React from "react"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Flex, Link, Text, useMediaQuery } from "@chakra-ui/react"
// styles
import { setValueResponsiveMax600 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// components
import LogoOpc2 from "../LogoOpc2"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"

/**
 * TopFooter Component
 * @component
 * @author Braian D. Vaylet
 * @description Footer principal
 */
const TopFooter = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return (
    <Flex
      direction={setValueResponsiveMax600("column", "row")}
      justify="space-between"
      align="center"
      w="100%"
      p={6}
      bgColor={backgroundColor}
    >
      {!mediaQueryMax600 && <LogoOpc2 />}
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        justify="flex-end"
        align={setValueResponsiveMax600("flex-start", "center")}
      >
        <Text fontSize={setValueResponsiveMax600(".5rem", "1rem")} ml={4}>
          {t("Footer.workWithUs")}
        </Text>
        <Text fontSize={setValueResponsiveMax600(".5rem", "1rem")} ml={4}>
          {t("Footer.termsAndConditions")}
        </Text>
        <Text fontSize={setValueResponsiveMax600(".5rem", "1rem")} ml={4}>
          <Link as={RouterLink} to={ROUTES.HELP}>
            {t("Footer.help")}
          </Link>
        </Text>
        <Text fontSize={setValueResponsiveMax600(".5rem", "1rem")} ml={4}>
          {t("Footer.covidPrecautions")}
        </Text>
      </Flex>
    </Flex>
  )
}

export default TopFooter
