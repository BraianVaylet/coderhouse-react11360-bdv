import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react"

/**
 * CustomPopover component
 * @component
 * @author Braian D. Vaylet
 * @description Componente popover
 */
const CustomPopover = ({
  btn,
  header,
  children,
  footer,
  withHeader,
  withFooter,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>{btn}</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          {withHeader && <PopoverHeader>{header}</PopoverHeader>}
          <PopoverCloseButton />
          <PopoverBody>{children}</PopoverBody>
          {withFooter && <PopoverFooter>{footer}</PopoverFooter>}
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

CustomPopover.defaultProps = {
  withHeader: true,
  withFooter: true,
}

CustomPopover.propTypes = {
  btn: PropTypes.node.isRequired,
  header: PropTypes.string,
  children: PropTypes.element.isRequired,
  footer: PropTypes.node,
  withHeader: PropTypes.bool,
  withFooter: PropTypes.bool,
}

export default CustomPopover
