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
const ExternalLink = ({ href, text }) => {
  return (
    <Link href={href} isExternal>
      {text}
    </Link>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ExternalLink
