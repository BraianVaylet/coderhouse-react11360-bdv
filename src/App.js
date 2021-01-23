// react
import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Text, Flex } from "@chakra-ui/react"

const App = () => {
  // hooks
  const [t] = useTranslation("global")

  return (
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <Text>{t("App.helloWorld")}</Text>
    </Flex>
  )
}

export default App
