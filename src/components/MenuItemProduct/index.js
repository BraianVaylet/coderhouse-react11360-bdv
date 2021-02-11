import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import {
  Badge,
  Button,
  Flex,
  Link,
  Text,
  Tooltip,
  Image,
  Box,
} from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// styles
import { TOOLTIP_TIME } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * MenuItemProducts
 * @component
 * @author Braian D. Vaylet
 * @description Componente para los menu de favoritos y del carrito
 */
const MenuItemProduct = ({ item, onDelete, design = 1 }) => {
  const backgroundColorTooltip = useSetColorTheme("black", "white")
  const [t] = useTranslation("global")

  return design === 1 ? (
    <Box minH="10vh">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
      >
        <Image
          boxSize="3rem"
          borderRadius="full"
          src={item.pictureUrl}
          alt={item.title}
          mr="12px"
        />
        <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
          <Text>
            <b>${item.price}</b> | {item.title}
          </Text>
          {item.count && (
            <Badge ml="1" colorScheme="green">
              x{item.count}
            </Badge>
          )}
        </Link>
        <Tooltip
          hasArrow
          label={t("MenuItemProduct.deleteItem")}
          bg={backgroundColorTooltip}
          fontSize="md"
          openDelay={TOOLTIP_TIME}
          color
        >
          <Button ml={6} onClick={onDelete}>
            ❌
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  ) : design === 2 ? (
    <Box>hola 2</Box>
  ) : (
    <Box />
  )
}

MenuItemProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number,
  }),
  onDelete: PropTypes.func.isRequired,
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en el carrito
   */
  design: PropTypes.number,
}

export default MenuItemProduct
