import React, { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Divider, Flex, Text } from "@chakra-ui/react"
import { InputEmail, InputPassword, InputTextNumber } from "components/Inputs"
// context
import { CheckoutContext } from "context"

/**
 * PaymentForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la compra
 */
const PaymentForm = () => {
  const { setActivePayment } = useContext(CheckoutContext)
  const [t] = useTranslation("global")
  const [emailValue, setEmailValue] = useState(null)
  const [passwordValue, setPasswordValue] = useState(null)
  const [firstNameValue, setFirstNameValue] = useState(null)
  const [lastNameValue, setLastNameValue] = useState(null)
  const [streetNameValue, setStreetNameValue] = useState(null)
  const [streetNumberValue, setStreetNumberValue] = useState(null)
  const [deptoValue, setDeptoValue] = useState(null)
  const [data, setData] = useState({})

  /**
   * handleSubmit
   * @function
   * @description habilita el btn de pago
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    // todo: si el usuario no estaba registrado, registrarlo. si lo estaba autocompletar formulario
    if (
      emailValue &&
      passwordValue &&
      firstNameValue &&
      lastNameValue &&
      streetNameValue &&
      streetNumberValue
    ) {
      setActivePayment(true)
      setData({
        emailValue,
        passwordValue,
        firstNameValue,
        lastNameValue,
        streetNameValue,
        streetNumberValue,
        deptoValue,
      })
    }
    console.log("data", data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentForm.completeForm")}
        </Text>
        <Divider m="10px 0" />
        <Flex direction="row" align="center" justify="space-between">
          <InputEmail onChange={(value) => setEmailValue(value)} />
          <InputPassword onChange={(value) => setPasswordValue(value)} />
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            name="firstName"
            label={t("PaymentForm.enterName")}
            onChange={(value) => setFirstNameValue(value)}
          />
          <InputTextNumber
            name="lastName"
            label={t("PaymentForm.enterLastname")}
            onChange={(value) => setLastNameValue(value)}
          />
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <InputTextNumber
            name="streetName"
            label={t("PaymentForm.enterStreetName")}
            onChange={(value) => setStreetNameValue(value)}
          />
          <InputTextNumber
            name="streetNumber"
            label={t("PaymentForm.enterStreetNumber")}
            onChange={(value) => setStreetNumberValue(value)}
          />
          <InputTextNumber
            name="depto"
            label={t("PaymentForm.enterDepto")}
            isRequired={false}
            onChange={(value) => setDeptoValue(value)}
          />
        </Flex>

        <Flex w="100%" align="center" justify="flex-start" mt={4} p={4}>
          <Button type="submit">{t("PaymentForm.confirm")}</Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default PaymentForm
