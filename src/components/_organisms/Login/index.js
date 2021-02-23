import React from "react"
// chakra-ui
import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react"
// firebase
import { loginWithGoogle } from "firebase/client"
// utils
import { IMG } from "utils/images"

/**
 * Login Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario de login
 */
const Login = () => {
  const handleClick = () =>
    loginWithGoogle().catch((error) => console.log("error", error))

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" w="100%">
      <Text fontSize="2rem" fontWeight="bold">
        Iniciar sesión
      </Text>
      <Divider m="1.25rem 0" />
      <Button as={Flex} onClick={handleClick} align="center" justify="center">
        <Image src={IMG.GOOGLE} alt="google" mr={2} w="1.25rem" h="1.25rem" />
        Google
      </Button>
    </Flex>
  )
}

export default Login
