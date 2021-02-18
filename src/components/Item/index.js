import React from "react"
import PropTypes from "prop-types"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Flex, Text, Heading, Box, Link } from "@chakra-ui/react"
// components
import ItemCount from "components/ItemCount"
import BtnModalImg from "components/_molecules/BtnModalImg"
import FavouriteIconBtn from "components/_molecules/FavouriteIconBtn"
import CartCount from "components/_atoms/CartCount"
// constants
import { IMG } from "utils/images"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
// styles
import { CustomShadow } from "styles/utils"

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
  category,
  pictureName,
  pictureUrl = null,
  price,
  stock,
  onAdd = () => {},
}) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  const item = {
    id,
    title,
    description,
    category,
    pictureName,
    pictureUrl,
    price,
    stock,
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      borderRadius="2.5px"
      backgroundColor={backgroundColor}
      boxShadow={CustomShadow}
      position="relative"
      m="1.5rem"
      minH={MAX_HEIGHT}
      maxH={MAX_HEIGHT}
      h={MAX_HEIGHT}
      w={IMG_SIZE}
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
        <FavouriteIconBtn item={item} />
      </Box>
      <Box position="absolute" top="1" left="1">
        <BtnModalImg
          pictureName={pictureName}
          pictureUrl={pictureUrl}
          title={title}
        />
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
          // position="relative"
        >
          <Flex w="100%" direction="row" align="center" justify="space-between">
            <Heading fontSize="2.5rem" mb="10px">
              ${price}
            </Heading>
            <Box mb={2} mr={2}>
              <CartCount item={item} />
            </Box>
          </Flex>
          <Text fontSize="1rem">{title}</Text>
          {/* <Text fontSize=".75rem">{description}</Text> */}
        </Flex>
        <Box w="80%" h="60%">
          <ItemCount stock={stock} item={item} />
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
  category: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
}

export default Item
