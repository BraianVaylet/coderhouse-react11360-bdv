import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center } from "@chakra-ui/react"
// constants
import { IMG } from "utils/images"

/**
 * ItemDetail/ItemDetailImgBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con la imagen del producto, es una sección del componente ItemDetial.
 */
const ItemDetailImgBox = ({ pictureName, pictureUrl, pictureId }) => {
  return (
    <Center p="20px" w="100%">
      <Box
        key={pictureId}
        title={pictureName}
        bgImage={`url(${pictureUrl || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="300px"
        minW="300px"
        maxW="300px"
        h="300px"
        minH="300px"
        maxH="300px"
      />
    </Center>
  )
}

ItemDetailImgBox.propTypes = {
  pictureName: PropTypes.string,
  pictureUrl: PropTypes.string,
  pictureId: PropTypes.string.isRequired,
}

export default ItemDetailImgBox
