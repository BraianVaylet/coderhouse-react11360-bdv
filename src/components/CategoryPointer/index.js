import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text } from "@chakra-ui/react"
import { CATEGORIES } from "utils/constants"

/**
 * CategoryPointer Component
 * @component
 * @author Braian D. Vaylet
 * @description muestra un indicador de la categoria
 */
const CategoryPointer = ({ category }) => {
  /**
   * handleCategory
   * @function
   * @returns {string}
   */
  const handleCategory = () => {
    switch (category) {
      case CATEGORIES.JACKETS:
        return "🟠"
      case CATEGORIES.SHIRTS:
        return "🟡"
      case CATEGORIES.SHOES:
        return "🟢"
      case CATEGORIES.ACCESORIES:
        return "🔵"
    }
  }

  return <Text fontSize=".25rem">{handleCategory()}</Text>
}

CategoryPointer.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryPointer
