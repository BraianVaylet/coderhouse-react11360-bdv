import React from "react"
// material-ui
import { Divider, Flex } from "@chakra-ui/react"
// components
import ItemDetailImgBox from "./ItemDetailImgBox"
import ItemDetailAction from "./ItemDetailAction"
import ItemDetailCharacteristics from "./ItemDetailCharacteristics"
import ItemDetailDescription from "./ItemDetailDescription"
import ItemDetailQuestionsAndAnswers from "./ItemDetailQuestionsAndAnswers"
// hooks
import useBackgroundColorTheme from "hooks/useBackgroundColorTheme"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"

/**
 * ItemDetail Component
 * @Component
 */
const ItemDetail = () => {
  const backgroundColor = useBackgroundColorTheme("gray.900", "white")

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
          bgColor={backgroundColor}
          boxShadow="0.75rem 0.75rem #2564f7"
        >
          <ItemDetailImgBox />
        </Flex>

        {/* right :: info item */}
        <Flex
          w={setValueResponsiveMin1280("25%", "100%")}
          minH={"80vh"}
          p="20px"
          bgColor={backgroundColor}
          boxShadow="0.75rem 0.75rem #2564f7"
        >
          <ItemDetailAction />
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
          {/* characteristics */}
          <ItemDetailCharacteristics />
          <Divider mt={10} mb={10} />
          {/* description */}
          <ItemDetailDescription />
          <Divider mt={10} mb={10} />
          {/* comments */}
          <ItemDetailQuestionsAndAnswers />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ItemDetail
