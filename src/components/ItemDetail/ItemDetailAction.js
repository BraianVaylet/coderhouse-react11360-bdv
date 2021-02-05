import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Flex, Text } from "@chakra-ui/react"
// component
import FavouriteButton from "components/FavouriteButton"
import ItemCount from "components/ItemCount"
// styles
import { titleSizeResponsiveMin1280 } from "styles/utils"

/**
 * ItemDetail/ItemDetailAction Component
 * @component
 */
const ItemDetailAction = ({ title, price, stock }) => {
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
            <FavouriteButton />
          </Flex>
          <Text fontSize={titleSizeResponsiveMin1280(3)}>{title}</Text>
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
}

export default ItemDetailAction
