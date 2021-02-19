import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, useMediaQuery } from "@chakra-ui/react"
// styles
import { setValueResponsiveMax600 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// components
import LogoOpc2 from "components/_molecules/LogoOpc2"
import SubFooter from "components/_molecules/SubFooter"
import LinkList from "components/_molecules/LinkList"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"

/**
 * Footer Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente footer de la aplicacion
 */
const Footer = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  const footerLinks = [
    {
      to: ROUTES.HOME,
      text: t("Footer.workWithUs"),
    },
    {
      to: ROUTES.HOME,
      text: t("Footer.termsAndConditions"),
    },
    {
      to: ROUTES.HELP,
      text: t("Footer.help"),
    },
    {
      to: ROUTES.HOME,
      text: t("Footer.covidPrecautions"),
    },
  ]

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      w="100%"
      mt={4}
      boxShadow="lg"
    >
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        justify="space-between"
        align="center"
        w="100%"
        p={6}
        bgColor={backgroundColor}
      >
        {!mediaQueryMax600 && <LogoOpc2 />}
        <LinkList
          direction={setValueResponsiveMax600("column", "row")}
          justify="flex-end"
          align={setValueResponsiveMax600("flex-start", "center")}
          links={footerLinks}
        />
      </Flex>
      <SubFooter />
    </Flex>
  )
}

export default Footer
