// react
import React from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { IoHomeOutline } from "react-icons/io5"
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
  Icon,
  Divider,
} from "@chakra-ui/react"
// components
import ChangeThemeBtn from "components/_molecules/ChangeThemeBtn"
import ChangeLanguageBtn from "components/_molecules/ChangeLanguageBtn"
import FavoritesBtn from "components/_organisms/FavoritesBtn"
import NotificationsBtn from "components/NotificationsBtn"
import CartWidgetBtn from "components/_organisms/CartWidgetBtn"
import Logo from "components/Logo"
import Logout from "components/Logout"
// styles
import { COLORS, MY_BREAKPOINTS } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// utils
import { CATEGORIES } from "utils/constants"
import { ROUTES } from "routes"

/**
 * NavBar Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente NavBar con Drawer
 */
const NavBar = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme(
    "withOpacity.gray.800",
    "withOpacity.white"
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

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
      <Flex
        align="center"
        as={NavLink}
        activeStyle={{ color: COLORS.primary }}
        to={ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS}
      >
        <Text ml={2}>{t(`NavBar.${CATEGORIES.JACKETS}`)}</Text>
      </Flex>
      {renderLinkSeparator(withSeparator)}
      <Flex
        align="center"
        as={NavLink}
        activeStyle={{ color: COLORS.primary }}
        to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS}
      >
        <Text ml={2}>{t(`NavBar.${CATEGORIES.SHIRTS}`)}</Text>
      </Flex>
      {renderLinkSeparator(withSeparator)}
      <Flex
        align="center"
        as={NavLink}
        activeStyle={{ color: COLORS.primary }}
        to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES}
      >
        <Text ml={2}>{t(`NavBar.${CATEGORIES.SHOES}`)}</Text>
      </Flex>
      {renderLinkSeparator(withSeparator)}
      <Flex
        align="center"
        as={NavLink}
        activeStyle={{ color: COLORS.primary }}
        to={ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES}
      >
        <Text ml={2}>{t(`NavBar.${CATEGORIES.ACCESORIES}`)}</Text>
      </Flex>
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
            {renderLinkSeparator(true)}
            <Link as={NavLink} to={ROUTES.HOME} p="0 1rem">
              <Icon as={IoHomeOutline} w="1.5rem" h="1.5rem" />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="row" justify="flex-start" align="center">
          {mediaQueryMin1280 && renderLinks(true)}
          <Box ml={4} mr={4}>
            {!mediaQueryMax600 && <FavoritesBtn />}
            {!mediaQueryMax600 && <NotificationsBtn />}
            <CartWidgetBtn />
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
                {mediaQueryMax600 && (
                  <>
                    <Divider m={"1.5rem 0"} />
                    <FavoritesBtn withText />
                    <NotificationsBtn withText />
                  </>
                )}
              </Flex>
            </DrawerBody>
            <DrawerFooter>
              <Flex align="center" justify="space-between" w="100%">
                <Box>
                  <ChangeThemeBtn />
                  <ChangeLanguageBtn />
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
