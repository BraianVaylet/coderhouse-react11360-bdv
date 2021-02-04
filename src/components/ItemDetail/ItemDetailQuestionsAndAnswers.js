import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"
// styles
import { titleSizeResponsiveMin1280 } from "styles/utils"

/**
 * ItemDetail/ItemDetailQuestionsAndAnswers Component
 * @component
 */
const ItemDetailQuestionsAndAnswers = () => {
  const [t] = useTranslation("global")

  return (
    <Flex direction="column" justify="flex-start" center="flex-start">
      <Text fontSize={titleSizeResponsiveMin1280(3)}>
        {t("ItemDetailQuestionsAndAnswers.title")}
      </Text>
      <Flex></Flex>
      <Text>esta es una descripción</Text>
    </Flex>
  )
}

export default ItemDetailQuestionsAndAnswers
