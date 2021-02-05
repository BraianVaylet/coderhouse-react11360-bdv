// react
import React from "react"
import { useTranslation } from "react-i18next"
import styles from "./styles.module.css"
// chakra-ui
import {
  Flex,
  Box,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  DrawerCloseButton,
  Button,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
// components
import ChangeTheme from "components/ChangeTheme"
import ChangeLanguage from "components/ChangeLanguage"
import CartWidget from "components/CartWidget"
import Logo from "components/Logo"
import Logout from "components/Logout"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
import Favorites from "components/Favorites"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"

/**
 * NavBar Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente NavBar con Drawer
 */
const NavBar = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useBackgroundColorTheme(
    "withOpacity.gray.800",
    "withOpacity.white"
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)

  /**
   * renderLinkSeparator
   * @function
   * @returns {undefined} component
   */
  const renderLinkSeparator = (withSeparator) => (
    <Text ml={2} mr={2}>
      {withSeparator && "|"}
    </Text>
  )

  /**
   * renderLinks
   * @function
   * @returns {undefined} component
   */
  const renderLinks = (withSeparator = false) => (
    <>
      <Link>{t("NavBar.constructionTools")}</Link>
      {renderLinkSeparator(withSeparator)}
      <Link>{t("NavBar.sports")}</Link>
      {renderLinkSeparator(withSeparator)}
      <Link>{t("NavBar.entertainment")}</Link>
      {renderLinkSeparator(withSeparator)}
      <Link>{t("NavBar.estate")}</Link>
      {renderLinkSeparator(withSeparator)}
      <Link>{t("NavBar.mobility")}</Link>
    </>
  )

  return (
    <>
      <Flex
        w="100%"
        p={2}
        mb={2}
        direction="row"
        justify="space-between"
        align="center"
        borderTopWidth="0.25rem"
        borderColor="brand.primary"
        boxShadow="lg"
        position="fixed"
        bg={backgroundColor}
        opacity="0.95"
        top="0"
        zIndex="1000"
        className={styles.NavBarContainer}
      >
        <Flex direction="row" justify="flex-start" align="center">
          <Flex ml={2} direction="row" align="center" justify="space-between">
            <Button
              variant="none"
              _focus={{
                borderStyle: "none",
                backgroundColor: "transparent",
              }}
              onClick={onOpen}
            >
              <Logo />
            </Button>
          </Flex>
        </Flex>
        <Flex direction="row" justify="flex-start" align="center">
          {mediaQueryMin1280 && renderLinks(true)}
          <Box ml={4} mr={4}>
            <Favorites />
            <CartWidget />
          </Box>
        </Flex>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent h="100vh">
            <DrawerCloseButton variant="none" />
            <DrawerHeader
              borderBottomWidth="0.25rem"
              borderColor="brand.primary"
            >
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              <Flex
                direction="column"
                align="space-between"
                justify="flex-start"
              >
                {renderLinks()}
              </Flex>
            </DrawerBody>
            <DrawerFooter>
              <Flex align="center" justify="space-between" w="100%">
                <Box>
                  <ChangeTheme />
                  <ChangeLanguage />
                </Box>
                <Logout />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default NavBar
