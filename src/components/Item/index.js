import React, { useState } from "react"
import PropTypes from "prop-types"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
// chakra-ui
import { Flex, Text, Heading, IconButton, Icon, Box } from "@chakra-ui/react"
// components
import ItemCount from "components/ItemCount"
// constants
import { IMG } from "utils/constants"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"

// const
const MAX_HEIGHT = "70vh"
const IMG_SIZE = "35vh"

/**
 * Item Component
 * @component
 */
const Item = ({
  title,
  description,
  pictureName,
  pictureUrl = null,
  price,
  stock,
  onAdd = () => {},
}) => {
  const backgroundColor = useBackgroundColorTheme("gray.700", "white")
  const [favActive, setFavActive] = useState(false)

  /**
   * handleFavActive
   * @function
   * @returns {boolean} favActive
   */
  const handleFavActive = () => setFavActive(!favActive)

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
      <Box
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
      <IconButton
        position="absolute"
        top="3"
        right="3"
        onClick={handleFavActive}
        icon={
          <Box
            p="2.5px"
            backgroundColor={backgroundColor}
            borderRadius="5px"
            _hover={{
              backgroundColor: backgroundColor,
            }}
          >
            {favActive ? (
              <Icon
                as={MdFavorite}
                boxSize="2rem"
                borderRadius="9999px"
                fill="brand.primary"
                _hover={{
                  fill: "brand.secundary",
                }}
              />
            ) : (
              <Icon
                as={MdFavoriteBorder}
                boxSize="2rem"
                borderRadius="9999px"
                fill="brand.secundary"
                _hover={{
                  fill: "brand.primary",
                }}
              />
            )}
          </Box>
        }
      />
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
          {/* <Text fontSize="1.25rem">{title}</Text> */}

          <Text fontSize=".75rem">{description}</Text>
        </Flex>
        <Box w="80%" h="60%">
          <ItemCount stock={stock} onAdd={onAdd} />
        </Box>
      </Flex>
    </Flex>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  onAdd: PropTypes.func,
}

export default Item
