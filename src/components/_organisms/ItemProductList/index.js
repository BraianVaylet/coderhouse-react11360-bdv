import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Center, Text } from "@chakra-ui/react"
// components
import ItemProduct from "components/_molecules/ItemProduct"
import Item from "components/_molecules/Item"

/**
 * ProductList Component
 * @component
 * @author Braian D. Vaylet
 * @description retorna listado de productos
 */
const ItemProductList = ({
  data,
  asComponent,
  onDelete,
  type,
  design,
  withSlice,
  slice,
  ...props
}) => {
  const [t] = useTranslation("global")
  const [items, setItems] = useState(data)

  useEffect(() => setItems(data), [data])

  return items.length > 0 ? (
    items
      .map((item, index) => {
        return (
          <Box as={asComponent} key={index} {...props}>
            {type === "item" ? (
              <ItemProduct
                item={item}
                onDelete={() => onDelete(item)}
                design={design}
              />
            ) : type === "card" ? (
              <Item item={item} />
            ) : (
              <Box />
            )}
          </Box>
        )
      })
      .reverse()
      .slice(0, withSlice ? slice : items.length)
  ) : (
    <Center w="100%" h="80vh">
      <Text fontSize="3rem">{t("ItemProductList.noProductsYet")} 😔 </Text>
    </Center>
  )
}

ItemProductList.defaultProps = {
  onDelete: () => {},
  type: "item",
  design: 1,
  withSlice: false,
}

ItemProductList.propTypes = {
  data: PropTypes.any.isRequired,
  asComponent: PropTypes.node,
  onDelete: PropTypes.func,
  type: PropTypes.oneOf(["item", "card"]),
  design: PropTypes.number,
  withSlice: PropTypes.bool,
  slice: PropTypes.number,
}

export default ItemProductList
