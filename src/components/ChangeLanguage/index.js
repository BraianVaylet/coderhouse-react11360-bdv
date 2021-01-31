import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Text } from "@chakra-ui/react"

/**
 * ChangeLanguage Component
 * @component
 */
const ChangeLanguage = () => {
  // hooks
  const [t, i18n] = useTranslation("global")
  const [spanish, setSpanish] = useState(false)

  useEffect(
    () => (spanish ? i18n.changeLanguage("es") : i18n.changeLanguage("en")),
    [spanish]
  )

  return (
    <Button
      variant="none"
      transitionDuration="0.75s"
      transitionProperty="transform"
      _hover={{
        transform: "scale(1.25)",
      }}
      _focus={{
        borderStyle: "none",
        backgroundColor: "transparent",
      }}
      onClick={() => setSpanish(!spanish)}
    >
      <Text fontSize="1rem">
        {spanish ? t("ChangeLanguage.en") : t("ChangeLanguage.es")}
      </Text>
    </Button>
  )
}

export default ChangeLanguage
