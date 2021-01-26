// react
import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import ItemList from "components/ItemList"

const App = () => {
  const [t] = useTranslation("global")

  return (
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <ItemList greeting={t("App.helloWorld")} />
    </Flex>
  )
}

export default App
