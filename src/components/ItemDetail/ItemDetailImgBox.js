import React from "react"
// chakra-ui
import { Box, Center } from "@chakra-ui/react"
// constants
import { IMG } from "utils/constants"

/**
 * ItemDetail/ItemDetailImgBox Component
 * @component
 */
const ItemDetailImgBox = () => {
  return (
    <Center p="20px" w="100%">
      <Box
        bgImage={`url(${IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="300px"
        minW="300px"
        maxW="300px"
        h="300px"
        minH="300px"
        maxH="300px"
        borderWidth="2px"
        borderColor="black"
      />
    </Center>
  )
}

export default ItemDetailImgBox
