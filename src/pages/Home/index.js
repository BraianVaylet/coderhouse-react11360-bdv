// react
import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, useMediaQuery } from "@chakra-ui/react"
// components
import ItemList from "components/ItemList"
import HelmetSEO from "components/HelmetSEO"
import Banner from "components/Banner"
// fake data
import { PRODUCTS } from "test"
// styles
import { MY_BREAKPOINTS } from "styles/theme"

/**
 * Home Page
 * @component
 * @author Braian D. Vaylet
 * @description Page Home
 */
const Home = () => {
  const [t] = useTranslation("global")
  const [mediaQueryMax400] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_400)
  // ! Desafío: Catálogo con MAPS y Promises ---
  const [data, setData] = useState(null)

  const getDataTest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTS)
      }, 2000)
    })
  }

  // * OPC1: con async-await
  useEffect(async () => {
    try {
      const data = await getDataTest()
      setData(data)
    } catch (error) {
      console.log("error", error)
    }
  }, [])

  // * OPC2: con promesas
  useEffect(() => {
    getDataTest()
      .then((res) => setData(res))
      .catch((error) => console.log("error", error))
  }, [])
  // ! fin ---

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.home")}
        description={t("HelmetSEO.description.home")}
      />
      <Flex direction="column" justify="flex-start" align="center" minH="100vh">
        {!mediaQueryMax400 && <Banner />}
        <ItemList data={data} />
      </Flex>
    </>
  )
}

export default Home
