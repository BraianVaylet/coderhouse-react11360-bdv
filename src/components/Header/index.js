import React from "react"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
// chakra-ui
import { Flex, Text, Button } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"

/**
 * Header Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente Header con info y opcion de back
 */
const Header = () => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()

  return (
    <Flex direction="row" align="center" justify="flex-start" w="100%" pb={4}>
      <Button onClick={() => routerHistory.push(ROUTES.HOME)}>
        <Text>{t("Header.back")}</Text>
      </Button>
    </Flex>
  )
}

export default Header