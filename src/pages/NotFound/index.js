import React from "react"
// chakra-ui
import { Center, Heading } from "@chakra-ui/react"

/**
 * NotFound Page
 * @component
 * @author Braian D. Vaylet
 * @description Page NotFound para cuando la ruta es incorrecta
 */
const NotFound = () => {
  return (
    <Center w="100vw" h="100vh">
      <Heading
        fontStyle="italic"
        fontSize="5rem"
        bgGradient="linear(to-l, brand.primary, brand.secundary)"
        bgClip="text"
        fontWeight="extrabold"
      >
        404 Not Found
      </Heading>
    </Center>
  )
}

export default NotFound
