import React, { useContext } from "react"
import PropTypes from "prop-types"
// chakra-ui
import { Box, Divider, Flex } from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// components
import ItemNotificaton from "components/_molecules/ItemNotification"
import ItemPurchases from "components/_molecules/ItemPurchases"

/**
 * NotificationList Component
 * @component
 * @author Braian D. Vaylet
 * @description componente listado de todas las notificaciones
 */
const NotificationList = ({ design }) => {
  const { notification } = useContext(NotificationContext)
  const count = notification.length

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
          {notification
            .map((_notification, index) => {
              return (
                <>
                  <Box key={index} w="100%">
                    {design === 1 ? (
                      <ItemNotificaton item={_notification} />
                    ) : (
                      <ItemPurchases item={_notification} />
                    )}
                  </Box>
                  <Divider m="1.5rem 0" />
                </>
              )
            })
            .reverse()}
        </Flex>
      ) : (
        <Flex>No hay notificaciones que mostrar</Flex>
      )}
    </Flex>
  )
}

NotificationList.defaultProps = {
  design: 1,
}

NotificationList.propTypes = {
  design: PropTypes.number,
}

export default NotificationList
