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

  useEffect(() => {
    setTimeout(() => {
      setData(PRODUCTS)
    }, 5000)
  }, [])
  // ! fin ---

  return (
    <Flex direction="column" justify="flex-start" align="center" minH="100vh">
      <ItemList data={data} />
    </Flex>
  )
}

export default Home
