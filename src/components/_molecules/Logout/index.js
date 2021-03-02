import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Button,
  useDisclosure,
  Text,
  useMediaQuery,
  Portal,
  useToast,
} from "@chakra-ui/react"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
// components
import CustomModal from "components/_atoms/CustomModal"
import CustomDrawer from "components/_atoms/CustomDrawer"
// firebase
import { addStorage, onAuthSignOut } from "firebase/client"
// context
import { CartContext, FavouriteContext, NotificationContext } from "context"
// hooks
import useUser from "hooks/useUser"

/**
 * Logout Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Logout con Modal para desktop y Drawer para movile
 */
const Logout = () => {
  const [t] = useTranslation("global")
  const { favourites, cleanFavourites } = useContext(FavouriteContext)
  const { cartItems, cleanCart } = useContext(CartContext)
  const { notification, cleanNotification } = useContext(NotificationContext)
  const user = useUser()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  const handleLogout = () => {
    // save storage in db
    addStorage({
      email: user.email,
      favourites,
      cart: cartItems,
      notifications: notification,
    })
      .then(() => {
        onAuthSignOut()
          .then(() => {
            cleanFavourites()
            cleanCart()
            cleanNotification()
            onClose()
          })
          .catch((error) => {
            console.log("error", error)
            toast({
              title: t("Logout.youCanNot"),
              description: "",
              status: "error",
              position: "bottom",
              duration: 5000,
              isClosable: true,
            })
          })
      })
      .catch((error) => console.log("error", error))
  }

  const renderTitle = () => t("Logout.logout")
  const renderBody = () => <Text>{t("Logout.doYouWantToLogout")}</Text>
  const renderButtons = () => (
    <>
      <Button mr={3} onClick={onClose}>
        {t("Logout.close")}
      </Button>
      <Button variant="ghost" onClick={handleLogout}>
        {t("Logout.ok")}
      </Button>
    </>
  )

  return (
    <>
      <Button onClick={onOpen}>{t("Logout.logout")}</Button>
      <Portal>
        {mediaQueryMax600 ? (
          <CustomDrawer
            direction="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
            header={renderTitle()}
            footer={renderButtons()}
          >
            {renderBody()}
          </CustomDrawer>
        ) : (
          <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            header={renderTitle()}
            footer={renderButtons()}
          >
            {renderBody()}
          </CustomModal>
        )}
      </Portal>
    </>
  )
}

export default Logout
