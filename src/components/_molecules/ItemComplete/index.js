import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import ButtonTooltip from "../ButtonTooltip"

/**
 * ItemComplete Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Item con toda la info
 */
const ItemComplete = ({ item, onDelete, onSave, design, withDelete }) => {
  const [t] = useTranslation("global")

  return (
    <Box minH="20vh">
      <Flex direction="row" justify="flex-start" align="center" wrap="nowrap">
        <Flex align="center">
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={item.pictureUrl}
            alt={item.title}
            mr="12px"
          />
        </Flex>
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          mr="12px"
        >
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>
            ${item.price} | Stock: {item.stock} | Calification:{" "}
            {item.calification}
          </Text>
          <Text>
            Marca y Modelo: {item.brand} - {item.model}
          </Text>
          <Text>
            Sizes: {item.sizes} - Colors: {item.colors} - Gender: {item.gender}
          </Text>
        </Flex>
        {onDelete && withDelete && (
          <ButtonTooltip
            ml={6}
            onClick={onDelete}
            tooltipLabel={t("ItemProduct.deleteItem")}
          >
            ❌
          </ButtonTooltip>
        )}
      </Flex>
    </Box>
  )
}

ItemComplete.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictureName: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    calification: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    colors: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en la pagina del carrito
   */
  design: PropTypes.number,
  withDelete: PropTypes.bool,
}

export default ItemComplete
