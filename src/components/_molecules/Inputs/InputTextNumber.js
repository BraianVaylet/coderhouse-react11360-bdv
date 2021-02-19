/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { FormHelperText, FormControl, FormLabel, Input } from "@chakra-ui/react"

/**
 * InputTextNumber Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Input para para los campos tipo text o number
 */
export const InputTextNumber = ({
  onChange,
  name,
  placeholder = "",
  label,
  type = "text",
  isRequired = true,
}) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    onChange(value)
  }, [value])

  /**
   * handleChange
   * @function
   * @returns {string}
   * @description retorno el valor ingresado en el input
   */
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl p={2} isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        onChange={handleChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <FormHelperText maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px" />
    </FormControl>
  )
}

InputTextNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
}
