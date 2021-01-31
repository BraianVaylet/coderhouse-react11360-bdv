import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Flex, Text, useColorMode } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

/**
 * ItemCount Component
 * @component
 */
const ItemCount = ({ initial = 1, stock, onAdd = () => {} }) => {
  const { colorMode } = useColorMode()
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

  return (
    <Flex
      justify="space-between"
      direction="column"
      align="center"
      w="200px"
      borderWidth="1px"
      borderRadius="5px"
      p="20px"
      boxShadow="lg"
    >
      <Flex
        justify="space-between"
        direction="row"
        align="center"
        w="100%"
        h="40px"
        m="10px 0px"
        bg={colorMode === "light" ? "gray.200" : "gray.900"}
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
      {noStock ? (
        <Text color="red.500" fontWeight="600">
          {t("ItemCount.noStock")}
        </Text>
      ) : (
        <Text fontWeight="600">
          {t("ItemCount.available")} {stock - count}u.
        </Text>
      )}
      <Button
        w="100%"
        mt="20px"
        disabled={noStock || count === 0}
        onClick={() => onAdd(count)}
      >
        {t("ItemCount.addToCart")}
      </Button>
    </Flex>
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onAdd: PropTypes.func,
}

export default ItemCount
