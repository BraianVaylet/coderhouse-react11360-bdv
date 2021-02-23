import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// chokra-ui
import { Flex } from "@chakra-ui/react"
// components
import HorizontalSeparator from "components/_atoms/HorizontalSeparator"
import ItemNavLink from "components/_atoms/ItemNavLink"
import ExternalLink from "components/_atoms/ExternalLink"

/**
 * LinkList component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con links a las diferentes categorias
 */
const LinkList = ({ links, withSeparator, ...props }) => {
  const [items, setItems] = useState([])

  useEffect(() => setItems(links), [])

  return (
    <Flex {...props}>
      {items &&
        items.map((category, index) => (
          <Flex align="center" key={index}>
            {category.isExternal ? (
              <ExternalLink href={category.to} text={category.text} />
            ) : (
              <ItemNavLink to={category.to} text={category.text} />
            )}
            <HorizontalSeparator withSeparator={withSeparator} />
          </Flex>
        ))}
    </Flex>
  )
}

LinkList.defaultProps = {
  withSeparator: false,
  links: { isExternal: false },
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isExternal: PropTypes.bool.isRequired,
    })
  ).isRequired,
  withSeparator: PropTypes.bool,
}

export default LinkList
