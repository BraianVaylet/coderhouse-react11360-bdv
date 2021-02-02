// react
import React from "react"
import { useTranslation } from "react-i18next"
import styles from "./styles.module.css"
// chakra-ui
import {
  Flex,
  Box,
  Link,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  DrawerCloseButton,
  Button,
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

/**
 * NavBar Component
 * @component
 */
const NavBar = () => {
  const [t] = useTranslation("global")
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)

  /**
   * renderLinks
   * @function
   * @returns {undefined} component
   */
  const renderLinks = () => (
    <>
      <Link ml={2}>{t("NavBar.constructionTools")}</Link>
      <Link ml={2}>{t("NavBar.sports")}</Link>
      <Link ml={2}>{t("NavBar.entertainment")}</Link>
      <Link ml={2}>{t("NavBar.estate")}</Link>
      <Link ml={2}>{t("NavBar.mobility")}</Link>
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
        bg={
          colorMode === "light" ? "withOpacity.white" : "withOpacity.gray.800"
        }
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
          {mediaQueryMin1280 && renderLinks()}
          <Box ml={4}>
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
