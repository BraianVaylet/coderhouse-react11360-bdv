import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react"
// styles
import { MY_BREAKPOINTS } from "styles/theme"
// components
import SkeletonItem from "components/_molecules/Item/SkItem"
import Banner from "components/_molecules/Banner"
import ItemProductList from "components/_organisms/ItemProductList"

/**
 * ProductsListTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Template para el listado de productos
 */
const ProductsListTemplate = ({ data, category, withBanner }) => {
  const [t] = useTranslation("global")
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 4 : mediaQueryMax600 ? 1 : 2)

  /**
   * renderSkeletons
   * @function
   * @returns {undefined} list of SkeletonItems components
   */
  const renderSkeletons = () => {
    const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return counter.map((index) => (
      <GridItem key={index} colSpan={1}>
        <SkeletonItem />
      </GridItem>
    ))
  }

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      w="100vw"
      p={2}
    >
      {!mediaQueryMax600 && withBanner && <Banner />}
      <Text fontSize="1rem" mb="10px">
        {t("ItemList.productsList")} {category && "/ " + category}
      </Text>
      <Grid w="100%" templateColumns={`repeat(${handleRows()}, 1fr)`} p={2}>
        {data === null ? (
          renderSkeletons()
        ) : (
          <ItemProductList
            data={data}
            type="card"
            asComponent={GridItem}
            colSpan={1}
          />
        )}
      </Grid>
    </Flex>
  )
}

ProductsListTemplate.defaultProps = {
  withBanner: false,
}

ProductsListTemplate.propTypes = {
  data: PropTypes.array.isRequired,
  category: PropTypes.string,
  withBanner: PropTypes.bool,
}

export default ProductsListTemplate
