import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import NotificationList from "components/_organisms/NotificationList"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
import { ROUTES } from "routes"

/**
 * NotificationsTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template de las Notificaciones
 */
const NotificationsTemplate = () => {
  const [t] = useTranslation("global")

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="center"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("NotificationsTemplate.title")}
        backTo={ROUTES.HOME}
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <NotificationList />
      </Card>
    </Flex>
  )
}

export default NotificationsTemplate
