import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Text, Button } from "@chakra-ui/react"

/**
 * MyButton Component
 * @component
 */
const MyButton = ({ children, onClick }) => (
  <Button
    bgGradient={"linear(to-l, brand.secundary, brand.primary)"}
    _hover={{
      bg: "brand.secundary",
      cursor: "pointer",
    }}
    color={"white"}
    onClick={onClick}
    variant="ghost"
  >
    <Text>{children}</Text>
  </Button>
)

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MyButton
