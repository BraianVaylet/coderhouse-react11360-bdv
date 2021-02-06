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
  MenuItem,
  MenuList,
  Text,
  Image,
  Button,
  MenuDivider,
  Center,
} from "@chakra-ui/react"
// context
import { FavouriteContext } from "context"

/**
 * Favorites Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const Favorites = ({ onClick }) => {
  const { favourites, cleanFavourites } = useContext(FavouriteContext)
  const [t] = useTranslation("global")
  const countFavs = favourites.length

  /**
   * renderFavourites
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna una lista de favoritos seleccionados en como un item del menú
   */
  const renderFavourites = () => {
    return favourites.map((fav) => {
      return (
        <MenuItem key={fav.id} minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={fav.pictureUrl}
            alt={fav.title}
            mr="12px"
          />
          <Text>
            <b>${fav.price}</b> | {fav.title}
          </Text>
        </MenuItem>
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
          <Center>
            <Button onClick={cleanFavourites}>{t("Favourites.clean")}</Button>
          </Center>
        </MenuList>
      )}
    </Menu>
  )
}

Favorites.propTypes = {
  onClick: PropTypes.func,
}

export default Favorites
