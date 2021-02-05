import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
// material-ui
import { Divider, Flex } from "@chakra-ui/react"
// components
import ItemDetailImgBox from "components/ItemDetail/ItemDetailImgBox"
import ItemDetailAction from "components/ItemDetail/ItemDetailAction"
import ItemDetailCharacteristics from "components/ItemDetail/ItemDetailCharacteristics"
import ItemDetailDescription from "components/ItemDetail/ItemDetailDescription"
import ItemDetailQuestionsAndAnswers from "components/ItemDetail/ItemDetailQuestionsAndAnswers"
import SkeletonItemDetailImgBox from "components/Skeleton/ItemDetail/SkItemDetailImgBox"
import SkeletonItemDetailAction from "components/Skeleton/ItemDetail/SkItemDetailAction"
import SkeletonItemDetailContent from "components/Skeleton/ItemDetail/SkItemDetailContent"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// fake data
import { PRODUCTS } from "test"

/**
 * ItemDetail Component
 * @Component
 */
const ItemDetail = () => {
  const backgroundColor = useBackgroundColorTheme("gray.900", "white")
  const { id } = useParams()
  const routerHistory = useHistory()
  const [item, setItem] = useState(null)
  console.log("item", item)

  useEffect(async () => {
    try {
      const value = await handleDataByItemId()
      setItem(value)
    } catch (error) {
      console.log("error", error)
    }
  }, [])

  /**
   * handleDataByItemId
   * @function
   * @returns {object} item info
   */
  const handleDataByItemId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = PRODUCTS.filter((product) => product.id === id)
        item.length ? resolve(item[0]) : routerHistory.push("/home")
      }, 2000)
    })
  }

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      w="100%"
      p={setValueResponsiveMin1280("100px", "10px")}
    >
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        w="100%"
        wrap="wrap"
        mb={10}
      >
        {/* image */}
        <Flex
          w={setValueResponsiveMin1280("72.5%", "100%")}
          minH={setValueResponsiveMin1280("80vh", "100%")}
          h={setValueResponsiveMin1280("80vh", "100%")}
          bgColor={backgroundColor}
          boxShadow="0.75rem 0.75rem #2564f7"
        >
          {item !== null ? (
            <ItemDetailImgBox
              pictureName={item.pictureName}
              pictureUrl={item.pictureUrl}
              pictureId={item.id}
            />
          ) : (
            <SkeletonItemDetailImgBox />
          )}
        </Flex>

        {/* right :: info item */}
        <Flex
          w={setValueResponsiveMin1280("25%", "100%")}
          minH={setValueResponsiveMin1280("80vh", "100%")}
          h={setValueResponsiveMin1280("80vh", "100%")}
          p="20px"
          bgColor={backgroundColor}
          boxShadow="0.75rem 0.75rem #2564f7"
        >
          {item !== null ? (
            <ItemDetailAction
              title={item.title}
              price={item.price}
              stock={item.stock}
            />
          ) : (
            <SkeletonItemDetailAction />
          )}
        </Flex>
      </Flex>

      {/* bottom :: info item */}
      <Flex
        direction="column"
        justify="flex-start"
        center="flex-start"
        w="100%"
        minH="20vh"
        p="20px"
        bgColor={backgroundColor}
        boxShadow="0.75rem 0.75rem #2564f7"
      >
        <Flex direction="column" justify="flex-start" center="flex-start">
          {item !== null ? (
            <>
              {/* characteristics */}
              {item !== null && (
                <ItemDetailCharacteristics
                  brand={item.brand}
                  model={item.model}
                />
              )}
              <Divider mt={10} mb={10} />
              {/* description */}
              {item !== null && (
                <ItemDetailDescription description={item.description} />
              )}
              <Divider mt={10} mb={10} />
              {/* comments */}
              <ItemDetailQuestionsAndAnswers />
            </>
          ) : (
            <SkeletonItemDetailContent />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ItemDetail
