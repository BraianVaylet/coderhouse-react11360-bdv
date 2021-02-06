import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex, Text } from "@chakra-ui/react"
// component
import FavouriteButton from "components/FavouriteButton"
import ItemCount from "components/ItemCount"
import Calification from "components/Calification"
// styles
import { titleSizeResponsiveMin1280 } from "styles/utils"

/**
 * ItemDetail/ItemDetailAction Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente información principal y acciones del producto, es una seccion del componente ItemDetail.
 */
const ItemDetailAction = ({
  title,
  price,
  stock,
  calification,
  pictureUrl,
  id,
}) => {
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        align="flex-start"
        w="100%"
      >
        {/* info */}
        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          w="100%"
        >
          <Flex direction="row" align="center" justify="space-between" w="100%">
            <Text fontSize="1rem">Status | Vendidos</Text>
            <FavouriteButton item={{ title, pictureUrl, price, id }} />
          </Flex>
          <Text fontSize={titleSizeResponsiveMin1280(3)}>{title}</Text>
          <Calification value={calification} />
          <Text fontSize={titleSizeResponsiveMin1280(4)} fontWeight="bold">
            ${price}
          </Text>
          <Text>(envío gratis)</Text>
        </Flex>

        {/* action */}
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          w="100%"
          h="40%"
        >
          <Box w="100%">
            <ItemCount stock={stock} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

ItemDetailAction.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  calification: PropTypes.number.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default ItemDetailAction
