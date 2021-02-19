import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react"

/**
 * CustomDrawer Component
 * @component
 * @author Braian D. Vaylet
 * @description componente drawer
 */
const CustomDrawer = ({
  onClose,
  isOpen,
  direction,
  size,
  children,
  withFooter,
  drawerHeader,
  withHeader,
}) => {
  return (
    <Drawer placement={direction} onClose={onClose} isOpen={isOpen} size={size}>
      <DrawerOverlay>
        <DrawerContent>
          {withHeader && (
            <DrawerHeader borderBottomWidth="1px">{drawerHeader}</DrawerHeader>
          )}
          {withFooter ? (
            <>
              <DrawerBody>{children[0]}</DrawerBody>
              <DrawerFooter>{children[1]}</DrawerFooter>
            </>
          ) : (
            <DrawerBody>{children}</DrawerBody>
          )}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

CustomDrawer.defaultProps = {
  size: "md",
  direction: "bottom",
  withFooter: false,
  withHeader: true,
}

CustomDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  drawerHeader: PropTypes.string.isRequired,
  withFooter: PropTypes.bool,
  withHeader: PropTypes.bool,
  children: PropTypes.array.isRequired || PropTypes.element.isRequired,
}

export default CustomDrawer
