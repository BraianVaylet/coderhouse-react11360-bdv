import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
// components
import Item from "components/Item"
import SkeletonItem from "components/Skeleton/Item/SkItem"
// styles
import { MY_BREAKPOINTS } from "styles/theme"

/**
 * ItemList Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con el listado de items.
 */
const ItemList = ({ data }) => {
  const [t] = useTranslation("global")
  const [mediaQueryMin1280] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN_1280)
  const [mediaQueryMax400] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_400)

  /**
   * handleRows
   * @function
   * @returns {number} number of columns
   */
  const handleRows = () => (mediaQueryMin1280 ? 5 : mediaQueryMax400 ? 1 : 2)

  /**
   * renderItems
   * @function
   * @returns {undefined} list of Items components
   */
  const renderItems = () => {
    return data !== null && data.length > 0 ? (
      data.map(
        ({ id, title, description, price, pictureName, pictureUrl, stock }) => (
          <GridItem key={id} colSpan={1}>
            <Item
              id={id}
              title={title}
              description={description}
              price={price}
              pictureName={pictureName}
              pictureUrl={pictureUrl}
              stock={stock}
            />
          </GridItem>
        )
      )
    ) : (
      <Center w="100%" h="80vh">
        <Text fontSize="3rem">{t("ItemList.noProductsYet")} 😔 </Text>
      </Center>
    )
  }

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
      p="10px"
      w="100%"
    >
      <Text fontSize="2rem" mb="10px">
        {t("ItemList.productsList")}
      </Text>
      <Grid w="100%" templateColumns={`repeat(${handleRows()}, 1fr)`}>
        {data === null ? renderSkeletons() : renderItems()}
      </Grid>
    </Flex>
  )
}

ItemList.propTypes = {
  data: PropTypes.array,
}

export default ItemList
