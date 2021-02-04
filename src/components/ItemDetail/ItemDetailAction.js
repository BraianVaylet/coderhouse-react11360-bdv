import React from "react"
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
const ItemDetailAction = () => {
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
          <Text fontSize={titleSizeResponsiveMin1280(3)}>Titulo</Text>
          <Text fontSize={titleSizeResponsiveMin1280(4)} fontWeight="bold">
            $Precio
          </Text>
          <Text>Envío</Text>
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
            <ItemCount stock={5} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default ItemDetailAction
