import React from "react"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Header from "components/Header"
import NotificationList from "components/NotificationList"
// styles
import { CustomShadow, setValueResponsiveMin1280 } from "styles/utils"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * Notifications Page
 * @component
 * @author Braian D. Vaylet
 * @description página donde se muestran todas las notificaciones
 */
const Notifications = () => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="center"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <Header />
      <Flex
        w="100%"
        minH={setValueResponsiveMin1280("80vh", "100%")}
        bgColor={backgroundColor}
        boxShadow={CustomShadow}
        p={4}
      >
        <NotificationList />
      </Flex>
    </Flex>
  )
}

export default Notifications
