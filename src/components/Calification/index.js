import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { StarIcon } from "@chakra-ui/icons"
import { Box, Flex } from "@chakra-ui/react"

/**
 * Calification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de sistema de calificación con 5 ⭐
 */
const Calification = ({ value }) => {
  /**
   * handleStarColor
   * @function
   * @description handle function
   * @returns {string} color
   */
  const handleStarColor = (active) =>
    active ? "brand.primary" : "brand.secundary"

  /**
   * renderStars
   * @function
   * @description render function
   * @returns {undefined} StarIcon components
   */
  const renderStars = () => {
    const limit = 20
    const items = [1, 2, 3, 4, 5]
    return items.map((item) => (
      <StarIcon
        key={item}
        mr={2}
        boxSize={6}
        color={handleStarColor(value >= item * limit - limit)}
      />
    ))
  }

  return (
    <Box padding={2}>
      <Flex direction="row" justify="flex-start" align="center" wrap="nowrap">
        {renderStars()}
      </Flex>
    </Box>
  )
}

Calification.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Calification
