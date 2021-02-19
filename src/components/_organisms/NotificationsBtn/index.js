import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { BellIcon } from "@chakra-ui/icons"
// chakra-ui
import { Flex, MenuItem } from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// components
import ItemNotificaton from "components/_organisms/ItemNotification" // ! AtomicDesignError
import ButtonLinkTooltip from "components/_molecules/ButtonLinkTooltip"
import CustomMenu from "components/_atoms/CustomMenu"
// routes
import { ROUTES } from "routes"

/**
 * NotificationsBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const NotificationsBtn = ({ withText = false }) => {
  const { notification } = useContext(NotificationContext)
  const [t] = useTranslation("global")
  const count = notification.length

  /**
   * renderItems
   * @function
   * @returns {undefined} ItemNotificaton components
   * @description Retorna una lista de Notificaciones (solo las 6 ultimas)
   */
  const renderItems = () => {
    return notification
      .map((_notification, index) => {
        return (
          <MenuItem key={index}>
            <ItemNotificaton item={_notification} />
          </MenuItem>
        )
      })
      .reverse()
      .slice(0, 6)
  }

  return (
    <CustomMenu
      btnIcon={<BellIcon w="1.5rem" h="1.5rem" />}
      btnText={t("NotificationsBtn.title")}
      withText
      count={count}
      footer={
        <Flex direction="row" align="center" justify="flex-end">
          <ButtonLinkTooltip
            tooltipLabel={t("NotificationsBtn.seeMoreTooltip")}
            to={ROUTES.NOTIFICATIONS}
            mr={2}
            size="lg"
          >
            {t("NotificationsBtn.all")}
          </ButtonLinkTooltip>
        </Flex>
      }
    >
      {renderItems()}
    </CustomMenu>
  )
}

NotificationsBtn.propTypes = {
  withText: PropTypes.bool,
}

export default NotificationsBtn
