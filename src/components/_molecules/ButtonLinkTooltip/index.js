import React from "react"
import PropTypes from "prop-types"
// components
import ButtonLink from "components/_atoms/ButtonLink"
import CustomTooltip from "components/_atoms/CustomTooltip"

/**
 * ButtonLinkTooltip Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Button con ReactRouter y tooltip
 */
const ButtonLinkTooltip = ({
  children,
  tooltipLabel,
  to,
  onClick,
  ...props
}) => (
  <CustomTooltip label={tooltipLabel}>
    <ButtonLink {...props} to={to} onClick={onClick}>
      {children}
    </ButtonLink>
  </CustomTooltip>
)

ButtonLinkTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipLabel: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ButtonLinkTooltip
