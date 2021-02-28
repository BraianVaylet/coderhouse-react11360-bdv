import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Flex, Text } from "@chakra-ui/react"

/**
 * StatisticsBox Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente tipo caja que muestra valor y text
 */
const StatisticsBox = ({ value, text, color }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      p={4}
      bg={color}
      borderRadius="5px"
      maxW="10vw"
      w="10vw"
      maxH="10vw"
      h="10vw"
    >
      <Text fontSize="3rem" fontWeight="900">
        {value}
      </Text>
      <Text textAlign="center">{text}</Text>
    </Flex>
  )
}

StatisticsBox.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default StatisticsBox
