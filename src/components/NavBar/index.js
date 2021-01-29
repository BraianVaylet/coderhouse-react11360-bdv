// react
import React from "react"
import { useTranslation } from "react-i18next"
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
} from "@chakra-ui/react"
// components
import ChangeTheme from "components/ChangeTheme"
import ChangeLanguage from "components/ChangeLenguage"
import CartWidget from "components/CartWidget"
import Logo from "components/Logo"

/**
 * NavBar Component
 * @component
 */
const NavBar = () => {
  const [t] = useTranslation("global")
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        bg={colorMode === "light" ? "white" : "gray.800"}
        top="0"
        zIndex="1000"
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
          {renderLinks()}
          <Box ml={4}>
            <CartWidget />
          </Box>
        </Flex>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent h="100vh">
            <DrawerCloseButton />
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
                <Button variant="solid" onClick={onClose}>
                  {t("NavBar.logout")}
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default NavBar
