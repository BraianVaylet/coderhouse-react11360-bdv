import React from "react"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import NotificationList from "components/_organisms/NotificationList"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"

/**
 * Notifications Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template de las Notificaciones
 */
const NotificationsTemplate = () => {
  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="center"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <NotificationList />
      </Card>
    </Flex>
  )
}

export default NotificationsTemplate
