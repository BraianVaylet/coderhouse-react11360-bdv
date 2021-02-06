import React, { useState, useContext } from "react"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Icon, IconButton, Tooltip } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
import { FavouriteContext } from "context"

/**
 * FavouriteButton Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con acción onClick y cambio de icono.
 */
const FavouriteButton = ({ item }) => {
  const {
    favourites,
    addItemToFavourites,
    deleteItemFromFavourites,
  } = useContext(FavouriteContext)
  const [t] = useTranslation("global")
  const [favActive, setFavActive] = useState(
    favourites.filter((fav) => fav.id === item.id).length === 1
  )
  const backgroundColor = useSetColorTheme("gray.700", "white")
  const backgroundColorTooltip = useSetColorTheme("black", "white")

  /**
   * handleFavActive
   * @function
   * @returns {boolean} favActive
   */
  const handleFavActive = () => {
    !favActive ? addItemToFavourites(item) : deleteItemFromFavourites(item)
    setFavActive(!favActive)
  }

  /**
   * handleLabelTooltip
   * @function
   * @returns {string} tooltip label text
   */
  const handleLabelTooltip = () =>
    favActive
      ? t("FavouriteButton.deleteFromFavourites")
      : t("FavouriteButton.addToFavourites")

  return (
    <Tooltip
      hasArrow
      label={handleLabelTooltip()}
      bg={backgroundColorTooltip}
      fontSize="md"
      openDelay={500}
      color
    >
      <IconButton
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
    </Tooltip>
  )
}

FavouriteButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string,
  }).isRequired,
}

export default FavouriteButton
