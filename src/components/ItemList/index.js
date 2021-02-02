import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Center, Flex, Text, useToast } from "@chakra-ui/react"
// components
import Item from "components/Item"
import SkeletonItem from "components/Skeleton/Item"

/**
 * ItemList Component
 * @component
 */
const ItemList = ({ data }) => {
  const toast = useToast()
  const [t] = useTranslation("global")

  /**
   * renderItems
   * @function
   * @returns {undefined} list of Items components
   */
  const renderItems = () => {
    return data !== null && data.length > 0 ? (
      data.map(
        ({ id, title, description, price, pictureName, pictureUrl, stock }) => (
          <Item
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            pictureName={pictureName}
            pictureUrl={pictureUrl}
            stock={stock}
            onAdd={(value) =>
              toast({
                title: title + " X" + value,
                description: description,
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            }
          />
        )
      )
    ) : (
      <Center w="100%" h="80vh">
        <Text fontSize="3rem">{t("ItemList.noProductsYet")} 😔 </Text>
      </Center>
    )
  }

  const renderSkeletons = () => {
    const counter = [1, 2, 3, 4, 5, 6, 7, 8]
    return counter.map((index) => <SkeletonItem key={index} />)
  }

  console.log("renderItems()", renderItems())

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
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="wrap"
        w="100%"
      >
        {data === null ? renderSkeletons() : renderItems()}
      </Flex>
    </Flex>
  )
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ItemList
