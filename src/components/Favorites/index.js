import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { ChevronDownIcon } from "@chakra-ui/icons"
// chakra-ui
import {
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Button,
  MenuDivider,
  Tooltip,
} from "@chakra-ui/react"
// context
import { FavouriteContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { TOOLTIP_TIME } from "styles/theme"
// routes
import MenuItemProduct from "components/MenuItemProduct"

/**
 * Favorites Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const Favorites = ({ onClick }) => {
  const { favourites, cleanFavourites, deleteItemFromFavourites } = useContext(
    FavouriteContext
  )
  const [t] = useTranslation("global")
  const backgroundColorTooltip = useSetColorTheme("black", "white")

  const countFavs = favourites.length

  /**
   * renderFavourites
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna una lista de favoritos seleccionados en como un item del menú
   */
  const renderFavourites = () => {
    return favourites.map((fav, index) => {
      return (
        <MenuItemProduct
          key={index}
          item={fav}
          onDelete={() => deleteItemFromFavourites(fav)}
        />
      )
    })
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={countFavs > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        onClick={onClick}
        leftIcon={
          <Flex direction="row" align="center">
            {countFavs > 0 ? (
              <Icon as={MdFavorite} boxSize="1.5rem" />
            ) : (
              <Icon as={MdFavoriteBorder} boxSize="1.5rem" />
            )}
            <Text>({countFavs})</Text>
          </Flex>
        }
      />
      {countFavs > 0 && (
        <MenuList>
          {renderFavourites()}
          <MenuDivider />
          <Flex direction="row" align="center" justify="flex-end">
            <Tooltip
              hasArrow
              label={t("Favourites.clean")}
              bg={backgroundColorTooltip}
              fontSize="md"
              openDelay={TOOLTIP_TIME}
              color
            >
              <Button mr={2} size="lg" onClick={cleanFavourites}>
                🗑
              </Button>
            </Tooltip>
          </Flex>
        </MenuList>
      )}
    </Menu>
  )
}

Favorites.propTypes = {
  onClick: PropTypes.func,
}

export default Favorites
