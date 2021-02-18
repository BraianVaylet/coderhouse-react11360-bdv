import { Button } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

/**
 * ButtonLink Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón con comportamiento de Link de ReactRouter
 */
const ButtonLink = ({ to, children, ...props }) => {
  return (
    <Button as={Link} to={to} {...props}>
      {children}
    </Button>
  )
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default ButtonLink
