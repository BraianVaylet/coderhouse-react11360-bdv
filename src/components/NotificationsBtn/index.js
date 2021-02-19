import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
// chakra-ui
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Button,
  MenuDivider,
  Tooltip,
  MenuItem,
} from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { TOOLTIP_TIME } from "styles/theme"
// components
import ItemNotificaton from "components/_organisms/ItemNotification"
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
  const backgroundColorTooltip = useSetColorTheme("black", "white")

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
    <Menu closeOnSelect={false} arrowPadding={0}>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={count > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        leftIcon={
          <Flex direction="row" align="center">
            <BellIcon w="1.5rem" h="1.5rem" />
            <Text as={Flex} align="center">
              {withText && (
                <Text m="0 .5rem">{t("NotificationsBtn.title")}</Text>
              )}
              ({count})
            </Text>
          </Flex>
        }
      />
      {count > 0 && (
        <MenuList>
          {renderItems()}
          <MenuDivider />
          <Flex direction="row" align="center" justify="flex-end">
            <Tooltip
              hasArrow
              label={t("NotificationsBtn.seeMoreTooltip")}
              bg={backgroundColorTooltip}
              fontSize="md"
              openDelay={TOOLTIP_TIME}
              color
            >
              <Button as={Link} to={ROUTES.NOTIFICATIONS} mr={2} size="lg">
                {t("NotificationsBtn.all")}
              </Button>
            </Tooltip>
          </Flex>
        </MenuList>
      )}
    </Menu>
  )
}

NotificationsBtn.propTypes = {
  withText: PropTypes.bool,
}

export default NotificationsBtn
