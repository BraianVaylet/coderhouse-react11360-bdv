import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { useDisclosure, Flex } from "@chakra-ui/react"
// components
import CustomModal from "components/_atoms/CustomModal"
import LoginGoogle from "components/_atoms/LoginGoogle"
import LoginFacebook from "components/_atoms/LoginFacebook"

/**
 * LoginAlert Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Modal con login
 */
const LoginAlert = () => {
  const [t] = useTranslation("global")
  const { onClose } = useDisclosure()

  return (
    <CustomModal
      withCloseBtn={false}
      isOpen={true}
      onClose={onClose}
      header={t("LoginBtn.login2")}
    >
      <Flex w="100%" direction="column" align="flex-start" justify="center">
        <LoginGoogle mb={2} />
        <LoginFacebook mb={2} />
      </Flex>
    </CustomModal>
  )
}

export default LoginAlert
