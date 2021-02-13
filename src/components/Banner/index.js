import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
// chakra-ui
import { Box } from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"

/**
 * Banner Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente banner para la publicidad de la tienda
 *
 */
const Banner = () => {
  return (
    <Box as={Carousel} autoPlay infiniteLoop transitionTime="3s" w="100vw">
      <Box
        w="100%"
        h="50vh"
        bgImage={`url(${IMG.SLIDER3 || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
      <Box
        w="100%"
        h="50vh"
        bgImage={`url(${IMG.SLIDER1 || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
      <Box
        w="100%"
        h="50vh"
        bgImage={`url(${IMG.SLIDER2 || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
      <Box
        w="100%"
        h="50vh"
        bgImage={`url(${IMG.SLIDER4 || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
      <Box
        w="100%"
        h="50vh"
        bgImage={`url(${IMG.SLIDER5 || IMG.NO_IMG})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </Box>
  )
}

export default Banner
