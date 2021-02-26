import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Divider, Flex, Text } from "@chakra-ui/react"
import {
  InputEmail,
  // InputPassword,
  InputTextNumber,
} from "components/_molecules/Inputs"
// context
import { CheckoutContext } from "context"
// hooks
import useUser from "hooks/useUser"

/**
 * PaymentForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la compra
 */
const PaymentForm = () => {
  const { setActivePayment } = useContext(CheckoutContext)
  const user = useUser()
  const [t] = useTranslation("global")
  const [emailValue, setEmailValue] = useState(null)
  // const [passwordValue, setPasswordValue] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [dniValue, setDniValue] = useState(null)
  const [streetNameValue, setStreetNameValue] = useState(null)
  const [streetNumberValue, setStreetNumberValue] = useState(null)
  const [deptoValue, setDeptoValue] = useState(null)
  const [data, setData] = useState({})
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (user) {
      setEmailValue(user?.email)
      setNameValue(user?.username)
    }
  }, [user])

  useEffect(() => setActivePayment(isDisabled), [isDisabled])

  /**
   * handleSubmit
   * @function
   * @description habilita el btn de pago
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      emailValue &&
      // passwordValue &&
      nameValue &&
      dniValue &&
      streetNameValue &&
      streetNumberValue
    ) {
      setIsDisabled(true)
      setData({
        emailValue,
        // passwordValue,
        nameValue,
        dniValue,
        streetNameValue,
        streetNumberValue,
        deptoValue,
      })
    } else {
      setIsDisabled(false)
    }
    console.log("data", data)
  }

  /**
   * handleClick
   * @function
   * @description permite editar el form
   * @returns {boolean}
   */
  const handleClick = () => setIsDisabled(false)

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentForm.completeForm")}
        </Text>
        <Divider m="10px 0" />
        <Flex direction="row" align="center" justify="space-between">
          <InputEmail
            disabled={emailValue !== null || isDisabled}
            value={emailValue}
            onChange={(value) => setEmailValue(value)}
          />
          {/* {!emailValue && (
            <InputPassword onChange={(value) => setPasswordValue(value)} />
          )} */}
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            disabled={nameValue !== null || isDisabled}
            name="name"
            value={nameValue}
            label={t("PaymentForm.enterName")}
            onChange={(value) => setNameValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="dni"
            type="number"
            label={t("PaymentForm.enterDni")}
            onChange={(value) => setDniValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="phone"
            label={t("PaymentForm.enterPhone")}
            type="number"
            onChange={(value) => setDniValue(value)}
          />
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            disabled={isDisabled}
            name="streetName"
            label={t("PaymentForm.enterStreetName")}
            onChange={(value) => setStreetNameValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="streetNumber"
            label={t("PaymentForm.enterStreetNumber")}
            onChange={(value) => setStreetNumberValue(value)}
          />
          <InputTextNumber
            disabled={isDisabled}
            name="depto"
            label={t("PaymentForm.enterDepto")}
            isRequired={false}
            onChange={(value) => setDeptoValue(value)}
          />
        </Flex>

        <Flex w="100%" align="center" justify="flex-start" mt={4} p={4}>
          <Button disabled={isDisabled} type="submit">
            {t("PaymentForm.confirm")}
          </Button>
          {isDisabled && (
            <Button variant="outline" ml={4} onClick={handleClick}>
              {t("PaymentForm.edit")}
            </Button>
          )}
        </Flex>
      </Flex>
    </form>
  )
}

export default PaymentForm
