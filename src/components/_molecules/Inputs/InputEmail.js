/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { FormControl, FormHelperText, FormLabel, Text } from "@chakra-ui/react"
// components
import CustomInput from "components/_atoms/CustomInput"

/**
 * InputEmail Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Input para los emails
 */
export const InputEmail = ({ onChange }) => {
  const [t] = useTranslation("global")
  const [value, setValue] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(handleError(value))
    onChange(value)
  }, [value])

  /**
   * handleError
   * @function
   * @param {string} value
   * @returns {boolean}
   * @description valido el email y su formato
   */
  const handleError = (value) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return value && !regex.test(value)
  }

  /**
   * handleChange
   * @function
   * @returns {string}
   * @description retorno el valor ingresado en el input
   */
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl p={2} isRequired>
      <FormLabel htmlFor="email">{t("InputEmail.title")}</FormLabel>
      <CustomInput
        onChange={handleChange}
        value={value}
        name="email"
        type="email"
        placeholder="example@email.com"
      />
      <FormHelperText maxH="1.5rem" minH="1.5rem" h="1.5rem" mt="5px">
        {error && (
          <Text fontSize=".75rem" color="red.300">
            {t("InputEmail.error")}
          </Text>
        )}
      </FormHelperText>
    </FormControl>
  )
}

InputEmail.propTypes = {
  onChange: PropTypes.func.isRequired,
}
