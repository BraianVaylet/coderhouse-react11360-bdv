import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"

/**
 * ItemCount Component
 * @component
 */
const ItemCount = ({ initial = 1, stock, onAdd = () => {} }) => {
  const backgroundColor = useBackgroundColorTheme("gray.900", "gray.200")
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
      <Box>
        <Button
          w="100%"
          disabled={noStock || count === 0}
          onClick={() => onAdd(count)}
        >
          {t("ItemCount.addToCart")}
        </Button>
      </Box>
    </Flex>
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onAdd: PropTypes.func,
}

export default ItemCount
