import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import ImageBox from "components/_atoms/ImageBox"
// utils
import { IMG } from "utils/images"
import { CATEGORIES } from "utils/constants"
// routes
import { ROUTES } from "routes"
// styles
import { MY_BREAKPOINTS } from "styles/theme"

/**
 * BannerLinks Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente banner con links a las categorias principales
 */
const BannerLinks = () => {
  const [t] = useTranslation("global")
  const [mediaQueryMax600] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_600)

  return (
    <Flex
      w="98%"
      direction={mediaQueryMax600 ? "column" : "row"}
      m="0 1rem"
      align="center"
      justify="space-between"
      maxH="75vh"
      h="75vh"
    >
      <Flex
        h="100%"
        w={mediaQueryMax600 ? "100%" : "50%"}
        align="center"
        justify="center"
        direction={mediaQueryMax600 ? "column" : "row"}
      >
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.JACKETS}
          _hover={{
            opacity: ".95",
          }}
          bg="orange.300"
          borderRadius="5px"
          align="center"
          w={mediaQueryMax600 ? "100%" : "60%"}
          h="100%"
          position="relative"
        >
          <ImageBox url={IMG.JACKET} w="100%" h="100%" />
          <Text
            position="absolute"
            top="2.5"
            left="5"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.jackets")}
          </Text>
        </Flex>
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHIRTS}
          _hover={{
            opacity: ".95",
          }}
          bg="brand.primary"
          w={mediaQueryMax600 ? "100%" : "40%"}
          align="center"
          m="1rem"
          borderRadius="5px"
          direction="column"
          h="100%"
          position="relative"
        >
          <ImageBox title="" url={IMG.SHIRT} w="100%" h="100%" />
          <Text
            position="absolute"
            top="50%"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
            textOrientation="vertical"
          >
            {t("BannerLinks.shirts")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        w={mediaQueryMax600 ? "100%" : "50%"}
        align="center"
        justify="center"
        direction="column"
      >
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.SHOES}
          _hover={{
            opacity: ".95",
          }}
          bg="red.500"
          w="100%"
          align="center"
          borderRadius="5px"
          h="50%"
          position="relative"
        >
          <ImageBox url={IMG.SHOES} w="100%" h="100%" />
          <Text
            position="absolute"
            right="10"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
          >
            {t("BannerLinks.shoes")}
          </Text>
        </Flex>
        <Flex
          as={Link}
          to={ROUTES.PRODUCTS + "/" + CATEGORIES.ACCESORIES}
          _hover={{
            opacity: ".95",
          }}
          bg="teal.400"
          w="100%"
          align="center"
          justify="flex-end"
          mt="1rem"
          borderRadius="5px"
          direction="row"
          h="50%"
          position="relative"
        >
          <Text
            position="absolute"
            left="10"
            bottom="10"
            color="white"
            fontWeight="900"
            fontSize="3rem"
            letterSpacing="-4px"
            textOrientation="vertical"
          >
            {t("BannerLinks.accesories")}
          </Text>
          <Flex w="50%" h="100%" justify="flex-end">
            <ImageBox url={IMG.WATCH} w="100%" h="100%" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BannerLinks
