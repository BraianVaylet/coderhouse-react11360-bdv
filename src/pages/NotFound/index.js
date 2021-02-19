import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Center, Heading } from "@chakra-ui/react"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"

/**
 * NotFound Page
 * @component
 * @author Braian D. Vaylet
 * @description Page NotFound para cuando la ruta es incorrecta
 */
const NotFound = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.notFound")}
        description={t("HelmetSEO.description.notFound")}
      />
      <Center w="100vw" h="100vh">
        <Heading
          fontStyle="italic"
          fontSize="5rem"
          bgGradient="linear(to-l, brand.primary, brand.secundary)"
          bgClip="text"
          fontWeight="extrabold"
        >
          404 {t("NotFound.title")}
        </Heading>
      </Center>
    </>
  )
}

export default NotFound
