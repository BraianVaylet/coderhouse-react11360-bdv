import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// chokra-ui
import { Flex } from "@chakra-ui/react"
// components
import HorizontalSeparator from "components/_atoms/HorizontalSeparator"
import ItemNavLink from "components/_atoms/ItemNavLink"

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
            <ItemNavLink to={category.to} text={category.text} />
            <HorizontalSeparator withSeparator={withSeparator} />
          </Flex>
        ))}
    </Flex>
  )
}

LinkList.defaultProps = {
  withSeparator: false,
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  withSeparator: PropTypes.bool,
}

export default LinkList
