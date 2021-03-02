import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Button, Flex, IconButton, Text, useToast } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { CartContext } from "context"
// utils
import { PropTypesProduct } from "utils/propTypes"
// routes
import { ROUTES } from "routes"

/**
 * ItemCount Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente ItemCount para seleccionar items validando el stock y con acción de agregar al carrito o comprar.
 */
const ItemCount = ({ initial = 1, stock, item, design = 1 }) => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()
  const toast = useToast()
  const { cartItems, addItemToCart, deleteOneItemFromCart } = useContext(
    CartContext
  )
  const backgroundColor = useSetColorTheme("gray.900", "gray.200")
  const [count, setCount] = useState(initial)
  const [noStock, setNoStock] = useState(false)

  useEffect(() => setNoStock(count >= stock), [count])

  /**
   * handleIncrementConuter
   * @function
   * @returns {number} count++
   */
  const handleIncrementConuter = () =>
    setCount(count < stock && count >= 0 ? count + 1 : count)

  /**
   * handleDecrementConuter
   * @function
   * @returns {number} count--
   */
  const handleDecrementConuter = () =>
    setCount(count <= stock && count > 0 ? count - 1 : count)

  /**
   * handleIncrementConuterV2
   * @function
   * @returns {number} count++
   */
  const handleIncrementConuterV2 = () => {
    let _item = item
    const itemsArr = cartItems.filter((element) => element.id === _item.id)
    const _id = itemsArr.length + 1
    _item = { ...item, _id }
    addItemToCart([_item])
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
  }

  const handleCount = () => {
    const itemsArr = cartItems.filter((element) => element.id === item.id)
    return itemsArr.length
  }

  /**
   * handleDecrementConuterV2
   * @function
   * @returns {number} count--
   */
  const handleDecrementConuterV2 = () => handleOnDeleteClick()

  /**
   * handleOnBuyClick
   * @function
   * @returns {undefined} return a function || a toast
   */
  const handleOnBuyClick = () => {
    addItemToCart(handleItemsByCounter())
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
    routerHistory.push(ROUTES.CART)
  }

  /**
   * handleOnAddClick
   * @function
   * @returns {undefined} return a function || a toast
   */
  const handleOnAddClick = () => {
    addItemToCart(handleItemsByCounter())
    toast({
      title: t("ItemCount.addedToCart"),
      description: "",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
  }

  /**
   * handleOnDeleteClick
   * @function
   * @returns {undefined} return a function || a toast
   */
  const handleOnDeleteClick = () => deleteOneItemFromCart(item)

  /**
   * handleItemsByCounter
   * @function
   * @description retorna array de productos (trabajado)
   * @return {array}
   */
  const handleItemsByCounter = () => {
    const arrItems = []
    for (let i = 0; i < count; i++) {
      let _item = item
      const itemsArr = cartItems.filter((element) => element.id === _item.id)
      const _id = itemsArr.length + (i + 1)
      _item = { ...item, _id }
      arrItems.push(_item)
    }
    return arrItems
  }

  return design === 1 ? (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
      p="5px"
    >
      <Flex
        justify="space-between"
        direction="row"
        align="center"
        borderRadius="5px"
        w="100%"
        h="30%"
        m="5px 0px"
        bg={backgroundColor}
      >
        <IconButton
          w="25%"
          h="100%"
          onClick={handleDecrementConuter}
          icon={<MinusIcon w={5} h={5} />}
        />
        <Text w="50%" textAlign="center">
          {count}
        </Text>
        <IconButton
          w="25%"
          h="100%"
          onClick={handleIncrementConuter}
          icon={<AddIcon w={5} h={5} />}
        />
      </Flex>
      <Box>
        {noStock ? (
          <Text color="red.500" fontWeight="600">
            {t("ItemCount.noStock")}
          </Text>
        ) : (
          <Text fontWeight="600">
            {t("ItemCount.available")} {stock - count - handleCount()}u.
          </Text>
        )}
      </Box>
      <Flex justify="center" align="center" direction="column" w="100%">
        <Button
          w="100%"
          mt={4}
          disabled={noStock || count === 0}
          onClick={handleOnAddClick}
        >
          {t("ItemCount.addToCart")}
        </Button>
        <Button
          w="100%"
          mt={4}
          disabled={noStock || count === 0}
          onClick={handleOnBuyClick}
        >
          {t("ItemCount.buyNow")}
        </Button>
      </Flex>
    </Flex>
  ) : design === 2 ? (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
      p="5px"
    >
      <Flex
        justify="space-between"
        direction="row"
        align="center"
        borderRadius="5px"
        w="100%"
        m="5px 0px"
        bg={backgroundColor}
      >
        <IconButton
          disabled={stock - handleCount() === 0}
          mr={4}
          w="50%"
          h="100%"
          onClick={handleDecrementConuterV2}
          icon={<MinusIcon w={5} h={10} />}
        />
        <IconButton
          disabled={stock - handleCount() === 0}
          w="50%"
          h="100%"
          onClick={handleIncrementConuterV2}
          icon={<AddIcon w={5} h={10} />}
        />
      </Flex>
      <Box>
        {stock - handleCount() === 0 ? (
          <Text color="red.500" fontWeight="600">
            {t("ItemCount.noStock")}
          </Text>
        ) : (
          <Text fontWeight="600">
            {t("ItemCount.available")} {stock - handleCount()}u.
          </Text>
        )}
      </Box>
    </Flex>
  ) : (
    <Box />
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  item: PropTypes.shape(PropTypesProduct).isRequired,
  onBuy: PropTypes.func,
  /**
   * design = 1: Preparado para ser usado en los componentes Item, ItemDetail
   * design = 2: Preparado para ser usado en la pagina Cart
   */
  design: PropTypes.number,
}

export default ItemCount
