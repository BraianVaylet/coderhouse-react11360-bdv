// react
import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, useToast } from "@chakra-ui/react"
// components
import ItemList from "components/ItemList"
import ItemCount from "components/ItemCount"

const Home = () => {
  const [t, i18n, ready] = useTranslation("global", { useSuspense: false })
  const toast = useToast()

  console.log("ready", i18n, ready)

  return (
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <ItemList greeting={t("App.helloWorld")} />
      <ItemCount
        stock={10}
        onAdd={(value) =>
          ready &&
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

export default Home
