import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// context
import { CartContext } from "context"

/**
 * ItemCount Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente ItemCount para seleccionar items validando el stock y con acción de agregar al carrito o comprar.
 */
const ItemCount = ({ initial = 1, stock, item, onBuy = () => {} }) => {
  const { addItemToCart } = useContext(CartContext)
  const backgroundColor = useSetColorTheme("gray.900", "gray.200")
  const toast = useToast()
  const [t] = useTranslation("global")
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
   * handleOnBuyClick
   * @function
   * @returns {undefined} return a function || a toast
   */
  const handleOnBuyClick = () => {
    return (
      onBuy() ||
      toast({
        title: t("ItemCount.canNotBuy"),
        description: t("ItemCount.canNotBuyDescription"),
        status: "info",
        duration: 5000,
        isClosable: true,
      })
    )
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

  const handleItemsByCounter = () => {
    const arrItems = []
    for (let i = 0; i < count; i++) {
      arrItems.push(item)
    }
    return arrItems
  }

  return (
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
        <Button w="25%" h="100%" onClick={handleDecrementConuter}>
          <MinusIcon w={5} h={5} />
        </Button>
        <Text w="50%" textAlign="center">
          {count}
        </Text>
        <Button w="25%" h="100%" onClick={handleIncrementConuter}>
          <AddIcon w={5} h={5} />
        </Button>
      </Flex>
      <Box>
        {noStock ? (
          <Text color="red.500" fontWeight="600">
            {t("ItemCount.noStock")}
          </Text>
        ) : (
          <Text fontWeight="600">
            {t("ItemCount.available")} {stock - count}u.
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
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string,
  }).isRequired,
  onBuy: PropTypes.func,
}

export default ItemCount
