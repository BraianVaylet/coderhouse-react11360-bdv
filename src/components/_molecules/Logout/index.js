import React from "react"
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

/**
 * Logout Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Logout con Modal para desktop y Drawer para movile
 */
const Logout = () => {
  const [t] = useTranslation("global")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  const handleLogout = () => {
    toast({
      title: t("Logout.youCanNot"),
      description: "",
      status: "error",
      position: "bottom",
      duration: 5000,
      isClosable: true,
    })
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
            drawerHeader={renderTitle()}
            withFooter
          >
            {[renderBody(), renderButtons()]}
          </CustomDrawer>
        ) : (
          <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            modalHeader={renderTitle()}
            withFooter
          >
            {[renderBody(), renderButtons()]}
          </CustomModal>
        )}
      </Portal>
    </>
  )
}

export default Logout
