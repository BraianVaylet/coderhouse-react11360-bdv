import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

/**
 * CustomModal
 * @component
 * @author Braian D. Vaylet
 * @description Componente Modal
 */
const CustomModal = ({
  isOpen,
  onClose,
  modalHeader,
  children,
  size,
  withFooter,
  withHeader,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        {withHeader && <ModalHeader>{modalHeader}</ModalHeader>}
        <ModalCloseButton />
        {withFooter ? (
          <>
            <ModalBody>{children[0]}</ModalBody>
            <ModalFooter>{children[1]}</ModalFooter>
          </>
        ) : (
          <ModalBody>{children}</ModalBody>
        )}
      </ModalContent>
    </Modal>
  )
}

CustomModal.defaultProps = {
  size: "md",
  withFooter: false,
  withHeader: true,
}

CustomModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modalHeader: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired || PropTypes.element.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  withFooter: PropTypes.bool,
  withHeader: PropTypes.bool,
}

export default CustomModal
