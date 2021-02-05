import React, { useState } from "react"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
// chakra-ui
import { Box, Icon, IconButton } from "@chakra-ui/react"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"

/**
 * FavouriteButton Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con acción onClick y cambio de icono.
 */
const FavouriteButton = () => {
  const [favActive, setFavActive] = useState(false)
  const backgroundColor = useBackgroundColorTheme("gray.700", "white")

  /**
   * handleFavActive
   * @function
   * @returns {boolean} favActive
   */
  const handleFavActive = () => setFavActive(!favActive)

  return (
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
  )
}

export default FavouriteButton
