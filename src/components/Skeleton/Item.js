import React from "react"
// chakra-ui
import { Flex, useColorMode, Skeleton } from "@chakra-ui/react"

/**
 * SkeletonItem Component
 * @component
 */
const SkeletonItem = () => {
  const { colorMode } = useColorMode()

  // const
  const backgroundColorMode = colorMode === "dark" ? "gray.700" : "white"
  const MAX_HEIGHT = "80vh"
  const IMG_SIZE = "40vh"

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      borderRadius="2.5px"
      backgroundColor={backgroundColorMode}
      boxShadow="0.75rem 0.75rem #2564f7"
      position="relative"
      m="15px"
      minH={MAX_HEIGHT}
      maxH={MAX_HEIGHT}
      h={MAX_HEIGHT}
    >
      <Skeleton
        w={IMG_SIZE}
        minW={IMG_SIZE}
        maxW={IMG_SIZE}
        h={IMG_SIZE}
        minH={IMG_SIZE}
        maxH={IMG_SIZE}
      />
      <Flex
        p="10px 20px"
        direction="column"
        justify="center"
        align="center"
        w="100%"
        h={IMG_SIZE}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          w="100%"
          h="50%"
        >
          {/* <Heading fontSize="2.5rem" mb="10px">
            ${price}
          </Heading> */}
          <Skeleton h="2.5rem" w="100%" />
          {/* <Text fontSize="1.25rem">{title}</Text> */}

          {/* <Text fontSize=".75rem">{description}</Text> */}
          <Skeleton h=".75rem" w="100%" />
        </Flex>
        <Skeleton h="50%" w="100%" />
        {/* <ItemCount stock={stock} onAdd={onAdd} /> */}
      </Flex>
    </Flex>
  )
}

export default SkeletonItem
