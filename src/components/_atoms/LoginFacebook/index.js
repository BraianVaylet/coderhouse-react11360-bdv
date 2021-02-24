import React from "react"
// chakra-ui
import { Button, Flex, Image } from "@chakra-ui/react"
// firebase
import { loginWithFacebook } from "firebase/client"
// utils
import { IMG } from "utils/images"

/**
 * LoginGoogle Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente button con autentificación con Facebook
 */
const LoginGoogle = () => {
  const handleClick = () =>
    loginWithFacebook().catch((error) => console.log("error", error))

  return (
    <Button as={Flex} onClick={handleClick} align="center" justify="center">
      <Image src={IMG.FACEBOOK} alt="google" mr={2} w="1.25rem" h="1.25rem" />
      Facebook
    </Button>
  )
}

export default LoginGoogle
