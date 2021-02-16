/* eslint-disable prefer-regex-literals */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  FormControl,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

/**
 * InputPassword Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Input para el password
 */
export const InputPassword = ({ onChange }) => {
  const [t] = useTranslation("global")
  const [value, setValue] = useState("")
  const [strengths, setStrengths] = useState(null)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (value) {
      onChange(value)
      setStrengths(handleStrengthIndicator(value))
    }
  }, [value])

  useEffect(() => setMessage(renderStrengthMessage(strengths)), [strengths])

  /**
   * handleHasNumber
   * @function
   * @param {string} value
   * @returns {boolean}
   * @description retorno si el valor posee caracteres numéricos
   */
  const handleHasNumber = (value) => new RegExp(/[0-9]/).test(value)

  /**
   * handleHasMixed
   * @function
   * @param {string} value
   * @returns {boolean}
   * @description retorno si el valor posee caracteres alfanuméricos mayusculas y minusculas
   */
  const handleHasMixed = (value) =>
    new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value)

  /**
   * handleHasSpecial
   * @function
   * @param {string} value
   * @returns {boolean}
   * @description retorno si el valor posee caracteres especiales
   */
  const handleHasSpecial = (value) =>
    new RegExp(/[!#@$%^&*)(+=._-]/).test(value)

  /**
   * renderStrengthMessage
   * @function
   * @param {number} count
   * @returns {string}
   * @description retorno mensaje
   */
  const renderStrengthMessage = (count) => {
    if (count === 0) return "..."
    if (count < 2)
      return <Text color="red.300">{t("InputPassword.veryWeak")}</Text>
    if (count < 3)
      return <Text color="orange.300">{t("InputPassword.weak")}</Text>
    if (count < 4)
      return <Text color="yellow.300">{t("InputPassword.normal")}</Text>
    if (count < 5)
      return <Text color="teal.300">{t("InputPassword.good")}</Text>
    if (count < 6)
      return <Text color="green.300">{t("InputPassword.veryGood")}</Text>
  }

  /**
   * handleStrengthIndicator
   * @function
   * @param {string} value
   * @returns {number}
   * @description retorno contador de fortaleza de la clave
   */
  const handleStrengthIndicator = (value) => {
    let _strengths = 0
    if (value.length > 5) _strengths++
    if (value.length > 7) _strengths++
    if (handleHasNumber(value)) _strengths++
    if (handleHasSpecial(value)) _strengths++
    if (handleHasMixed(value)) _strengths++
    return _strengths
  }

  /**
   * handleChange
   * @function
   * @returns {string}
   * @description retorno el valor ingresado en el input
   */
  const handleChange = (event) => setValue(event.target.value)

  /**
   * handleShow
   * @function
   * @returns {boolean}
   * @description muestro la contraseña
   */
  const handleShow = () => setShow(!show)

  return (
    <FormControl p={2} isRequired>
      <FormLabel htmlFor="email">{t("InputPassword.title")}</FormLabel>
      <InputGroup>
        <Input
          onChange={handleChange}
          value={value}
          name="password"
          type={show ? true : "password"}
          placeholder="******"
        />
        <InputRightElement>
          <IconButton
            size="sm"
            onClick={handleShow}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      {value.length > 0 ? (
        <Text fontSize="1rem" mt="5px">
          {message}
        </Text>
      ) : (
        <Text fontSize="1rem" mt="5px" color="transparent">
          👻
        </Text>
      )}
    </FormControl>
  )
}

InputPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
}
