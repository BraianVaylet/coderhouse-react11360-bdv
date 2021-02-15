import React, { useEffect, useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react"
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
  const { register, handleSubmit, formState, errors } = useForm()
  const [t] = useTranslation("global")
  const [dataForm, setDataForm] = useState(null)
  const onSubmit = (data, e) => {
    e.preventDefault()
    setDataForm(data)
  }

  useEffect(() => {
    console.log("dataForm", dataForm)
    onSubmit && dataForm !== null
      ? setActivePayment(true)
      : setActivePayment(false)
  }, [onSubmit])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text fontWeight="bold" fontSize="1.25rem">
          {t("PaymentForm.completeForm")}
        </Text>
        <Divider m="10px 0" />
        <Flex direction="row" align="flex-end" justify="space-between">
          <FormControl
            isInvalid={!!errors?.email}
            errortext={errors?.email?.message}
            p={2}
            isRequired
          >
            {/* EMAIL */}
            <FormLabel htmlFor="email">{t("PaymentForm.enterEmail")}</FormLabel>
            <Input
              onChange={() => setActivePayment(false)}
              name="email"
              type="email"
              placeholder="example@email.com"
              ref={register({
                required: true,
                minLength: 7,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && "Ingrese un email"}
            </FormErrorMessage>
          </FormControl>

          {/* PASSWORD */}
          <FormControl
            isInvalid={!!errors?.password}
            errortext={errors?.password?.message}
            p={2}
            isRequired
          >
            <FormLabel htmlFor="password">
              {t("PaymentForm.enterPassword")}
            </FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="******"
              ref={register({
                required: true,
                minLength: 6,
                pattern: {
                  value: /^[A-Z0-9.-]+$/i,
                },
              })}
            />
            <FormErrorMessage>
              {errors.password && "Ingrese una contraseña"}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction="row" align="flex-end" justify="space-between">
          {/* FIRST NAME */}
          <FormControl
            isInvalid={!!errors?.firstName}
            errortext={errors?.firstName?.message}
            p={2}
            isRequired
          >
            <FormLabel htmlFor="firstName">
              {t("PaymentForm.enterName")}
            </FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder=""
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z]+$/i,
                },
              })}
            />
            <FormErrorMessage>
              {errors.firstName && "Ingrese su nombre"}
            </FormErrorMessage>
          </FormControl>

          {/* LAST NAME */}
          <FormControl
            isInvalid={!!errors?.lastName}
            errortext={errors?.lastName?.message}
            p={2}
            isRequired
          >
            <FormLabel htmlFor="lastName">
              {t("PaymentForm.enterLastname")}
            </FormLabel>
            <Input
              name="lastName"
              type="text"
              placeholder=""
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z]+$/i,
                },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && "Ingrese su apellido"}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Divider mt={10} mb={10} />
        {/* ADDRESS */}
        <Text p={2} as={FormLabel}>
          Ingrese su direccion
        </Text>
        <Flex direction="row" align="flex-end" justify="space-between">
          <FormControl
            isInvalid={!!errors?.streetName}
            errortext={errors?.streetName?.message}
            p={2}
            isRequired
          >
            <FormLabel htmlFor="streetName">
              {t("PaymentForm.enterStreetName")}
            </FormLabel>
            <Input
              name="streetName"
              type="text"
              placeholder="Calle"
              ref={register({
                required: true,
              })}
            />
            <FormErrorMessage>
              {errors.street && "Ingrese su calle"}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!errors?.streetNumber}
            errortext={errors?.streetNumber?.message}
            p={2}
            isRequired
          >
            <FormLabel htmlFor="streetNumber">
              {t("PaymentForm.enterStreetNumber")}
            </FormLabel>
            <Input
              name="streetNumber"
              type="text"
              placeholder="Numero"
              ref={register({
                required: true,
              })}
            />
            <FormErrorMessage>
              {errors.streetNumber && "Ingrese el numero de su vivienda"}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!errors?.depto}
            errortext={errors?.depto?.message}
            p={2}
          >
            <FormLabel htmlFor="depto">{t("PaymentForm.enterDepto")}</FormLabel>
            <Input
              name="depto"
              type="text"
              placeholder="Piso - Departamento"
              ref={register({ required: false })}
            />
            <FormErrorMessage>
              {errors.depto && "Ingrese el piso y su numero de departamento"}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex w="100%" align="center" justify="flex-start" mt={4} p={4}>
          <Button isLoading={formState.isSubmitting} type="submit">
            Confirmar
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default PaymentForm
