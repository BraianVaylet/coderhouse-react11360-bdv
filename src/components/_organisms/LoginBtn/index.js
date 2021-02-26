import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, useMediaQuery } from "@chakra-ui/react"
// components
import CustomPopover from "components/_atoms/CustomPopover"
import LoginFacebook from "components/_atoms/LoginFacebook"
import LoginGoogle from "components/_atoms/LoginGoogle"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
// hooks
import useUser from "hooks/useUser"

/**
 * LoginBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente button para el login en menu
 */
const LoginBtn = () => {
  const [t] = useTranslation("global")
  const user = useUser()
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return (
    !user && (
      <CustomPopover
        header={t("LoginBtn.login2")}
        withFooter={false}
        btn={mediaQueryMax600 ? "🚀" : t("LoginBtn.login")}
      >
        <Flex w="100%" direction="column" align="flex-start" justify="center">
          <LoginGoogle mb={2} />
          <LoginFacebook mb={2} />
        </Flex>
      </CustomPopover>
    )
  )
}

export default LoginBtn
