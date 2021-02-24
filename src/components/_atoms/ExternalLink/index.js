import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Link } from "@chakra-ui/react"

/**
 * ExternalLink Component
 * @component
 * @author Braian D. Vaylet
 * @description link a una web externa
 */
const ExternalLink = ({ href, children }) => {
  return (
    <Link href={href} isExternal>
      {children}
    </Link>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ExternalLink
