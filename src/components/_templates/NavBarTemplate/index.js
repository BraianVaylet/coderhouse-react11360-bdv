// react
import React from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5"
import styles from "./styles.module.css"
// chakra-ui
import {
  Flex,
  Box,
  Link,
  useDisclosure,
  Button,
  useMediaQuery,
  Icon,
  Divider,
} from "@chakra-ui/react"
// components
import HorizontalSeparator from "components/_atoms/HorizontalSeparator"
import ChangeThemeBtn from "components/_molecules/ChangeThemeBtn"
import ChangeLanguageBtn from "components/_molecules/ChangeLanguageBtn"
import LogoOpc1 from "components/_molecules/LogoOpc1"
import LinkList from "components/_molecules/LinkList"
import Logout from "components/_molecules/Logout"
import FavoritesBtn from "components/_organisms/FavoritesBtn"
import NotificationsBtn from "components/_organisms/NotificationsBtn"
import CartWidgetBtn from "components/_organisms/CartWidgetBtn"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
// utils
import { CATEGORIES } from "utils/constants"
import CustomDrawer from "components/_atoms/CustomDrawer"

/**
 * NavBarTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente NavBarTemplate con Drawer
 */
const NavBarTemplate = () => {
  const [t] = useTranslation("global")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const backgroundColor = useSetColorTheme(
    "withOpacity.gray.800",
    "withOpacity.white"
  )
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  const categoriesLinks = [
    {
      to: ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS,
      text: t(`NavBar.${CATEGORIES.JACKETS}`),
    },
    {
      to: ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS,
      text: t(`NavBar.${CATEGORIES.SHIRTS}`),
    },
    {
      to: ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES,
      text: t(`NavBar.${CATEGORIES.SHOES}`),
    },
    {
      to: ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES,
      text: t(`NavBar.${CATEGORIES.ACCESORIES}`),
    },
  ]

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
              <LogoOpc1 />
            </Button>
            <HorizontalSeparator withSeparator />
            <Link as={NavLink} to={ROUTES.HOME} p="0 1rem">
              <Icon as={IoHomeOutline} w="1.5rem" h="1.5rem" />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="row" justify="flex-start" align="center">
          {mediaQueryMin1280 && (
            <LinkList withSeparator links={categoriesLinks} />
          )}
          <Box ml={4} mr={4}>
            {!mediaQueryMax600 && <FavoritesBtn />}
            {!mediaQueryMax600 && <NotificationsBtn />}
            <CartWidgetBtn />
          </Box>
        </Flex>
      </Flex>
      <CustomDrawer
        direction="left"
        onClose={onClose}
        isOpen={isOpen}
        header={<LogoOpc1 />}
        footer={
          <Flex align="center" justify="space-between" w="100%">
            <Box>
              <ChangeThemeBtn />
              <ChangeLanguageBtn />
            </Box>
            <Logout />
          </Flex>
        }
      >
        <Flex direction="column" align="space-between" justify="flex-start">
          <LinkList
            links={categoriesLinks}
            direction="column"
            justify="space-between"
            align="flex-start"
            h="20vh"
          />
          {mediaQueryMax600 && (
            <>
              <Divider m={"1.5rem 0"} />
              <FavoritesBtn withText />
              <NotificationsBtn withText />
            </>
          )}
        </Flex>
      </CustomDrawer>
    </>
  )
}

export default NavBarTemplate
