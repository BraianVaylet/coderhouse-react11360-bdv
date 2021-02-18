import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Tooltip } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { TOOLTIP_TIME } from "styles/theme"

const CustomTooltip = ({ children, label }) => {
  const backgroundColorTooltip = useSetColorTheme("black", "white")

  return (
    <Tooltip
      hasArrow
      label={label}
      bg={backgroundColorTooltip}
      fontSize="md"
      openDelay={TOOLTIP_TIME}
      color
    >
      {children}
    </Tooltip>
  )
}

CustomTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
}

export default CustomTooltip
