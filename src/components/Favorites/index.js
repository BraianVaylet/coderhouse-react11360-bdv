import React from "react"
import PropTypes from "prop-types"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
// chakra-ui
import { Flex, Icon, IconButton, Text } from "@chakra-ui/react"

/**
 * Favorites Component
 * @components
 */
const Favorites = ({ onClick }) => {
  const countFavs = 0
  return (
    <IconButton
      variant="ghost"
      size="lg"
      transitionDuration="0.75s"
      transitionProperty="transform"
      _hover={{
        transform: "scale(1.1)",
      }}
      _focus={{
        borderStyle: "none",
      }}
      onClick={onClick}
      icon={
        <Flex direction="row" align="center">
          {countFavs > 0 ? (
            <Icon as={MdFavorite} boxSize="1.5rem" />
          ) : (
            <Icon as={MdFavoriteBorder} boxSize="1.5rem" />
          )}
          <Text>{countFavs}</Text>
        </Flex>
      }
    />
  )
}

Favorites.propTypes = {
  onClick: PropTypes.func,
}

export default Favorites
