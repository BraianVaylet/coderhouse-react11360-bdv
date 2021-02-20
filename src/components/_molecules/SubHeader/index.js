import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
// chakra-ui
import { Flex, Text, Button } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// components
import HelpBtn from "components/_molecules/HelpBtn"

/**
 * SubHeader Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente SubHeader con info y opcion de back
 */
const SubHeader = ({ backTo = ROUTES.HOME, withHelp = false, children }) => {
  const [t] = useTranslation("global")
  const routerHistory = useHistory()

  return (
    <Flex direction="row" align="center" justify="flex-start" w="100%" pb={4}>
      <Button onClick={() => routerHistory.push(backTo)} mr={4}>
        <Text>{t("SubHeader.back")}</Text>
      </Button>
      {withHelp && <HelpBtn>{children}</HelpBtn>}
    </Flex>
  )
}

SubHeader.propTypes = {
  backTo: PropTypes.string,
  withHelp: PropTypes.bool,
  children: PropTypes.element,
}

export default SubHeader
