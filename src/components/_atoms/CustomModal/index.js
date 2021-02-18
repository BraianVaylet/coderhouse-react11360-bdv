import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

/**
 * CustomModal
 * @component
 * @author Braian D. Vaylet
 * @description Componente Modal
 */
const CustomModal = ({ isOpen, onClose, modalHeader, children, size }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

CustomModal.defaultProps = {
  size: "md",
}

CustomModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modalHeader: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
}

export default CustomModal
