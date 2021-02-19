import React, { useContext } from "react"
// chakra-ui
import { Box, Divider, Flex } from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// components
import ItemNotificaton from "components/_organisms/ItemNotification"

/**
 * NotificationList Component
 * @component
 * @author Braian D. Vaylet
 * @description componente listado de todas las notificaciones
 */
const NotificationList = () => {
  const { notification } = useContext(NotificationContext)
  // const [t] = useTranslation("global")

  const count = notification.length

  /**
   * renderItems
   * @function
   * @returns {undefined} ItemNotificaton components
   * @description Retorna una lista de todas las Notificaciones
   */
  const renderItems = () => {
    return notification
      .map((_notification, index) => {
        return (
          <>
            <Box key={index}>
              <ItemNotificaton item={_notification} />
            </Box>
            <Divider m="1.5rem 0" />
          </>
        )
      })
      .reverse()
  }
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      p={10}
    >
      {count > 0 ? (
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          {renderItems()}
        </Flex>
      ) : (
        <Flex>No hay notificaciones que mostrar</Flex>
      )}
    </Flex>
  )
}

export default NotificationList
