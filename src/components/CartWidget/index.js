import React, { useContext, useEffect, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { MdShoppingCart } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import {
  Icon,
  IconButton,
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuDivider,
  Button,
  Tooltip,
  Center,
  MenuItem,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
// context
import { CartContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
// utils
import { handleItemCount } from "utils"
// styles
import { TOOLTIP_TIME } from "styles/theme"
// components
import ItemProduct from "components/ItemProduct"
import TotalCart from "components/TotalCart"

/**
 * CartWidget Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente carrito con contador
 */
const CartWidget = ({ onClick = () => {} }) => {
  const { cartItems, cleanCart, deleteItemsFromCart } = useContext(CartContext)
  const [t] = useTranslation("global")
  const backgroundColorTooltip = useSetColorTheme("black", "white")
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const cartCount = cartItems.length

  useEffect(() => setItems(handleItemCount(cartItems)), [cartItems])

  /**
   * handleIsOpen
   * @function
   * @description controlo la apertura del menu
   */
  const handleIsOpen = (value = !isOpen) => setIsOpen(value)

  /**
   * renderCartItems
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna los productos agregados al carrito como un item del menú
   */
  const renderCartItems = () => {
    return items.map((item, index) => {
      return (
        <MenuItem key={index}>
          <ItemProduct item={item} onDelete={() => deleteItemsFromCart(item)} />
        </MenuItem>
      )
    })
  }

  return (
    <Menu
      closeOnSelect={false}
      arrowPadding={0}
      defaultIsOpen={isOpen}
      onClose={handleIsOpen}
    >
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={cartCount > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        onClick={handleIsOpen}
        icon={
          <Flex direction="row" align="center">
            <Icon as={MdShoppingCart} boxSize="1.5rem" />
            <Text>({cartCount})</Text>
          </Flex>
        }
      />
      {cartCount > 0 && isOpen && (
        <MenuList>
          {renderCartItems()}
          <MenuDivider />
          <Center>
            <TotalCart title="Total: " fontSize="1.5rem" fontWeight="bold" />
          </Center>
          <MenuDivider />
          <Flex direction="row" align="center" justify="flex-end">
            <Tooltip
              hasArrow
              label={t("CartWidget.goToCart")}
              bg={backgroundColorTooltip}
              fontSize="md"
              openDelay={TOOLTIP_TIME}
              color
            >
              <Button
                as={RouterLink}
                mr={2}
                size="lg"
                to={ROUTES.CART}
                onClick={() => handleIsOpen(false)}
                _hover={{ textDecoration: "none", bg: "gray.600" }}
              >
                🛒
              </Button>
            </Tooltip>
            <Tooltip
              hasArrow
              label={t("CartWidget.clean")}
              bg={backgroundColorTooltip}
              fontSize="md"
              openDelay={TOOLTIP_TIME}
              color
            >
              <Button mr={2} size="lg" onClick={cleanCart}>
                🗑
              </Button>
            </Tooltip>
          </Flex>
        </MenuList>
      )}
    </Menu>
  )
}

CartWidget.propTypes = {
  onClick: PropTypes.func,
}

export default CartWidget
