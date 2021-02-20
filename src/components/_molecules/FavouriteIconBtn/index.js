import React, { useState, useContext, useEffect } from "react"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import { Button, Icon } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { FavouriteContext } from "context"

/**
 * FavouriteIconBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con acción onClick y cambio de icono.
 */
const FavouriteIconBtn = ({ item }) => {
  const {
    favourites,
    addItemToFavourites,
    deleteItemFromFavourites,
  } = useContext(FavouriteContext)
  const [favActive, setFavActive] = useState(
    favourites.filter((fav) => fav.id === item.id).length === 1
  )
  const backgroundColor = useSetColorTheme("gray.700", "white")

  useEffect(
    () =>
      setFavActive(favourites.filter((fav) => fav.id === item.id).length === 1),
    [favourites]
  )

  /**
   * handleFavActive
   * @function
   * @returns {boolean} favActive
   */
  const handleFavActive = () => {
    !favActive ? addItemToFavourites(item) : deleteItemFromFavourites(item)
    setFavActive(!favActive)
  }

  return (
    <Button
      onClick={handleFavActive}
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
    </Button>
  )
}

FavouriteIconBtn.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default FavouriteIconBtn
