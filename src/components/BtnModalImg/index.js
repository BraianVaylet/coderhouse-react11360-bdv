import React from "react"
import { IoExpand } from "react-icons/io5"
import Proptypes from "prop-types"
// chakra-ui
import {
  Box,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
  useDisclosure,
} from "@chakra-ui/react"
// styles
import { addOpacityToColor } from "styles/utils"
// constants
import { IMG } from "utils/images"

/**
 * BtnModalImg Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente que muestra la imagen en un modal
 */
const BtnModalImg = ({ pictureName, pictureUrl, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={
          <Box
            p="2.5px"
            bgColor={addOpacityToColor("#cccccc", 0.3)}
            borderRadius="5px"
            _focus={{
              borderStyle: "none",
              borderSize: "0px",
            }}
          >
            <Icon
              as={IoExpand}
              color="brand.primary"
              boxSize="1rem"
              borderRadius="9999px"
              fill="brand.primary"
              _hover={{
                fill: "brand.secundary",
              }}
            />
          </Box>
        }
      />
      <Portal>
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                title={pictureName}
                bgImage={`url(${pictureUrl || IMG.NO_IMG})`}
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                w="100%"
                minW="100%"
                maxW="100%"
                h="100%"
                minH="100%"
                maxH="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Portal>
    </>
  )
}

BtnModalImg.propTypes = {
  title: Proptypes.string.isRequired,
  pictureName: Proptypes.string,
  pictureUrl: Proptypes.string,
}

export default BtnModalImg
