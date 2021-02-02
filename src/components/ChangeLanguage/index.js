import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Text } from "@chakra-ui/react"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

/**
 * ChangeLanguage Component
 * @component
 */
const ChangeLanguage = () => {
  // hooks
  const [t, i18n] = useTranslation("global")
  const [storedValue, setLocalStorage] = useLocalStorage("language", null)
  const [spanish, setSpanish] = useState(storedValue === "es")

  useEffect(() => i18n.changeLanguage(storedValue), [])
  useEffect(() => i18n.changeLanguage(storedValue), [storedValue])
  useEffect(() => setLocalStorage(spanish ? "es" : "en"), [spanish])

  const handleLanguage = () => setSpanish(!spanish)

  return (
    <Button
      variant="none"
      transitionDuration="0.75s"
      transitionProperty="transform"
      borderRadius="9999px"
      _hover={{
        transform: "scale(1.25)",
      }}
      _focus={{
        borderStyle: "none",
        backgroundColor: "transparent",
      }}
      onClick={handleLanguage}
    >
      <Text fontSize="1rem">
        {storedValue === "es" ? t("ChangeLanguage.en") : t("ChangeLanguage.es")}
      </Text>
    </Button>
  )
}

export default ChangeLanguage
