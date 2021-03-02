import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Flex, Image, useToast } from "@chakra-ui/react"
// firebase
import { loginWithFacebook } from "firebase/client"
// utils
import { IMG } from "utils/images"
// hooks
import useUser from "hooks/useUser"

/**
 * LoginFacebook Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente button con autentificación con Facebook
 */
const LoginFacebook = ({ ...props }) => {
  const [t] = useTranslation("global")
  const user = useUser()
  const toast = useToast()

  /**
   * handleClick
   * @function
   * @description Autentificación con firebase y facebook
   */
  const handleClick = () =>
    loginWithFacebook()
      .then(() => {
        if (user) {
          toast({
            title: `🙂 ${t("Authentication.welcome")}, ${user.username}`,
            description: "",
            status: "success",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        }
      })
      .catch((error) => {
        console.log("error", error)
        !user &&
          toast({
            title: t("Authentication.errorLogin"),
            description: "",
            status: "error",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
      })

  return (
    <Button
      as={Flex}
      onClick={handleClick}
      align="center"
      justify="center"
      w="100%"
      {...props}
    >
      <Image src={IMG.FACEBOOK} alt="google" mr={2} w="1.25rem" h="1.25rem" />
      Facebook
    </Button>
  )
}

export default LoginFacebook
