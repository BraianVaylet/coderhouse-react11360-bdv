// react
import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Box, Text, Link } from "@chakra-ui/react"
import { LogoIcon } from "../assets/icons"
// components
import ChangeTheme from "./ChangeTheme"
import ChangeLanguage from "./ChangeLenguage"

/**
 * NavBar Component
 * @component
 */
const NavBar = () => {
  const [t] = useTranslation("global")

  return (
    <Flex
      w="100%"
      p={2}
      mb={2}
      direction="row"
      justify="space-between"
      align="center"
      borderTop="3px solid cyan"
      boxShadow="lg"
    >
      <Flex direction="row" justify="flex-start" align="center">
        <Flex ml={2} direction="row" align="center" justify="space-between">
          <LogoIcon boxSize="32px" mr={2} />
          <Text fontSize="lg">Aquila</Text>
        </Flex>
      </Flex>
      <Flex direction="row" justify="flex-start" align="center">
        <Link ml={2}>{t("NavBar.constructionTools")}</Link>
        <Link ml={2}>{t("NavBar.sports")}</Link>
        <Link ml={2}>{t("NavBar.entertainment")}</Link>
        <Link ml={2}>{t("NavBar.estate")}</Link>
        <Link ml={2}>{t("NavBar.mobility")}</Link>
        <Box ml={4}>
          <ChangeLanguage />
          <ChangeTheme />
        </Box>
      </Flex>
    </Flex>
  )
}

export default NavBar
