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
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react"
// context
import { FavouriteContext } from "context"
// routes
import ItemProduct from "components/_organisms/ItemProduct"
import ButtonTooltip from "components/_molecules/ButtonTooltip"

/**
 * FavoritesBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const FavoritesBtn = ({ onClick, withText = false }) => {
  const { favourites, cleanFavourites, deleteItemFromFavourites } = useContext(
    FavouriteContext
  )
  const [t] = useTranslation("global")

  const countFavs = favourites.length

  /**
   * renderFavourites
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna una lista de favoritos seleccionados en como un item del menú
   */
  const renderFavourites = () => {
    return favourites
      .map((fav, index) => {
        return (
          <MenuItem key={index}>
            <ItemProduct
              item={fav}
              onDelete={() => deleteItemFromFavourites(fav)}
            />
          </MenuItem>
        )
      })
      .reverse()
  }

  return (
    <Menu closeOnSelect={false} arrowPadding={0}>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={countFavs > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        leftIcon={
          <Flex direction="row" align="center">
            {countFavs > 0 ? (
              <Icon as={MdFavorite} boxSize="1.5rem" />
            ) : (
              <Icon as={MdFavoriteBorder} boxSize="1.5rem" />
            )}
            <Text as={Flex} align="center">
              {withText && <Text m="0 .5rem">{t("Favourites.title")}</Text>}(
              {countFavs})
            </Text>
          </Flex>
        }
      />
      {countFavs > 0 && (
        <MenuList>
          {renderFavourites()}
          <MenuDivider />
          <Flex direction="row" align="center" justify="flex-end">
            <ButtonTooltip
              tooltipLabel={t("Favourites.clean")}
              mr={2}
              size="lg"
              onClick={cleanFavourites}
            >
              🗑
            </ButtonTooltip>
          </Flex>
        </MenuList>
      )}
    </Menu>
  )
}

FavoritesBtn.propTypes = {
  onClick: PropTypes.func,
  withText: PropTypes.bool,
}

export default FavoritesBtn
