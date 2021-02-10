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
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
// context
import { CartContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// routes
import { ROUTES } from "routes"
// styles
import { TOOLTIP_TIME } from "styles/theme"
import MenuItemProduct from "components/MenuItemProduct"

/**
 * CartWidget Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente carrito con contador
 */
const CartWidget = ({ onClick = () => {} }) => {
  const { cartItems, cleanCart, deleteItemFromCart } = useContext(CartContext)
  const [t] = useTranslation("global")
  const backgroundColorTooltip = useSetColorTheme("black", "white")
  const [items, setItems] = useState([])

  const cartCount = cartItems.length

  useEffect(() => {
    handleItemCount()
  }, [cartItems])

  /**
   * handleTotalPrice
   * @function
   * @description Calculo el total del carrito
   */
  const handleTotalPrice = () => {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total = total + cartItems[i].price
    }
    return total
  }

  /**
   * handleItemCount
   * @function
   * @description cuento cuantos elemntos como item hay en el carrito
   */
  const handleItemCount = () => {
    // obtengo contadores de elementos repetidos
    const counters = cartItems.reduce((acc, item) => {
      acc[item.id] = ++acc[item.id] || 1
      return acc
    }, {})

    // elimino repetidos
    const idArr = cartItems.map((item) => item.id)
    const newArr = new Set(idArr)
    const idArrNoRepeat = [...newArr]

    // nuevo array con info y contador
    const auxArr = []
    for (let i = 0; i < idArrNoRepeat.length; i++) {
      const data = cartItems.find((itemCart) => {
        return itemCart.id === idArrNoRepeat[i]
      })
      let newData = data
      newData = { ...data, count: counters[data.id] }
      data && auxArr.push(newData)
    }

    setItems(auxArr)
  }

  /**
   * renderCartItems
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna los productos agregados al carrito como un item del menú
   */
  const renderCartItems = () => {
    return items.map((item, index) => {
      return (
        <MenuItemProduct
          key={index}
          item={item}
          onDelete={() => deleteItemFromCart(item)}
        />
      )
    })
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={cartCount > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        onClick={onClick}
        icon={
          <Flex direction="row" align="center">
            <Icon as={MdShoppingCart} boxSize="1.5rem" />
            <Text>({cartCount})</Text>
          </Flex>
        }
      />
      {cartCount > 0 && (
        <MenuList>
          {renderCartItems()}
          <MenuDivider />
          <Center>
            <Text fontSize="1.25rem" fontWeight="bold">
              TOTAL: ${handleTotalPrice()}
            </Text>
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
