import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
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
 * @author Braian D. Vaylet
 * @description Componente las caracteristicas del producto, es una seccion del componente ItemDetail.
 */
const ItemDetailCharacteristics = ({ brand, model }) => {
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
            <Text color="white">{t("ItemDetailCharacteristics.brand")}</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 5px 0 0">
            <Text color="white">{brand}</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="flex-start" center="flex-start" w="100%">
          <Center w="25%" p="10px" bg="brand.primary" borderRadius="0 0 0 5px">
            <Text color="white">{t("ItemDetailCharacteristics.model")}</Text>
          </Center>
          <Box w="75%" p="10px" bg="brand.secundary" borderRadius="0 0 5px 0">
            <Text color="white">{model}</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

ItemDetailCharacteristics.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
}

export default ItemDetailCharacteristics
