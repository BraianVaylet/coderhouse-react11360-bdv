import React from "react"
// chakra-ui
import { Center, Skeleton } from "@chakra-ui/react"

/**
 * Skeleton/ItemDetail/SkeletonItemDetailContent Component
 * @component
 */
const SkeletonItemDetailContent = () => {
  return (
    <Center w="100%" h="20vh" p="20px">
      <Skeleton w="100%" h="100%" />
    </Center>
  )
}

export default SkeletonItemDetailContent
