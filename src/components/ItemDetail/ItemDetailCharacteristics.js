import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Center, Flex, Text } from "@chakra-ui/react"
// styles
import {
  titleSizeResponsiveMin1280,
  setValueResponsiveMin1280,
} from "styles/utils"

/**
 * ItemDetail/ItemDetailCharacteristics Component
 * @component
 */
const ItemDetailCharacteristics = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Text fontSize={titleSizeResponsiveMin1280(3)}>
        {t("ItemDetailCharacteristics.title")}
      </Text>
      <Flex
        direction="column"
        justify="flex-start"
        center="flex-start"
        mt="10px"
        w={setValueResponsiveMin1280("25vw", "100%")}
      >
        <Flex direction="row" justify="flex-start" center="flex-start" w="100%">
          <Center w="25%" p="10px" bg="brand.primary" borderRadius="5px 0 0 0">
            <Text>Marca</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 5px 0 0">
            <Text>valor marca</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="flex-start" center="flex-start" w="100%">
          <Center w="25%" p="10px" bg="brand.primary" borderRadius="0 0 0 5px">
            <Text>Modelo</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 0 5px 0">
            <Text>valor modelo</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default ItemDetailCharacteristics
