// react
import React, { useState, useEffect } from "react"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import ItemList from "components/ItemList"
// fake data
import { PRODUCTS } from "test"

const Home = () => {
  // ! inicio simulacion de data fetch ---
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
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <ItemList data={data} />
    </Flex>
  )
}

export default Home
