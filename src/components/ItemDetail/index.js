import React from "react"
// material-ui
import { Flex, Text, Box, Center } from "@chakra-ui/react"
// constants
import { IMG } from "utils/constants"
// components
import ItemCount from "components/ItemCount"
import FavouriteButton from "components/FavouriteButton"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"

/**
 * ItemDetail Component
 * @Component
 */
const ItemDetail = () => {
  const backgroundColor = useBackgroundColorTheme("gray.900", "white")

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      w="100%"
      p="100px"
    >
      {/* image */}
      <Flex
        bg="blue.200"
        w="50%"
        minH="80vh"
        bgColor={backgroundColor}
        boxShadow="0.75rem 0.75rem #2564f7"
      >
        <Center p="20px" w="100%">
          <Box
            bgImage={`url(${IMG.NO_IMG})`}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            w="300px"
            minW="300px"
            maxW="300px"
            h="300px"
            minH="300px"
            maxH="300px"
            borderWidth="2px"
            borderColor="black"
          />
        </Center>
      </Flex>

      {/* info item */}
      <Flex
        bg="red.200"
        w="48%"
        minH="80vh"
        p="20px"
        bgColor={backgroundColor}
        boxShadow="0.75rem 0.75rem #2564f7"
      >
        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          w="100%"
        >
          {/* info */}
          <Flex
            direction="column"
            justify="space-between"
            align="flex-start"
            w="100%"
          >
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              w="100%"
            >
              <Text fontSize="1rem">Status | Vendidos</Text>
              <FavouriteButton />
            </Flex>
            <Text fontSize="3rem">Titulo</Text>
            <Text fontSize="4rem" fontWeight="bold">
              $Precio
            </Text>
            <Text fontSize="1.5rem">Descripción</Text>
            <Text>Envío</Text>
          </Flex>

          {/* action */}

          <Flex
            direction="column"
            justify="space-between"
            align="center"
            w="100%"
            h="40%"
          >
            <Box w="50%">
              <ItemCount stock={5} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ItemDetail
