import React, { useContext, useEffect, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { MdShoppingCart } from "react-icons/md"
import PropTypes from "prop-types"
// chakra-ui
import {
  Icon,
  Flex,
  MenuDivider,
  Center,
  MenuItem,
  Box,
} from "@chakra-ui/react"
// context
import { CartContext } from "context"
// routes
import { ROUTES } from "routes"
// utils
import { handleItemCount } from "utils"
// components
import ItemProduct from "components/_organisms/ItemProduct" // ! AtomicDesignError
import TotalCart from "components/_molecules/TotalCart"
import ButtonLinkTooltip from "components/_molecules/ButtonLinkTooltip"
import ButtonTooltip from "components/_molecules/ButtonTooltip"
import CustomMenu from "components/_atoms/CustomMenu"

/**
 * CartWidgetBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente carrito con contador
 */
const CartWidgetBtn = ({ onClick = () => {} }) => {
  const { cartItems, cleanCart, deleteItemsFromCart } = useContext(CartContext)
  const [t] = useTranslation("global")
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
    return items
      .map((item, index) => {
        return (
          <MenuItem key={index}>
            <ItemProduct
              item={item}
              onDelete={() => deleteItemsFromCart(item)}
            />
          </MenuItem>
        )
      })
      .reverse()
  }

  return (
    <CustomMenu
      onClick={handleIsOpen}
      btnIcon={<Icon as={MdShoppingCart} boxSize="1.5rem" />}
      count={cartCount}
      footer={
        <Flex direction="row" align="center" justify="flex-end">
          <ButtonLinkTooltip
            as={RouterLink}
            tooltipLabel={t("CartWidgetBtn.goToCart")}
            mr={2}
            size="lg"
            to={ROUTES.CART}
            onClick={() => handleIsOpen(false)}
            _hover={{ textDecoration: "none", bg: "gray.600" }}
          >
            🛒
          </ButtonLinkTooltip>
          <ButtonTooltip
            mr={2}
            size="lg"
            onClick={cleanCart}
            tooltipLabel={t("CartWidgetBtn.clean")}
          >
            🗑
          </ButtonTooltip>
        </Flex>
      }
    >
      <Box>
        {renderCartItems()}
        <MenuDivider />
        <Center>
          <TotalCart title="Total: " fontSize="1.5rem" fontWeight="bold" />
        </Center>
      </Box>
    </CustomMenu>
  )
}

CartWidgetBtn.propTypes = {
  onClick: PropTypes.func,
}

export default CartWidgetBtn
