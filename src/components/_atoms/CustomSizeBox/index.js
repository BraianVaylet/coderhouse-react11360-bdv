import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Kbd } from "@chakra-ui/react"

/**
 * CustomSizeBox Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomSizeBox = ({ value }) => {
  return (
    value &&
    value.map((size, index) => {
      return (
        <Kbd key={index} mr={2}>
          {size}
        </Kbd>
      )
    })
  )
}

CustomSizeBox.propTypes = {
  value: PropTypes.array.isRequired,
}

export default CustomSizeBox
