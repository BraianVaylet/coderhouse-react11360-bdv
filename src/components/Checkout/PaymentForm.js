import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Divider, Flex, Text } from "@chakra-ui/react"
import { InputEmail, InputPassword } from "components/Inputs"
// context
// import { CheckoutContext } from "context"

/**
 * PaymentForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la compra
 */
const PaymentForm = () => {
  // const { setActivePayment } = useContext(CheckoutContext)
  const [t] = useTranslation("global")

  return (
    <form>
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentForm.completeForm")}
        </Text>
        <Divider m="10px 0" />
        <Flex direction="row" align="flex-end" justify="space-between">
          <InputEmail onChange={(value) => console.log("v", value)} />
          <InputPassword onChange={(value) => console.log("v", value)} />
        </Flex>

        <Flex w="100%" align="center" justify="flex-start" mt={4} p={4}>
          <Button type="submit">Confirmar</Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default PaymentForm
