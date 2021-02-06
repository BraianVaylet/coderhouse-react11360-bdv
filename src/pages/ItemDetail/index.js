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
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// routes
import { ROUTES } from "routes"
// fake data
import { PRODUCTS } from "test"
import Header from "components/Header"

/**
 * ItemDetail Page
 * @Component
 * @author Braian D. Vaylet
 * @description Page ItemDetail, detalle del producto seleccionado
 */
const ItemDetail = () => {
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const { id } = useParams()
  const routerHistory = useHistory()

  // ! Desafío: Detalle de Producto
  const [item, setItem] = useState(null)

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
        item.length ? resolve(item[0]) : routerHistory.push(ROUTES.HOME)
      }, 2000)
    })
  }

  // ! end

  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      w="100%"
      p={setValueResponsiveMin1280("20px 100px", "10px")}
    >
      <Header />
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
              id={item.id}
              title={item.title}
              price={item.price}
              stock={item.stock}
              calification={item.calification}
              pictureUrl={item.pictureUrl}
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
              <ItemDetailCharacteristics
                brand={item.brand}
                model={item.model}
              />

              <Divider mt={10} mb={10} />

              {/* description */}
              <ItemDetailDescription description={item.description} />

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
