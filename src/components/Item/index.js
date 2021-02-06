import React from "react"
import PropTypes from "prop-types"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Flex, Text, Heading, Box, Link } from "@chakra-ui/react"
// components
import ItemCount from "components/ItemCount"
// constants
import { IMG } from "utils/constants"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
import FavouriteButton from "components/FavouriteButton"
// routes
import { ROUTES } from "routes"

// const
const MAX_HEIGHT = "75vh"
const IMG_SIZE = "35vh"

/**
 * Item Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Item para ser listado, con link a ItemDetail
 */
const Item = ({
  id,
  title,
  description,
  pictureName,
  pictureUrl = null,
  price,
  stock,
  onAdd = () => {},
}) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      borderRadius="2.5px"
      backgroundColor={backgroundColor}
      boxShadow="0.75rem 0.75rem #2564f7"
      position="relative"
      m="1.5rem"
      minH={MAX_HEIGHT}
      maxH={MAX_HEIGHT}
      h={MAX_HEIGHT}
    >
      <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + id}>
        <Box
          title={pictureName}
          bgImage={`url(${pictureUrl || IMG.NO_IMG})`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          w={IMG_SIZE}
          minW={IMG_SIZE}
          maxW={IMG_SIZE}
          h={IMG_SIZE}
          minH={IMG_SIZE}
          maxH={IMG_SIZE}
        />
      </Link>
      <Box position="absolute" top="3" right="3">
        <FavouriteButton item={{ title, pictureUrl, price, id }} />
      </Box>
      <Flex
        p="10px"
        direction="column"
        justify="space-between"
        align="center"
        w="100%"
        h={IMG_SIZE}
        minH={IMG_SIZE}
        maxH={IMG_SIZE}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          w="100%"
          h="40%"
        >
          <Heading fontSize="2.5rem" mb="10px">
            ${price}
          </Heading>
          <Text fontSize=".75rem">{title}</Text>
          {/* <Text fontSize=".75rem">{description}</Text> */}
        </Flex>
        <Box w="80%" h="60%">
          <ItemCount stock={stock} onAdd={onAdd} />
        </Box>
      </Flex>
    </Flex>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  onAdd: PropTypes.func,
}

export default Item
