import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center, Flex, Kbd, Text } from "@chakra-ui/react"
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
const ItemDetailCharacteristics = ({ brand, model, filter, colors, sizes }) => {
  const [t] = useTranslation("global")

  const handleFilterSex = () =>
    filter.sex === "male" ? "🧑" : filter.sex === "female" ? "👩" : "🧑👩"

  const handleColors = () => {
    return (
      colors &&
      colors.map((color, index) => {
        const bRadius = "9999px"
        if (color.includes("-")) {
          const dualColor = color.split("-")
          return (
            <Flex
              key={index}
              direction="row"
              align="center"
              justify="space-between"
              w="1.25rem"
              h="1.25rem"
              borderRadius={bRadius}
              borderWidth="1px"
              borderColor="black"
              mr={2}
            >
              <Box
                borderRadius={`${bRadius} 0 0 ${bRadius}`}
                w="50%"
                h="100%"
                style={{ backgroundColor: dualColor[0] }}
              />
              <Box
                borderRadius={`0 ${bRadius} ${bRadius} 0`}
                w="50%"
                h="100%"
                style={{ backgroundColor: dualColor[1] }}
              />
            </Flex>
          )
        } else {
          return (
            <Box
              key={index}
              w="1.25rem"
              h="1.25rem"
              borderRadius={bRadius}
              borderWidth="1px"
              borderColor="black"
              style={{ backgroundColor: color }}
              mr={2}
            />
          )
        }
      })
    )
  }

  const handleSizes = () => {
    return (
      sizes &&
      sizes.map((size, index) => {
        return (
          <Kbd key={index} mr={2}>
            {size}
          </Kbd>
        )
      })
    )
  }

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

        <Flex
          direction="column"
          justify="flex-start"
          align="flex-start"
          m="2rem 0"
        >
          {/* filters */}
          <Text>
            {t("ItemDetailCharacteristics.withLoveTo")} {handleFilterSex()}
          </Text>

          {/* colors */}
          <Flex direction="row" justify="flex-start" align="center" mt={4}>
            <Text mr={3}>
              {t("ItemDetailCharacteristics.availableColours")}:
            </Text>
            <Flex direction="row" justify="flex-start" align="center">
              {handleColors()}
            </Flex>
          </Flex>

          {/* sizes */}
          <Flex direction="row" justify="flex-start" align="center" mt={4}>
            <Text mr={3}>{t("ItemDetailCharacteristics.availableSizes")}:</Text>
            <Flex direction="row" justify="flex-start" align="center">
              {handleSizes()}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

ItemDetailCharacteristics.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  filter: PropTypes.objectOf(
    PropTypes.shape({
      sex: PropTypes.string.isRequired,
    })
  ),
}

export default ItemDetailCharacteristics
