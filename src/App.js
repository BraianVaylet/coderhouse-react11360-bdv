// react
import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, useToast } from "@chakra-ui/react"
// components
import ItemList from "components/ItemList"
import ItemCount from "components/ItemCount"

const App = () => {
  const [t] = useTranslation("global")
  const toast = useToast()

  return (
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <ItemList greeting={t("App.helloWorld")} />
      <ItemCount
        stock={10}
        onAdd={(value) =>
          toast({
            title: t("App.addToCart"),
            description: t("App.addToCartDescriptio") + " " + value,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      />
    </Flex>
  )
}

export default App
