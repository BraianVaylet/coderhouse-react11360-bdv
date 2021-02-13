import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Portal,
  useToast,
} from "@chakra-ui/react"
// styles
import { MY_BREAKPOINTS } from "styles/theme"

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
    console.log("Logout", false)
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
          <Drawer
            placement="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  {renderTitle()}
                </DrawerHeader>
                <DrawerBody>{renderBody()}</DrawerBody>
                <DrawerFooter>{renderButtons()}</DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        ) : (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{renderTitle()}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{renderBody()}</ModalBody>
              <ModalFooter>{renderButtons()}</ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Portal>
    </>
  )
}

export default Logout