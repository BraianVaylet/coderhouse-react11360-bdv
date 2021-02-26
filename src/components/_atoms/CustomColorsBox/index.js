import React from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Button, Flex } from "@chakra-ui/react"

/**
 * CustomColorsBox Component
 * @component
 * @author Braian D. Vaylet
 */
const CustomColorsBox = ({ value }) => {
  return (
    value &&
    value.map((color, index) => {
      const bRadius = "5px"
      if (color.includes("-")) {
        const dualColor = color.split("-")
        return (
          <Flex
            key={index}
            as={Button}
            borderRadius={bRadius}
            p={0}
            direction="row"
            align="center"
            justify="space-between"
            w="1.25rem"
            h="1.25rem"
            mr={2}
            borderWidth="1px"
            borderColor="#ccc"
            boxShadow="sm"
          >
            <Box
              borderRadius={`${bRadius} 0 0 ${bRadius}`}
              w="50%"
              h="100%"
              style={{ backgroundColor: dualColor[0] }}
            />
            <Box
              borderRadius={`0 ${bRadius} ${bRadius} 0`}
              w="50%"
              h="100%"
              style={{ backgroundColor: dualColor[1] }}
            />
          </Flex>
        )
      } else {
        return (
          <Button
            key={index}
            p={0}
            w="1.25rem"
            h="1.25rem"
            borderRadius={bRadius}
            borderWidth="1px"
            borderColor="#ccc"
            style={{ backgroundColor: color }}
            mr={2}
            boxShadow="sm"
          />
        )
      }
    })
  )
}

CustomColorsBox.propTypes = {
  value: PropTypes.array.isRequired,
}

export default CustomColorsBox
